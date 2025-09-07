import { Box, Container, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);

function Contact() {
  return (
    <Box id="contact" py={20} bg="gray.50">
      <Container maxW="3xl" textAlign="center">
        <Heading as="h2" size="xl" mb={6} color="teal.600">
          Get in Touch
        </Heading>
        <MotionVStack
          spacing={4}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Text>Email: steventhenge1555@gmail.com</Text>
          <Text>Phone: +254792135610</Text>
          <Text>Location: Nairobi, Kenya</Text>
          <Button
            as="a"
            href="mailto:steventhenge1555@gmail.com"
            colorScheme="teal"
            size="lg"
          >
            Contact Me
          </Button>
        </MotionVStack>
      </Container>
    </Box>
  );
}

export default Contact;
