
import admin from 'firebase-admin';
import { products } from '../src/lib/data/products.js';
import { services, techSolutions } from '../src/lib/data/services.js';
import { sectors } from '../src/lib/data/sectors.js';
import { projects } from '../src/lib/data/projects.js';
import { 
    cameraMonitorSubCategories, 
    detectionSystemSubCategories, 
    driverSafetySystemSubCategories, 
    recordingSystemSubCategories, 
    warningSystemSubCategories 
} from '../src/lib/data/subcategories.js';
import { brigadeVanProducts } from '../src/lib/data/brigade-van.js';

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: 'adc-web-473522', 
});

const db = admin.firestore();

// Helper to commit batches and create new ones
async function commitBatch(batch) {
    await batch.commit();
    return db.batch();
}

// Generic seeder with batching
async function seedCollection(collectionName, data, idField = 'id') {
    console.log(`Seeding ${collectionName}...`);
    const collectionRef = db.collection(collectionName);
    let batch = db.batch();
    let count = 0;

    for (const item of data) {
        const docId = item[idField];
        if (!docId) {
            console.warn(`Skipping item in ${collectionName} due to missing ID:`, item);
            continue;
        }
        batch.set(collectionRef.doc(docId), item);
        count++;

        if (count % 499 === 0) {
            batch = await commitBatch(batch);
        }
    }

    if (count % 499 !== 0) {
        await batch.commit();
    }

    console.log(`${collectionName} seeded with ${count} documents.`);
}


async function seedDatabase() {
  console.log('Seeding database...');

  try {
    await seedCollection('products', products, 'id');
    
    // Combine services and techSolutions before seeding
    const allServices = [...services, ...techSolutions];
    await seedCollection('services', allServices, 'id');

    await seedCollection('sectors', sectors, 'id');
    await seedCollection('projects', projects, 'id');

    const allSubcategories = [
        ...cameraMonitorSubCategories,
        ...detectionSystemSubCategories,
        ...driverSafetySystemSubCategories,
        ...recordingSystemSubCategories,
        ...warningSystemSubCategories
    ];
    await seedCollection('subcategories', allSubcategories, 'slug');
    
    console.log('Seeding brigade-van...');
    await db.collection('brigade-van').doc('products').set(brigadeVanProducts);
    console.log('Brigade VAN data seeded.');

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await admin.app().delete();
    console.log('Firebase app terminated.');
  }
}

seedDatabase();
