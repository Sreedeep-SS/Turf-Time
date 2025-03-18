import React from 'react'
import { Container, VStack, Text } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}> 
        <Text
            fontSize={{ base: '20px', md: '28px', lg: '40px' }} 
            fontWeight={"bold"}
            bgGradient="to-r"
            gradientFrom="red.400"
            gradientTo="blue.400"
            bgClip={"text"}
            textAlign={"center"}
        >
          Welcome to Turf Time
        </Text>
      </VStack>

    </Container>
  )
}

export default HomePage