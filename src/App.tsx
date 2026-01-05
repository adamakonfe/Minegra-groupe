import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import EquipmentsPage from "./pages/EquipmentsPage";
import ContactPage from "./pages/ContactPage";
import MiningServicePage from "./pages/MiningServicePage";
import LogisticsSolutionsPage from "./pages/LogisticsSolutionsPage";
import EnergyServicesPage from "./pages/EnergyServicesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nous" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/equipe" element={<TeamPage />} />
          <Route path="/equipements" element={<EquipmentsPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/mining-service" element={<MiningServicePage />} />
          <Route path="/logistics-solutions" element={<LogisticsSolutionsPage />} />
          <Route path="/energy-services" element={<EnergyServicesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
