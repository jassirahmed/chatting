import React from "react";
import styles from "../../styles/Home.module.scss";
import { useState } from "react";
import {
  Box,
  Flex,
  Textarea,
  FormControl,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import ky from "ky"
import { useRouter } from "next/router";

export default function CreateSession() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addTextInput, setInputValue] = useState('');
  const [joinSessionToken, setJoinSessionToken] = useState();
  const router = useRouter();
  const changeHandler = (e) => {
    setInputValue({
      [e.target]: e.target.value,
    })
  }
  const changeLength = () => {
    let textLength = document.getElementById("text").value;
    var count = textLength.length + 1;
    document.getElementById("count").innerHTML = count;
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
  var today = new Date();
    var date =
     today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate();
    var time =
      today.getHours() +
      '' +
      today.getMinutes() +
      '' +
      today.getSeconds() +
      '' +
      today.getMilliseconds();
    var dateTime = date + time;
    let uniqueID = dateTime + Math.floor(Math.random() * 1000);
    let data = {
      type: 'createSession',
      message: addTextInput,
      uniqueID: uniqueID,
    }
    if (onSubmitHandler) {
      try {
        var req = await ky.post(
          'https://api.ilmux.com/tunnel/db/saveData', { json: {data}  }).json();
        // req = await req.json();
        console.log(req, "req");
        if (req.success) {
          router.push("/ChattingSession")
        }
      } catch (error) {
        console.log(error, "error");
      }
    }
    console.log(data)
  }
  const joinSession = async () => {
    if (joinSession) {
      try {
        var response = await ky.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}conversations/${joinSessionToken}`
        );
        response = await response.json();
        console.log(response, "response");
        if (response.success) {
          router.push("/ChattingSession")
        }
      } catch (error) {
        console.log(error, "error");
      }
    }
  }
  const handleChange = (e) => {
    setJoinSessionToken(e.target.value)
  }
  return (
    <Box className={styles.createsessionpage} >
      <Flex pt="120px" className={styles.hero_sec}>
        <Box w="60%" bg={"#fff"} className={styles.textbox} p="15px" >
          <FormControl as="form" p="4" textAlign="right"
              onSubmit={onSubmitHandler}
          >
            <Textarea
              id="text"
              required
              h="300px"
              onKeyDown={changeLength}
              onChange={changeHandler}
              value={setInputValue.addTextInput}
              className={styles.sessionText}
              placeholder="Paste Your Code Here"
              maxLength="5000"
            />
            <Text fontSize="lg" color="#9e9e9e" >
              <span id="count">0</span>/5000
            </Text>
            <Button
              px="20px"
              py="5px"
              bg={"#2b3954"}
              color="#fff"
              fontSize="20px"
              type="submit"
              className={styles.submit_btn}
            >
              Create Session
            </Button>
          </FormControl >
        </Box>
        <Box w="40%" p={70} className={styles.btn_box} pt="0px">
          <Button
            type="button"
            bg={"#2b3954"}
            color="#fff"
            fontSize="20px"
            p="15px"
            className={styles.join_btn}
            onClick={onOpen}
          >
            Join Session
          </Button>
          <Modal size='lg' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color='#fff' bg='#2b3954'>Join Session</ModalHeader>
              <ModalCloseButton color='#fff' border='none' boxShadow='none' />
              <ModalBody textAlign='center' fontSize='18px'>
                <Input placeholder="Token ID" required type='number' onChange={handleChange} maxLength='4' minLength='4' />
              </ModalBody>
              <ModalFooter color='#fff'>
                <Button bg='#6c757d' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button bg='#28a745' onClick={joinSession} >Join</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex >
    </Box >
  );
}
