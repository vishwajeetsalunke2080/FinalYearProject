'use client'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export default function ErrorPage(props: any) {
    console.log(props)
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Oops! Something went wrong...
      </Heading>
      <Text color={'gray.500'}>
        Looks like the service is down due to technical issue. Please try again later after some time.
      </Text>
    </Box>
  )
}