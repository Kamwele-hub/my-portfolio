import { Box, Container, Heading, VStack, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function Projects() {
  return (
    <Box id="projects" py={20} bg="white">
      <Container maxW="3xl">
        <Heading
          as="h2"
          size="xl"
          mb={10}
          textAlign="center"
          color="teal.600"
        >
          Projects
        </Heading>
        <VStack align="start" spacing={8}>
          <MotionBox
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading as="h3" size="md">
              Portfolio Website
            </Heading>
            <Text mb={2}>
              A modern portfolio built with React and Chakra UI showcasing my
              skills and projects.
            </Text>
            <Link
              href="https://github.com/Kamwele-hub/my-portfolio"
              color="teal.500"
              isExternal
            >
              View on GitHub
            </Link>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading as="h3" size="md">
              AI Automation Scripts
            </Heading>
            <Text>
              Automated workflows for businesses using Python, Make.com, and
              Zapier.
            </Text>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
}

export default Projects;
