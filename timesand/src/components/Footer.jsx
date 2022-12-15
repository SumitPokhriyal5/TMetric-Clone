import { ReactNode } from 'react';
import Logo from '../images/timesand.png'

import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  VisuallyHidden,
  Divider,
} from '@chakra-ui/react';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'extrabold'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'8xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box w={'50%'} >
              <Image src={Logo} />
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader >Applications</ListHeader>
            <Link href={'#'}>Desktop</Link>
            <Link href={'#'}>iOs</Link>
            <Link href={'#'}>Android</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Browser Extensions</ListHeader>
            <Link href={'#'}>Chrome</Link>
            <Link href={'#'}>Firefox</Link>
            <Link href={'#'}>Opera</Link>
            <Link href={'#'}>Edge</Link>
            <Link href={'#'}>Safari</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Resources</ListHeader>
            <Link href={'#'}>Solutions</Link>
            <Link href={'#'}>Integrations</Link>
            <Link href={'#'}>Help</Link>
            <Link href={'#'}>Time Trackers Comparison</Link>
            <Link href={'#'}>Blog</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>About</ListHeader>
            <Link href={'#'}>About TimeSand</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Cookies Policy</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    <Divider />
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>Copyright © Devart 2022</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
    </>
  );
}