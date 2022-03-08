import React from 'react'
import Link from 'next/link'
import { RepeatIcon, AttachmentIcon, CopyIcon } from '@chakra-ui/icons'
import "@fortawesome/fontawesome-free/css/all.css";
import { Flex, Box, HStack, Stack, Switch, Spacer, Input, Button, FormControl, Text, Icon, IconButton } from '@chakra-ui/react'
import style from "../styles/Home.module.scss";
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import EndModal from '../Components/Modal/EndModal';
import LeaveModal from '../Components/Modal/LeaveModal';
import Header from '../Components/Page/MediaHeader';
import CreateSession from '../Components/CreateSessionPage/CreateSession';



export default function ChattingSession() {
  const [isChecked, setIsChecked] = useState(false);
  const [dark, setDark] = useState(false);
  const toast = useToast();
  var token = '1234'
  var Url = `http://send.ilmux.com/${token}`;
  const checkedText = <Box id='none' className={style.mode}>Chat Mode Is On <i className="fa fa-circle Blink" color="#3cad50"></i></Box>;
  const unheckedText = <Box id='block' color={"#929292"}>Enable Chat Mode</Box>;
  const sessionContainer = dark ? `${style["dark_row_2"]} ${style.white_Row}` : style.white_Row;
  const handleChange = () => {
    setIsChecked(!isChecked);
  }
  return (
    <Box h="100%" className={sessionContainer}>
      <Header />
      <Flex p={2} h="100%">
        <Box p={3} pt={2} bg="white" w="66.66%" rounded='md' className={style.left_container}>
          <Flex pb={2} px="10px">
            <Box>
              <Stack direction='row'>
                <Switch colorScheme='blackAlpha' size='lg' transition={"ease-in-out"} checked={isChecked} onChange={handleChange} />
                <Box>
                  {isChecked ? checkedText : unheckedText}
                </Box>
              </Stack>
            </Box>
            <Spacer />
            <HStack>
              <RepeatIcon w={6} h={6} className={style.rotateIcon} />
            </HStack>
          </Flex>
          <Box className={style.textBox}>
            {/* <CreateSession items={data.message} /> */}
          </Box>
          <Flex bg="#2b3954" className={style.msg_input} alignItems={"center"} p={2}>
            <Button className={style.msg_btn_icon} fontSize="20px" borderRadius={0} h="48px"><Box as="b"><AttachmentIcon /></Box></Button>
            <FormControl display="flex" alignItems="center" >
              <Input className={style.msg_text_input} bg={"#fff"} placeholder="Enter Message Here" size='lg' />
              <Button h="48px" bg={"transperent"} color="#fff" borderRadius={0} type="submit" className={style.message_sentbtn}>
                <Box><Box as='span'><i className="fa-solid fa-paper-plane"></i></Box>
                  <Box>Send</Box>
                </Box>
              </Button>
            </FormControl >
          </Flex>
        </Box>
        <Box w="33.33%" className={style.right_container} textAlign={"center"} p="10px">
          <Box pos={"relative"} className={style.token_preview} w="55%" m={"auto"} textAlign={"center"} p="18px" bg={"#fff"} borderRadius={"5px"}>
            <Box textAlign={"right"} pos="absolute" right="9px" top="9px">
              <IconButton
                w={"30px"}
                h="30px"
                minW={"unset"}
                fontSize="12px"
                icon={<CopyIcon />}
                className={style.copybtn}
                colorScheme='gray'
                borderRadius='50%'
                onClick={() =>
                  toast({
                    position: 'top',
                    render: () => (
                      <Box color='white' p={3} bg='#2b3954' borderRadius='lg'>
                        <b>{token}</b>  Has been copied to Clip Board
                      </Box>
                    ),
                  }) && (navigator.clipboard.writeText(token))
                } />
            </Box>
            <Box className={style.token} fontWeight="400" fontSize={"20px"} mt="10px" color="#2b3954">Tokken No</Box>
            <Box className={style.token_num} fontSize="35px" color={"#2b3954"}>
              <Box as='b' id='token'>1234</Box>
            </Box>
            <Box>
              <Button className={style.light_mode_btn} bg={"#f2f2f2"} color="rgba(41,39,39,.89)" fontSize="27px" px="13px" py="30px"
                onClick={() => setDark(!dark)}>
                <Icon viewBox="0 0 512 512">
                  <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z" />
                </Icon>
              </Button>
            </Box>
            <Box mb="30px" mt="10px">
              <Box fontSize="13px" mb="5px" cursor={"pointer"}
                onClick={() =>
                  toast({
                    position: 'top',
                    render: () => (
                      <Box color='white' p={3} bg='#2b3954' borderRadius='lg'>
                        <b>{Url}</b>  Has been copied to Clip Board
                      </Box>
                    ),
                  }) && (navigator.clipboard.writeText(Url))
                }
              >Click here to copy link</Box>
              <Box className={style.link_area} bg="#2b3954" cursor={"pointer"} overflow={"hidden"} fontSize="15px" py="8px" px="12px" borderRadius="40px" color="hsla(0,0%,100%,.7)" textOverflow="ellipsis" whiteSpace="nowrap" id="copylink"
                onClick={() =>
                  toast({
                    position: 'top',
                    render: () => (
                      <Box color='white' p={3} bg='#2b3954' >
                        <b>{Url}</b>  Has been copied to Clip Board
                      </Box>
                    ),
                  }) && (navigator.clipboard.writeText(Url))
                }>http://send.ilmux.com/?4325</Box>
            </Box>
            <Box className={style.endsession}>
              <EndModal />
              <LeaveModal />
            </Box>
          </Box>
        </Box>
      </Flex >
    </Box >
  )
}