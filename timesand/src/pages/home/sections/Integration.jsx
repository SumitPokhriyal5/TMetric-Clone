import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  SimpleGrid,
  Box,
  Image,
} from "@chakra-ui/react";

export default function Integration() {
  return (
    <>
      <Container mt={"-70px"} maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Integrate time tracking too with{" "}
            <Text as={"span"} color={"blue.400"}>
              50+{" "}
            </Text>
            popular services
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            TIMESAND integrate with dozens of services, which lets you measure
            progress and activity in any tool you use.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
            >
              Start Free Trial
            </Button>
            <Button rounded={"full"} px={6}>
              Explore All Integration
            </Button>
          </Stack>
        </Stack>
      </Container>
      <SimpleGrid
        mt={"-70px"}
        p={"10px 120px"}
        columns={[1,2,3,4,5,8]}
        justifyContent={"center"}
        spacing={5}
      >
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/cshbmvwf/logo-integration-gsuite.svg"
            alt="G Suite"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/fnbggshs/logo-integration-msoffice.svg"
            alt="office"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/plvb1mg0/logo-integration-gkeep.svg"
            alt="google keep"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/smflyk5w/logo-integration-github.svg"
            alt="github"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/kbrcntmi/logo-integration-excel.svg"
            alt="microsoft excel"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/4aeci1fh/logo-integration-asana.svg"
            alt="asana"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/caxbzjss/logo-integration-jira.svg"
            alt="Jira Software"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/dw2nwjwv/logo-integration-gitlab.svg"
            alt="GitLab"
          />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        mb={"40px"}
        p={"10px 120px"}
        // columns={5}
        columns={[1,2,3,5]}
        display={{base:'none','2xl':"flex"}}
        justifyContent={{base:'none','2xl':"center"}}
        spacing={10}
      >
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/me5ih5eu/logo-integration-gdocs.svg"
            alt="google docs"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/0bzmfrlf/logo-integration-trello.svg"
            alt="Trello"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/sdaj41fi/logo-integration-redmine.svg"
            alt="RedMine"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/1xedbfav/logo-integration-zendesk.svg"
            alt="Zendesk"
          />
        </Box>
        <Box
          transition={"0.5s"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={"0 10px"}
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          display="flex"
          justifyContent={"center"}
          width="120px"
          height="120px"
        >
          <Image
            src="https://tmetric.com/media/n3dmgi1p/logo-integration-wrike.svg"
            alt="Wrike"
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
