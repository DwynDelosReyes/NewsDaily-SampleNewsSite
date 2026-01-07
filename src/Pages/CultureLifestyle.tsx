import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../app/layout";
import { CardDemo } from "@/components/NewsCard";

// Sample Image imports for visualization purposes
import  homePageC1 from "@/asset/home/homePageC1.jpg";
import  homePageC2 from "@/asset/home/homePageC2.jpg";
import  homePageC3 from "@/asset/home/homePageC3.jpg";
// Import 18 Culture & Lifestyle images
import cultureImage1 from "@/asset/culture/culture1.jpg";
import cultureImage2 from "@/asset/culture/culture2.jpg";
import cultureImage3 from "@/asset/culture/culture3.jpg";
import cultureImage4 from "@/asset/culture/culture4.jpg";
import cultureImage5 from "@/asset/culture/culture5.jpg";
import cultureImage6 from "@/asset/culture/culture6.jpg";
import cultureImage7 from "@/asset/culture/culture7.jpg";
import cultureImage8 from "@/asset/culture/culture8.jpg";
import cultureImage9 from "@/asset/culture/culture9.jpg";
import cultureImage10 from "@/asset/culture/culture10.jpg";
import cultureImage11 from "@/asset/culture/culture11.jpg";
import cultureImage12 from "@/asset/culture/culture12.jpg";
import cultureImage13 from "@/asset/culture/culture13.jpg";
import cultureImage14 from "@/asset/culture/culture14.jpg";
import cultureImage15 from "@/asset/culture/culture15.jpg";
import cultureImage16 from "@/asset/culture/culture16.jpg";
import cultureImage17 from "@/asset/culture/culture17.jpg";
import cultureImage18 from "@/asset/culture/culture18.jpg";
import adImage from "@/asset/adImage1.jpg"


// Main description for Culture & Lifestyle
const categoryDescription =
  "Explore stories shaping modern culture, entertainment, sports, and lifestyle trends influencing how people live, express themselves, and connect worldwide.";

// Subcategories and their content
const subCategories = [
  {
    title: "Sports News",
    description:
      "Follow major sporting events, athlete stories, league updates, and cultural moments from the world of sports that unite fans across the globe to inspire passion worldwide.",
    heroImage: cultureImage1,
    buttonText: "Explore Sports",
    content: [
      {
        image: cultureImage2,
        title: "Historic Final Draws Record Global Audience",
        description:
          "Millions tune in worldwide as a dramatic championship match becomes one of the most-watched sporting events in history.",
        publishedAt: "Jan 1, 2026",
        readTime: "4 min read",
      },
      {
        image: cultureImage3,
        title: "Star Athlete Announces Surprise Comeback",
        description:
          "Fans react as a legendary player confirms a return to professional competition.",
        publishedAt: "Dec 31, 2025",
        readTime: "3 min read",
      },
      {
        image: cultureImage4,
        title: "Young Talent Breaks Long-Standing Record",
        description:
          "A rising star sets a new milestone, signaling a new era in the sport.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: cultureImage5,
        title: "Major League Expands to New Cities",
        description:
          "Sports organizations announce expansion plans aimed at growing global fan bases.",
        publishedAt: "Dec 29, 2025",
        readTime: "5 min read",
      },
      {
        image: cultureImage6,
        title: "Behind the Scenes of Championship Training",
        description:
          "An inside look at how elite athletes prepare mentally and physically for competition.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
      {
        image: cultureImage7,
        title: "Sports Culture Drives Fashion Trends",
        description:
          "Team jerseys and athletic wear influence street fashion and pop culture.",
        publishedAt: "Dec 27, 2025",
        readTime: "3 min read",
      },
    ],
  },
  {
    title: "Entertainment News",
    description:
      "Catch up on the latest in film, television, music, celebrity culture, and streaming as entertainment continues to evolve worldwide. Stories on screen and stage shape trends and global pop culture.",
    heroImage: cultureImage8,
    buttonText: "Explore Entertainment",
    content: [
      {
        image: homePageC1,
        title: "Art Exhibit Spotlight",
        description: "Explore the latest trends in contemporary art.",
        publishedAt: "Dec 30, 2025",
        readTime: "3 min read",
      },
      {
        image: cultureImage9,
        title: "Streaming Series Becomes Cultural Phenomenon",
        description:
          "A new series sparks global conversations and viral moments across social media.",
        publishedAt: "Dec 31, 2025",
        readTime: "3 min read",
      },
      {
        image: cultureImage10,
        title: "Music Awards Celebrate Global Artists",
        description:
          "Artists from around the world take center stage in a night of diverse performances.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: cultureImage11,
        title: "Iconic Actor Announces Retirement",
        description:
          "A celebrated career comes to a close, prompting tributes from fans and peers.",
        publishedAt: "Dec 29, 2025",
        readTime: "3 min read",
      },
      {
        image: cultureImage12,
        title: "Film Festivals Highlight Emerging Voices",
        description:
          "Independent filmmakers gain recognition for bold storytelling and fresh perspectives.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
      {
        image: cultureImage13,
        title: "Concert Tours Fuel Live Music Revival",
        description:
          "Sold-out shows signal renewed excitement for live performances worldwide.",
        publishedAt: "Dec 27, 2025",
        readTime: "3 min read",
      },
    ],
  },
  {
    title: "Lifestyle News",
    description:
      "Discover trends in wellness, fashion, food, travel, and everyday living as lifestyles continue to adapt to a fast-changing world. Modern living blends personal well-being with creativity and self-expression.",
    heroImage: cultureImage14,
    buttonText: "Explore Lifestyle",
    content: [
      {
        image: homePageC2,
        title: "Culinary Adventures",
        description: "Top chefs share their secrets to amazing dishes.",
        publishedAt: "Dec 29, 2025",
        readTime: "4 min read",
      },
      {
        image: homePageC3,
        title: "Lifestyle Trends 2025",
        description: "The latest in wellness, fashion, and home design.",
        publishedAt: "Dec 28, 2025",
        readTime: "5 min read",
      },
      {
        image: cultureImage15,
        title: "Remote Work Redefines Daily Routines",
        description:
          "Flexible schedules and hybrid work models influence how people live and work.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: cultureImage16,
        title: "Global Cuisine Trends Gain Popularity",
        description:
          "Home cooks embrace international flavors inspired by travel and social media.",
        publishedAt: "Dec 29, 2025",
        readTime: "3 min read",
      },
      {
        image: cultureImage17,
        title: "Urban Living Adapts to Smaller Spaces",
        description:
          "Designers create smarter homes tailored for city lifestyles.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
      {
        image: cultureImage18,
        title: "Travel Experiences Shift Toward Meaningful Journeys",
        description:
          "Travelers prioritize culture, sustainability, and personal growth over luxury.",
        publishedAt: "Dec 27, 2025",
        readTime: "3 min read",
      },
    ],
  },
];

function CultureLifestyle() {
  const location = useLocation();

  // Scroll to section if state.scrollTo exists
  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const section = document.getElementById(scrollToId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <Layout>
      {/* Main Title */}
      <section id="Culture & Lifestyle" className="py-12 px-6 scroll-mt-10">
        <h1 className="font-serif text-5xl font-bold mt-8 mb-8" style={{ wordSpacing: '0.60rem' }}>Culture & Lifestyle</h1>
        <p className="font-sans text-m tracking-[0.1em] uppercase">{categoryDescription}</p>
      </section>

      {/* Subcategories */}
      {subCategories.map((sub, idx) => (
        <section key={idx} id={sub.title} className="py-12 px-6 scroll-mt-10">
          {/* Hero Section as Card */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8 border rounded-lg bg-gradient-to-tr from-[#001124] to-[#011d3b] overflow-hidden" style={{ wordSpacing: '0.40rem' }}>
            <div className="w-[55%] h-[39vh]">
              <img
                src={sub.heroImage}
                alt={sub.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-5/12 flex flex-col justify-between p-6 bg-black/0">
              <h2 className="font-sans text-3xl text-left text-white font-bold mb-5">{sub.title}</h2>

              {/* Description container that expands to fill space */}
              <div className="flex-1 flex items-center">
                <p className="font-sans tracking-[0.1em] text-left font-light text-white mb-4">
                  {sub.description}
                </p>
              </div>

              <button
                onClick={() => window.location.href = "/news"} 
                className="px-4 py-2 bg-red-700 text-white border border-black font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-102 hover:cursor-pointer"
              >
                {sub.buttonText}
              </button>
            </div>
          </div>

          {/* News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sub.content.map((item, index) => (
              <CardDemo
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                publishedAt={item.publishedAt}
                readTime={item.readTime}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Ad Section */}
      <section className="py-8 px-6">
        <div className="w-full h-[40vh] lg:h-[45vh] overflow-hidden">
          <img
            src={adImage}
            alt="Advertisement"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </Layout>
  );
}

export default CultureLifestyle;
