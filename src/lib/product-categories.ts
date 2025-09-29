
import { 
    cameraMonitorSubCategories, 
    detectionSystemSubCategories, 
    recordingSystemSubCategories, 
    driverSafetySystemSubCategories, 
    warningSystemSubCategories 
} from "./data/subcategories";

const productCategories = {
    'kamera-monitor-sistemleri': 'Kamera Monitör Sistemleri',
    'tespit-sistemleri': 'Tespit Sistemleri',
    'kayit-sistemleri': 'Kayıt Sistemleri',
    'surucu-guvenlik-sistemleri': 'Sürücü Güvenlik Sistemleri',
    'uyari-sistemleri': 'Uyarı Sistemleri',
};

// NEWLY ADDED and EXPORTED: Converts a category name back to a slug.
export const categoryToSlug = (name: string): string | undefined => {
    return Object.keys(productCategories).find(slug => productCategories[slug] === name);
}

const categoryToSubCategoryMap = {
    'kamera-monitor-sistemleri': cameraMonitorSubCategories,
    'tespit-sistemleri': detectionSystemSubCategories,
    'kayit-sistemleri': recordingSystemSubCategories,
    'surucu-guvenlik-sistemleri': driverSafetySystemSubCategories,
    'uyari-sistemleri': warningSystemSubCategories,
};

export const slugToCategory = (slug: string): string | undefined => {
    return productCategories[slug];
}

export const slugToSubCategory = (categorySlug: string, subCategorySlug: string) => {
    const subCategories = categoryToSubCategoryMap[categorySlug];
    if (!subCategories) {
        return undefined;
    }
    return subCategories.find(sc => sc.slug === subCategorySlug);
}

export const getAllSubCategoryParams = () => {
    const params = [];
    for (const categorySlug in categoryToSubCategoryMap) {
        const subCategories = categoryToSubCategoryMap[categorySlug];
        if (subCategories && subCategories.length > 0) {
            for (const subCategory of subCategories) {
                params.push({
                    kategoriSlug: categorySlug,
                    altKategoriSlug: subCategory.slug,
                });
            }
        }
    }
    return params;
};
