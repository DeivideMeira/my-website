import { Box, Flex, Text, Image, Stack, HStack, VStack, Center } from '@chakra-ui/react';
import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getRecentPosts, getSimilarPosts } from '../../../lib/[slug]';

<link href="//db.onlinewebfonts.com/c/65b0821c82236b896dae856839f9ee89?family=09997e60e40c48da+-+subset+of+Irma" rel="stylesheet" type="text/css"/>
  
export default function WidgetFilmCard ({ categories, slug }) {
    const [relatedPosts, setRelatedPosts] = useState<any[]>([]);   
    useEffect(() => {
        if(slug){
            getSimilarPosts(categories, slug).then((data) => setRelatedPosts(data))
        }
        else{
            getRecentPosts().then((data) => setRelatedPosts(data))
        }
    }, [slug])

    return (
        <Box w='320px' h='600px' marginLeft={"20px"}>
          <Box mb={"10px"} textAlign={"center"}>
            <Text as={"span"} 
            letterSpacing='1.3' 
            fontWeight={600}  
            fontFamily={'League Spartan'} 
            color='white' 
            bg='purple.700' 
            p={"5px 13px"}
            fontSize={"18px"}>{slug ? 'Related Posts' : 'FILM'}</Text>
          </Box>
        {relatedPosts.map((post, index) => (
          <div key={index}>
            <HStack
            w={{ sm: '100%', md: '320px' }}
            pb={"10px"}
            height={{ sm: '600px', md: '100%' }}
            direction={{ base: 'column', md: 'row' }}>
              <Flex 
              w={"80px"} 
              h={"80px"}>
              <Image
              boxSize="100%"
              src={post.featuredimage.url}
              objectFit={"cover"}/>
              </Flex>
              <Box flex={1} pl={"10px"} ml={"10px"} fontWeight={700}                     fontFamily={'League Spartan'} >
                <Link href={`/film/${post.slug}`} key={index}>
                  <Text 
                  fontSize={"18px"} >
                    {post.title}
                  </Text>
                </Link>
                <Link href={`/film/${post.slug}`} key={index}>
                  <Text 
                    color={"#202020"} 
                    fontSize={"0.7em"} 
                    textTransform={"uppercase"}>
                      {moment(post.createdAt).format('MMM DD, YY')}
                  </Text>
                </Link>
              </Box>
            </HStack>
          </div>
        ))}
      </Box>
    );
}
  
  