import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  alpha
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';

export default function Solutions() {
  const theme = useTheme();
  const [activeFilter, setActiveFilter] = useState('All Solutions');

  const filters = ['All Solutions', 'Real Estate', 'Agriculture', 'E-Commerce', 'Procurement', 'Retail & POS', 'Custom Development'];

  const solutions = [
    {
      title: "Real Estate Management Application",
      category: "Real Estate",
      desc: "Manage properties, tenants, leases, payments and maintenance efficiently in one place.",
      emoji: "🏠",
      color: "#ecfdf5",
      features: ['Property & Unit Management', 'Tenant & Lease Management', 'Rent Collection & Payments', 'Maintenance & Service Requests'],
      path: "/solutions/real-estate"
    },
    {
      title: "Poultry Management System",
      category: "Agriculture",
      desc: "Track flock, feed, health, egg production and sales in real-time for maximum efficiency.",
      emoji: "🐔",
      color: "#ecfdf5",
      features: ['Flock Management', 'Feed & Inventory Tracking', 'Health & Vaccination Records', 'Egg Production & Sales'],
      path: "/solutions/poultry"
    },
    {
      title: "Ecommerce Management System",
      category: "E-Commerce",
      desc: "Manage products, orders, inventory, customers and sales across multiple channels.",
      emoji: "🛒",
      color: "#ecfdf5",
      features: ['Product & Inventory Management', 'Order & Delivery Management', 'Customer Management', 'Sales Analytics & Reports'],
      path: "/solutions/ecommerce"
    },
    {
      title: "Procurement & Order Management System",
      category: "Procurement",
      desc: "Streamline procurement, track orders, manage suppliers and ensure timely deliveries.",
      emoji: "📦",
      color: "#ecfdf5",
      features: ['Purchase Requisitions', 'Supplier Management', 'Order Tracking & Approvals', 'Reports & Analytics'],
      path: "/solutions/procurement"
    },
    {
      title: "Point of Sale (POS) System",
      category: "Retail & POS",
      desc: "Fast and secure POS for retail and hospitality with offline support and sync.",
      emoji: "💳",
      color: "#ecfdf5",
      features: ['Touch-optimized Register', 'Inventory Sync', 'Offline Sales Mode', 'M-Pesa Integration'],
      path: "/solutions/pos"
    },
    {
      title: "Custom Solution",
      category: "Custom Development",
      desc: "Have a unique business need? We can build a custom SaaS solution tailored for your business.",
      emoji: "✨",
      isAdd: true,
      features: ['Custom Development', 'Scalable & Secure', 'Industry Best Practices', 'Ongoing Support'],
      path: "/solutions/custom"
    }
  ];

  const filteredSolutions = activeFilter === 'All Solutions' 
    ? solutions 
    : solutions.filter(sol => sol.category === activeFilter);

   const SolutionCard = ({ title, desc, emoji, features, color = '#ecfdf5', isAdd = false, path }: { title: string, desc: string, emoji?: any, features: string[], color?: string, isAdd?: boolean, path?: string }) => (
    <Card elevation={0} sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      border: '1px solid #e2e8f0', 
      borderRadius: '24px',
      overflow: 'hidden',
      transition: 'all 0.3s', 
      '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' } 
    }}>
      <Box sx={{ 
        height: '160px', 
        bgcolor: isAdd ? theme.palette.background.default : color, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative'
      }}>
        {isAdd ? (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ width: 60, height: 60, borderRadius: '16px', bgcolor: theme.palette.primary.main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AddIcon sx={{ fontSize: 32, color: '#fff' }} />
            </Box>
          </Box>
        ) : (
          <Typography sx={{ fontSize: '4.5rem', filter: 'drop-shadow(0px 10px 10px rgba(0,0,0,0.1))' }}>{emoji}</Typography>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ mb: 1.5, fontSize: '1.1rem', fontWeight: 800, color: theme.palette.text.primary, lineHeight: 1.3 }}>{title}</Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6, mb: 3, fontSize: '0.85rem' }}>{desc}</Typography>
        
        <List disablePadding sx={{ mb: 3, flexGrow: 1 }}>
          {features.map((feat, i) => (
            <ListItem disableGutters disablePadding key={i} sx={{ mb: 1, alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ minWidth: 24, mt: 0.2 }}>
                <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500, fontSize: '0.8rem', lineHeight: 1.3 }}>{feat}</Typography>} 
              />
            </ListItem>
          ))}
        </List>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto', pt: 2, borderTop: '1px solid #f1f5f9' }}>
          <Button 
            component={RouterLink} 
            to={path || '/contact'} 
            size="small" 
            sx={{ fontWeight: 700, fontSize: '0.8rem', color: theme.palette.primary.main, p: 0, minWidth: 0, textTransform: 'none' }} 
            endIcon={<ArrowForwardIcon fontSize="small" />}
          >
            {isAdd ? 'Get in Touch' : 'Learn More'}
          </Button>
          <Button 
            component={RouterLink}
            to="/contact"
            variant="outlined" 
            size="small" 
            sx={{ borderColor: '#e2e8f0', color: theme.palette.primary.main, borderRadius: '8px', textTransform: 'none', fontWeight: 600, fontSize: '0.75rem', px: 1.5 }}
          >
            Request Demo
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

   const TrustBadge = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
     <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 2 }}>
       <Box sx={{ color: theme.palette.primary.main, bgcolor: alpha(theme.palette.primary.main, 0.1), p: 1.5, borderRadius: '12px', display: 'flex' }}>
         {icon}
       </Box>
       <Box>
         <Typography variant="subtitle2" sx={{ fontWeight: 800, color: theme.palette.text.primary, fontSize: '0.9rem', mb: 0.5 }}>{title}</Typography>
         <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.8rem', lineHeight: 1.5 }}>{desc}</Typography>
       </Box>
     </Box>
   );

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#f8fafc', minHeight: '100vh', pb: 10 }}>
      {}
      <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 8 }, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', opacity: 0.4, background: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 }, position: 'relative', zIndex: 2 }}>
          <Box sx={{ maxWidth: '800px' }}>
            <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem' }}>
              OUR SOLUTIONS
            </Typography>
             <Typography variant="h1" sx={{ mt: 2, mb: 3, fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, lineHeight: 1.1, color: theme.palette.text.primary }}>
               Smart Solutions for Every Industry
             </Typography>
             <Typography variant="h6" sx={{ color: theme.palette.text.secondary, fontSize: '1.125rem', lineHeight: 1.6, fontWeight: 400, maxWidth: '600px' }}>
               Explore our industry-focused SaaS solutions designed to help you streamline operations, boost productivity, and grow your business.
             </Typography>
          </Box>
        </Container>
      </Box>

      {}
      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 }, mt: -3, position: 'relative', zIndex: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 3, mb: 6 }}>
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
            {filters.map((filter, idx) => (
              <Button 
                key={idx} 
                variant={activeFilter === filter ? 'contained' : 'outlined'} 
                color={activeFilter === filter ? 'primary' : 'inherit'}
                onClick={() => setActiveFilter(filter)}
                sx={{ 
                  borderRadius: '20px', 
                  px: 3, 
                  py: 1, 
                  textTransform: 'none', 
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  ...(activeFilter !== filter && { 
                    borderColor: '#cbd5e1', 
                    color: '#64748b',
                    bgcolor: '#fff',
                    '&:hover': { borderColor: '#94a3b8', bgcolor: '#f8fafc' } 
                  })
                }}
              >
                {filter}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ fontWeight: 600, color: '#0f172a', fontSize: '0.9rem' }}>View:</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ bgcolor: '#dcfce7', color: theme.palette.primary.main, borderRadius: '8px', p: 1 }}>
                <GridViewIcon />
              </IconButton>
              <IconButton sx={{ bgcolor: '#fff', color: '#64748b', border: '1px solid #e2e8f0', borderRadius: '8px', p: 1 }}>
                <ViewListIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {filteredSolutions.map((sol, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
              <SolutionCard 
                title={sol.title} 
                desc={sol.desc}
                emoji={sol.emoji}
                color={sol.color}
                features={sol.features}
                path={sol.path}
                isAdd={sol.isAdd}
              />
            </Grid>
          ))}
          {filteredSolutions.length === 0 && (
            <Grid size={{ xs: 12 }}>
              <Box sx={{ textAlign: 'center', py: 10, bgcolor: '#fff', borderRadius: '24px', border: '1px dashed #cbd5e1' }}>
                <Typography variant="h6" sx={{ color: '#64748b' }}>No solutions found in this category. Check back soon!</Typography>
                <Button onClick={() => setActiveFilter('All Solutions')} sx={{ mt: 2, textTransform: 'none', fontWeight: 700 }}>Show All Solutions</Button>
              </Box>
            </Grid>
          )}
        </Grid>

        {}
        <Box sx={{ bgcolor: '#fff', borderRadius: '24px', p: 4, border: '1px solid #e2e8f0', mb: 10, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.02)' }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
              <TrustBadge icon={<VerifiedUserOutlinedIcon />} title="Secure & Reliable" desc="Enterprise-grade security you can trust." />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
              <TrustBadge icon={<ShowChartOutlinedIcon />} title="Scalable Platform" desc="Built to grow with your business." />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
              <TrustBadge icon={<CloudOutlinedIcon />} title="99.9% Uptime" desc="High availability and performance." />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
              <TrustBadge icon={<SupportAgentOutlinedIcon />} title="24/7 Support" desc="Always here when you need us." />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
              <TrustBadge icon={<ExtensionOutlinedIcon />} title="Seamless Integration" desc="Works with your existing tools and systems." />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
              <TrustBadge icon={<AssessmentOutlinedIcon />} title="Real-time Analytics" desc="Make data-driven decisions with confidence." />
            </Grid>
          </Grid>
        </Box>

        {}
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
         <Box>
           <Typography variant="h4" sx={{ color: '#fff', mb: 1, fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>Not Sure Which Solution Fits You Best?</Typography>
           <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem' }}>Talk to our experts and find the perfect solution for your business.</Typography>
         </Box>

         <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, width: { xs: '100%', md: 'auto' } }}>
           <Button component={RouterLink} to="/contact" variant="contained" size="large" sx={{ bgcolor: '#fff', color: theme.palette.text.primary, fontWeight: 800, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', textTransform: 'none', '&:hover': { bgcolor: '#f1f5f9' } }}>
             Talk to an Expert
           </Button>
           <Button component={RouterLink} to="/contact" variant="contained" color="primary" size="large" sx={{ fontWeight: 800, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', textTransform: 'none' }}>
             Book a Demo
           </Button>
         </Box>
        </Box>
      </Container>
    </Box>
  );
}
