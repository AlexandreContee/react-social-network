import "../styles/PostForm.css"

import userIcon from "../images/user.svg"
import paperPlaneIcon from "../images/paper-plane.svg"
import { useState } from "react"

export default function PostForm({onSubmit}) {
  const [story, setStory] = useState("")
  const [userName, setUserName] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    
    onSubmit({ story, userName })

    setStory("")
    setUserName("")
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
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

        <button type="submit">
          <img src={paperPlaneIcon} alt="Paper plane" />

          Publish
        </button>
      </div>
    </form>
  )
}