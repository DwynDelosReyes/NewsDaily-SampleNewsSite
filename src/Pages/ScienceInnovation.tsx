import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../app/layout";
import { CardDemo } from "@/components/NewsCard";

// Sample Image imports for visualization purposes
import  homePageS1 from "@/asset/home/homePageS1.jpg";
import  homePageS2 from "@/asset/home/homePageS2.jpg";
import  homePageS3 from "@/asset/home/homePageS3.jpg";
// Import 18 Science & Innovation images
import sciImage1 from "@/asset/science/sci1.jpg";
import sciImage2 from "@/asset/science/sci2.jpg";
import sciImage3 from "@/asset/science/sci3.jpg";
import sciImage4 from "@/asset/science/sci4.jpg";
import sciImage5 from "@/asset/science/sci5.jpg";
import sciImage6 from "@/asset/science/sci6.jpg";
import sciImage7 from "@/asset/science/sci7.jpg";
import sciImage8 from "@/asset/science/sci8.jpg";
import sciImage9 from "@/asset/science/sci9.jpg";
import sciImage10 from "@/asset/science/sci10.jpg";
import sciImage11 from "@/asset/science/sci11.jpg";
import sciImage12 from "@/asset/science/sci12.jpg";
import sciImage13 from "@/asset/science/sci13.jpg";
import sciImage14 from "@/asset/science/sci14.jpg";
import sciImage15 from "@/asset/science/sci15.jpg";
import sciImage16 from "@/asset/science/sci16.jpg";
import sciImage17 from "@/asset/science/sci17.jpg";
import sciImage18 from "@/asset/science/sci18.jpg";
import adImage from "@/asset/adImage2.jpg"

// Main description for Science & Innovation
const categoryDescription =
  "Explore breakthroughs in science and innovations shaping the future of humanity, industry, and everyday life.";

// Subcategories and their content
const subCategories = [
  {
    title: "Technology News",
    description:
      "Stay updated on cutting-edge technologies including artificial intelligence, robotics, space exploration, cybersecurity, and digital innovation transforming industries worldwide.",
    heroImage: sciImage1,
    buttonText: "Explore Technology",
    content: [
      {
        image: homePageS1,
        title: "AI Breakthrough",
        description: "Researchers develop AI that can predict more accurately.",
        publishedAt: "Dec 30, 2025",
        readTime: "5 min read",
      },
      {
        image: sciImage2,
        title: "Quantum Computing Breakthrough Announced",
        description:
          "Researchers achieve greater stability in quantum processors, accelerating progress toward practical quantum computers.",
        publishedAt: "Dec 31, 2025",
        readTime: "5 min read",
      },
      {
        image: sciImage3,
        title: "Reusable Rockets Reduce Launch Costs",
        description:
          "Space agencies and private companies expand reusable launch systems to make space more accessible.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: sciImage4,
        title: "Cybersecurity Threats Rise with AI Usage",
        description:
          "Experts warn of increasingly sophisticated cyberattacks driven by artificial intelligence tools.",
        publishedAt: "Dec 29, 2025",
        readTime: "5 min read",
      },
      {
        image: sciImage5,
        title: "Robotics Advances in Manufacturing",
        description:
          "Autonomous robots improve efficiency and safety across factories and industrial environments.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
      {
        image: sciImage6,
        title: "Next-Gen Batteries Promise Longer Lifespans",
        description:
          "Solid-state battery research moves closer to commercial deployment for electric vehicles.",
        publishedAt: "Dec 27, 2025",
        readTime: "5 min read",
      },
    ],
  },
  {
    title: "Science News",
    description:
      "Discover major scientific findings in physics, climate science, biology, astronomy, and environmental research shaping our understanding of the universe. Science continues to redefine what we know.",
    heroImage: sciImage7,
    buttonText: "Explore Science",
    content: [
      {
       image: homePageS2,
        title: "Space Exploration Update",
        description: "New telescope discoveries reveal distant exoplanets.",
        publishedAt: "Dec 29, 2025",
        readTime: "6 min read",
      },
      {
        image: homePageS3,
        title: "Renewable Energy Innovations",
        description: "Cutting-edge solar technology promises higher efficiency.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
      {
        image: sciImage8,
        title: "Climate Models Predict Rising Ocean Temperatures",
        description:
          "Scientists warn of accelerating marine ecosystem changes due to warming oceans.",
        publishedAt: "Dec 30, 2025",
        readTime: "5 min read",
      },
      {
        image: sciImage9,
        title: "Breakthrough in Fusion Energy Research",
        description:
          "Experimental reactors achieve longer sustained fusion reactions, boosting clean energy hopes.",
        publishedAt: "Dec 29, 2025",
        readTime: "4 min read",
      },
      {
        image: sciImage10,
        title: "New Species Discovered in Deep Ocean",
        description:
          "Exploration missions uncover previously unknown life forms in extreme environments.",
        publishedAt: "Dec 28, 2025",
        readTime: "5 min read",
      },
      {
        image: sciImage11,
        title: "Researchers Map Brain Neural Pathways",
        description:
          "Advanced imaging reveals new insights into how neurons communicate in the human brain.",
        publishedAt: "Dec 27, 2025",
        readTime: "4 min read",
      },
    ],
  },
  {
    title: "Health News",
    description:
      "Learn about medical breakthroughs, biotechnology, public health research, and innovations improving healthcare outcomes worldwide, transforming how diseases are prevented, diagnosed, and treated.",
    heroImage: sciImage12,
    buttonText: "Explore Health",
    content: [
      {
        image: sciImage13,
        title: "New Cancer Therapy Shows Promising Results",
        description:
          "Clinical trials reveal improved survival rates using targeted immunotherapy techniques.",
        publishedAt: "Jan 1, 2026",
        readTime: "5 min read",
      },
      {
        image: sciImage14,
        title: "AI Assists Doctors in Early Disease Detection",
        description:
          "Machine learning tools help identify diseases earlier through medical imaging analysis.",
        publishedAt: "Dec 31, 2025",
        readTime: "4 min read",
      },
      {
        image: sciImage15,
        title: "Global Study Links Sleep to Brain Health",
        description:
          "Researchers find strong connections between sleep quality and long-term cognitive function.",
        publishedAt: "Dec 30, 2025",
        readTime: "5 min read",
      },
      {
        image: sciImage16,
        title: "Advances in mRNA Vaccine Technology",
        description:
          "Scientists expand mRNA platforms beyond infectious diseases into cancer treatment.",
        publishedAt: "Dec 29, 2025",
        readTime: "4 min read",
      },
      {
        image: sciImage17,
        title: "Wearable Devices Improve Preventive Care",
        description:
          "Smart health wearables help monitor vital signs and detect early health risks.",
        publishedAt: "Dec 28, 2025",
        readTime: "5 min read",
      },
      {
        image: sciImage18,
        title: "Mental Health Research Gains Global Attention",
        description:
          "New studies emphasize early intervention and technology-assisted therapy solutions.",
        publishedAt: "Dec 27, 2025",
        readTime: "4 min read",
      },
    ],
  },
];

function ScienceInnovation() {
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
      <section id="Science & Innovation" className="py-12 px-6 scroll-mt-10">
        <h1 className="font-serif text-5xl font-bold mt-8 mb-8" style={{ wordSpacing: '0.60rem' }}>Science & Innovation</h1>
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

export default ScienceInnovation;
