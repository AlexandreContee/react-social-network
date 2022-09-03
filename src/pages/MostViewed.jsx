import { useEffect, useState } from "react";

import Feed from "../components/Feed";

import { getMostViewedPostsList } from "../services/PostService";

export default function MostViewed() {

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    async function loadPosts() {
      try {
        const postsList = await getMostViewedPostsList()

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

  return (
    <main className="most-viewed">
      <Feed
        hasError={hasError}
        isLoading={isLoading}
        posts={posts}
        title="Most Viewed"
        subtitle="Follow the most viewed topics at the moment and be aware of news"
      />
    </main>
  )
}
