import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
  Text,
  Center,
  Divider,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import { Link as RouteLink } from "react-router-dom";
import Logo from "./timesand.png";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

console.log(USER_REGEX.test)
const initialData={
  name:'',
  email:'',
  pass:''
}
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [userData,setUserData]=useState(initialData)

  const handleChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }
  console.log(userData)
  return (
    <Stack
      w={"75%"}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      m={"20px auto"}
      borderRadius="15px"
      minH={"90vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <RouteLink to={"/"}>
            <Box display={"flex"} justifyContent="center">
              <Image maxW={"150px"} src={Logo} />
            </Box>
          </RouteLink>
          <Heading fontSize={"2xl"}>Create Your Account</Heading>
          <FormControl id="user" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" onChange={(e)=>handleChange(e)} placeholder="Sumit Pokhriyal" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" onChange={(e)=>handleChange(e)} placeholder="sumit2000@gmail.com" required/>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="pass"
                onChange={(e)=>handleChange(e)}
                required
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"start"}
            >
              <Checkbox required>I accept</Checkbox>
              <Link color={"blue.500"}>Terms of Service</Link>
            </Stack>
            <Box>
              <Button w={"100%"} colorScheme={"blue"} variant={"solid"}>
                Sign Up
              </Button>
            </Box>
          </Stack>
          <Text>or</Text>
          <Center p={2}>
            <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
              {/* Facebook */}
              <Button
                w={"full"}
                colorScheme={"facebook"}
                leftIcon={<FaFacebook />}
              >
                <Center>
                  <Text>Continue with Facebook</Text>
                </Center>
              </Button>

              {/* Google */}
              <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>

              {/* LinkedIn */}
              <Button
                w={"full"}
                colorScheme={"messenger"}
                leftIcon={<SiLinkedin />}
              >
                <Center>
                  <Text>Send to Linkedin</Text>
                </Center>
              </Button>

              {/* Messenger */}
              <Button
                w={"full"}
                colorScheme={"messenger"}
                leftIcon={<SiMessenger />}
              >
                <Center>
                  <Text>Send to Messenger</Text>
                </Center>
              </Button>
            </Stack>
          </Center>
          <Divider />
          <Box display={"flex"} gap={1} justifyContent="center">
            <Text>Already have an account?</Text>
            <RouteLink to={"/login"}>
              <Text color={"blue.500"}>Log In</Text>
            </RouteLink>
          </Box>
        </Stack>
      </Flex>
      <Flex borderRadius={"0 15px 15px 0"} bgColor="#f2f5fc" mt={20} flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"revert"}
          src={"https://id.tmetric.com/images/side_image_register.svg"}
        />
      </Flex>
    </Stack>
  );
}
