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

export default function ProjectSummary() {
  return (
    <Container maxW={"9xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"https://tmetric.com/media/lltfuaaz/img-report-cases-svg.svg"}
            // objectFit={"cover"}
          />
        </Flex>
        <Stack ml={"90px"} spacing={4}>
          <Heading fontSize={50} textAlign={"start"}>
            Achieve high profitability by using time tracker
          </Heading>
          <UnorderedList padding={"0 30px"} fontSize={25} textAlign={"start"}>
            <ListItem>project management</ListItem>
            <ListItem>project budgeting</ListItem>
            <ListItem>billing and invoicing</ListItem>
            <ListItem>accurate payroll</ListItem>
            <ListItem>detailed reports</ListItem>
          </UnorderedList>
          <WrapItem>
            <Button colorScheme="blue">Start Free Trial</Button>
          </WrapItem>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
