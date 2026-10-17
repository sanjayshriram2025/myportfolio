import React, { useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { CinematicIntro } from './components/CinematicIntro';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { SelectedWork } from './components/SelectedWork';
import { ResearchLab } from './components/ResearchLab';
import { AchievementArchive } from './components/AchievementArchive';
import { Skills } from './components/Skills';
import { ProfileSection } from './components/ProfileSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EditorialLightbox, LightboxData } from './components/EditorialLightbox';

const INTRO_STORAGE_KEY = 'ssn_chromatic_intro_seen';

export const App: React.FC = () => {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  // Check if intro has already been experienced in this browser session
  const [introActive, setIntroActive] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(INTRO_STORAGE_KEY) !== 'true';
    } catch {
      return true;
    }
  });

  const handleIntroComplete = () => {
    setIntroActive(false);
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, 'true');
    } catch {
      // ignore in restricted environments
    }
  };

  const handleReplayIntro = () => {
    setIntroActive(true);
  };

  const handleInspectMedia = (src: string, alt: string, caption?: string) => {
    setLightboxData({ src, alt, caption });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#F2EBDD] text-[#242424] selection:bg-[#9E2939] selection:text-[#F2EBDD]">
        {/* Cinematic Opening Sequence */}
        <AnimatePresence>
          {introActive && (
            <CinematicIntro onComplete={handleIntroComplete} />
          )}
        </AnimatePresence>

        {/* Floating Chromatic Navigation */}
        <Nav onReplayIntro={handleReplayIntro} />

        {/* Main Content Stream */}
        <main id="main-content" tabIndex={-1} className="outline-none">
          {/* 1. Opening & 3D Centerpiece */}
          <Hero onInspectMedia={handleInspectMedia} />

          {/* 2. Personal Story & Research Philosophy */}
          <Statement />

          {/* 3. Selected Systems Case Studies */}
          <SelectedWork onInspectMedia={handleInspectMedia} />

          {/* 4. Research Laboratory & Pipeline Instrument */}
          <ResearchLab onInspectMedia={handleInspectMedia} />

          {/* 5. Achievement Archive & Verified Records */}
          <AchievementArchive
            onInspectMedia={(src, alt, caption) => handleInspectMedia(src, alt, caption)}
          />

          {/* 6. Capabilities & Technical Domains */}
          <Skills />

          {/* 7. Profile & Academic Credentials */}
          <ProfileSection />

          {/* 8. Dispatch & Collaboration */}
          <Contact />
        </main>

        {/* System Footer */}
        <Footer />

        {/* Global Lightbox Inspection Modal */}
        <EditorialLightbox
          data={lightboxData}
          onClose={() => setLightboxData(null)}
        />
      </div>
    </MotionConfig>
  );
};

export default App;
