import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RootLayout } from "@/layouts/root-layout";

// Pages
import { Dashboard } from "@/features/dashboard";
import { Analytics } from "@/features/analytics";
import { Trending } from "@/features/trending";
import { Clips } from "@/features/clips";
import { Settings } from "@/features/settings";
import { StreamerDetails } from "@/features/streamer";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/clips" element={<Clips />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/streamer/:id" element={<StreamerDetails streamerId="1" />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
