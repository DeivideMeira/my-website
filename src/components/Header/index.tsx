import {
  Box,
  Flex,
  Text,
  IconButton,
  Container,
  Stack,
  Collapse,
  Link,
  Popover,
  useColorModeValue,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';


interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'About Me',
    href: 'a',
  },
  {
    label: 'Technology',
    href: 't',
  },
  {
    label: 'Portfolio',
    href: 'p',
  },
  {
    label: 'Film',
    href: 'f',
  },
  {
    label: 'Music',
    href: 'm',
  },
];

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
    <Box bg={"white"}>
      <Container pt={"50px"} centerContent>
        <Image src="/logo.png"></Image>
      </Container>
      
      <Flex
        minH={'85px'}
        borderBottom={1}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Container
        centerContent>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopSubNav
            />
          </Flex>
        </Container>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
    </>
  );
}

const DesktopSubNav = () => {
  const linkColor = useColorModeValue('#202020', 'gray.200');
  const linkHoverColor = useColorModeValue('purple.700', 'white');

  return (
    <>
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover  trigger={'hover'} placement={'bottom-start'}>
              <Link
                p={"2.9rem 1.5rem 3.5rem"}
                fontSize={'13px'}
                fontWeight={600}
                letterSpacing={1.3}
                fontFamily={"League Spartan"}
                textTransform={"uppercase"}
                href={navItem.href ?? '#'}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
                >
                {navItem.label}
              </Link>
          </Popover>
        </Box>
      ))}
    </Stack>
    </>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
        </Stack>
      </Collapse>
    </Stack>
  );
};

