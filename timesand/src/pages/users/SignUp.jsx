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
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import { Link as RouteLink } from "react-router-dom";
import Logo from "./timesand.png";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EMAIL_REGEX = /^[\w]+@([\w-]+\.)+[\w-]{3}$/g;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUp() {
  const toast=useToast()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [isChecked,setIsChecked]=useState(false)

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // const [success,setSuccess]=useState(false)

  useEffect(() => {
    setValidName(name.length>=3&&name.length<=20);
    // console.log(validName)
  }, [name]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    // console.log(result);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(result);
    setValidPwd(result);
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const handleSubmit=()=>{
    const userData={
      name,
      email,
      password:pwd
    }
    localStorage.setItem("user_data",JSON.stringify(userData));
    toast({
      position:'top',
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
      onCloseComplete:(()=>window.location.href='/login')
    })
  }
  // useEffect(()=>{
  //   if(success){
  //     <RouteLink to={'/login'}/>
  //   }
  // },[success])
  

  return (
    <Stack
      w={"75%"}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      m={"20px auto"}
      borderRadius="15px"
      minH={"90vh"}
      direction={{ base: "column", lg: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <RouteLink to={"/"}>
            <Box display={"flex"} justifyContent="center">
              <Image maxW={"150px"} src={Logo} />
            </Box>
          </RouteLink>
          <Heading fontSize={"2xl"}>Create Your Account</Heading>
          <FormControl id="user">
            <FormLabel>
              Name
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !name ? "hide" : "invalid"}
              />
            </FormLabel>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Sumit Pokhriyal"
              onBlur={() => setNameFocus(true)}
            />
            <Text
              className={
                nameFocus && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faTriangleExclamation} />
              User name allowed from 3-20 characters.
            </Text>
          </FormControl>
          <FormControl id="email">
            <FormLabel>
              Email
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !email ? "hide" : "invalid"}
              />
            </FormLabel>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sumit2000@gmail.com"
              // onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(true)}
              required
            />
            <Text
              className={
                emailFocus && !validEmail ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faTriangleExclamation} />
              The email address format is invalid.
            </Text>
          </FormControl>
          <FormControl id="password">
            <FormLabel>
              Password
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="pass"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                onBlur={() => setPwdFocus(true)}
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
            <Text
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faTriangleExclamation} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters: ! @ # $ %
            </Text>
          </FormControl>
          <FormControl>
            <FormLabel>
              Confirm Password
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </FormLabel>
            <InputGroup>
              <Input
                type={showConfirmPwd ? "text" : "password"}
                placeholder="Enter your password"
                name="pass"
                value={matchPwd}
                onChange={(e) => setMatchPwd(e.target.value)}
                onBlur={() => setMatchFocus(true)}
                required
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowConfirmPwd((showConfirmPwd) => !showConfirmPwd)
                  }
                >
                  {showConfirmPwd ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faTriangleExclamation} />
              Password does not match the confirm password.
            </Text>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"start"}
            >
              <Checkbox onChange={()=>setIsChecked(!isChecked)}>I accept</Checkbox>
              <Link color={"blue.500"}>Terms of Service</Link>
            </Stack>
            <Box>
              <Button
                disabled={
                 !validName || !validEmail || !validPwd || !validMatch || !isChecked ? true : false
                }
                onClick={handleSubmit}
                w={"100%"}
                colorScheme={"blue"}
                variant={"solid"}
              >
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
