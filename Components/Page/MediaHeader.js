import React from "react";
import style from "../../styles/Home.module.scss";
import { Box, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import EndModal from "../Modal/EndModal";
import LeaveModal from "../Modal/LeaveModal";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { CopyIcon, QuestionOutlineIcon } from "@chakra-ui/icons";

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast()
    var token = '1234'
    var Url = `http://send.ilmux.com/${token}`;
    return (
        <Box as="header" bg={"#fff"} p="15px" className={style.Header}>
            <Flex>
                <Box className={style.share} w="70%">
                    <Button bg="#2b3954" onClick={onOpen} border="none" color="#fff" px="10px" py="5px"><i className="fa-solid fa-share-nodes"></i> Share this session</Button>
                    <Modal size='sm' isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent background="rgb(242, 242, 242)" border="5px">
                            <ModalHeader p="10px" className={style.share_modal_header} borderTopRightRadius="5px" borderTopLeftRadius="5px" color='#fff' bg='#dc3545'>Session Sharing Options</ModalHeader>
                            <ModalCloseButton color='#fff' border='none' _focus={"none"} boxShadow='none' className={style.close} />
                            <ModalBody fontSize="18px" textAlign="center" px="30px">
                                <Box className={style.token_session} >
                                    <Box>Share by Token No -<Box as="b">1234</Box>
                                        <IconButton
                                            w={"30px"}
                                            h="30px"
                                            minW={"unset"}
                                            fontSize="12px"
                                            icon={<CopyIcon />}
                                            className={style.copybtn}
                                            colorScheme='gray'
                                            borderRadius='50%'
                                            cursor="pointer"
                                            _focus="none"
                                            onClick={() =>
                                                toast({
                                                    position: 'bottom',
                                                    render: () => (
                                                        <Box color='white' p={3} bg='#2b3954' borderRadius='lg'>
                                                            <b>{token}</b>  Has been copied to Clip Board
                                                        </Box>
                                                    ),
                                                }) && (navigator.clipboard.writeText(token))
                                            } />
                                    </Box>
                                </Box>
                                <Box className={style.link_session}>
                                    <Box>
                                        Share By Link <QuestionOutlineIcon />
                                    </Box>
                                    <Box as="span" bg="#2b3954" color="#fff" cursor="pointer"
                                        onClick={() =>
                                            toast({
                                                position: 'bottom',
                                                render: () => (
                                                    <Box color='white' p={3} bg='#2b3954' borderRadius='lg'>
                                                        <b>{Url}</b>  Has been copied to Clip Board
                                                    </Box>
                                                ),
                                            }) && (navigator.clipboard.writeText(Url))
                                        }>
                                        http://send.ilmux.com/?4449
                                    </Box>
                                    <IconButton
                                        w={"30px"}
                                        h="30px"
                                        minW={"unset"}
                                        fontSize="12px"
                                        icon={<CopyIcon />}
                                        className={style.copybtn}
                                        colorScheme='gray'
                                        borderRadius='50%'
                                        cursor="pointer"
                                        _focus="none"
                                        onClick={() =>
                                            toast({
                                                position: 'bottom',
                                                render: () => (
                                                    <Box color='white' p={3} bg='#2b3954' borderRadius='lg'>
                                                        <b>{Url}</b>  Has been copied to Clip Board
                                                    </Box>
                                                ),
                                            }) && (navigator.clipboard.writeText(Url))
                                        } />
                                </Box>
                            </ModalBody>
                            <ModalFooter py="10px" px="30px" color='#fff' display="block" textAlign="center">
                                <Button bg='#2b3954' w="75%" onClick={onClose} className={style.done}>Done</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
                <Box className={style.end_leave} w="30%" textAlign="right">
                    <EndModal />
                    <LeaveModal />
                </Box>
            </Flex >
        </Box >

    );
}
