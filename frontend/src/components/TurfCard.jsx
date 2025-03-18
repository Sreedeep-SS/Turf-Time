
import { Box, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useColorMode } from './ui/color-mode';


const TurfCard = ({turf}) => {
    const textColor = useColorMode("gray.600", "gray.200")
    const bg = useColorMode("white", "gray.800")
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
                h={48}
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
                    <IconButton colorScheme={'blue'}><AiOutlineEdit /></IconButton>
                    <IconButton colorScheme={'red'}><AiOutlineDelete /></IconButton>
                </HStack>
            </Box>
        </Box>
    )
}

export default TurfCard