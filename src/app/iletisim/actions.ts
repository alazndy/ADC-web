"use server";

import { z } from "zod";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { initializeFirebase } from "@/firebase";

const formSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır."),
  email: z.string().email("Geçersiz e-posta adresi."),
  phone: z.string().optional(),
  subject: z.string().min(5, "Konu en az 5 karakter olmalıdır."),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır."),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors.map(e => e.message).join(', ');
    return {
      message: `Form verileri geçersiz: ${errorMessages}`,
      success: false,
    };
  }

  try {
    const { firestore } = initializeFirebase();
    await addDoc(collection(firestore, "formSubmissions"), {
      ...validatedFields.data,
      submittedAt: serverTimestamp(),
      status: "Yeni",
    });

    return {
      message: "Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
      success: true,
    };
  } catch (error) {
    console.error("Error submitting form to Firestore:", error);
    return {
      message: "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      success: false,
    };
  }
}
