import { 
  Container, Typography, Box, Button, Grid, Paper, useTheme, Breadcrumbs, Link
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SecurityIcon from '@mui/icons-material/Security';


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function EcommerceSolution() {

  const StatCard = ({ title, value, trend, icon: Icon }: { title: string, value: string, trend: string, icon: any }) => (
    <Paper elevation={0} sx={{ p: 1.5, borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Box sx={{ color: '#10b981', bgcolor: '#ecfdf5', p: 0.5, borderRadius: 1, display: 'flex' }}>
          <Icon sx={{ fontSize: 16 }} />
        </Box>
        <Typography sx={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>{title}</Typography>
      </Box>
      <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', mb: 0.5 }}>{value}</Typography>
      <Typography sx={{ fontSize: '0.55rem', color: '#10b981', fontWeight: 700 }}>{trend}</Typography>
    </Paper>
  );

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      {}
      <Box sx={{ pt: 4, pb: { xs: 8, md: 12 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: '#f8fafc', zIndex: 0, clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
        
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 }, position: 'relative', zIndex: 2 }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 6, '& .MuiBreadcrumbs-li': { fontSize: '0.85rem', fontWeight: 500 } }}>
            <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
            <Link component={RouterLink} to="/solutions" color="inherit" underline="hover">Solutions</Link>
            <Typography color="text.primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Ecommerce Management System</Typography>
          </Breadcrumbs>

          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
                Ecommerce<br/>
                <span style={{ color: '#10b981' }}>Management System</span>
              </Typography>
              <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Scale your online business with integrated product management, inventory tracking, and seamless order fulfillment.
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
                  { icon: <StorefrontOutlinedIcon />, title: "Omnichannel Selling" },
                  { icon: <Inventory2OutlinedIcon />, title: "Inventory Sync" },
                  { icon: <TrendingUpOutlinedIcon />, title: "Sales Analytics" },
                  { icon: <LanguageOutlinedIcon />, title: "Global Reach" }
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
              <Box sx={{ position: 'relative', width: '100%', pt: 4 }}>
                <Box sx={{ position: 'absolute', bottom: -20, left: -80, width: '500px', height: '400px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box component="img" src="https://placehold.co/500x400/1e293b/ffffff?text=Ecommerce+Sales+Dashboard" alt="Ecommerce Dashboard" sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} />
                </Box>
                
                <Paper elevation={24} sx={{ position: 'relative', zIndex: 2, p: 3, borderRadius: '16px', bgcolor: '#fff', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)', width: '95%', ml: 'auto' }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 3 }}><StatCard title="Total Orders" value="1,284" trend="+18.2% from last month" icon={ShoppingCartOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Active Customers" value="8,542" trend="+10.5% from last month" icon={PeopleAltOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Gross Sales" value="KES 12.8M" trend="+22.1% from last month" icon={TrendingUpOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Avg. Order Value" value="KES 4,500" trend="+4.2% from last month" icon={PaymentOutlinedIcon} /></Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={{ xs: 8 }}>
                      <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Sales Performance</Typography>
                        </Box>
                        <Box sx={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', minHeight: '120px' }}>
                          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
                            <path d="M0,38 L10,30 L20,35 L30,20 L40,25 L50,15 L60,18 L70,10 L80,12 L90,5 L100,2" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </Box>
                      </Paper>
                    </Grid>
                    <Grid size={{ xs: 4 }}>
                      <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a', mb: 2 }}>Order Fulfillment</Typography>
                        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>98%</Typography>
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

      <Box sx={{ py: 10 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: '#3b82f6', fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', mb: 2 }}>CORE FEATURES</Typography>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>Everything you need to sell online</Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              { icon: <StorefrontOutlinedIcon />, title: "Storefront Management", desc: "Easily manage your online store's appearance and product listings." },
              { icon: <Inventory2OutlinedIcon />, title: "Inventory Control", desc: "Real-time stock tracking with automated low-stock alerts." },
              { icon: <LocalShippingOutlinedIcon />, title: "Order Fulfillment", desc: "Manage orders from placement to delivery with status tracking." },
              { icon: <PeopleAltOutlinedIcon />, title: "Customer Database", desc: "Detailed customer profiles and purchase history for personalized marketing." },
              { icon: <PaymentOutlinedIcon />, title: "Secure Payments", desc: "Integrated payment gateways for smooth and secure transactions." },
              { icon: <AssessmentOutlinedIcon />, title: "Business Intelligence", desc: "Comprehensive reports on sales, products, and customer behavior." }
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

      <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0f172a', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>Ecommerce Modules</Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              { icon: <DashboardOutlinedIcon />, title: "Sales Dashboard", desc: "Monitor your store performance in real-time." },
              { icon: <Inventory2OutlinedIcon />, title: "Product Catalog", desc: "Manage unlimited products and categories." },
              { icon: <ShoppingCartOutlinedIcon />, title: "Order Management", desc: "Process and fulfill customer orders efficiently." },
              { icon: <PeopleAltOutlinedIcon />, title: "Customer CRM", desc: "Manage relationships and customer loyalty." },
              { icon: <ReceiptLongOutlinedIcon />, title: "Invoicing & Billing", desc: "Automate tax calculation and billing." },
              { icon: <PaymentOutlinedIcon />, title: "Payment Integration", desc: "Accept payments from major providers." },
              { icon: <LocalShippingOutlinedIcon />, title: "Shipping & Logistics", desc: "Manage carriers and tracking information." },
              { icon: <TrendingUpOutlinedIcon />, title: "Marketing & SEO", desc: "Boost visibility and drive more traffic." },
              { icon: <AssessmentOutlinedIcon />, title: "Analytics Reports", desc: "Deep dive into your business data." },
              { icon: <NotificationsActiveOutlinedIcon />, title: "Smart Alerts", desc: "Stay informed about important events." },
              { icon: <LanguageOutlinedIcon />, title: "Multi-Currency", desc: "Sell globally with multi-currency support." },
              { icon: <SecurityIcon />, title: "Fraud Protection", desc: "Keep your store and customers secure." }
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
            background: `linear-gradient(90deg, #1e3a8a 0%, #1e40af 100%)`,
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
                <StorefrontOutlinedIcon sx={{ color: '#fff', fontSize: 32 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ color: '#fff', mb: 1, fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' } }}>Ready to Scale Your Online Store?</Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem' }}>Get the tools you need to grow your ecommerce business today.</Typography>
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
