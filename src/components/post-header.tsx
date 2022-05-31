import PostTitle from "./post-title"

type Author = {
    name: string
}

type Props = {
  title: string
  author: Author
}

const PostHeader = ({ title, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  )
}

export default PostHeader