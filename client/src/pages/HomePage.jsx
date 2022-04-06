import { usePost } from '../hooks/usePost'
import NoPosts from '../components/NoPosts';
import Posts from '../components/Posts';

const HomePage = () => {
  const { getPosts } = usePost();
  const posts = [] = getPosts()

  return (
    <>
      {posts.length === 0
        ?
        <NoPosts />
        :
        <Posts posts={posts} />
      }
    </>
  )
}

export default HomePage
