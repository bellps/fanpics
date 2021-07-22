import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import Logo from '../../assets/logo.svg'
import AddImage from '../../assets/postImg.svg'
import AddPost from '../../assets/addPostIcon.svg'
import { ActionButton } from '../../components/ActionButton';
import { Post } from '../../components/Post';

export const Home = () => {
  return (
    <Flex
      bg='#E5E5E5'
      flexDirection='column'
      alignItems='center'
    >
      <Flex
        minHeight='100vh'
        maxWidth='1024px'
        width='100%'
        flexDirection='column'
      >
        <Flex height='80px' borderBottomRadius='16' bg='#FFF' justifyContent='space-between' alignItems='center'>
          <Image src={Logo} alt='Fanpics logo' marginX='8'/>
          <Image src={AddImage} alt='Fanpics logo' marginX='8'/>
        </Flex>
        <Flex marginTop='4' justifyContent='space-between' alignItems='flex-start'>
          <Box bg='#FFF' width='100%' maxWidth='260px' borderRadius='16'>
            <Text padding='2' align='center' borderBottom='1px' borderBottomColor='#E5E5E5'>Ações</Text>
            <ActionButton text='Novo post' icon={AddPost} />
          </Box>
          <Flex flexDirection='column' maxWidth='740px' width='100%'>
            <Post/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}