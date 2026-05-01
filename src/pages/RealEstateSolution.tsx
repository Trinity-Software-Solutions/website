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


import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export default function RealEstateSolution() {
  const theme = useTheme();

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
        {}
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: '#f8fafc', zIndex: 0, clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
        
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 }, position: 'relative', zIndex: 2 }}>
          {}
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 6, '& .MuiBreadcrumbs-li': { fontSize: '0.85rem', fontWeight: 500 } }}>
            <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
            <Link component={RouterLink} to="/solutions" color="inherit" underline="hover">Solutions</Link>
            <Typography color="text.primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Real Estate Management Application</Typography>
          </Breadcrumbs>

          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            {}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
                Real Estate<br/>
                <span style={{ color: theme.palette.primary.main }}>Management Application</span>
              </Typography>
              <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Manage properties, tenants, leases, payments and maintenance efficiently in one integrated platform.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 8, flexWrap: 'wrap' }}>
                <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700, textTransform: 'none' }}>
                  Request Demo
                </Button>
                <Button variant="outlined" size="large" startIcon={<PlayArrowIcon />} sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700, color: '#0f172a', borderColor: '#cbd5e1', textTransform: 'none', '&:hover': { borderColor: '#94a3b8', bgcolor: '#f8fafc' } }}>
                  Watch Overview
                </Button>
              </Box>

              {}
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                {[
                  { icon: <DynamicFeedIcon />, title: "Centralized Property Data" },
                  { icon: <SecurityIcon />, title: "Secure & Compliant" },
                  { icon: <AutoGraphIcon />, title: "Real-time Insights" },
                  { icon: <SyncAltIcon />, title: "Automated Workflows" }
                ].map((badge, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ color: theme.palette.primary.main, display: 'flex' }}>
                      {badge.icon}
                    </Box>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155', maxWidth: '80px', lineHeight: 1.2 }}>{badge.title}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ position: 'relative', width: '100%', pt: 4 }}>
                {}
                <Box sx={{
                  position: 'absolute',
                  bottom: -20,
                  left: -80,
                  width: '500px',
                  height: '400px',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box
                    component="img"
                    src="https://placehold.co/500x400/1e293b/ffffff?text=Real+Estate+Built+Dashboard&font=roboto"
                    alt="Real Estate Dashboard"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                  />
                </Box>
                
                {}
                <Paper elevation={24} sx={{ position: 'relative', zIndex: 2, p: 3, borderRadius: '16px', bgcolor: '#fff', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)', width: '95%', ml: 'auto' }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 3 }}><StatCard title="Total Properties" value="256" trend="+12.5% from last month" icon={HomeWorkOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Total Tenants" value="423" trend="+8.4% from last month" icon={PeopleAltOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Monthly Revenue" value="KES 2.45M" trend="+15.3% from last month" icon={AttachMoneyOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Occupancy Rate" value="92%" trend="+5.6% from last month" icon={AssessmentOutlinedIcon} /></Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={{ xs: 8 }}>
                      <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Revenue Overview</Typography>
                          <Typography sx={{ fontSize: '0.65rem', color: '#64748b', border: '1px solid #e2e8f0', borderRadius: 1, px: 1, py: 0.5 }}>This Year</Typography>
                        </Box>
                        <Box sx={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', minHeight: '120px' }}>
                          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
                            <path d="M0,35 L10,32 L20,30 L30,28 L40,25 L50,26 L60,20 L70,22 L80,15 L90,12 L100,8" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="10" cy="32" r="2" fill="#3b82f6" /><circle cx="20" cy="30" r="2" fill="#3b82f6" />
                            <circle cx="30" cy="28" r="2" fill="#3b82f6" /><circle cx="40" cy="25" r="2" fill="#3b82f6" />
                            <circle cx="50" cy="26" r="2" fill="#3b82f6" /><circle cx="60" cy="20" r="2" fill="#3b82f6" />
                            <circle cx="70" cy="22" r="2" fill="#3b82f6" /><circle cx="80" cy="15" r="2" fill="#3b82f6" />
                            <circle cx="90" cy="12" r="2" fill="#3b82f6" /><circle cx="100" cy="8" r="2" fill="#3b82f6" />
                          </svg>
                        </Box>
                      </Paper>
                    </Grid>
                    <Grid size={{ xs: 4 }}>
                      <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a', mb: 2 }}>Property Status</Typography>
                        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: '120px' }}>
                          <svg width="100" height="100" viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="6" />
                            <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#10b981" strokeWidth="6" strokeDasharray="62 38" strokeDashoffset="25" />
                            <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#3b82f6" strokeWidth="6" strokeDasharray="25 75" strokeDashoffset="-37" />
                            <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#f59e0b" strokeWidth="6" strokeDasharray="10 90" strokeDashoffset="-62" />
                            <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#ef4444" strokeWidth="6" strokeDasharray="3 97" strokeDashoffset="-72" />
                          </svg>
                          <Box sx={{ position: 'absolute', textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, lineHeight: 1 }}>256</Typography>
                            <Typography sx={{ fontSize: '0.5rem', color: '#64748b' }}>Total</Typography>
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

      {}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', mb: 2 }}>KEY CAPABILITIES</Typography>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>Everything you need to streamline your real estate operations</Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              { icon: <HomeWorkOutlinedIcon />, title: "Property Management", desc: "Manage residential, commercial and industrial properties with ease." },
              { icon: <PeopleAltOutlinedIcon />, title: "Tenant Management", desc: "Store tenant information, lease agreements, documents and communication." },
              { icon: <ArticleOutlinedIcon />, title: "Lease & Contract Management", desc: "Create, track and manage leases, renewals and contract terms." },
              { icon: <AccountBalanceWalletOutlinedIcon />, title: "Rent Collection", desc: "Automate rent collection, invoices, receipts and payment tracking." },
              { icon: <BuildOutlinedIcon />, title: "Maintenance Management", desc: "Track maintenance requests, assign tasks and monitor completion." },
              { icon: <AssessmentOutlinedIcon />, title: "Reports & Analytics", desc: "Get real-time insights and analytics to make data-driven decisions." }
            ].map((cap, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #f1f5f9', display: 'flex', gap: 2, height: '100%', transition: 'all 0.2s', '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderColor: '#e2e8f0' } }}>
                  <Box sx={{ color: '#10b981', bgcolor: '#ecfdf5', p: 1.5, borderRadius: '12px', display: 'flex', alignItems: 'flex-start', height: 'fit-content' }}>
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

      {}
      <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0f172a', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>All Real Estate Modules</Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              { icon: <DashboardOutlinedIcon />, title: "Dashboard", desc: "Overview of key metrics and performance." },
              { icon: <HomeWorkOutlinedIcon />, title: "Property Management", desc: "Manage all your properties in one place." },
              { icon: <PersonOutlineOutlinedIcon />, title: "Tenant Management", desc: "Manage tenants and their lease agreements." },
              { icon: <ArticleOutlinedIcon />, title: "Lease Management", desc: "Track leases, renewals and expirations." },
              { icon: <ReceiptLongOutlinedIcon />, title: "Rent & Billing", desc: "Generate invoices and track payments." },
              { icon: <AttachMoneyOutlinedIcon />, title: "Payment Collection", desc: "Record and manage rent payments easily." },
              { icon: <BuildOutlinedIcon />, title: "Maintenance Management", desc: "Manage maintenance requests and tasks." },
              { icon: <DescriptionOutlinedIcon />, title: "Document Management", desc: "Store and manage all property documents." },
              { icon: <AccountBalanceWalletOutlinedIcon />, title: "Expense Management", desc: "Track property expenses and budgets." },
              { icon: <AssessmentOutlinedIcon />, title: "Reports & Analytics", desc: "Powerful reports and business insights." },
              { icon: <NotificationsActiveOutlinedIcon />, title: "Notifications", desc: "Send automated alerts and reminders." },
              { icon: <PeopleAltOutlinedIcon />, title: "User Management", desc: "Manage users and access permissions." }
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

      {}
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
                <HomeWorkOutlinedIcon sx={{ color: '#fff', fontSize: 32 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ color: '#fff', mb: 1, fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' } }}>Ready to Simplify Your Real Estate Operations?</Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem' }}>Join hundreds of real estate businesses already using Trinity Softwares.</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', md: 'auto' } }}>
              <Button variant="contained" size="large" sx={{ bgcolor: '#fff', color: '#0f172a', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '8px', textTransform: 'none', '&:hover': { bgcolor: '#f1f5f9' } }}>
                Request Demo
              </Button>
              <Button variant="outlined" size="large" sx={{ color: '#fff', borderColor: '#10b981', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '8px', textTransform: 'none', '&:hover': { borderColor: '#34d399', bgcolor: 'rgba(16, 185, 129, 0.1)' } }}>
                Talk to Sales
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
