import { Flex, Text, Container, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"
import { IoMoon , IoSunnyOutline } from "react-icons/io5";
import { LuSun, LuSunMoon } from "react-icons/lu";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Container maxW="100%" px={4} bg={useColorModeValue("blue.900", "gray.900")}>
            <Flex
                h={20}
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={{
                    base: 'row',
                    md: 'row'
                }}
            >
                
                <Text
                    fontSize={{ base: '24px', md: '32px', lg: '40px' }} 
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign={"right"}
                    bgGradient="to-r"
                    gradientFrom="red.400"
                    gradientTo="blue.400"
                    bgClip={"text"}
                    ml={8}
                >
                    <Link to={"/"}>Turf Time</Link>
                </Text>
                
                <HStack spacing={2} alignItems={'flex-center'} mr={8}>
                    <Link to={"/"}><Button  colorScheme={"purple"}>Home</Button></Link>
                    <Link to={"/create"}><Button  colorScheme={"purple"}>Create</Button></Link>
                    <Button  onClick={toggleColorMode}>{colorMode === "light" ? <IoMoon/> :<IoSunnyOutline/>}</Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar