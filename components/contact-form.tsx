"use client";
import { formSubmitHandler } from "@/actions";
import { ContactFormData, contactSchema } from "@/schema";
import {
  Button,
  Field,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { toaster } from "./ui/toaster";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    const res = await formSubmitHandler(data);
    setIsLoading(false);
    reset();

    toaster.create({
      type: res.status ? "success" : "error",
      title: res.message,
    });
  };
  return (
    <Stack
      bg="rgba(255, 255, 255, 0.75)"
      borderRadius="xl"
      boxShadow="md"
      w={{ base: "md", sm: "xl" }}
      backdropFilter="blur(5px)"
      p={6}
      mx="5%"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading mb=".5rem" size="2xl" color="gray.800">
        Contact Us
      </Heading>

      <hr />

      <Field.Root required invalid={!!errors.name}>
        <Field.Label>
          Name <Field.RequiredIndicator />
        </Field.Label>
        <Input
          type="text"
          placeholder="John Doe"
          {...register("name")}
          variant="subtle"
        />
        <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
      </Field.Root>
      <Field.Root required invalid={!!errors.email}>
        <Field.Label>
          Email <Field.RequiredIndicator />
        </Field.Label>
        <Input
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          variant="subtle"
        />
        <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
      </Field.Root>
      <Field.Root required invalid={!!errors.subject}>
        <Field.Label>
          Subject <Field.RequiredIndicator />
        </Field.Label>
        <Input
          type="text"
          placeholder="Inquiry Subject"
          variant="subtle"
          {...register("subject")}
        />
        <Field.ErrorText>{errors.subject?.message}</Field.ErrorText>
      </Field.Root>
      <Field.Root required invalid={!!errors.message}>
        <Field.Label>
          Message <Field.RequiredIndicator />
        </Field.Label>
        <Textarea
          placeholder="Your message here..."
          variant="subtle"
          {...register("message")}
        />
        <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
      </Field.Root>
      <Button colorPalette="teal" mt=".5rem" type="submit" loading={isLoading}>
        Send <IoIosSend />
      </Button>
    </Stack>
  );
};

export default ContactForm;
