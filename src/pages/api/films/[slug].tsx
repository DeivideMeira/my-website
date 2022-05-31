import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { getFirstFilmPosts, getPostDetails, getPostsSlugs } from '../../../lib/[slug]'
import PostHeader from '../../../components/post-header'
import PostBody from '../../../components/post-body'
import Header from '../../../components/Header'
import { Loader } from 'graphql-config'


const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
  }
  
  return (
      <Container>
        <Header />
        {router.isFallback ? (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title}
                </title>
              </Head>
              <PostHeader
                title={post.title}
                author={post.author}
              />
              <PostBody post={post} />
            </article>
          </>
        )}
      </Container>  
    )
}

export default Post;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFirstFilmPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}