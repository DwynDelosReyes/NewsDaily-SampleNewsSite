import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../app/layout";
import { CardDemo } from "@/components/NewsCard";

// Sample Image imports for visualization purposes
import  homePageT1 from "@/asset/home/homePageT1.jpg";
import  homePageT2 from "@/asset/home/homePageT2.jpg";
import  homePageT3 from "@/asset/home/homePageT3.jpg";
// Import 18 Travel & Exploration images
import travelImage1 from "@/asset/travel/travel1.jpg";
import travelImage2 from "@/asset/travel/travel2.jpg";
import travelImage3 from "@/asset/travel/travel3.jpg";
import travelImage4 from "@/asset/travel/travel4.jpg";
import travelImage5 from "@/asset/travel/travel5.jpg";
import travelImage6 from "@/asset/travel/travel6.jpg";
import travelImage7 from "@/asset/travel/travel7.jpg";
import travelImage8 from "@/asset/travel/travel8.jpg";
import travelImage9 from "@/asset/travel/travel9.jpg";
import travelImage10 from "@/asset/travel/travel10.jpg";
import travelImage11 from "@/asset/travel/travel11.jpg";
import travelImage12 from "@/asset/travel/travel12.jpg";
import travelImage13 from "@/asset/travel/travel13.jpg";
import travelImage14 from "@/asset/travel/travel14.jpg";
import travelImage15 from "@/asset/travel/travel15.jpg";
import travelImage16 from "@/asset/travel/travel16.jpg";
import travelImage17 from "@/asset/travel/travel17.jpg";
import travelImage18 from "@/asset/travel/travel18.jpg";
import adImage from "@/asset/adImage2.jpg"


// Main description for Travel & Exploration
const categoryDescription =
  "Discover destinations, travel guides, and practical tips that inspire exploration, cultural discovery, and meaningful journeys around the world.";

// Subcategories and their content
const subCategories = [
  {
    title: "Destinations to Visit",
    description:
      "Explore breathtaking destinations, hidden gems, and iconic locations across the globe that offer unforgettable experiences for every type of traveler. Discover places worth traveling for.",
    heroImage: travelImage1,
    buttonText: "Explore Destinations",
    content: [
      {
        image: homePageT1,
        title: "Top Destinations This Winter",
        description: "Explore the best places to visit this season.",
        publishedAt: "Dec 30, 2025",
        readTime: "5 min read",
      },
      {
        image: homePageT3,
        title: "Hidden Gems Around the World",
        description: "Discover less-known but incredible travel spots.",
        publishedAt: "Dec 28, 2025",
        readTime: "6 min read",
      },
      {
        image: travelImage2,
        title: "Cultural Cities Every Traveler Should Visit",
        description:
          "Historic cities blend architecture, cuisine, and tradition into unforgettable travel experiences.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: travelImage3,
        title: "Island Destinations Redefine Sustainable Tourism",
        description:
          "Island communities adopt eco-friendly tourism to protect natural beauty and local heritage.",
        publishedAt: "Dec 29, 2025",
        readTime: "5 min read",
      },
      {
        image: travelImage4,
        title: "Desert Landscapes Offer Unique Adventures",
        description:
          "From sand dunes to night skies, desert travel offers solitude and striking natural beauty.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
      {
        image: travelImage5,
        title: "Winter Travel Hotspots Beyond Ski Resorts",
        description:
          "Snowy villages and northern regions attract travelers seeking seasonal charm and calm escapes.",
        publishedAt: "Dec 27, 2025",
        readTime: "3 min read",
      },
    ],
  },
  {
    title: "Exploring Guides",
    description:
      "Plan smarter journeys with in-depth travel guides covering routes, cultures, local customs, and must-see experiences in destinations worldwide. Navigate the world with confidence.",
    heroImage: travelImage6,
    buttonText: "Explore Guides",
    content: [
      {
        image: travelImage7,
        title: "A First-Time Traveler’s Guide to Europe",
        description:
          "Essential tips on routes, transportation, and cultural etiquette for a smooth European journey.",
        publishedAt: "Jan 1, 2026",
        readTime: "5 min read",
      },
      {
        image: travelImage8,
        title: "Navigating Public Transport in Major Cities",
        description:
          "How to move efficiently through global cities using trains, buses, and metro systems.",
        publishedAt: "Dec 31, 2025",
        readTime: "4 min read",
      },
      {
        image: travelImage9,
        title: "Understanding Local Customs While Traveling",
        description:
          "Respect cultural traditions and avoid common mistakes when visiting foreign destinations.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: travelImage10,
        title: "Food Exploration: Eating Like a Local",
        description:
          "Discover authentic cuisine by exploring markets, street food, and family-run restaurants.",
        publishedAt: "Dec 29, 2025",
        readTime: "3 min read",
      },
      {
        image: travelImage11,
        title: "Traveling Off-Season for Better Experiences",
        description:
          "Why shoulder-season travel offers fewer crowds, lower costs, and deeper cultural immersion.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
      {
        image: travelImage12,
        title: "Photography Tips for Travel Adventures",
        description:
          "Capture landscapes, city life, and moments with simple photography techniques on the road.",
        publishedAt: "Dec 27, 2025",
        readTime: "3 min read",
      },
    ],
  },
  {
    title: "Travelling Tips",
    description:
      "Learn practical travel tips covering budgeting, safety, packing, and planning to make every journey smoother and more enjoyable. Travel smarter, safer, and lighter.",
    heroImage: travelImage13,
    buttonText: "Explore Tips",
    content: [
      {
        image: homePageT2,
        title: "Travel Safety Tips",
        description: "Essential advice for travelers in 2025.",
        publishedAt: "Dec 29, 2025",
        readTime: "3 min read",
      },
      {
        image: travelImage14,
        title: "How to Travel on a Budget Without Missing Out",
        description:
          "Save money on flights, accommodations, and experiences while still enjoying the journey.",
        publishedAt: "Dec 31, 2025",
        readTime: "3 min read",
      },
      {
        image: travelImage15,
        title: "Staying Safe While Exploring New Places",
        description:
          "Simple safety habits every traveler should follow when navigating unfamiliar environments.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: travelImage16,
        title: "Managing Jet Lag on Long-Haul Flights",
        description:
          "Proven techniques to reduce fatigue and adjust quickly to new time zones.",
        publishedAt: "Dec 29, 2025",
        readTime: "3 min read",
      },
      {
        image: travelImage17,
        title: "Digital Tools That Make Travel Easier",
        description:
          "Apps and services that help with navigation, bookings, language, and trip planning.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
      {
        image: travelImage18,
        title: "Responsible Travel and Respecting Local Communities",
        description:
          "How mindful travel choices help preserve culture, environment, and local livelihoods.",
        publishedAt: "Dec 27, 2025",
        readTime: "3 min read",
      },
    ],
  },
];

function TravelExploration() {
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
      <section id="Travel & Exploration" className="py-12 px-6 scroll-mt-10">
        <h1 className="font-serif text-5xl font-bold mt-8 mb-8" style={{ wordSpacing: '0.60rem' }}>Travel & Exploration</h1>
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

export default TravelExploration;
