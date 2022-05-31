import { request, gql, GraphQLClient } from 'graphql-request';

const endpoint = "https://api-sa-east-1.graphcms.com/v2/cl1o0tn0u2lli01xs4z6xewif/master";
const client = new GraphQLClient(endpoint as string);  

export const getFirstFilmPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection (
        orderBy: updatedAt_DESC, 
        first: 1, 
        where: {categories_some: {name_in: ["Film"]}}
        ) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            headline
            subtitle
            featuredimage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
const data = await client.request(query);
return data.postsConnection.edges;
};


export const getTechPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        where: {categories_some: {name_in: ["Music"]}}
        orderBy: createdAt_DESC
        first: 4
      ) {
        title
        headline
        subtitle
        author {
              name
            }
        featuredimage {
          url
        }
        createdAt
        slug
      }
    }
  `;

const data = await client.request(query);
return data.posts;
};


export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

const data = await client.request(query);

return {
  props: { posts: data.categories },
};
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        headline
        subtitle
        featuredimage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content
        categories {
          name
          slug
        }
      }
    }
  `;

  const data = await client.request(query, {slug});

  return {
    props: { posts: data.post },
  };
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const data = await client.request(query, { slug, categories });

  return data.posts;
};


export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const data = await client.request(query,{ slug, createdAt });

  return {
    props: { next: data.next[0], previous: data.previous[0] },
  };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            headline
            subtitle
            featuredimage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const data = await client.request(query, { slug });

  return {
    props: { posts: data.posts },
  };
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredimage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

const data = await client.request(query);

return {
  props: { posts: data.posts },
};
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        where: {categories_some: {name_in: ["Film"]}}
        orderBy: createdAt_DESC
        first: 6
        skip: 1
      ) {
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const data = await client.request(query);

  return data.posts;
};


export const getPostsSlugs = async () => {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;
  const data = await client.request(query);

  return data.posts;
};