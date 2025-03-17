import { Flex, Text, Container, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Container maxW="100%" px={4}>
            <Flex
                h={20}
                alignItems= {'center'}
                justifyContent={'space-between'}
                flexDir={{
                    base: 'row',
                    md: 'row'
                }}
            >
                <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign={"center"} // Corrected textAlign to "left"
                    // color={"white"} // Ensure color is set correctly
                    bgGradient="to-r"
                    gradientFrom="red.400"
                    gradientTo="blue.400"
                    bgClip={"text"}
                >
                    <Link to={"/"}>Turf Time</Link>
                </Text>
                <HStack spacing={2} alignItems={'flex-center'}>
                    <Link to={"/"}><Button colorScheme={"purple"}>Home</Button></Link>
                    <Link to={"/create"}><Button colorScheme={"purple"}>Create</Button></Link>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar