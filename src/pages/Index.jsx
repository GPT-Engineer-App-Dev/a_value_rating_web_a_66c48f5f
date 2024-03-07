import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, InputGroup, InputLeftElement, List, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaSearch, FaStar } from "react-icons/fa";

// Mock data for values
const VALUES_LIST = [
  "Honesty",
  "Integrity",
  "Respect",
  "Innovation",
  "Teamwork",
  "Accountability",
  "Leadership",
  "Passion",
  "Diversity",
  "Quality",
  // Add more values as needed
];

const Index = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Handlers for selecting values, searching, and navigating stages
  const handleValueSelect = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else if (selectedValues.length < 10) {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // This is a placeholder for the current stage, you would use routing or state to handle actual navigation
  const currentStage = "home";

  return (
    <Container maxW="container.md" py={10}>
      {currentStage === "home" && (
        <VStack spacing={4} align="stretch">
          <Heading>Welcome to the Value Rating App!</Heading>
          <Text>A brief explanation of the app goes here.</Text>
          <Button
            rightIcon={<FaArrowRight />}
            colorScheme="blue"
            onClick={() => {
              /* Navigate to value selection */
            }}
          >
            Start Rating
          </Button>
        </VStack>
      )}

      {currentStage === "valueSelection" && (
        <VStack spacing={4} align="stretch">
          <Heading>Select Your Top 10 Values</Heading>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaSearch />} />
            <Input placeholder="Search values..." onChange={handleSearchChange} />
          </InputGroup>
          <List spacing={2}>
            {VALUES_LIST.filter((value) => value.toLowerCase().includes(searchValue.toLowerCase())).map((value, index) => (
              <ListItem key={index} p={2} _hover={{ bg: "gray.100" }} onClick={() => handleValueSelect(value)}>
                {value}
              </ListItem>
            ))}
          </List>
        </VStack>
      )}

      {currentStage === "comparison" && (
        <VStack spacing={4} align="stretch">
          <Heading>Compare Your Values</Heading>
          <Text>Select a value in each matchup.</Text>
          {/* Render matchups here */}
        </VStack>
      )}

      {currentStage === "rankingDisplay" && (
        <VStack spacing={4} align="stretch">
          <Heading>Value Rankings</Heading>
          <Stack spacing={2}>{/* Render rankings here */}</Stack>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
