import { Box, Container, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);

function Hero() {
  return (
    <Box bg="gray.100" py={20}>
      <Container maxW="3xl" textAlign="center">
        <MotionVStack
          spacing={6}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading as="h1" size="2xl" color="teal.600">
            Hi, I’m Stephen Kamwele
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Web Developer | AI Automation Specialist | Nairobi, Kenya
          </Text>
          <Button
            as="a"
            href="#projects"
            size="lg"
            colorScheme="teal"
            shadow="md"
          >
            View My Work
          </Button>
        </MotionVStack>
      </Container>
    </Box>
  );
}

export default Hero;
