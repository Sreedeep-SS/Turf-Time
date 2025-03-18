import React, { useEffect } from 'react'
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { color } from 'framer-motion'
import { useTurfStore } from '@/store/Product.js'
import TurfCard from '@/components/TurfCard'


const HomePage = () => {

  const {fetchTurfs, turfs} = useTurfStore()


  useEffect(() => {
    fetchTurfs()
  }, [fetchTurfs])
  console.log("Fetching turfs", turfs)


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

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={"full"}
        >
          {turfs.map((turf) => {
            console.log("Turf data:", turf)
            return <TurfCard key={turf._id} turf={turf} />
          })}
        </SimpleGrid>

        <Text fontSize='16px' textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
          No more scheduling conflicts. No more double bookings. No more headaches. <br /> <br />
          Unfortunately no turfs are available at the moment. Please check back later.
          <Link to={"/create"}>
            <Text color='blue.400' _hover={{ color: 'blue.600' }} >
              Orrrrr register your own turf in seconds! ;)
            </Text>
          </Link>

        </Text>

      </VStack>

    </Container>
  )
}

export default HomePage