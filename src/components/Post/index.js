import React from 'react'
import { Box, Flex,  } from '@chakra-ui/react';
import { Title, Image } from './style';

export const Post = () => {
  return (
    <Flex bg='#FFF' borderRadius='16' height='80' overflow='hidden'>
      <Box width='25%' padding='4'>
        <Title>Titulo:</Title>
        <p>Lorerer</p>
        <Title>Autor:</Title>
        <p>Fulaninho</p>
      </Box>
      <Image url='https://picsum.photos/id/237/400/300'/>
    </Flex>
  )
}