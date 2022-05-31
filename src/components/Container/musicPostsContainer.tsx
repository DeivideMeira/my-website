import {
    Flex,
    Image,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react';

import '@fontsource/league-spartan/'
import '@fontsource/libre-baskerville/'
import moment from 'moment';
import NextLink from 'next/link'

export default function TechPostsContainer({ post }){
    return(
      <NextLink href={`/music/${post.slug}`}>
      <Stack
        borderBottom ={"1px solid #202020"}
        w={{ sm: '100%', md: '666px' }}
        height={{ sm: '150px', md: '100%' }}
        direction={{ base: 'column', md: 'row' }}
        bg={'white'}
        pb={"40px"}>

        <Flex w={"150px"} h={"150px"}>
          <Image
            objectFit="cover"
            boxSize="100%"
            src={post.featuredimage.url} 
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          p={"10px"}
          pt={0}>
          <Heading fontSize={'2xl'} fontWeight={800} fontFamily={'League Spartan'}
          mb={"5px"}>
            {post.headline}
          </Heading>
          <Text 
          fontWeight={700} 
          fontFamily={'League Spartan'} 
          color={"#202020"} fontSize={"0.7em"} 
          textTransform={"uppercase"} >
            by: {post.author.name} / {moment(post.createdAt).format('MMM DD, YY')}
          </Text>
          <Heading
            fontWeight={"500"}
            fontSize={"13px"}
            fontFamily={'Libre Baskerville'} >
              {post.subtitle}
          </Heading>
        </Stack>
      </Stack>
      </NextLink>
  )
}
