import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  SimpleGrid,
  Button,
  Progress,
} from "@chakra-ui/react";
import { FiSettings, FiMenu, FiChevronDown } from "react-icons/fi";
import Logo from "../users/timesand_removebg.png";
import {
  BsCalendar3,
  BsChevronLeft,
  BsChevronRight,
  BsDot,
  BsFillPeopleFill,
  BsFillSquareFill,
  BsFillStopwatchFill,
  BsMicrosoft,
} from "react-icons/bs";
import { FaPlay, FaTasks } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";

const LinkItems = [
  { name: "Time", icon: BsFillStopwatchFill },
  { name: "My Work", icon: BsMicrosoft },
  { name: "Tasks", icon: FaTasks },
  { name: "Team", icon: BsFillPeopleFill },
  { name: "Settings", icon: FiSettings },
];

const userDetails = JSON.parse(localStorage.getItem("user_data"));

export default function Time({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoF
        ocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>

      {/* body content starts here */}
      <SimpleGrid columns={1} spacing={4}>
        <Box
          // border={"1px solid"}
          borderRadius="2xl"
          w="80%"
          ml={"auto"}
          mr={"25px"}
          height="auto"
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          p={"0 20px"}
        >
          <Box h={"100%"} display="flex" gap={2}>
            <Button
              h="60px"
              w={"auto"}
              bgColor="#15af2a"
              color={"white"}
              _hover={{ bgColor: "#25D366" }}
              borderRadius="50%"
              fontSize="20px"
              p={"0 20px"}
            >
              <FaPlay />
            </Button>
            <Button
              h="60px"
              w={"auto"}
              bgColor="red"
              color={"white"}
              _hover={{ bgColor: "#ff4f42" }}
              borderRadius="50%"
              fontSize="20px"
              p={"0 20px"}
            >
              <BsFillSquareFill />
            </Button>
            <Text fontSize={"40px"}>My Time</Text>
          </Box>
          <Box display={"flex"} gap={1} alignItems="center">
            <Box display={"flex"} gap={1} alignItems="center" fontSize={30}>
              <BsCalendar3 />
              <Text>Today</Text>
            </Box>
            <Box display={"flex"} gap={1} alignItems="center" fontSize={20}>
              <BsChevronLeft />
              <BsDot />
              <BsChevronRight />
            </Box>
          </Box>
        </Box>

        <Box
          border={"1px solid"}
          bgColor="white"
          borderRadius="2xl"
          w="80%"
          ml={"auto"}
          mr={"25px"}
          height="180px"
          display={"grid"}
          p="30px 40px"
        >
          <Box textAlign={"start"} fontSize="30px" lineHeight={"30px"}>
            <Text fontWeight={"bold"}>
              Total Time: <span style={{ fontWeight: "100" }}>1 h 24 min</span>
            </Text>
          </Box>
          <Box mb={"-10px"} display="grid" height={"100%"}>
            <Text fontWeight={"bold"} fontSize={"30px"} textAlign={"start"}>
              Task Status:
            </Text>
            <Box border={"1px solid"} m="0 10px" h={"40px"}>
              <Progress hasStripe value={1} h="100%" isAnimated />
            </Box>
          </Box>
        </Box>

        <Box>
          {/* continue from here */}
        </Box>
      </SimpleGrid>
      {/* body content ends here */}
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Image color="#f2f5fc" maxW={"150px"} src={Logo} />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavItem key={link.name} ind={i} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, ind, children, ...rest }) => {
  return ind === 0 ? (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        // mx="4"
        // borderRadius="lg"
        mb={1}
        role="group"
        cursor="pointer"
        bg="#dee7f7"
        color="blue.600"
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  ) : (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        // mx="4"
        // borderRadius="lg"
        mb={1}
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#dee7f7",
          color: "blue.600",
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Box
                  border={"1px solid "}
                  p="7px 15px"
                  borderRadius={"50%"}
                  bgColor="green.400"
                  color={"white"}
                >
                  <Text fontWeight={800} fontSize="20px">
                    {userDetails.name[0].toUpperCase()}
                  </Text>
                </Box>

                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{userDetails.name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    User
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <RouteLink to={"/login"}>
                <MenuItem
                  onClick={() => {
                    localStorage.removeItem("login_data");
                  }}
                >
                  Sign out
                </MenuItem>
              </RouteLink>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
