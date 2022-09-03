import { useEffect } from "react"
import { useState } from "react"

import Feed from "../components/Feed"
import PostForm from "../components/PostForm"

import { getPostsList } from "../services/PostService"

export default function Home() {

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    async function loadPosts() {
      try {
        const postsList = await getPostsList()

        if (!postsList) {
          setHasError(true)
          return;
        }

        setPosts(postsList)
      } catch {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()
  }, [])

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
          isLoading={isLoading}
          hasError={hasError}
          posts={posts}
          title="My Feed"
          subtitle="Track what your friends are thinking in real time"
        />
      </main>
    </>
  )
}