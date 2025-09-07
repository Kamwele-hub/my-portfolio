import { Box, Flex, HStack, Link, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function Navbar() {
  return (
    <MotionBox
      bg="teal.600"
      px={8}
      py={4}
      color="white"
      shadow="md"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">
          Stephen Kamwele
        </Text>
        <HStack spacing={6}>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <Button
            as={Link}
            href="https://github.com/Kamwele-hub"
            target="_blank"
            colorScheme="whiteAlpha"
            size="sm"
          >
            GitHub
          </Button>
        </HStack>
      </Flex>
    </MotionBox>
  );
}

export default Navbar;
