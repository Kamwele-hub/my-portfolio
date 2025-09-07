import { Box, Text, Link, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function Footer() {
  return (
    <MotionBox
      bg="teal.600"
      color="white"
      py={6}
      textAlign="center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      <HStack spacing={6} justify="center" mb={2}>
        <Link href="https://github.com/Kamwele-hub" isExternal>
          GitHub
        </Link>
        <Link href="mailto:steventhenge1555@gmail.com">Email</Link>
        <Link href="tel:+254792135610">Call</Link>
      </HStack>
      <Text fontSize="sm">© {new Date().getFullYear()} Stephen Kamwele</Text>
    </MotionBox>
  );
}

export default Footer;
