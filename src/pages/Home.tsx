import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  useTheme,
  IconButton,
  alpha
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';


import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import HeroDashboardMockup from '../components/HeroDashboardMockup';

export default function Home() {
  const theme = useTheme();

  const TrustBadge = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 1.5, maxWidth: '200px' }}>
      <Box sx={{ color: theme.palette.primary.main, display: 'flex', pt: 0.5 }}>{icon}</Box>
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: theme.palette.text.primary, fontSize: '0.875rem' }}>{title}</Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.75rem', lineHeight: 1.4 }}>{desc}</Typography>
      </Box>
    </Box>
  );

   const SolutionCard = ({ title, desc, emoji, isAdd, path, color = theme.palette.info.light }: { title: string, desc: string, emoji?: string, isAdd?: boolean, path: string, color?: string }) => (
    <Card elevation={0} sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      border: '1px solid #e2e8f0', 
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s', 
      '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px -10px rgba(0,0,0,0.1)' } 
    }}>
      <Box sx={{ 
        height: '140px', 
        bgcolor: isAdd ? theme.palette.background.default : color, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative'
      }}>
        {isAdd ? (
          <Box sx={{ width: 60, height: 60, borderRadius: '50%', border: `2px dashed ${theme.palette.primary.main}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AddIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
          </Box>
        ) : (
          <Typography sx={{ fontSize: '4rem' }}>{emoji}</Typography>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 4, pb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1.5, fontSize: '1.25rem', fontWeight: 800, color: theme.palette.text.primary }}>{title}</Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7, mb: 4, fontSize: '0.95rem' }}>{desc}</Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
          <Button 
            component={RouterLink}
            to={path}
            size="medium" 
            sx={{ fontWeight: 700, fontSize: '0.9rem', color: theme.palette.primary.main, p: 0, '&:hover': { bgcolor: 'transparent', color: theme.palette.primary.dark } }} 
            endIcon={<ArrowForwardIcon />}
          >
            {isAdd ? 'Get in Touch' : 'Explore'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  const ModuleBadge = ({ icon, title, color }: { icon: React.ReactNode, title: string, color: string }) => (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2.5, 
      p: 2.5, 
      bgcolor: '#fff', 
      borderRadius: '16px', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
      border: '1px solid #f8fafc',
      transition: 'transform 0.2s',
      '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }
    }}>
      <Box sx={{ 
        color: color, 
        bgcolor: `${color}15`, 
        p: 1.5, 
        borderRadius: '10px', 
        display: 'flex' 
      }}>
        {icon}
      </Box>
      <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>{title}</Typography>
    </Box>
  );

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {}
      <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 6 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: '15%', right: '5%', width: 80, height: 80, borderRadius: '20px', bgcolor: theme.palette.info.main, opacity: 0.05, transform: 'rotate(15deg)' }} />
        <Box sx={{ position: 'absolute', bottom: '10%', left: '2%', width: 120, height: 120, borderRadius: '50%', bgcolor: theme.palette.primary.main, opacity: 0.03 }} />

        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5.5 }} sx={{ pr: { md: 2 } }}>
              <Box sx={{ display: 'inline-block', bgcolor: theme.palette.primary.light, color: theme.palette.primary.main, px: 2, py: 0.5, borderRadius: '20px', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 3 }}>
                ALL-IN-ONE SAAS PLATFORM
              </Box>
               <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: theme.palette.text.primary }}>
                 All Your Business Systems.<br />
                 <span style={{ color: theme.palette.primary.main }}>One Powerful Platform.</span>
               </Typography>
               <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, color: theme.palette.text.secondary, fontSize: '1rem', lineHeight: 1.6, maxWidth: '90%' }}>
                 Trinity Softwares provides integrated SaaS solutions that help businesses automate, manage, and grow smarter.
               </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 6, flexWrap: 'wrap' }}>
                <Button variant="contained" component={RouterLink} to="/pricing" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 600 }}>
                  Get Started Free
                </Button>
                <Button variant="outlined" component={RouterLink} to="/contact" size="large" startIcon={<PlayArrowIcon />} sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 600, color: '#0f172a', borderColor: '#cbd5e1', '&:hover': { borderColor: '#94a3b8', bgcolor: '#f8fafc' } }}>
                  Book a Demo
                </Button>
              </Box>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TrustBadge icon={<VerifiedUserOutlinedIcon />} title="Secure & Reliable" desc="Enterprise-grade security you can trust" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TrustBadge icon={<AutorenewOutlinedIcon />} title="99.9% Uptime" desc="High availability and performance" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TrustBadge icon={<ShowChartOutlinedIcon />} title="Scalable Platform" desc="Built to grow with your business" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TrustBadge icon={<SupportAgentOutlinedIcon />} title="24/7 Support" desc="Always here when you need us" />
                </Grid>
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 6.5 }} sx={{ position: 'relative', minHeight: { xs: 400, md: 600 } }}>
              <Box sx={{ position: 'relative', zIndex: 2, pl: { md: 4 }, width: '100%', height: '100%' }}>
                <HeroDashboardMockup />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>Our Solutions</Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1rem' }}>Industry-focused SaaS solutions to simplify and scale your operations.</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <IconButton size="small" sx={{ bgcolor: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', p: 1, '&:hover': { bgcolor: '#f8fafc', transform: 'scale(1.05)' }, transition: 'all 0.2s', display: { xs: 'none', md: 'flex' } }}>
              <ChevronLeftIcon />
            </IconButton>
            
               <Grid container spacing={4} sx={{ flexGrow: 1 }}>
               <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                 <SolutionCard 
                   title="Real Estate Management" 
                   desc="Manage properties, tenants, leases, payments and maintenance efficiently."
                   emoji="🏠"
                   path="/solutions/real-estate"
                   color={theme.palette.info.light}
                 />
               </Grid>
               <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                 <SolutionCard 
                   title="Poultry Management System" 
                   desc="Track flock, feed, health, egg production and sales in real-time."
                   emoji="🐔"
                   path="/solutions/poultry"
                   color="#ecfdf5"
                 />
               </Grid>
               <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                 <SolutionCard 
                   title="Ecommerce Management" 
                   desc="Manage products, orders, inventory, customers and sales across channels."
                   emoji="🛒"
                   path="/solutions/ecommerce"
                   color="#ecfdf5"
                 />
               </Grid>
               <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                 <SolutionCard 
                   title="Point of Sale (POS)" 
                   desc="Fast and secure checkout for retail, hospitality and service businesses."
                   emoji="💳"
                   path="/solutions/pos"
                   color="#ecfdf5"
                 />
               </Grid>
               <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                 <SolutionCard 
                   title="Procurement & Order Management" 
                   desc="Streamline procurement, track orders, manage suppliers and delivery."
                   emoji="📦"
                   path="/solutions/procurement"
                   color="#ecfdf5"
                 />
               </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                <SolutionCard 
                  title="Add New Solution" 
                  desc="Have a unique business need? We can build a custom SaaS solution for you."
                  isAdd
                  path="/contact"
                />
              </Grid>
            </Grid>

            <IconButton size="small" sx={{ bgcolor: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', p: 1, '&:hover': { bgcolor: '#f8fafc', transform: 'scale(1.05)' }, transition: 'all 0.2s', display: { xs: 'none', md: 'flex' } }}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Button component={RouterLink} to="/solutions" endIcon={<ArrowForwardIcon />} size="medium" sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#10b981', textTransform: 'none' }}>View All Solutions</Button>
          </Box>
        </Container>
      </Box>

      {}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>Powerful Modules</Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1rem' }}>Everything you need to run and grow your business.</Typography>
          </Box>

          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {[
               { icon: <GroupOutlinedIcon />, title: "Customer Management", color: '#10b981' },
               { icon: <PaymentOutlinedIcon />, title: "Subscriptions", color: '#10b981' },
               { icon: <ReceiptOutlinedIcon />, title: "Invoicing", color: '#10b981' },
               { icon: <AssessmentOutlinedIcon />, title: "Reports & Analytics", color: '#10b981' },
               { icon: <SettingsOutlinedIcon />, title: "Reports & Configuration", color: '#10b981' },
               { icon: <GppGoodOutlinedIcon />, title: "Roles & Permissions", color: '#10b981' },
               { icon: <NotificationsNoneOutlinedIcon />, title: "Notifications", color: '#10b981' },
               { icon: <DashboardCustomizeOutlinedIcon />, title: "Integrations", color: '#10b981' }
            ].map((mod, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <ModuleBadge icon={mod.icon} title={mod.title} color={mod.color} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Button component={RouterLink} to="/modules" endIcon={<ArrowForwardIcon />} size="medium" sx={{ fontWeight: 700, fontSize: '0.9rem', color: theme.palette.info.main, textTransform: 'none' }}>View All Modules</Button>
          </Box>
        </Container>
      </Box>

      {}
      <Box sx={{ pb: { xs: 6, md: 8 }, pt: { xs: 4, md: 6 }, bgcolor: '#f8fafc' }}>
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center', sm: 'left' } }}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: '50%', display: 'flex', backdropFilter: 'blur(10px)' }}>
                <RocketLaunchIcon sx={{ color: '#fff', fontSize: 32 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ color: '#fff', mb: 1, fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' } }}>Ready to Transform Your Business?</Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem' }}>Join thousands of businesses already growing with Trinity Softwares.</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, width: { xs: '100%', md: 'auto' } }}>
              <Button component={RouterLink} to="/pricing" variant="contained" size="medium" sx={{ bgcolor: '#fff', color: theme.palette.text.primary, fontWeight: 700, fontSize: '0.9rem', px: 4, py: 1.5, borderRadius: '8px', '&:hover': { bgcolor: '#f1f5f9' } }}>
                Get Started Free
              </Button>
              <Button component={RouterLink} to="/contact" variant="outlined" size="medium" sx={{ color: '#fff', borderColor: theme.palette.primary.main, fontWeight: 700, fontSize: '0.9rem', px: 4, py: 1.5, borderRadius: '8px', '&:hover': { borderColor: theme.palette.primary.light, bgcolor: alpha(theme.palette.primary.main, 0.1) } }}>
                Talk to Sales
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
