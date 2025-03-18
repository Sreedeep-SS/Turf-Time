"use client"
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode'
import { useTurfStore } from '@/store/Product'
import { Box, Heading, Input, VStack, Container, Button } from '@chakra-ui/react'
import { Toaster, toaster } from "@/components/ui/toaster"
import React from 'react'
// import { Button, Container } from 'react-bootstrap'

const CreatePage = () => {
  const [newTurf, setNewTurf] = React.useState({
    name: '',
    price: '',
    image: '',
    location: '',
    owner_contact: ''
  })


  const { createTurf } = useTurfStore()

  const handleCancel = () => {
    console.log("Clicked")
    toaster.create({
      title: "What does Cancel do?",
      description: "Cancelling doesn't do anything :P",
      type: "info",
      isClosable: true,
    })
    console.log("Toast created")
  }


  const handleRegisterTurf = async () => {
    const { success, message } = await createTurf(newTurf)
    console.log("Success", success)
    console.log("Message", message)

    if (success === true) {
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

    setNewTurf({
      name: '',
      price: '',
      image: '',
      location: '',
      owner_contact: ''
    })
  }


  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}
      >
        <Heading as={"h1"} size={"4xl"} textAlign={"center"} mb={8} mt={10} colorScheme={"gray.300"}>

          Register Your Turf

        </Heading>
        <Box
          w={'120vH'}
          bg={useColorModeValue("white", "gray.800")}
          p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4} minH="50vh" justifyContent={"space-evenly"}>
            <Input
              variant={'flushed'}
              placeholder='Turf Name'
              name='name'
              value={newTurf.name}
              onChange={(e) => setNewTurf({ ...newTurf, name: e.target.value })}
            />
            <Input
              variant={'flushed'}
              placeholder='Price'
              name='price'
              type='number'
              value={newTurf.price}
              onChange={(e) => setNewTurf({ ...newTurf, price: e.target.value })}
            />
            <Input
              variant={'flushed'}
              placeholder='Image URL'
              name='image'
              value={newTurf.image}
              onChange={(e) => setNewTurf({ ...newTurf, image: e.target.value })}
            />
            <Input
              variant={'flushed'}
              placeholder='Location'
              name='location'
              value={newTurf.location}
              onChange={(e) => setNewTurf({ ...newTurf, location: e.target.value })}
            />
            <Input
              variant={'flushed'}
              placeholder='Owner Contact'
              name='owner_contact'
              type='number'
              value={newTurf.owner_contact}
              onChange={(e) => setNewTurf({ ...newTurf, owner_contact: e.target.value })}
            />

            <Button colorScheme={"purple"} onClick={handleRegisterTurf} >
              Register Turf
            </Button>
            <Button colorScheme={"red"} onClick={handleCancel} >
              Cancel
            </Button>
            <Toaster />
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage