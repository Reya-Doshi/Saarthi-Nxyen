import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LegacyScript from './LegacyScript';
import About from './pages/About';
import AiSupport from './pages/AiSupport';
import Auth from './pages/Auth';
import Blog from './pages/Blog';
import BookDemo from './pages/BookDemo';
import CaseStudies from './pages/CaseStudies';
import ClinicalEvidence from './pages/ClinicalEvidence';
import Games from './pages/Games';
import Healthcare from './pages/Healthcare';
import Index from './pages/Index';
import Journal from './pages/Journal';
import MeditationAudios from './pages/MeditationAudios';
import Profile from './pages/Profile';
import Quizzes from './pages/Quizzes';
import RelaxationVideos from './pages/RelaxationVideos';
import Reports from './pages/Reports';
import Resources from './pages/Resources';
import Settings from './pages/Settings';
import Teams from './pages/Teams';
import Work from './pages/Work';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai-support" element={<AiSupport />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/clinical-evidence" element={<ClinicalEvidence />} />
        <Route path="/games" element={<Games />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/meditation-audios" element={<MeditationAudios />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/relaxation-videos" element={<RelaxationVideos />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <LegacyScript />
        </BrowserRouter>
    );
}
