import { 
  Container, Typography, Box, Button, Grid, Paper, useTheme, Breadcrumbs, Link
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SecurityIcon from '@mui/icons-material/Security';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import SyncAltIcon from '@mui/icons-material/SyncAlt';


import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import BarcodeReaderIcon from '@mui/icons-material/QrCodeScannerOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

import posImage from '../assets/design/POS image.jpg';

export default function POSSolution() {
  const theme = useTheme();

   const StatCard = ({ title, value, trend, icon: Icon }: { title: string, value: string, trend: string, icon: any }) => (
     <Paper elevation={0} sx={{ p: 1.5, borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
         <Box sx={{ color: '#10b981', bgcolor: '#ecfdf5', p: 0.5, borderRadius: 1, display: 'flex' }}>
           <Icon sx={{ fontSize: { xs: 16, md: 16 } }} />
         </Box>
         <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.65rem' }, color: '#64748b', fontWeight: 600 }}>{title}</Typography>
       </Box>
       <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.2rem' }, fontWeight: 800, color: '#0f172a', mb: 0.5 }}>{value}</Typography>
       <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.65rem' }, color: '#10b981', fontWeight: 700 }}>{trend}</Typography>
     </Paper>
   );

   return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 12 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: '#f8fafc', zIndex: 0, clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
        
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 }, position: 'relative', zIndex: 2 }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 6, '& .MuiBreadcrumbs-li': { fontSize: '0.85rem', fontWeight: 500 } }}>
            <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
            <Link component={RouterLink} to="/solutions" color="inherit" underline="hover">Solutions</Link>
            <Typography color="text.primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Point of Sale (POS) System</Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
                Point of Sale<br/>
                <span style={{ color: '#10b981' }}>(POS) System</span>
              </Typography>
              <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Fast, secure, and intuitive POS system designed for retail and hospitality. Manage sales, inventory, and customers in one place.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 8, flexWrap: 'wrap' }}>
                <Button component={RouterLink} to="/contact" variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700, textTransform: 'none', bgcolor: '#10b981' }}>
                  Request Demo
                </Button>
                <Button variant="outlined" size="large" startIcon={<PlayArrowIcon />} sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700, color: '#0f172a', borderColor: '#cbd5e1', textTransform: 'none', '&:hover': { borderColor: '#94a3b8', bgcolor: '#f8fafc' } }}>
                  Watch Overview
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                {[
                  { icon: <StorefrontOutlinedIcon />, title: "Offline Mode" },
                  { icon: <BarcodeReaderIcon />, title: "Barcode Ready" },
                  { icon: <TrendingUpOutlinedIcon />, title: "Live Analytics" },
                  { icon: <SecurityIcon />, title: "Secure Cloud" }
                ].map((badge, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ color: '#10b981', display: 'flex' }}>
                      {badge.icon}
                    </Box>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155', maxWidth: '80px', lineHeight: 1.2 }}>{badge.title}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ position: 'relative', width: '100%', pt: { xs: 4, md: 0 } }}>
                <Box
                  sx={{
                    position: { xs: 'relative', md: 'absolute' },
                    bottom: { xs: 0, md: -20 },
                    left: { xs: 0, md: -80 },
                    width: { xs: '100%', md: '500px' },
                    height: { xs: 300, md: 400 },
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: { xs: 4, md: 0 }
                  }}
                >
                  <Box component="img" src={posImage} alt="POS Dashboard" sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} />
                </Box>
                
                <Paper elevation={24} sx={{ position: 'relative', zIndex: 2, p: 3, borderRadius: '16px', bgcolor: '#fff', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)', width: '95%', ml: 'auto' }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 3 }}><StatCard title="Today's Sales" value="KES 45,200" trend="+12.5% vs yesterday" icon={PointOfSaleOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Transactions" value="128" trend="8 active registers" icon={ReceiptLongOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Top Category" value="Electronics" trend="42% of revenue" icon={StorefrontOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Stock Alerts" value="4 Items" trend="Needs reordering" icon={Inventory2OutlinedIcon} /></Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={{ xs: 8 }}>
                      <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Real-time Sales Activity</Typography>
                        </Box>
                        <Box sx={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', minHeight: '120px' }}>
                          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
                            <path d="M0,40 L10,35 L20,38 L30,25 L40,30 L50,15 L60,20 L70,10 L80,12 L90,8 L100,2" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </Box>
                      </Paper>
                    </Grid>
                    <Grid size={{ xs: 4 }}>
                      <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a', mb: 2 }}>Payment Methods</Typography>
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '0.65rem' }}>M-Pesa</Typography>
                            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>65%</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '0.65rem' }}>Cash</Typography>
                            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>25%</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '0.65rem' }}>Card</Typography>
                            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>10%</Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Capabilities */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: '#10b981', fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', mb: 2 }}>KEY CAPABILITIES</Typography>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>Powerful features for modern retail</Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {[
              { icon: <PointOfSaleOutlinedIcon />, title: "Lightning Fast Checkout", desc: "Process transactions in seconds with our optimized checkout interface." },
              { icon: <Inventory2OutlinedIcon />, title: "Smart Inventory", desc: "Automated stock tracking and reordering based on real-time sales." },
              { icon: <PeopleAltOutlinedIcon />, title: "Customer Loyalty", desc: "Integrated loyalty programs and customer purchase history tracking." },
              { icon: <BarcodeReaderIcon />, title: "Barcode Integration", desc: "Full support for barcode scanners and label printers." },
              { icon: <PaymentOutlinedIcon />, title: "Multi-Payment Support", desc: "Accept M-Pesa, Cash, Credit Cards, and split payments seamlessly." },
              { icon: <AssessmentOutlinedIcon />, title: "Deep Analytics", desc: "Get detailed reports on sales trends, staff performance, and inventory health." }
            ].map((cap, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #f1f5f9', display: 'flex', gap: 2, height: '100%', transition: 'all 0.2s', '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderColor: '#10b981' } }}>
                  <Box sx={{ color: '#10b981', bgcolor: '#ecfdf5', p: 1.5, borderRadius: '12px', display: 'flex', alignItems: 'flex-start' }}>
                    {cap.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a', mb: 1 }}>{cap.title}</Typography>
                    <Typography sx={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{cap.desc}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Built-in Modules */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0f172a', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>POS System Modules</Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              { icon: <DashboardOutlinedIcon />, title: "Register Interface", desc: "Optimized for touchscreens and fast entry." },
              { icon: <Inventory2OutlinedIcon />, title: "Inventory Manager", desc: "Track stock across multiple store locations." },
              { icon: <ReceiptLongOutlinedIcon />, title: "Invoice & Receipt", desc: "Customizable print and digital receipts." },
              { icon: <GroupsOutlinedIcon />, title: "Staff Management", desc: "Track shifts, sales, and access levels." },
              { icon: <PeopleAltOutlinedIcon />, title: "CRM & Loyalty", desc: "Manage customer profiles and rewards." },
              { icon: <StorefrontOutlinedIcon />, title: "Multi-Store Sync", desc: "Sync data across all your branches." },
              { icon: <PaymentOutlinedIcon />, title: "Payment Terminal", desc: "Integrated payment processing." },
              { icon: <TrendingUpOutlinedIcon />, title: "Sales Forecasting", desc: "Predict future sales based on history." },
              { icon: <AssessmentOutlinedIcon />, title: "Tax & Compliance", desc: "Automated tax calculation and reports." },
              { icon: <NotificationsActiveOutlinedIcon />, title: "Stock Alerts", desc: "Get notified before you run out of stock." },
              { icon: <BarcodeReaderIcon />, title: "Label Printing", desc: "Generate and print custom barcodes." },
              { icon: <SecurityIcon />, title: "System Security", desc: "End-to-end encryption for all data." }
            ].map((mod, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <Paper elevation={0} sx={{ p: 2.5, borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: 2, height: '100%', bgcolor: '#fff' }}>
                  <Box sx={{ color: '#10b981', display: 'flex', alignItems: 'flex-start' }}>
                    {mod.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', mb: 0.5 }}>{mod.title}</Typography>
                    <Typography sx={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.4 }}>{mod.desc}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ 
            background: `linear-gradient(90deg, #0f172a 0%, #064e3b 100%)`,
            borderRadius: '24px', 
            p: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
            boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.2)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: '50%', display: 'flex', backdropFilter: 'blur(10px)' }}>
                <PointOfSaleOutlinedIcon sx={{ color: '#fff', fontSize: 32 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ color: '#fff', mb: 1, fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' } }}>Upgrade Your Checkout Experience</Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem' }}>Get a POS system that works as hard as you do.</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', md: 'auto' } }}>
              <Button component={RouterLink} to="/contact" variant="contained" size="large" sx={{ bgcolor: '#fff', color: '#064e3b', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '8px', textTransform: 'none', '&:hover': { bgcolor: '#f1f5f9' } }}>
                Request Demo
              </Button>
              <Button component={RouterLink} to="/contact" variant="outlined" size="large" sx={{ color: '#fff', borderColor: '#10b981', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '8px', textTransform: 'none', '&:hover': { borderColor: '#34d399', bgcolor: 'rgba(16, 185, 129, 0.1)' } }}>
                Talk to Sales
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
