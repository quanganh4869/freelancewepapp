import React, { useState } from 'react';
import { AuthProvider, useAuth, ADMIN_EMAIL } from './context/AuthContext';
import { RequestProvider } from './context/RequestContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Shield } from 'lucide-react';
import { useScrollReveal } from './hooks/useScrollReveal';

// Agentation visual feedback tool for dev mode
import { Agentation } from 'agentation';

// Freelancer Personal Homepage Sections
import { HeroSection } from './components/home/HeroSection';
import { PersonalCraftSection } from './components/home/PersonalCraftSection';
import { ServicesSection } from './components/home/ServicesSection';
import { PricingSection } from './components/home/PricingSection';
import { ProcessSection } from './components/home/ProcessSection';
import { PortfolioSection } from './components/home/PortfolioSection';

// Standalone Pages & Dashboards & Auth
import { EstimatorPage } from './components/pages/EstimatorPage';
import { ProjectRequestModal } from './components/request/ProjectRequestModal';
import { AuthModal } from './components/auth/AuthModal';
import { ClientDashboard } from './components/client/ClientDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';

const MainAppContent = () => {
  const { activeRole, currentUser } = useAuth();
  const { isDark } = useTheme();

  const [activeView, setActiveView] = useState('home'); // 'home' | 'estimator' | 'admin-dashboard'
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [initialServiceForForm, setInitialServiceForForm] = useState('');

  // Enable scroll reveal animations keyed to activeView
  useScrollReveal(activeView);

  const handleNavigate = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenRequestModal = (serviceTitle = '') => {
    setInitialServiceForForm(serviceTitle);
    setIsRequestModalOpen(true);
  };

  const handleCloseRequestModal = () => {
    setIsRequestModalOpen(false);
    setInitialServiceForForm('');
  };

  const isAuthorizedAdmin = activeRole === 'ADMIN' && currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-brand-primary selection:text-white transition-colors duration-300 ${
      isDark ? 'bg-studio-950 text-slate-200' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* Main Navbar */}
      <Navbar
        currentView={activeView}
        onOpenRequestModal={() => handleOpenRequestModal()}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {activeRole === 'ADMIN' ? (
          isAuthorizedAdmin ? (
            <AdminDashboard />
          ) : (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center shadow-2xl">
                <Shield size={32} />
              </div>
              <h2 className="text-xl font-bold text-white">Quyền truy cập bị từ chối!</h2>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                Chỉ duy nhất tài khoản email <span className="text-amber-400 font-mono font-bold">{ADMIN_EMAIL}</span> mới có quyền truy cập vào Admin Control Center.
              </p>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold shadow-glow-primary hover:bg-brand-hover transition-all"
              >
                Đăng nhập với {ADMIN_EMAIL}
              </button>
            </div>
          )
        ) : activeRole === 'USER' ? (
          <ClientDashboard onOpenRequestModal={() => handleOpenRequestModal()} />
        ) : activeView === 'estimator' ? (
          /* Standalone Estimator Page */
          <EstimatorPage
            onOpenRequestModal={(scope) => handleOpenRequestModal(scope)}
            onBackHome={() => handleNavigate('home')}
          />
        ) : (
          <>
            {/* Streamlined Personal Freelancer Homepage Sections */}
            <HeroSection onOpenRequestModal={() => handleOpenRequestModal()} />
            <PersonalCraftSection />
            <ServicesSection onSelectService={(service) => handleOpenRequestModal(service)} />
            <PricingSection onOpenRequestModal={(tierName) => handleOpenRequestModal(tierName)} />
            <ProcessSection onOpenRequestModal={() => handleOpenRequestModal()} />
            <PortfolioSection onOpenRequestModal={(initial) => handleOpenRequestModal(initial)} />
          </>
        )}
      </main>

      {/* Main Footer */}
      {!isAuthorizedAdmin && (
        <Footer onOpenRequestModal={() => handleOpenRequestModal()} />
      )}

      {/* Project Request Wizard Modal */}
      <ProjectRequestModal
        isOpen={isRequestModalOpen}
        onClose={handleCloseRequestModal}
        initialService={initialServiceForForm}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      {/* Render Agentation toolbar in Dev mode */}
      {import.meta.env.DEV && <Agentation />}

    </div>
  );
};

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
