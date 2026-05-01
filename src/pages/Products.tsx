import { Container, Typography, Box, Button, Grid, Card } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

export default function Products() {
  const products = [
    {
      title: 'Customer Management',
      desc: 'Centralize customer data, interactions, and relationship history.',
      icon: <ReceiptIcon />,
      color: '#10b981'
    },
    {
      title: 'Subscriptions & Billing',
      desc: 'Automate recurring billing, subscription tiers, and payment processing.',
      icon: <AssessmentIcon />,
      color: '#10b981'
    },
    {
      title: 'Reports & Analytics',
      desc: 'Gain insights with customizable dashboards and real-time analytics.',
      icon: <SettingsIcon />,
      color: '#10b981'
    },
    {
      title: 'Security & Compliance',
      desc: 'Enterprise-grade security with role-based access control and audit logs.',
      icon: <SecurityIcon />,
      color: '#10b981'
    },
    {
      title: 'Cloud Infrastructure',
      desc: 'Scalable cloud hosting with 99.9% uptime guarantee and automatic backups.',
      icon: <CloudIcon />,
      color: '#10b981'
    },
    {
      title: 'Integrations',
      desc: 'Connect with your favorite tools: Slack, Stripe, QuickBooks, and more.',
      icon: <IntegrationInstructionsIcon />,
      color: '#10b981'
    },
    {
      title: 'Notifications',
      desc: 'Real-time alerts via email, SMS, and in-app notifications.',
      icon: <CloudIcon />,
      color: '#10b981'
    },
    {
      title: 'POS System',
      desc: 'Integrated Point of Sale for retail, restaurant and service businesses.',
      icon: <ReceiptIcon />,
      color: '#10b981'
    }
  ];

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      {}
      <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: '#10b981', fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', mb: 2, display: 'block' }}>
                OUR PRODUCTS
              </Typography>
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
                Powerful Features.<br />
                <span style={{ color: '#10b981' }}>Endless Possibilities.</span>
              </Typography>
              <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: { xs: '100%', md: '90%' } }}>
                Discover the comprehensive suite of tools that power your business. From customer management to advanced analytics, we've got you covered.
              </Typography>
              <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 600 }}>
                Explore All Features
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', height: { xs: 300, md: 400 } }}>
                <img
                  src="https://placehold.co/600x400/10b981/ffffff?text=Products+Showcase"
                  alt="Products Dashboard"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Products Grid */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>All Products</Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1rem', maxWidth: 600, mx: 'auto' }}>
              Everything you need to manage, automate, and grow your business in one unified platform.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {products.map((product, idx) => {
              const idMap: Record<number, string> = {
                0: 'customers',
                1: 'billing',
                2: 'invoicing',
                3: 'analytics',
                4: 'security',
                5: 'cloud',
                6: 'integrations',
                7: 'notifications',
                8: 'pos'
              };
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx} id={idMap[idx]}>
                <Card elevation={0} sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  p: 3,
                  transition: 'all 0.3s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px -10px rgba(0,0,0,0.1)' }
                }}>
                  <Box sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '12px',
                    bgcolor: `${product.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5
                  }}>
                    <Box sx={{ color: product.color, fontSize: 28 }}>
                      {product.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1.5, fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>{product.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7, mb: 3, fontSize: '0.95rem', flexGrow: 1 }}>
                    {product.desc}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    size="medium"
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#10b981',
                      p: 0,
                      '&:hover': { bgcolor: 'transparent', color: '#059669' }
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Learn More
                  </Button>
                </Card>
              </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{
            background: `linear-gradient(90deg, #0f172a 0%, #064e3b 100%)`,
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            textAlign: 'center'
          }}>
            <Typography variant="h3" sx={{ color: '#fff', mb: 2, fontWeight: 800, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem', mb: 4, maxWidth: 600, mx: 'auto' }}>
              Explore all our products and find the perfect fit for your business needs.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700 }}>
                View All Products
              </Button>
              <Button variant="outlined" size="large" sx={{ color: '#fff', borderColor: '#10b981', fontSize: '1rem', fontWeight: 700, px: 4, py: 1.5, borderRadius: '8px' }}>
                Contact Sales
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
