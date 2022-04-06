import { Box, Container, Flex, useBreakpointValue, } from "@chakra-ui/react";
import styles from "./styles.module.css";
import "@fontsource/metropolis"; 
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { fontWeight } from "@mui/system";

export function Header() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box className={styles.headerContainer}>
      <Flex className={styles.headerTop}>
        <Container w={"auto"} p={"15px 0"} textAlign={"center"}>
          <img src="/logo.png"></img>
        </Container>
      </Flex>
      <Container className={styles.headerBottom}>
        <ul className={styles.mainNav}>
          <li className={styles.headerButtons}><a className={styles.a} href='#'>ABOUT ME</a></li>
          <li className={styles.headerButtons}><a className={styles.a} href='#'>PORTFOLIO</a></li>
          <li className={styles.headerButtons}><a className={styles.a} href='#'>TECHNOLOGY</a></li>
          <li className={styles.headerButtons}><a className={styles.a} href='#'>FILM</a></li>
        </ul>
      </Container>
    </Box>
  );
}