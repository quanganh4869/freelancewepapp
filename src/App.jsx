import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { AuthProvider, useAuth, ADMIN_EMAIL } from './context/AuthContext';
import { RequestProvider } from './context/RequestContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Dedicated New Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import StartProjectPage from './pages/StartProjectPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Admin and Story Studio routes
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AnimationStoryStudio } from './components/admin/story-studio/AnimationStoryStudio';
import { AuthModal } from './components/auth/AuthModal';
import { Shield } from 'lucide-react';

// Agentation visual feedback tool for dev mode
import { Agentation } from 'agentation';

// Wrapper for Story Studio to pass route params
function StoryStudioWrapper() {
  const { storyId, chapterId } = useParams();
  return (
    <AnimationStoryStudio
      storyId={storyId || 'new'}
      chapterId={chapterId || 'new'}
    />
  );
}

// Admin route guard
function AdminRouteWrapper({ onOpenAuthModal }) {
  const { activeRole, currentUser } = useAuth();
  const isAuthorizedAdmin =
    activeRole === 'ADMIN' && currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  if (!isAuthorizedAdmin) {
    return (
      <div className="py-24 text-center space-y-4 max-w-md mx-auto">
        <div className="w-12 h-12 mx-auto bg-neutral-100 border border-neutral-300 text-neutral-900 flex items-center justify-center">
          <Shield size={24} />
        </div>
        <h2 className="text-xl font-bold text-neutral-900">Quyền truy cập bị từ chối</h2>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Chỉ tài khoản quản trị <span className="font-mono text-neutral-900 font-semibold">{ADMIN_EMAIL}</span> mới có quyền truy cập bảng quản trị.
        </p>
        <div>
          <button
            onClick={onOpenAuthModal}
            className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Đăng nhập quản trị viên
          </button>
        </div>
      </div>
    );
  }

  return <AdminDashboard />;
}

// Public Layout Container
function PublicLayout({ children, isWide = false, fullWidth = false }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
      <Navbar />
      <main
        className={`flex-grow w-full ${
          fullWidth
            ? 'w-full'
            : isWide
            ? 'max-w-[1320px] mx-auto px-5 sm:px-8'
            : 'max-w-[1320px] mx-auto px-5 sm:px-8'
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

function MainAppContent() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Story Studio standalone route (no standard header/footer) */}
        <Route
          path="/admin/stories/:storyId/chapters/:chapterId"
          element={<StoryStudioWrapper />}
        />
        <Route
          path="/admin/stories/:storyId"
          element={<StoryStudioWrapper />}
        />
        <Route
          path="/admin/stories"
          element={<StoryStudioWrapper />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <PublicLayout>
              <AdminRouteWrapper onOpenAuthModal={() => setIsAuthModalOpen(true)} />
            </PublicLayout>
          }
        />

        {/* Public Pages */}
        <Route
          path="/"
          element={
            <PublicLayout fullWidth>
              <HomePage />
            </PublicLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <PublicLayout isWide>
              <ProjectsPage />
            </PublicLayout>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <PublicLayout isWide>
              <ProjectDetailPage />
            </PublicLayout>
          }
        />
        <Route
          path="/services"
          element={
            <PublicLayout>
              <ServicesPage />
            </PublicLayout>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <PublicLayout>
              <ServiceDetailPage />
            </PublicLayout>
          }
        />
        <Route
          path="/pricing"
          element={
            <PublicLayout>
              <PricingPage />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <AboutPage />
            </PublicLayout>
          }
        />
        <Route
          path="/start-project"
          element={
            <PublicLayout>
              <StartProjectPage />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <ContactPage />
            </PublicLayout>
          }
        />

        {/* 404 Catch-All */}
        <Route
          path="*"
          element={
            <PublicLayout>
              <NotFoundPage />
            </PublicLayout>
          }
        />
      </Routes>

      {/* Auth Modal for Admin access */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      {/* Render Agentation toolbar in Dev mode */}
      {import.meta.env.DEV && <Agentation />}
    </BrowserRouter>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <RequestProvider>
              <MainAppContent />
            </RequestProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
