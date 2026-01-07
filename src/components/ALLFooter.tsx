import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Music2
} from "lucide-react"


export function Footer() {
  return (
    <footer className="bg-[#0a1a2f] text-gray-200 mt-16 pt-10 w-full">
      
      {/* ========== Top Layer ========== */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-20 text-left">
        
        {/* Column 1: Newsletter */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-3 ml-5">
            Stay Updated
          </h3>
          <p className="text-sm opacity-80 mb-3 ml-5">
            Get the latest headlines delivered straight to your inbox.
          </p>
          <div className="flex flex-col gap-2 ml-5">
            <input
              type="email"
              placeholder="Your email address"
              className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1"
            />
            <button
              className="
                text-sm px-3 py-2 rounded-md
                bg-red-700 text-white font-medium
                hover:bg-red-500
                transition-colors
              "
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Columns */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 ml-25">
            
            {/* Explore */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-3">
                Explore
              </h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/latest" className="hover:underline">Latest News</a></li>
                <li><a href="/trending" className="hover:underline">Trending Stories</a></li>
                <li><a href="/editors-picks" className="hover:underline">Editor’s Picks</a></li>
                <li><a href="/archives" className="hover:underline">Archives</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-3">
                Resources
              </h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/newsletter" className="hover:underline">Newsletter</a></li>
                <li><a href="/mobile-app" className="hover:underline">Mobile App</a></li>
                <li><a href="/rss" className="hover:underline">RSS Feeds</a></li>
                <li><a href="/api" className="hover:underline">Public API</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-3">
                Community
              </h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/forums" className="hover:underline">Forums</a></li>
                <li><a href="/contributors" className="hover:underline">Contributors</a></li>
                <li><a href="/events" className="hover:underline">Events</a></li>
                <li><a href="/submit-story" className="hover:underline">Submit a Story</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ========== Middle Layer ========== */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-20 text-left">
        
        {/* Brand */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-3 ml-5">
            News Daily
          </h3>
          <p className="text-sm leading-relaxed opacity-80 ml-5">
            A modern news platform delivering clear, reliable, and structured
            coverage across global topics with a focus on readability.
          </p>
        </div>

        {/* Columns */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 ml-25">

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-3">
                Company
              </h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/team" className="hover:underline">Our Team</a></li>
                <li><a href="/careers" className="hover:underline">Careers</a></li>
                <li><a href="/press" className="hover:underline">Press</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-3">
                Support
              </h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/contact" className="hover:underline">Contact</a></li>
                <li><a href="/help" className="hover:underline">Help Center</a></li>
                <li><a href="/advertise" className="hover:underline">Advertise</a></li>
                <li><a href="/feedback" className="hover:underline">Send Feedback</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-3">
                Legal
              </h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                <li><a href="/cookies" className="hover:underline">Cookie Policy</a></li>
                <li><a href="/accessibility" className="hover:underline">Accessibility</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ========== Bottom Bar ========== */}
      <div className="border-t p-5 bg-[#0a1a2f]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs opacity-100">
            © 2025 News Daily. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="/facebook"
              aria-label="Facebook"
              className="opacity-70 hover:opacity-100 transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="/twitter"
              aria-label="X (Twitter)"
              className="opacity-70 hover:opacity-100 transition"
            >
              <Twitter size={20} />
            </a>

            <a
              href="/instagram"
              aria-label="Instagram"
              className="opacity-70 hover:opacity-100 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="/tiktok"
              aria-label="TikTok"
              className="opacity-70 hover:opacity-100 transition"
            >
              <Music2 size={20} />
            </a>

            <a
              href="/youtube"
              aria-label="YouTube"
              className="opacity-70 hover:opacity-100 transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
