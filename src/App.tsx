import { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fab, ThemeProvider, CssBaseline } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getTheme } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Solutions from './pages/Solutions';
import RealEstateSolution from './pages/RealEstateSolution';
import PoultrySolution from './pages/PoultrySolution';
import EcommerceSolution from './pages/EcommerceSolution';
import ProcurementSolution from './pages/ProcurementSolution';
import CustomSolution from './pages/CustomSolution';
import POSSolution from './pages/POSSolution';
import Contact from './pages/Contact';

function App() {
  const theme = useMemo(() => getTheme('light'), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />

            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/real-estate" element={<RealEstateSolution />} />
            <Route path="/solutions/poultry" element={<PoultrySolution />} />
            <Route path="/solutions/ecommerce" element={<EcommerceSolution />} />
            <Route path="/solutions/procurement" element={<ProcurementSolution />} />
            <Route path="/solutions/custom" element={<CustomSolution />} />
            <Route path="/solutions/pos" element={<POSSolution />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Fab 
          color="primary" 
          aria-label="whatsapp" 
          href="https://wa.me/254792620934" 
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            position: 'fixed', 
            bottom: 32, 
            right: 32, 
            width: 64, 
            height: 64, 
            bgcolor: '#25D366',
            '&:hover': { bgcolor: '#128C7E' },
            boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)' 
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32, color: '#fff' }} />
        </Fab>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
