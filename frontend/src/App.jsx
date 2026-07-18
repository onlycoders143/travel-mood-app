import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import DestinationDetail from "./pages/DestinationDetail.jsx";
import Community from "./pages/Community.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import CreatePost from "./pages/CreatePost.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/new" element={<CreatePost />} />
        <Route path="/community/post/:id" element={<PostDetail />} />
        <Route path="*" element={<p className="text-center pt-24 text-mist/50">Page not found.</p>} />
      </Routes>
      <footer className="max-w-6xl mx-auto px-5 sm:px-8 py-10 text-center eyebrow text-mist/30">
        MoodTrail — built for travellers who pick a feeling before a flight.
      </footer>
    </div>
  );
}
