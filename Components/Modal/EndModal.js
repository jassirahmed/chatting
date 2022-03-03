import React from 'react'
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
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import styles from "../../styles/Home.module.scss"



export default function EndModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <button bg="transparent">
            <Button py="5px" px="20px" onClick={onOpen} py="6px" px="12px" className={styles.endses} w={"150px"} fontWeight="500" border={"2px solid"} color="#de4d5b" bg={"transparent"}  >
                End Session
            </Button>

            <Modal size='lg' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color='#fff' bg='#dc3545'>Confirmation</ModalHeader>
                    <ModalCloseButton color='#fff' border='none' boxShadow='none' />
                    <ModalBody textAlign='center' fontSize='18px'>
                        Ending Session will <b>delete all your data present</b> in this session &amp; <b>can't be restore</b>. Do you wnat to end this <b>session</b>
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
        </button>
    )
}
