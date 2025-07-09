"use server";

import { ContactFormData, contactSchema } from "@/schema";

type FormResponse = {
  status: boolean;
  message: string;
};

export async function formSubmitHandler(
  data: ContactFormData,
): Promise<FormResponse> {
  try {
    let validation = contactSchema.safeParse(data);

    if (!validation.success) throw new Error("Invalid data");

    const { name, email, message, subject } = validation.data;
    //continue to use the data

    return {
      status: true,
      message: "Form submitted successfully",
    };
  } catch (error) {
    console.error("e", error);
    return {
      status: false,
      message: "Failed",
    };
  }
}
