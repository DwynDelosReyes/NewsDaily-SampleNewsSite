import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./Scroll";
import Home from './Pages/Home'
import NewsArticlePage from "./Pages/NewsArticlePage";
import NewsPage from './Pages/NewsPage';
import TopNews from './Pages/TopNews'
import GlobalAffairsPage from './Pages/GlobalAffairs'
import Finance from './Pages/Finance'
import ScienceInnovation from './Pages/ScienceInnovation'
import CultureLifestyle from './Pages/CultureLifestyle'
import TravelExploration from './Pages/TravelExploration'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:articleId" element={<NewsArticlePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/top-news" element={<TopNews />} />
          <Route path="/global-affairs" element={<GlobalAffairsPage />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/scienceinnovation" element={<ScienceInnovation />} />
          <Route path="/culturelifetyle" element={<CultureLifestyle />} />
          <Route path="/travelexploration" element={<TravelExploration />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


