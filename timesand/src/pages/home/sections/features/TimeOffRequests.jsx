import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Stack,
    UnorderedList,
    ListItem,
    Button,
    WrapItem,
  } from "@chakra-ui/react";
  
  export default function TimeOffRequests() {
    return (
      <Container bgColor={'#f6f7f8'} maxW={"9xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading fontSize={50} textAlign={'start'} >Improve attendance with time off tracking software</Heading>
            <UnorderedList padding={"0 30px"}  fontSize={25} textAlign={'start'} >
              <ListItem>flexible time off policy</ListItem>
              <ListItem>time off requests management</ListItem>
              <ListItem>time off calendar</ListItem>
              <ListItem>pto calculations</ListItem>
            </UnorderedList>
            <WrapItem>
            <Button colorScheme="blue">Start Free Trial</Button>
          </WrapItem>
          </Stack>
          <Flex w={'100%'} >
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://tmetric.com/media/mlzbtxv5/time-off-calendar-case.svg"
              }
              // objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
  