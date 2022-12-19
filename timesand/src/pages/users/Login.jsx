
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  Text,
  Center,
  Divider,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";
import Logo from "./timesand_removebg.png";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BsApple } from "react-icons/bs";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]=useState('');
  const [pwd,setPwd]=useState('');
  const toast=useToast()


  const handleLogin=()=>{
    const userData=JSON.parse(localStorage.getItem('user_data'))
    if(userData.email===email&&userData.password===pwd){
      const logindata={
        email,
        password:pwd
      }
      localStorage.setItem('login_data',JSON.stringify(logindata));

      toast({
        position:'top',
        title: 'Login Successful.',
        description: "Congratulation you've successfully Loged in.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        onCloseComplete:(()=>window.location.href='/')
      })
    }
    else{
      // console.log('fail')
      toast({
        position:'top',
        title: 'Login Failed.',
        description: "Incorrect Email or Password",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return  (
    
    <Flex bgColor='#f6f7f8' p={8} flex={1} flexDirection="column" gap={'20px'} align={"center"} justify={"center"}>
        <Stack boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="15px"  spacing={4} w={"full"} maxW={"md"}>
          <Box  bgColor='#f2f5fc' borderRadius="15px 15px 0 0" p='30px 10px' display={'grid'} gap={10}>
          <RouteLink to={"/"}>
            <Box display={"flex"} justifyContent="center">
              <Image color='#f2f5fc' maxW={"150px"} src={Logo} />
            </Box>
          </RouteLink>
          <Heading fontSize={"2xl"}>Log into Timesand</Heading>
          </Box>
          <Box display={'grid'} gap="20px" p={"20px 40px"}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="sumit2000@gmail.com" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                value={pwd} onChange={(e)=>setPwd(e.target.value)}
                placeholder="Enter your password"
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
            <Box>
              <Button w={"100%"} onClick={handleLogin} colorScheme={"blue"} variant={"solid"}>
                Log In
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
                  <Text>Log In with Facebook</Text>
                </Center>
              </Button>

              {/* Google */}
              <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Log in with Google</Text>
                </Center>
              </Button>

              {/* LinkedIn */}
              <Button
                w={"full"}
                colorScheme={"purple"}
                leftIcon={<BsApple />}
              >
                <Center>
                  <Text>Log In with Apple</Text>
                </Center>
              </Button>

              {/* Messenger */}
            </Stack>
          </Center>
          <Divider />
          <Box color={"blue.500"} display={"flex"} gap={1} justifyContent="space-between">
            <Text>Can't Log In?</Text>
            <RouteLink to={"/register"}>
              <Text>Sign Up</Text>
            </RouteLink>
          </Box>
          </Box>
        </Stack>
        <RouteLink to={"#"}>
              <Text color={'blue.500'}>Privacy Policy</Text>
            </RouteLink>
      </Flex>
  )
}

export default Login