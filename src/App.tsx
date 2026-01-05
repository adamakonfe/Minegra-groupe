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
import ForagePage from "./pages/ForagePage";
import MinePage from "./pages/MinePage";
import CarrierePage from "./pages/CarrierePage";
import LogistiquePage from "./pages/LogistiquePage";
import EnergiePage from "./pages/EnergiePage";
import ConseilsPage from "./pages/ConseilsPage";
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
          <Route path="/forage" element={<ForagePage />} />
          <Route path="/mine" element={<MinePage />} />
          <Route path="/carriere" element={<CarrierePage />} />
          <Route path="/logistique" element={<LogistiquePage />} />
          <Route path="/energie" element={<EnergiePage />} />
          <Route path="/conseils" element={<ConseilsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
