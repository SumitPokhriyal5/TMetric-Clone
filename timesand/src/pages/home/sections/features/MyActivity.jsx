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
  Link,
  WrapItem,
} from "@chakra-ui/react";

export default function MyActivity() {
  return (
    <Container bgColor={"#f6f7f8"} maxW={"9xl"} py={12}>
      <SimpleGrid columns={{base:1,md:2}} spacing={10}>
        <Stack spacing={4}>
          <Heading fontSize={50} textAlign={"start"}>
            Take effective control of working time
          </Heading>
          <UnorderedList padding={"0 30px"} fontSize={25} textAlign={"start"}>
            <ListItem>timekeeping</ListItem>
            <ListItem>sites and apps monitoring</ListItem>
            <ListItem>activity tracking</ListItem>
            <ListItem>
              <Link color={"blue.600"}>screenshots capturing</Link>
            </ListItem>
            <ListItem>task management</ListItem>
            <ListItem>
              <Link color={"blue.600"}>50+ integrations</Link>
            </ListItem>
            <ListItem>
              <Link color={"blue.600"}>work schedule</Link>
            </ListItem>
          </UnorderedList>
          <WrapItem>
            <Button colorScheme="blue">Start Free Trial</Button>
          </WrapItem>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"https://tmetric.com/media/kssowlxe/img-activity-cases.svg"}
            // objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
