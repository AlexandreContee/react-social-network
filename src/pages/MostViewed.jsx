import Feed from "../components/Feed";

export default function MostViewed() {

  const posts = [
    {
      id: Math.random(),
      content: "Content",
      userName: "Mathew",
      publishedAt: new Date(),
    },
  ]

  return (
    <main className="most-viewed">
      <Feed
        posts={posts}
        title="Most Viewed"
        subtitle="Follow the most viewed topics at the moment and be aware of news"
      />
    </main>
  )
}