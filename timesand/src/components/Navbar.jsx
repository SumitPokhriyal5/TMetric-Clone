import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Image,
  useDisclosure,
  HStack,
  VStack,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Logo from "../images/timesand.png";

const loginData = JSON.parse(localStorage.getItem("login_data"));
const userDetails = JSON.parse(localStorage.getItem("user_data"));

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  

  return (
    <Box position={"fixed"} w={"100%"} zIndex={5}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <RouteLink to="/">
            <Image src={Logo} w={{ base: "50%", md: "25%" }} />
          </RouteLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {loginData ? (
          <Menu border="1px solid">
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
                  <Text fontSize="sm" fontWeight={800}>
                    {userDetails.name}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    User
                  </Text>
                </VStack>
                {/* <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box> */}
              </HStack>
            </MenuButton>
            <MenuList>
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
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            alignItems="center"
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <RouteLink to={"/login"}>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
              >
                Sign In
              </Button>
            </RouteLink>
            <RouteLink to={"/register"}>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                // color={"white"}
                // bg={"blue.400"}
                colorScheme="blue"
                variant={"outline"}
                href={"/register"}
                _hover={{
                  bg: "blue.500",
                  color: "white",
                }}
              >
                Sign Up
              </Button>
            </RouteLink>
          </Stack>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={10}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <RouteLink
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </RouteLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      bg="blue.50"
      _hover={{ bg: useColorModeValue("blue.100", "gray.900") }}
    >
      <Stack direction={"column"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "black.400" }}
            fontWeight={"bold"}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Why TimeSand",
    children: [
      {
        label: "Time Trackting",
        subLabel: "Capture and control every task you work on",
        href: "#",
      },
      {
        label: "Team Management",
        subLabel: "Monitor productivity and activity level of your team",
        href: "#",
      },
      {
        label: "Billing & Invoicing",
        subLabel: "Set Billable rates and easily create invoices",
        href: "#",
      },
      {
        label: "Task Management",
        subLabel: "Manage tasks and set up an effective workflow",
        href: "#",
      },
    ],
  },
  {
    label: "Apps & Integrations",
    children: [
      {
        label: "Jira",
        subLabel: "Time tracking on every task in one click",
        href: "#",
      },
      {
        label: "MS Office",
        subLabel: "Get plugin for tracking time in MS Office Online",
        href: "#",
      },
      {
        label: "Asana",
        subLabel: "Start to accurately track time of tasks",
        href: "#",
      },
      {
        label: "GitHub",
        subLabel: "Track time spent working on an issue with one mouse click",
        href: "#",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Support",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
];
