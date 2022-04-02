import { usePost } from '../hooks/usePost'

const HomePage = () => {
  const { getPosts } = usePost()
  const { posts = [] } = getPosts()
  console.log(posts)
  return (
    <div>
      HomePage
      <hr />
      <ul>
        {posts.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
