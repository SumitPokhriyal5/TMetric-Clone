import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import {BsFillPeopleFill, BsFillStopwatchFill, BsFolder2} from 'react-icons/bs'
import { FaChartBar, FaUmbrellaBeach } from "react-icons/fa";
import {RiBillLine} from 'react-icons/ri'


export default function MyTime() {
    
  return (
    <Container maxW={"8xl"} py={12}>
      <Heading w={"55%"} fontSize={"50px"} m={"auto"} mb={5}>
        Best time tracking features for your business
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} alignItems={'start'} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://tmetric.com/media/1kxfndjp/img-advantages.svg"
            }
            // objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4}>
          <Accordion display={'grid'} gap={3} defaultIndex={[0]} allowToggle>
            <AccordionItem boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} borderRadius={'lg'}>
                <AccordionButton _expanded={{bg:'blue.50',color:'blue'}} borderRadius={'lg'} p={"10px 0"}>
                  <Box  ml={'50px'} fontSize={30} fontWeight={800} display={"flex"} alignItems='center' gap={2} as="span" flex="1" textAlign="left">
                    <BsFillStopwatchFill  /> 
                    <Text>Time Tracking</Text>
                  </Box>
                </AccordionButton>  
              <AccordionPanel borderRadius={'lg'} bgColor={'blue.50'} pb={4}>
                <Text width={'70%'} textAlign={'start'} m={'auto'} mr={120} >Capture every task you work on. Take control over time intervals by simple time tracking</Text>
                <Text color={'blue'} textAlign={'start'} ml={75} mt={5} >Learn More</Text>
              </AccordionPanel>
            </AccordionItem> 
            <AccordionItem boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} borderRadius={'lg'}>
                <AccordionButton _expanded={{bg:'blue.50',color:'blue'}} borderRadius={'lg'} p={"10px 0"}>
                  <Box  ml={'50px'} fontSize={30} fontWeight={800} display={"flex"} alignItems='center' gap={2} as="span" flex="1" textAlign="left">
                    <BsFolder2  /> 
                    <Text  >Project Management</Text>
                  </Box>
                </AccordionButton>  
              <AccordionPanel borderRadius={'lg'} bgColor={'blue.50'} pb={4}>
                <Text width={'70%'} textAlign={'start'} m={'auto'} mr={120} >Create projects, set rates and budgets. Keep tracking of hours spent on tasks and see the project progress at a glance, collaborate easily, keep deadlines and prevent over budgeting</Text>
                <Text color={'blue'} textAlign={'start'} ml={75} mt={5} >Learn More</Text>
              </AccordionPanel>
            </AccordionItem> 
            <AccordionItem boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} borderRadius={'lg'}>
                <AccordionButton _expanded={{bg:'blue.50',color:'blue'}} borderRadius={'lg'} p={"10px 0"}>
                  <Box  ml={'50px'} fontSize={30} fontWeight={800} display={"flex"} alignItems='center' gap={2} as="span" flex="1" textAlign="left">
                    <BsFillPeopleFill  /> 
                    <Text>Team Management</Text>
                  </Box>
                </AccordionButton>  
              <AccordionPanel borderRadius={'lg'} bgColor={'blue.50'} pb={4}>
                <Text width={'70%'} textAlign={'start'} m={'auto'} mr={120} >Measure productivity and activity level of your team, assign tasks in a click, monitor workflow and distribute the workload. Syncs your teams' work and improves efficiency.</Text>
                <Text color={'blue'} textAlign={'start'} ml={75} mt={5} >Learn More</Text>
              </AccordionPanel>
            </AccordionItem> 
            <AccordionItem boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} borderRadius={'lg'}>
                <AccordionButton _expanded={{bg:'blue.50',color:'blue'}} borderRadius={'lg'} p={"10px 0"}>
                  <Box  ml={'50px'} fontSize={30} fontWeight={800} display={"flex"} alignItems='center' gap={2} as="span" flex="1" textAlign="left">
                    <RiBillLine  /> 
                    <Text>Billing & Invoicing</Text>
                  </Box>
                </AccordionButton>  
              <AccordionPanel borderRadius={'lg'} bgColor={'blue.50'} pb={4}>
                <Text width={'70%'} textAlign={'start'} m={'auto'} mr={120} >With the accurate billing system, set billable rates and easily create an invoice based on tracked time and expenses, and get paid promptly.</Text>
                <Text color={'blue'} textAlign={'start'} ml={75} mt={5} >Learn More</Text>
              </AccordionPanel>
            </AccordionItem> 
            <AccordionItem boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} borderRadius={'lg'}>
                <AccordionButton _expanded={{bg:'blue.50',color:'blue'}} borderRadius={'lg'} p={"10px 0"}>
                  <Box  ml={'50px'} fontSize={30} fontWeight={800} display={"flex"} alignItems='center' gap={2} as="span" flex="1" textAlign="left">
                    <FaChartBar  /> 
                    <Text>Reporting</Text>
                  </Box>
                </AccordionButton>  
              <AccordionPanel borderRadius={'lg'} bgColor={'blue.50'} pb={4}>
                <Text width={'70%'} textAlign={'start'} m={'auto'} mr={120} >With a flexible reporting system, you have a choice to get insights into your projects and team productivity, analyze incomes and keep costs under control</Text>
                <Text color={'blue'} textAlign={'start'} ml={75} mt={5} >Learn More</Text>
              </AccordionPanel>
            </AccordionItem> 
            <AccordionItem boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} borderRadius={'lg'}>
                <AccordionButton _expanded={{bg:'blue.50',color:'blue'}} borderRadius={'lg'} p={"10px 0"}>
                  <Box  ml={'50px'} fontSize={30} fontWeight={800} display={"flex"} alignItems='center' gap={2} as="span" flex="1" textAlign="left">
                    <FaUmbrellaBeach  /> 
                    <Text>Time Off</Text>
                  </Box>
                </AccordionButton>  
              <AccordionPanel borderRadius={'lg'} bgColor={'blue.50'} pb={4}>
                <Text width={'70%'} textAlign={'start'} m={'auto'} mr={120} >Add a PTO policy for your organization, simply ask for days off, control missed workdays, manage balances and teams attendance hassle-free</Text>
                <Text color={'blue'} textAlign={'start'} ml={75} mt={5} >Learn More</Text>
              </AccordionPanel>
            </AccordionItem> 
          </Accordion>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
