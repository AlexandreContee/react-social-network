import errors from "../config/errors"

export async function getPostsList() {

  const response = await fetch('http://localhost:3001/posts')

  if (!response.ok) {
    return false
  }

  const body = await response.json()

  return body.map((post) => (
    {
      ...post,
      publishedAt: new Date(post.publishedAt),
    }
  ))
}

export async function getMostViewedPostsList() {

  const response = await fetch('http://localhost:3001/posts/most-viewed')

  if (!response.ok) {
    return false
  }

  const body = await response.json()

  return body.map((post) => (
    {
      ...post,
      publishedAt: new Date(post.publishedAt),
    }
  ))
}

export async function createPost({ story, userName }) {

  const response = await fetch('http://localhost:3001/posts', {
    method: 'POST',
    body: JSON.stringify({
      content: story,
      userName,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok) {
    const body = await response.json()
    return errors[body.code] || "Error on creating your post"
  }

  return true
}
