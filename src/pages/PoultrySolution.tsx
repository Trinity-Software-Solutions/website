import React from 'react';
import { 
  Container, Typography, Box, Button, Grid, Paper, useTheme, Breadcrumbs, Link
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';

export default function PoultrySolution() {
  const theme = useTheme();

  const StatCard = ({ title, value, trend, icon: Icon }: { title: string, value: string, trend: string, icon: any }) => (
    <Paper elevation={0} sx={{ p: 1, borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Box sx={{ color: '#10b981', bgcolor: '#ecfdf5', p: 0.5, borderRadius: 1, display: 'flex' }}>
          <Icon sx={{ fontSize: 14 }} />
        </Box>
        <Typography sx={{ fontSize: '0.6rem', color: '#64748b', fontWeight: 600 }}>{title}</Typography>
      </Box>
      <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', mb: 0.5 }}>{value}</Typography>
      <Typography sx={{ fontSize: '0.5rem', color: '#10b981', fontWeight: 700 }}>{trend}</Typography>
    </Paper>
  );

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      {}
      <Box sx={{ pt: 4, pb: { xs: 8, md: 12 }, position: 'relative' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 }, position: 'relative', zIndex: 2 }}>
          {}
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 6, '& .MuiBreadcrumbs-li': { fontSize: '0.85rem', fontWeight: 500 } }}>
            <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
            <Link component={RouterLink} to="/solutions" color="inherit" underline="hover">Solutions</Link>
            <Typography color="text.primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Poultry Management System</Typography>
          </Breadcrumbs>

          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            {}
            <Grid size={{ xs: 12, md: 4.5 }}>
              <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.75rem' }}>
                POULTRY MANAGEMENT SYSTEM
              </Typography>
              <Typography variant="h1" sx={{ mt: 1, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
                Poultry<br/>
                <span style={{ color: theme.palette.primary.main }}>Management System</span>
              </Typography>
              <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, color: '#475569', fontSize: '1rem', lineHeight: 1.6 }}>
                Track flock, feed, health, egg production and sales in real-time for maximum efficiency and profitability.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 6, flexWrap: 'wrap' }}>
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
                  { icon: <PetsOutlinedIcon />, title: "Real-time Flock Tracking" },
                  { icon: <MonitorHeartOutlinedIcon />, title: "Health Monitoring" },
                  { icon: <ScaleOutlinedIcon />, title: "Feed & Inventory Management" },
                  { icon: <ShowChartOutlinedIcon />, title: "Production Analytics" },
                  { icon: <AttachMoneyOutlinedIcon />, title: "Profitability Insights" }
                ].map((badge, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ color: theme.palette.primary.main, display: 'flex' }}>
                      {badge.icon}
                    </Box>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: '#334155', maxWidth: '70px', lineHeight: 1.2 }}>{badge.title}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {}
            <Grid size={{ xs: 12, md: 7.5 }}>
              <Box sx={{ position: 'relative', width: '100%', pt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                
                {}
                <Box sx={{
                  position: 'absolute',
                  left: '-10%',
                  top: '20%',
                  width: '300px',
                  height: '300px',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box
                    component="img"
                    src="https://placehold.co/300x300/0f172a/ffffff?text=Poultry+Analytics&font=roboto"
                    alt="Poultry Dashboard"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
                    }}
                  />
                </Box>
                
                {}
                <Paper elevation={24} sx={{ position: 'relative', zIndex: 2, p: 2, borderRadius: '16px', bgcolor: '#fff', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', width: '85%' }}>
                  <Grid container spacing={1.5}>
                    <Grid size={{ xs: 2.4 }}><StatCard title="Total Flocks" value="24" trend="+14.3% from last month" icon={PetsOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 2.4 }}><StatCard title="Total Birds" value="12,450" trend="+8.8% from last month" icon={PetsOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 2.4 }}><StatCard title="Eggs Today" value="9,856" trend="+12.7% from yesterday" icon={EggOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 2.4 }}><StatCard title="Feed Stock" value="3,256 kg" trend="+5.2% from last week" icon={ScaleOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 2.4 }}><StatCard title="Monthly Revenue" value="KES 1.85M" trend="+15.2% from last month" icon={AttachMoneyOutlinedIcon} /></Grid>
                  </Grid>

                  <Grid container spacing={1.5} sx={{ mt: 1 }}>
                    <Grid size={{ xs: 8 }}>
                      <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Production Overview</Typography>
                          <Typography sx={{ fontSize: '0.65rem', color: '#64748b', border: '1px solid #e2e8f0', borderRadius: 1, px: 1, py: 0.5 }}>This Month</Typography>
                        </Box>
                        <Box sx={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', minHeight: '120px' }}>
                          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
                            <path d="M0,25 L10,22 L20,30 L30,28 L40,25 L50,26 L60,15 L70,22 L80,18 L90,12 L100,5" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="10" cy="22" r="2" fill="#3b82f6" /><circle cx="20" cy="30" r="2" fill="#3b82f6" />
                            <circle cx="30" cy="28" r="2" fill="#3b82f6" /><circle cx="40" cy="25" r="2" fill="#3b82f6" />
                            <circle cx="50" cy="26" r="2" fill="#3b82f6" /><circle cx="60" cy="15" r="2" fill="#3b82f6" />
                            <circle cx="70" cy="22" r="2" fill="#3b82f6" /><circle cx="80" cy="18" r="2" fill="#3b82f6" />
                            <circle cx="90" cy="12" r="2" fill="#3b82f6" /><circle cx="100" cy="5" r="2" fill="#3b82f6" />
                          </svg>
                        </Box>
                      </Paper>
                    </Grid>
                    <Grid size={{ xs: 4 }}>
                      <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a', mb: 2 }}>Flock Distribution</Typography>
                        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: '120px' }}>
                          <svg width="100" height="100" viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="6" />
                            <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#3b82f6" strokeWidth="6" strokeDasharray="50 50" strokeDashoffset="25" />
                            <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#10b981" strokeWidth="6" strokeDasharray="25 75" strokeDashoffset="-25" />
                            <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#f59e0b" strokeWidth="6" strokeDasharray="17 83" strokeDashoffset="-50" />
                            <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#8b5cf6" strokeWidth="6" strokeDasharray="8 92" strokeDashoffset="-67" />
                          </svg>
                          <Box sx={{ position: 'absolute', textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, lineHeight: 1 }}>24</Typography>
                            <Typography sx={{ fontSize: '0.5rem', color: '#64748b' }}>Total Flocks</Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>

                  {}
                  <Paper elevation={0} sx={{ mt: 1.5, p: 1.5, borderRadius: 2, border: '1px solid #e2e8f0' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                      <Typography sx={{ fontSize: '0.65rem', fontWeight: 800 }}>Recent Alerts</Typography>
                      <Typography sx={{ fontSize: '0.6rem', color: '#3b82f6' }}>View All Alerts →</Typography>
                    </Box>
                    <Grid container spacing={2}>
                      {[
                        { icon: ScienceOutlinedIcon, title: "Low Feed Stock", sub: "Layer Farm 1", color: '#ef4444' },
                        { icon: MonitorHeartOutlinedIcon, title: "Vaccination Due", sub: "Broiler Farm 2", color: '#3b82f6' },
                        { icon: NotificationsActiveOutlinedIcon, title: "High Mortality", sub: "Grower Farm", color: '#ef4444' },
                        { icon: AttachMoneyOutlinedIcon, title: "Payment Due", sub: "Supplier A", color: '#10b981' }
                      ].map((alert, i) => (
                        <Grid size={{ xs: 3 }} key={i}>
                          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Box sx={{ color: alert.color, display: 'flex' }}><alert.icon sx={{ fontSize: 16 }}/></Box>
                            <Box>
                              <Typography sx={{ fontSize: '0.55rem', fontWeight: 700, color: '#0f172a' }}>{alert.title}</Typography>
                              <Typography sx={{ fontSize: '0.5rem', color: '#64748b' }}>{alert.sub}</Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', mb: 1 }}>KEY CAPABILITIES</Typography>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>Everything you need to manage your poultry business efficiently</Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              { icon: <PetsOutlinedIcon />, title: "Flock Management", desc: "Manage all flocks, breeds, and age groups in one place." },
              { icon: <ScaleOutlinedIcon />, title: "Feed Management", desc: "Track feed inventory, consumption and optimize usage." },
              { icon: <MonitorHeartOutlinedIcon />, title: "Health Management", desc: "Monitor health, vaccination schedules and medical treatments." },
              { icon: <EggOutlinedIcon />, title: "Egg Production", desc: "Track daily egg production, quality and batch information." },
              { icon: <LocalShippingOutlinedIcon />, title: "Sales & Distribution", desc: "Manage sales, customers, deliveries and payments." },
              { icon: <ShowChartOutlinedIcon />, title: "Reports & Analytics", desc: "Get real-time insights and analytics to make better decisions." }
            ].map((cap, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #f1f5f9', display: 'flex', gap: 2, height: '100%', transition: 'all 0.2s', '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderColor: '#e2e8f0' } }}>
                  <Box sx={{ color: '#10b981', bgcolor: '#ecfdf5', p: 1.5, borderRadius: '12px', display: 'flex', alignItems: 'flex-start', height: 'fit-content' }}>
                    {cap.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: '1rem', color: '#0f172a', mb: 1 }}>{cap.title}</Typography>
                    <Typography sx={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6 }}>{cap.desc}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0f172a', fontSize: { xs: '1.5rem', md: '2rem' } }}>All Poultry Modules</Typography>
          </Box>

          <Grid container spacing={2.5}>
            {[
              { icon: <DashboardOutlinedIcon />, title: "Dashboard", desc: "Overview of key metrics and performance." },
              { icon: <PetsOutlinedIcon />, title: "Flock Management", desc: "Add, update and track all flocks." },
              { icon: <PeopleAltOutlinedIcon />, title: "Breed Management", desc: "Manage different breeds and categories." },
              { icon: <ScaleOutlinedIcon />, title: "Feed Management", desc: "Manage feed types, stock and suppliers." },
              { icon: <MonitorHeartOutlinedIcon />, title: "Health & Vaccination", desc: "Track health records, vaccinations and alerts." },
              { icon: <EggOutlinedIcon />, title: "Egg Production", desc: "Record and analyze daily egg production." },
              { icon: <Inventory2OutlinedIcon />, title: "Inventory Management", desc: "Manage feed, medicines and other inventory." },
              { icon: <AssignmentOutlinedIcon />, title: "Sales Management", desc: "Manage customers, orders and sales." },
              { icon: <AccountBalanceWalletOutlinedIcon />, title: "Expense Management", desc: "Track all expenses and operational costs." },
              { icon: <ShowChartOutlinedIcon />, title: "Reports & Analytics", desc: "Generate custom reports and business insights." },
              { icon: <NotificationsActiveOutlinedIcon />, title: "Notifications", desc: "Get alerts for important activities." },
              { icon: <PeopleAltOutlinedIcon />, title: "User Management", desc: "Manage users and access permissions." }
            ].map((mod, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <Paper elevation={0} sx={{ p: 2, borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: 2, height: '100%', bgcolor: '#fff' }}>
                  <Box sx={{ color: '#10b981', display: 'flex', alignItems: 'flex-start' }}>
                    {mod.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a', mb: 0.5 }}>{mod.title}</Typography>
                    <Typography sx={{ color: '#64748b', fontSize: '0.75rem', lineHeight: 1.4 }}>{mod.desc}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: 8, bgcolor: '#ffffff' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ 
            background: `linear-gradient(90deg, #0f172a 0%, #064e3b 100%)`,
            borderRadius: '24px', 
            p: { xs: 4, md: 5 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
            boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.2)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: '50%', display: 'flex', backdropFilter: 'blur(10px)' }}>
                <EggOutlinedIcon sx={{ color: '#fff', fontSize: 32 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ color: '#fff', mb: 1, fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>Ready to Optimize Your Poultry Operations?</Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem' }}>Join hundreds of poultry businesses already growing with Trinity Softwares.</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', md: 'auto' } }}>
              <Button variant="contained" size="large" sx={{ bgcolor: '#fff', color: '#0f172a', fontWeight: 700, fontSize: '0.9rem', px: 4, py: 1.5, borderRadius: '8px', textTransform: 'none', '&:hover': { bgcolor: '#f1f5f9' } }}>
                Request Demo
              </Button>
              <Button variant="outlined" size="large" sx={{ color: '#fff', borderColor: '#10b981', fontWeight: 700, fontSize: '0.9rem', px: 4, py: 1.5, borderRadius: '8px', textTransform: 'none', '&:hover': { borderColor: '#34d399', bgcolor: 'rgba(16, 185, 129, 0.1)' } }}>
                Talk to Sales
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
