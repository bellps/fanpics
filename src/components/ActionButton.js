import React from 'react'
import { Button, Flex, Image } from '@chakra-ui/react';

export const ActionButton = ({text, icon}) => {
  return (
    <Flex flexDirection='column' justifyContent='center' padding='2' borderBottomColor='#00000'>
      <Button bg='#F6F6F6' display='flex' justifyContent='space-between'>
        { text } <Image src={ icon }></Image>
      </Button>
    </Flex>
  )
}