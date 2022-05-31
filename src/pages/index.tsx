import { Box, Flex, StackDivider, VStack } from '@chakra-ui/react';
import PrincipalFilmCard from '../components/Card/Film/principalFilmCard';
import WidgetFilmCard from '../components/Card/Film/widgetFilmCard';
import PrincipalTechCard from '../components/Card/Music/principalTechCard';
import { getFirstFilmPosts } from '../lib/[slug]';

export default function Home({ posts }) {
  return (
    <>
    <VStack
      spacing={100}
      align='flex-end'>
    <Flex>
        <Box>
          {posts.map((post, index) => (
            <PrincipalFilmCard key={index} posts={post.node} />
          ))}
        </Box>
        <Box>
            <WidgetFilmCard categories={undefined} slug={undefined}/>
        </Box>
      </Flex>
        <Box p={"40px 40px"} bgColor={"white"} w='790px' h='600px'>
          <PrincipalTechCard/>
        </Box>
      </VStack>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = (await getFirstFilmPosts()) || [];
  return {
    props: { posts },
  };
}

