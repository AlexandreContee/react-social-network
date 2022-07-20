import emptyFolderIcon from "../images/empty-folder.svg"
import userIcon from "../images/user.svg"
import clockIcon from "../images/clock.svg"

import "../styles/Feed.css"

export default function Feed({ posts, title, subtitle }) {
  return (
    <>
      {posts.length === 0 ? (
        <div className="feed-status">
          <img src={emptyFolderIcon} alt="Empty folder" />

          <h1>
            Nothing to show
          </h1>

          <h2>
            It looks like you and your friends have not posted anything yet... Start writting a new Story!
          </h2>
        </div>
      ) : (
        <>
          <header>
            <h1>
              {title}
            </h1>

            <h2>
              {subtitle}
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
    </>
  )
}