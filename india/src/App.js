// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CulturePage from "./pages/CulturePage";
import HeritagePage from "./pages/HeritagePage";
import FortsPage from "./pages/FortsPage";
import SpicesPage from "./pages/SpicesPage";
import StatesPage from "./pages/StatesPage";
import LanguagePage from "./pages/LanguagePage";
import ContributionsPage from "./pages/ContributionsList";
import PersonalizedHome from "./pages/PersonalizedHome";
import AdminPanel from "./components/AdminPanel";
import ClassicalArtsPage from "./pages/ClassicalArtsPage";
import FestivalsPage from "./pages/FestivalsPage";
import HomepageAICulturalDiscoveryHub from "./Ai/index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import FeedbackPage from "./pages/FeedbackPage";

function App() {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/heritage" element={<HeritagePage />} />
        <Route path="/forts" element={<FortsPage />} />
        <Route path="/spices" element={<SpicesPage />} />
        <Route path="/states" element={<StatesPage />} />
        <Route path="/language" element={<LanguagePage />} />
        <Route path="/contributions" element={<ContributionsPage />} />
        <Route path="/classicalArts" element={<ClassicalArtsPage />} />
        <Route path="/festivalPage" element={<FestivalsPage />} />
        <Route path="/ai" element={<HomepageAICulturalDiscoveryHub />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/personalized" element={<PersonalizedHome />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </>
  );
}

export default App;
