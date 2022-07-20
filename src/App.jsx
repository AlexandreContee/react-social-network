import { useState } from "react"
import React from "react"
import "./styles/App.css"
import "./styles/PostForm.css"
import "./styles/Feed.css"
import userIcon from "./images/user.svg"
import paperPlaneIcon from "./images/paper-plane.svg"
import clockIcon from "./images/clock.svg"
import emptyFolderIcon from "./images/empty-folder.svg"

export default function App() {
  const [story, setStory] = useState("")
  const [userName, setUserName] = useState("")
  const [posts, setPosts] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    setPosts(
      [
        ...posts,
        {
          id: Math.random(),
          content: story,
          userName,
          publishedAt: new Date(),
        }
      ]
    )
    setStory("")
    setUserName("")
  }

  return (
    <div className="wrapper">
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

      <main>
        {posts.length === 0 && (
          <div className="feed-status">
            <img src={emptyFolderIcon} alt="Empty folder" />

            <h1>
              Nothing to show
            </h1>

            <h2>
              It looks like your friends have not posted anything yet... Start writting a new Story!
            </h2>
          </div>
        )}

        {posts.length > 0 && (
          <>
            <header>
              <h1>
                Your feed
              </h1>

              <h2>
                Track what your friends are thinking in real time
              </h2>
            </header>

            <section className="feed">
              {posts.map((post) => (
                <article key={post.id}>
                  <p>{post.content}</p>

                  <footer>
                    <div className="user-details">
                      <img src={userIcon} alt="User" />

                      <strong>
                        {post.userName}
                      </strong>
                    </div>
                    <div className="time">
                      <img src={clockIcon} alt="Clock" />

                      <span>
                        Published in {post.publishedAt.toLocaleDateString("en-us")}
                      </span>
                    </div>
                  </footer>
                </article>
              ))}
            </section>
          </>
        )}

      </main>
    </div>
  )
}
