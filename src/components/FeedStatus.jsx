export default function FeedStatus({image, title, subtitle}) {
  return (
    <div className="feed-status">
      <img src={image} alt="Empty folder" />

      <h1>
        {title}
      </h1>

      <h2>
        {subtitle}
      </h2>
    </div>
  )
}
