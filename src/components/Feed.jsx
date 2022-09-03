import emptyFolderIcon from "../images/empty-folder.svg"
import userIcon from "../images/user.svg"
import clockIcon from "../images/clock.svg"
import loader from '../images/loader-primary.svg'
import cloudErrorIcon from "../images/cloud-error.svg"

import "../styles/Feed.css"
import FeedStatus from "./FeedStatus"

export default function Feed({ isLoading, hasError, posts, title, subtitle }) {

  if (isLoading) {
    return <img src={loader} alt='loading' className="spin" />
  }

  if (hasError) {
    return (
      <FeedStatus 
        image={cloudErrorIcon}
        title="Something went wrong"
      />
    )
  }

  return (
    <>
      {posts.length === 0 ? (
        <FeedStatus
          image={emptyFolderIcon}
          title="Nothing to show"
          subtitle="It looks like you and your friends have not posted anything yet... Start writting a new Story!"
        />
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
