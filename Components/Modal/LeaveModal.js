import React from 'react'
import { Button, Box } from '@chakra-ui/react'
import styles from "../../styles/Home.module.scss"
import { useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function LeaveModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box bg="transparent">
            <Button display="none" py="5px" mt={5} onClick={onOpen} className={styles.endses} w={"150px"} fontWeight="500" border={"2px solid"} color="#de4d5b" bg={"transparent"}  >
                Leave Session
            </Button>
            <Modal size='lg' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color='#fff' bg='#dc3545'>Confirmation</ModalHeader>
                    <ModalCloseButton _focus="none" color='#fff' border='none' boxShadow='none' />
                    <ModalBody textAlign='center' fontSize='18px'>
                        Do you want to leave this session.
                    </ModalBody>

                    <ModalFooter color='#fff' borderTop='1px solid #999'>
                        <Button bg='#6c757d' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Link href="/">
                            <Button bg='#dc3545' onClick={onClose}>Yes</Button>
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
