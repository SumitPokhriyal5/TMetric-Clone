import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Switch,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Tag,
  TagLabel,
  WrapItem,
  Link,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Price() {
  const [busiPrice, setBusiPrice] = useState(7);
  const [proPrice, setProPrice] = useState(5);
  const [timePeriod, setTimePeriod] = useState("month");
  const [isChecked, setIsChecked] = useState(false);
  const [teamSize, setTeamSize] = useState(1);

  useEffect(() => {
    if (isChecked === false) {
      setTimePeriod("month");
      setBusiPrice(7 * teamSize);
      setProPrice(5 * teamSize);
    } else {
      setTimePeriod("year");
      setBusiPrice(70 * teamSize);
      setProPrice(50 * teamSize);
    }
  }, [teamSize, isChecked]);

  console.log(isChecked);
  return (
    <>
      <Navbar />
      <Box py={12}>
        <VStack
          padding={"100px 0"}
          bgColor="#e8edff"
          spacing={2}
          textAlign="center"
        >
          <Heading as="h1" fontSize="6xl">
            Pricing
          </Heading>
          <Text fontSize="lg" fontWeight={800}>
            All plans come with a free 30-day trial. No credit card required.
          </Text>
        </VStack>
        <Stack
          padding={"30px 0"}
          //   border="1px solid"
          w={"80%"}
          m="auto"
          justifyContent={"center"}
          spacing={"120px"}
          textAlign="center"
          direction={{ base: "column", md: "row" }}
          fontSize="25px"
        >
          <Stack align="center" direction={"row"}>
            <Text>Monthly</Text>
            <Switch
              onChange={() => setIsChecked(!isChecked)}
              colorScheme={"green"}
              size="lg"
            />
            <Text>Yearly</Text>
          </Stack>
          <Stack align="center" direction="row">
            <Text>Team Size</Text>
            <NumberInput
              value={teamSize}
              size="md"
              maxW={24}
              defaultValue={1}
              min={1}
            >
              <NumberInputField
                onChange={(e) => setTeamSize(+e.target.value)}
              />
              <NumberInputStepper>
                <NumberIncrementStepper
                  onClick={() => setTeamSize(teamSize + 1)}
                />
                <NumberDecrementStepper
                  onClick={() => setTeamSize(teamSize - 1)}
                />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="800" fontSize="3xl">
                Business
              </Text>
              <HStack
                borderRadius={"2xl"}
                bgColor="#f6f7f8"
                zIndex={"-1"}
                justifyContent="center"
              >
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  {busiPrice}
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /{timePeriod}
                </Text>
              </HStack>
              <Tag
                display={isChecked ? "flex" : "none"}
                size="lg"
                colorScheme="green"
                justifyContent={"center"}
                alignItems="center"
                w={"80%"}
                m="auto"
                mt={"-2"}
                borderRadius="full"
              >
                <TagLabel>You save ${teamSize * 14}/year</TagLabel>
              </Tag>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
              h="400px"
            >
              <Text fontWeight={"bold"}>Everything in Professional, plus:</Text>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Apps and sites usage reports
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Screenshots capturing
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Payroll for employees
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Time-sync with Jira and QuickBooks
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Time Off Calender
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Work Schedule
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Team Dashboard
                </ListItem>
              </List>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("red.300", "red.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("gray.900", "gray.300")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  Most Popular
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="800" fontSize="3xl">
                  Professional
                </Text>
                <HStack
                  borderRadius={"2xl"}
                  bgColor="#f6f7f8"
                  zIndex={"-1"}
                  justifyContent="center"
                >
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    {proPrice}
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /{timePeriod}
                  </Text>
                </HStack>
                <Tag
                  display={isChecked ? "flex" : "none"}
                  size="lg"
                  colorScheme="green"
                  justifyContent={"center"}
                  alignItems="center"
                  w={"80%"}
                  m="auto"
                  mt={"-2"}
                  borderRadius="full"
                >
                  <TagLabel>You save ${teamSize * 10}/year</TagLabel>
                </Tag>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
                h="400px"
              >
                <Text fontWeight={"bold"}>Everything in Free, plus:</Text>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Calendar integrations: Google, Outlook
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Billable rates and money tracking
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Budgeting for projects
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Invoicing
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Task management
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Activity levels for employees
                  </ListItem>
                </List>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="800" fontSize="3xl">
                Free
              </Text>
              <HStack
                borderRadius={"2xl"}
                bgColor="#f6f7f8"
                zIndex={"-1"}
                justifyContent="center"
              >
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  0
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /{timePeriod}
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
              h="400px"
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Time tracking
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Unlimited projects and clients
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Reporting
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Timer button in 50+ web apps
                </ListItem>
              </List>
            </VStack>
          </PriceWrapper>
        </Stack>
        <Box
          w={"22%"}
          m="auto"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* <Button w={'50%'} colorScheme='blue'>Get Started</Button> */}
          <WrapItem>
            <Button colorScheme="blue">Get Started</Button>
          </WrapItem>
          <Text fontSize={["xs", "sm", "md"]} color="grey">
            Fully Functional 30-Day Trial
          </Text>
        </Box>
        <Box mt={"10px"}>
          <Text>
            Check out <Link color={"blue.400"}>detailed plan comparison</Link>
          </Text>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
