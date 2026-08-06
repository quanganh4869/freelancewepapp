import React, { useState } from 'react';
import { AuthProvider, useAuth, ADMIN_EMAIL } from './context/AuthContext';
import { RequestProvider } from './context/RequestContext';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import { RoleSwitcherBar } from './components/layout/RoleSwitcherBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Shield, Lock } from 'lucide-react';

// Home Sections
import { HeroSection } from './components/home/HeroSection';
import { ServicesSection } from './components/home/ServicesSection';
import { ProcessSection } from './components/home/ProcessSection';
import { PortfolioSection } from './components/home/PortfolioSection';
import { WhyUsSection } from './components/home/WhyUsSection';
import { CallToAction } from './components/home/CallToAction';

// Dashboards & Request Form & Auth
import { ProjectRequestModal } from './components/request/ProjectRequestModal';
import { AuthModal } from './components/auth/AuthModal';
import { ClientDashboard } from './components/client/ClientDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';

const MainAppContent = () => {
  const { activeRole, currentUser } = useAuth();

  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [initialServiceForForm, setInitialServiceForForm] = useState('');
  const [activeView, setActiveView] = useState('home');

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
    <div className="min-h-screen bg-studio-950 text-slate-200 flex flex-col font-sans selection:bg-brand-primary selection:text-white">
      
      {/* Top Demo Role Switcher Bar */}
      <RoleSwitcherBar />

      {/* Main Navbar */}
      <Navbar
        onOpenRequestModal={() => handleOpenRequestModal()}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onNavigate={(view) => setActiveView(view)}
      />

      {/* Main View Router / Switcher */}
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
        ) : (
          <>
            <HeroSection onOpenRequestModal={() => handleOpenRequestModal()} />
            <ServicesSection onSelectService={(service) => handleOpenRequestModal(service)} />
            <ProcessSection onOpenRequestModal={() => handleOpenRequestModal()} />
            <PortfolioSection onOpenRequestModal={() => handleOpenRequestModal()} />
            <WhyUsSection />
            <CallToAction onOpenRequestModal={() => handleOpenRequestModal()} />
          </>
        )}
      </main>

      {/* Main Footer (Hidden on Admin dashboard for high efficiency layout) */}
      {!isAuthorizedAdmin && (
        <Footer onOpenRequestModal={() => handleOpenRequestModal()} />
      )}

      {/* Multi-step Project Request Wizard Modal */}
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

    </div>
  );
};

export function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <RequestProvider>
          <MainAppContent />
        </RequestProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
