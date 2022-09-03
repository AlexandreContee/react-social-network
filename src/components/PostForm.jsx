import { useState } from "react"

import "../styles/PostForm.css"

import userIcon from "../images/user.svg"
import paperPlaneIcon from "../images/paper-plane.svg"
import loader from "../images/loader-white.svg"

import { createPost } from "../services/PostService"

export default function PostForm({ onSubmit }) {

  const [story, setStory] = useState("")
  const [userName, setUserName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  async function handleSubmit(event) {
    try {
      event.preventDefault()
      setIsLoading(true)
      setErrorMessage(null)

      const response = await createPost({ story, userName })

      if (response === true) {
        onSubmit({ story, userName })

        setStory("")
        setUserName("")
        
        return;
      }

      setErrorMessage(response)

    } catch {
      setErrorMessage("Error on creating your post")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="error-container">
          <strong>{errorMessage}</strong>
        </div>
      )}

      <input
        value={story}
        type="text"
        placeholder="Write your story..."
        onChange={(event) => setStory(event.target.value)}
      />

      <div>
        <img src={userIcon} alt="user" />

        <input
          value={userName}
          type="text"
          placeholder="Write your name"
          onChange={(event) => setUserName(event.target.value)}
        />

        <button type="submit" disabled={isLoading}>
          {!isLoading && <img src={paperPlaneIcon} alt="Paper plane" />}
          {isLoading && <img src={loader} alt="Loading" className="spin" />}
          Publish
        </button>
      </div>
    </form>
  )
}
