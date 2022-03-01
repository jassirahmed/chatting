import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Flex, Link, Box, Button, Icon, Text, Spacer, Heading } from "@chakra-ui/react";
import ilmx from "../Images/ilmx.png";
import CreateSession from "../Components/CreateSessionPage/CreateSession";
import styles from "../styles/Home.module.scss";


export default function Home() {
  const [container, setContainer] = useState(false);
  const contentContainername = container ? `${styles["dark_row"]} ${styles.container}` : styles.container;


  return (
    <div className={contentContainername}>
      <Box as="header" className={styles.header} bg={"#f2f2f2"}>
        <Flex alignItems="center" px="18" py={2.5}>
          <Box w={100}>
            <Image priority src={ilmx} w="100%" h="100%" />
          </Box>
          <Spacer />
          <Box>
            <Button bg={"transperent"} className={styles.theme_btn} fontSize="27px" onClick={() => setContainer(!container)}>
              <Icon viewBox="0 0 512 512">
                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z" />
              </Icon>
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box className={styles.main}>
        <CreateSession />
      </Box>
      <Box
        as="footer"
        fontSize={"16px"}
        px="16px"
        color="#757575"
        bg={"#f5f5f5"}
        className={styles.tar}
      >
        <Text>
          Copyright © 2019
          <Box as="b">
            <Box
              as="a"
              px={1}
              className={styles.ilmx}
              href="http://www.ilmux.com/"
            >
              ILM UX
            </Box>
          </Box>
          pvt. ltd.
          <Box as="b" color="rgb(43, 57, 84)" px={1}>
            v1.0
          </Box>
        </Text>
      </Box>
    </div>
  );
}
