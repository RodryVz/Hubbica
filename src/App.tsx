
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from './contexts/ThemeContext';

// Pages
import Index from './pages/Index';
import Spaces from './pages/Spaces';
import SpaceDetail from './pages/SpaceDetail';
import HowToHost from './pages/HowToHost';
import Promos from './pages/Promos';
import UserDashboard from './pages/UserDashboard';
import HostDashboard from './pages/HostDashboard';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/spaces" element={<Spaces />} />
                <Route path="/spaces/:id" element={<SpaceDetail />} />
                <Route path="/how-to-host" element={<HowToHost />} />
                <Route path="/promos" element={<Promos />} />
                <Route path="/search" element={<Spaces />} />
                <Route path="/dashboard/user" element={<UserDashboard />} />
                <Route path="/dashboard/host" element={<HostDashboard />} />
                <Route path="/dashboard/admin" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Toaster />
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
