
import { Box, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useColorMode } from './ui/color-mode';
import { useTurfStore } from '@/store/Product.js';
import { Toaster, toaster } from "@/components/ui/toaster"
import { Modal } from 'react-bootstrap';


const TurfCard = ({ turf }) => {
    const textColor = useColorMode("gray.600", "gray.200")
    const bg = useColorMode("white", "gray.800")

    const {deleteTurfs} = useTurfStore()

    const handleDeleteTurf = async (pid) => {
        const {success, message} = await deleteTurfs(pid)
        if (success !== false) {
              toaster.create({
                description: "Turf registered successfully",
                type: "info",
              })
            } else {
              toaster.create({
                title: "Error",
                description: message,
                type: "error",
                isClosable: true,
              })
            }
    }
    

    const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		onClose();
		if (success !== false) {
            toaster.create({
              description: "Turf registered successfully",
              type: "info",
            })
          } else {
            toaster.create({
              title: "Error",
              description: message,
              type: "error",
              isClosable: true,
            })
          }
	}

    return (
        <Box
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}

        >
            <Image
                src={turf.image}
                alt={turf.name}
                height="200px"
                w="full"
                objectFit="cover" />
            <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                    {turf.name}
                </Heading>

                <Text fontWeight="bold" fontSize="xl" mb={4} color={textColor}>
                    Rs. {turf.price}
                </Text>

                <HStack spacing={2}>
                    {/* TODO: Find alternative for Modal in Chakra 3.13 and implement update card */}
                    <IconButton colorScheme={'blue'}><AiOutlineEdit /></IconButton>
                    <IconButton onClick={() => handleDeleteTurf(turf._id)} colorScheme={'red'}><AiOutlineDelete /></IconButton>
                    
                </HStack>
            </Box>


        <Toaster/>

        </Box>
    )
}

export default TurfCard