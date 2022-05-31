import {
  Heading,
  Box,
  Image,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Link from 'next/link';

import '@fontsource/league-spartan/800.css'

import '@fontsource/libre-baskerville/400.css'

export default function PrincipalFilmCard ({ posts }) {
  return (
    <Wrap 
    spacing='15px' 
    w={"860px"}
    >
      <Link href={`/film/${posts.slug}`}>      
        <Box

            _hover={{
            opacity: "0.9",
            transition: "color .25s,background .25s,opacity .s",
           }}
        >
        <WrapItem
        w={"100%"} 
        h={'600px'}
        pos={"relative"}
        fontSize={'100px'}
        cursor={"pointer"}
        >
          <Image 
            src={posts.featuredimage.url}
            alt={posts.title}
            w={"100%"} 
            h={"100%"} 
            minW={"560px"}
            objectFit={"cover"}
          />
          <Heading 
          pos={'absolute'} 
          fontSize='3.5rem'
          padding ={"100px 3.846153846% 20px"}
          bottom={"10%"}
          fontFamily={'League Spartan'}
          textTransform={'uppercase'}
          fontWeight={"extrabold"}
          color={"#FFF"}
          >
            {posts.headline}
          </Heading>
          <Heading 
          pos={'absolute'} 
          fontSize={'1rem' }
          padding ={"100px 3.846153846% 20px"}
          bottom={"0%"}
          lineHeight={"30px"}
          letterSpacing={"0.5px"}
          fontWeight={400}
          fontFamily={"Libre Baskerville"}
          color={"#FFF"}
          >
            {posts.subtitle}
          </Heading>
        </WrapItem>
        </Box>
        </Link>  
      </Wrap>
  );
}

