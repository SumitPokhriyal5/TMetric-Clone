import { EmailIcon } from "@chakra-ui/icons";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";

export default function Top() {
  return (
    <Container bg={"#fff0b8"} maxW={"9xl"} py={12}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
        <Stack margin={'auto'} w={'80%'} spacing={4}>
          <Heading textAlign={'start'} fontSize={'70px'} fontWeight={'extrabold'} >Empower your Team with Time Tracking</Heading>
          <Text fontSize={"lg"}>
            TimeSand streamlines your team work so you can focus on what matters
          </Text>
          <Stack
            spacing={2}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <InputGroup w={'80%'} bg={'white'} >
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color={'blue'} />}
              />
              <Input type="email" placeholder="Enter your email address" />
            </InputGroup>
            <Box w={'80%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Button w={'50%'} colorScheme='blue'>Get Started</Button>
            <Text>Fully Functional 30-Day Trial</Text>
            </Box>
          </Stack>
        </Stack>
        <Flex w={'100%'} >
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://tmetric.com/media/nb3imgh0/img-home-heading.svg"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
