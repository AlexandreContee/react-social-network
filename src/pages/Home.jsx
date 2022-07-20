import { useState } from "react"
import Feed from "../components/Feed"
import PostForm from "../components/Post-form"

export default function Home() {
  const [posts, setPosts] = useState([])

  function handleSubmit({ story, userName }) {
    setPosts(
      [
        ...posts,
        {
          id: Math.random(),
          content: story,
          userName: userName,
          publishedAt: new Date(),
        }
      ]
    )
  }

  return (
    <>
      <PostForm onSubmit={handleSubmit} />
      <main>
        <Feed
          posts={posts}
          title="My Feed"
          subtitle="Track what your friends are thinking in real time"
        />
      </main>
    </>
  )
}