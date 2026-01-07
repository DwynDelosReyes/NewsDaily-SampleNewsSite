import { useNavigate } from "react-router-dom";
import Layout from "../app/layout";
import NewsArticleImage from "@/asset/newsarticle.png";
import adImage from "@/asset/adImage3.jpg";

// Right column items (news)
const rightColumnItems = [
  {
    title: "Markets React to Unexpected Central Bank Signals",
    publishedAt: "Jan 1, 2026",
    readTime: "3 min read",
  },
  {
    title: "New AI Regulation Sparks Debate Across Tech Industry",
    publishedAt: "Jan 1, 2026",
    readTime: "4 min read",
  },
  {
    title: "Global Energy Prices Show Early Signs of Stabilizing",
    publishedAt: "Jan 1, 2026",
    readTime: "2 min read",
  },
  {
    title: "Urban Mobility Trends Shift as Cities Rethink Transport",
    publishedAt: "Jan 1, 2026",
    readTime: "3 min read",
  },
  {
    title: "Researchers Announce Breakthrough in Battery Longevity",
    publishedAt: "Jan 1, 2026",
    readTime: "5 min read",
  },
  {
    title: "Consumer Spending Patterns Change Entering New Year",
    publishedAt: "Jan 1, 2026",
    readTime: "2 min read",
  },
  {
    title: "Global Markets React to Surprise Policy Shift",
    publishedAt: "Jan 1, 2026",
    readTime: "4 min read",
  },
  {
    title: "Tech Companies to Join the Movement",
    publishedAt: "Jan 1, 2026",
    readTime: "4 min read",
  },
  {
    title: "Global Energy Prices Show Early Signs of Stabilizing",
    publishedAt: "Jan 1, 2026",
    readTime: "2 min read",
  },
  {
    title: "New AI Regulation Sparks Debate Across Tech Industry",
    publishedAt: "Jan 1, 2026",
    readTime: "4 min read",
  },
];

// Sample comments
const comments = [
  {
    id: 1,
    user: "Alice",
    time: "2 hours ago",
    text: "This is such a cool demonstration! Love the layout and clarity.",
    replies: [
      {
        id: 11,
        user: "Bob",
        time: "1 hour ago",
        text: "Totally agree with Alice! The sidebar really helps navigation.",
      },
      {
        id: 12,
        user: "Charlie",
        time: "30 mins ago",
        text: "I also appreciate the modern look. Very clean design.",
      },
    ],
  },
  {
    id: 2,
    user: "Diana",
    time: "3 hours ago",
    text: "The explanation of the project is very helpful for understanding your frontend approach.",
    replies: [],
  },
  {
    id: 3,
    user: "Evan",
    time: "5 hours ago",
    text: "I like how the ad spots are integrated without feeling cluttered.",
    replies: [
      {
        id: 31,
        user: "Fiona",
        time: "4 hours ago",
        text: "Yes! It’s nice that the ads don’t interfere with readability.",
      },
    ],
  },
  {
    id: 4,
    user: "George",
    time: "6 hours ago",
    text: "Amazing work showcasing React, TypeScript, and Shadcn components!",
    replies: [],
  },
];

export default function NewsArticlePage() {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Section 1: Hero Image */}
      <section className="w-full my-6 flex justify-center">
        <div className="w-full max-w-3xl aspect-video overflow-hidden rounded-lg">
          <img
            src={NewsArticleImage}
            alt="Article Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 2: Two-column layout */}
      <section className="py-12 px-6 flex flex-col lg:flex-row gap-8">
        {/* Left Column - Article */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight ml-15 mr-5 mb-6 text-left">
            Reimagined News Website: Sample Article
          </h1>
          <h2 className="text-xl font-medium text-gray-600 ml-15 mr-5 mb-8 text-left">
            A project visualization demonstrating a modern, organized news site layout with interactive components, responsive design, and frontend skills showcase.
          </h2>

          <div className="flex items-center gap-4 text-[#185594] text-m ml-15 mr-5 mb-1 text-left">
            <span>Published January 1, 2026 10:00am PT</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <div className="flex items-center gap-4 text-[#185594] text-m ml-15 mr-5 mb-15 text-left">
            <span>News Article by: <strong>Dwyn Delos Reyes</strong></span>
            <span>•</span>
            <span><strong>News Daily</strong></span>
          </div>

          <div className="prose max-w-full text-left ml-15 mr-12 space-y-12">
            {/* Article Content */}
            <p className="leading-loose text-lg">
              Welcome to this <strong>sample news article page</strong>! Please note that all news cards across this website redirect to this page purely for demonstration purposes. They do not link to real news articles, as no actual news content exists. The titles, descriptions, and content you see throughout the site are entirely fictional and exist solely to visualize the frontend of this project.   All images used in the news cards and advertisements are sourced from free, no-copyright image websites, and I claim no ownership over them. The only images that were created specifically for this project are the hero image on the homepage and the main image for this sample news article page, which were assembled using available design elements to visually represent the project.
            </p>
            <p className="leading-loose text-lg">
              In fact, consider this a <strong>“4th wall break”</strong> moment: this page also serves as an opportunity to explain the project itself. The goal of this website is to reimagine a modern news platform that balances readability, categorization, and content variety without clutter. Each section, from Top News to Breaking Updates, has been carefully structured to showcase how information could be presented in a professional, contemporary news environment.
            </p>
            <p className="leading-loose text-lg">
              The layout incorporates a <strong>sidebar</strong> because news websites often have numerous subcategories, and this addition allows for easier navigation between them. The <strong>navbar</strong>, on the other hand, handles the broader, primary categories, giving users a clear way to jump to major sections of the site. These two navigation elements together help maintain a structured, user-friendly interface while keeping the page clean.
            </p>
            <p className="leading-loose text-lg">
              This page is intended to showcase layout, typography, and structure in a realistic news site setting, allowing you to experience how a modern news platform might appear and function. The right-hand column highlights additional news articles, as well as a designated advertisement spot. These areas demonstrate how such spaces could be integrated into a real news platform without overwhelming the reader. The layout has been designed to be responsive, ensuring that content adapts gracefully when sidebars are retracted
            </p>
            <p className="leading-loose text-lg">
              Other pages and components, such as the news cards, “Loading…” cards, and placeholder images, are purely for visualization purposes. The cards are arranged in a structured three and four-column layout with rounded corners, consistent spacing between them, and clear visual hierarchy to make the interface readable and organized. In addition, certain sections, such as the breaking updates grid use text-only titles to introduce variety while maintaining clarity and simplicity. The entire design is intentionally kept within a three-color palette, aside from layout elements, to preserve a clean and cohesive aesthetic while allowing different sections and components to stand out subtly without overwhelming the user.
            </p>
            <p className="leading-loose text-lg">
              Technical-wise, this project is built using <strong>Vite + React + TypeScript</strong> to showcase modern frontend development skills. It utilizes <strong>Shadcn UI components</strong> for consistent design elements, along with <strong>React Router DOM</strong> to manage client-side routing. No backend or dynamic content fetching has been implemented; this project is strictly a frontend portfolio piece intended to demonstrate skill in building structured, responsive, and interactive interfaces. For now, it is designed primarily for desktop and not yet optimized for mobile devices.
            </p>
            <p className="leading-loose text-lg">
                Overall, this sample article exemplifies how a news website can provide variety, clarity, and visual hierarchy while maintaining a clean and organized appearance. The sidebar, navbar, news cards, columns, and sections were designed to reflect thoughtful UI/UX choices that a real-world news platform might employ.
            </p>
            <p className="leading-loose text-lg">
                Thank you for exploring this demonstration! While the content is fictional, the page is functional in terms of layout and interactivity. It serves as a showcase for frontend development skills, modern component design, and interface structuring.
            </p>
          </div>

          {/* Comment Section */}
          <section className="mt-16 ml-15 mr-12">
            <h2 className="text-2xl font-semibold mt-30 mb-6">Comments</h2>

            {/* Sign Up / Login prompt */}
            <div className="mb-8 p-4 bg-gray-100 rounded-md flex flex-col gap-4 border">
              <p className="text-left text-lg">Sign up or login to leave a comment.</p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-[#01254a] text-white rounded transition-all duration-300 ease-in-out hover:bg-[#185594]">
                  Sign Up
                </button>
                <button className="px-4 py-2 bg-gray-300 text-gray-900 rounded transition-all duration-300 ease-in-out hover:bg-gray-200 transition">
                  Login
                </button>
              </div>
            </div>

            {/* Display comments */}
            <div className="flex flex-col gap-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex flex-col gap-2 text-left">
                  <div className="flex items-center gap-2">
                    <strong>{comment.user}</strong>
                    <span className="text-gray-500 text-sm">{comment.time}</span>
                  </div>
                  <p className="text-lg leading-loose">{comment.text}</p>

                  {/* Replies */}
                  {comment.replies.length > 0 && (
                    <div className="ml-6 border-l border-gray-300 pl-4 flex flex-col gap-2">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex flex-col gap-1 text-left">
                          <div className="flex items-center gap-2">
                            <strong>{reply.user}</strong>
                            <span className="text-gray-500 text-sm">{reply.time}</span>
                          </div>
                          <p className="text-lg leading-loose">{reply.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 w-full lg:w-[20%] mt-8 lg:mt-0">
          {rightColumnItems.slice(0, 5).map((item, index) => (
            <div
              key={`top-${index}`}
              className="border-b border-l border-gray-300 p-4 hover:underline cursor-pointer text-left"
              onClick={() =>
                navigate(`/news/${item.title.replace(/\s+/g, "-").toLowerCase()}`)
              }
            >
              <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.publishedAt} • {item.readTime}
              </p>
            </div>
          ))}

          {/* Ad Image */}
          <div className="w-full h-[390px] rounded-md overflow-hidden border border-gray-300">
            <img
              src={adImage}
              alt="Advertisement"
              className="w-full h-full object-cover"
            />
          </div>

          {rightColumnItems.slice(3).map((item, index) => (
            <div
              key={`bottom-${index}`}
              className="border-b border-l border-gray-300 p-4 hover:underline cursor-pointer text-left"
              onClick={() =>
                navigate(`/news/${item.title.replace(/\s+/g, "-").toLowerCase()}`)
              }
            >
              <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.publishedAt} • {item.readTime}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
