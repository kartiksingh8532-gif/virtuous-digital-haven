import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import BlogList from "./pages/BlogList";
import UmarKhalidCase from "./pages/blogs/UmarKhalidCase";
import ConsumerRights from "./pages/blogs/ConsumerRights";
import PropertyDisputes from "./pages/blogs/PropertyDisputes";
import DivorceProceedings from "./pages/blogs/DivorceProceedings";
import TrademarkProtection from "./pages/blogs/TrademarkProtection";
import EmploymentRights from "./pages/blogs/EmploymentRights";
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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/umar-khalid-case" element={<UmarKhalidCase />} />
          <Route path="/blog/consumer-rights-india" element={<ConsumerRights />} />
          <Route path="/blog/property-disputes-resolution" element={<PropertyDisputes />} />
          <Route path="/blog/divorce-proceedings-india" element={<DivorceProceedings />} />
          <Route path="/blog/trademark-protection" element={<TrademarkProtection />} />
          <Route path="/blog/employment-rights" element={<EmploymentRights />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
