"use client";
import {
  Button,
  Field,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <Stack
      bg="rgba(255, 255, 255, 0.75)"
      borderRadius="xl"
      boxShadow="md"
      w={{ base: "md", sm: "xl" }}
      backdropFilter="blur(5px)"
      p={6}
      mx="5%"
    >
      <Heading mb=".5rem" size="2xl" color="gray.800">
        Contact Us
      </Heading>

      <hr />

      <Field.Root required>
        <Field.Label>
          Name <Field.RequiredIndicator />
        </Field.Label>
        <Input type="text" placeholder="John Doe" variant="subtle" />
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Email <Field.RequiredIndicator />
        </Field.Label>
        <Input type="email" placeholder="john@example.com" variant="subtle" />
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Subject <Field.RequiredIndicator />
        </Field.Label>
        <Input type="text" placeholder="Inquiry Subject" variant="subtle" />
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Message <Field.RequiredIndicator />
        </Field.Label>
        <Textarea placeholder="Your message here..." variant="subtle" />
      </Field.Root>
      <Button colorPalette="teal" mt=".5rem" type="submit">
        Send <IoIosSend />
      </Button>
    </Stack>
  );
};

export default ContactForm;
