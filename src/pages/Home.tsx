// src/pages/Home.tsx
import { Link } from "react-router-dom"

type Post = {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
  pinned?: boolean
}

// 더미 데이터 (추후 md frontmatter로 대체)
const posts: Post[] = [
  {
    id: "sqs-fifo",
    title: "AWS SQS FIFO 큐의 동시성 설계",
    description: "FIFO 큐의 MessageGroupId 동작 방식을 파헤치고, 순서 보장과 처리 병렬성의 트레이드오프를 다룹니다.",
    date: "2025-08-01",
    tags: ["AWS", "SQS", "Architecture"],
    pinned: true,
  },
  {
    id: "dynamodb-modeling",
    title: "DynamoDB 파티션 키 설계 철학",
    description: "쓰기 병목, 핫 파티션 문제, GSI 설계 절충안을 중심으로 DynamoDB 모델링을 탐구합니다.",
    date: "2025-07-29",
    tags: ["AWS", "DynamoDB"],
  },
  {
    id: "spring-hateoas",
    title: "Spring에서 HATEOAS를 간단히 적용하는 방법",
    description: "ApiResponse 패턴을 유지하면서 교육 목적의 HATEOAS 적용 예시를 살펴봅니다.",
    date: "2025-03-21",
    tags: ["Spring", "REST"],
  },
]

export default function Home() {
  const pinnedPosts = posts.filter((p) => p.pinned)
  const recentPosts = posts.filter((p) => !p.pinned)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 px-6 py-8">
        {/* Sidebar */}
        <aside className="col-span-3 bg-white rounded-xl shadow p-6">
          <div className="text-center mb-6">
            <img src="/avatar.png" alt="profile" className="w-24 h-24 mx-auto rounded-full mb-3" />
            <h2 className="text-xl font-bold">Type Bi</h2>
            <p className="text-gray-500 text-sm">백엔드 아키텍처 · 클라우드 인프라</p>
          </div>
          <nav>
            <ul className="space-y-2">
              <li><Link to="/" className="block px-3 py-2 rounded hover:bg-gray-100">🏠 Home</Link></li>
              <li><Link to="/about" className="block px-3 py-2 rounded hover:bg-gray-100">🙋 About</Link></li>
              <li><Link to="/tags" className="block px-3 py-2 rounded hover:bg-gray-100">🏷 Tags</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-span-9">
          {/* Hero */}
          <header className="mb-10">
            <h1 className="text-4xl font-bold mb-2">Type Bi Tech Blog</h1>
            <p className="text-gray-600">백엔드 아키텍처 · 클라우드 인프라 · 개발 철학</p>
          </header>

          {/* Pinned 글 섹션 */}
          {pinnedPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">📌 대표 글</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {pinnedPosts.map((post) => (
                  <PostCard key={post.id} post={post} highlight />
                ))}
              </div>
            </section>
          )}

          {/* 최신 글 목록 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">📝 최신 글</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              <button className="px-4 py-2 border rounded hover:bg-gray-100">이전</button>
              <button className="px-4 py-2 border rounded hover:bg-gray-100">다음</button>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Type Bi. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  )
}

function PostCard({ post, highlight = false }: { post: Post, highlight?: boolean }) {
  return (
    <Link
      to={`/posts/${post.id}`}
      className={`block p-6 rounded-2xl shadow hover:shadow-lg transition
                 ${highlight ? "border-2 border-blue-500 bg-blue-50" : "border bg-white"}`}
    >
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-700 mb-3">{post.description}</p>
      <div className="text-sm text-gray-500 mb-2">{post.date}</div>
      <div className="flex gap-2 flex-wrap">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-gray-200 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
