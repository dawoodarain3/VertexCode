"use client"

import Navigation from "@/components/navigation"
import TopBanner from "@/components/top-banner"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowRight, Clock, TrendingUp, Search, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { usePagePadding } from "@/hooks/use-page-padding"

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    excerpt: "Explore emerging trends and technologies shaping the future of web development. Discover how modern frameworks and tools are revolutionizing the way we build applications.",
    category: "Web Development",
    author: "Ahmed Khan",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    featured: true,
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "AI & Machine Learning for Business Automation",
    excerpt: "How AI is revolutionizing business processes and improving efficiency across industries. Learn practical applications and implementation strategies.",
    category: "AI & ML",
    author: "Fatima Ali",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    featured: false,
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Mobile App Development Best Practices",
    excerpt: "Essential tips for building scalable and user-friendly mobile applications. From design to deployment, master the art of mobile development.",
    category: "Mobile Apps",
    author: "Hassan Ahmed",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    featured: false,
    image: "/placeholder.jpg",
  },
  {
    id: 4,
    title: "Cloud Infrastructure and DevOps Strategy",
    excerpt: "Optimizing your deployment pipeline with modern cloud solutions. Streamline your development workflow and improve team productivity.",
    category: "DevOps",
    author: "Sara Khan",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    featured: false,
    image: "/placeholder.jpg",
  },
  {
    id: 5,
    title: "Next.js: Building Modern React Applications",
    excerpt: "Deep dive into Next.js features for building production-ready applications. Learn advanced patterns and optimization techniques.",
    category: "Web Development",
    author: "Ali Raza",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    featured: false,
    image: "/placeholder.jpg",
  },
  {
    id: 6,
    title: "Cybersecurity in Modern Applications",
    excerpt: "Essential security practices for protecting your digital assets. Stay ahead of threats with modern security strategies.",
    category: "Security",
    author: "Zara Khan",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    featured: false,
    image: "/placeholder.jpg",
  },
]

const categoryColors: Record<string, string> = {
  "Web Development": "from-blue-500 to-cyan-500",
  "AI & ML": "from-purple-500 to-pink-500",
  "Mobile Apps": "from-orange-500 to-red-500",
  "DevOps": "from-green-500 to-emerald-500",
  "Security": "from-red-500 to-orange-500",
}

export default function BlogsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const paddingTop = usePagePadding()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const blogCategories: Record<string, string> = {
    "Web Development": t.webDevelopmentCategory,
    "AI & ML": t.aiMlCategory,
    "Mobile Apps": t.mobileAppsCategory,
    "DevOps": t.devopsCategory,
    "Security": t.securityCategory,
  }

  const categories = ["All", ...Object.keys(blogCategories)]

  const featuredBlog = blogs.find((blog) => blog.featured) || blogs[0]
  const regularBlogs = blogs.filter((blog) => !blog.featured)

  const filteredBlogs = regularBlogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="bg-white">
      <Navigation />
      <TopBanner />
      <div className="pb-20 px-4 transition-all duration-300" style={{ paddingTop: `${paddingTop}px` }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t.ourBlog}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.blogDesc}
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder={t.searchArticles}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-xl focus:outline-none focus:border-primary transition-all text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30"
                      : "bg-white border-2 border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  {category === "All" ? t.allPosts : blogCategories[category] || category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Blog */}
          <div className="mb-16">
            <Link href={`/blogs/${featuredBlog.id}`} className="block group">
              <div className="bg-gradient-to-br from-card to-card/80 border-2 border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className={`relative h-64 md:h-auto bg-gradient-to-br ${categoryColors[featuredBlog.category] || "from-primary to-accent"} overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform duration-500">
                        <TrendingUp className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
                        {t.featured}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-4 flex-wrap">
                      <span
                        className={`px-4 py-2 bg-gradient-to-r ${categoryColors[featuredBlog.category] || "from-primary to-accent"} text-white rounded-full text-sm font-semibold`}
                      >
                        {blogCategories[featuredBlog.category] || featuredBlog.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock size={14} />
                        <span>{featuredBlog.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors leading-tight">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed line-clamp-3">
                      {featuredBlog.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <User size={18} className="text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{featuredBlog.author}</p>
                            <p className="text-xs text-muted-foreground">{featuredBlog.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>{t.readArticle}</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              {selectedCategory === "All" ? t.allArticles : blogCategories[selectedCategory] || selectedCategory}
            </h2>
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">{t.noArticlesFound}</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, index) => (
                  <article
                    key={blog.id}
                    className="group bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <Link href={`/blogs/${blog.id}`}>
                      <div className={`relative h-48 bg-gradient-to-br ${categoryColors[blog.category] || "from-primary to-accent"} overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent group-hover:from-black/20 transition-all" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                            <BookOpen className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-semibold border border-white/30`}
                          >
                            {blogCategories[blog.category] || blog.category}
                          </span>
                        </div>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{blog.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      <Link href={`/blogs/${blog.id}`}>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">{blog.excerpt}</p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <User size={14} className="text-white" />
                          </div>
                          <span className="text-sm font-medium">{blog.author}</span>
                        </div>
                        <Link
                          href={`/blogs/${blog.id}`}
                          className="inline-flex items-center gap-2 text-primary font-semibold group/link hover:gap-3 transition-all"
                        >
                          {t.readMore}
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
