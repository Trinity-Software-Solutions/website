import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import GppGoodIcon from '@mui/icons-material/GppGood';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExtensionIcon from '@mui/icons-material/Extension';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import InsightsIcon from '@mui/icons-material/Insights';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

export default function Modules() {
  const modules = [
    { icon: <GroupIcon />, title: 'Customer Management', desc: 'Centralize all customer data, interactions, and communication history in one place.', color: '#10b981' },
    { icon: <PaymentIcon />, title: 'Subscriptions & Billing', desc: 'Set up recurring billing, manage subscription tiers, and process payments seamlessly.', color: '#3b82f6' },
    { icon: <ReceiptIcon />, title: 'Invoicing', desc: 'Create, send, and track invoices with automated reminders and payment tracking.', color: '#10b981' },
    { icon: <AssessmentIcon />, title: 'Reports & Analytics', desc: 'Get real-time dashboards, custom reports, and actionable business insights.', color: '#3b82f6' },
    { icon: <SettingsIcon />, title: 'Configuration', desc: 'Customize workflows, set business rules, and configure system settings.', color: '#10b981' },
    { icon: <GppGoodIcon />, title: 'Roles & Permissions', desc: 'Granular access control with role-based permissions and audit trails.', color: '#3b82f6' },
    { icon: <NotificationsIcon />, title: 'Notifications', desc: 'Send automated alerts via email, SMS, and in-app notifications.', color: '#f59e0b' },
    { icon: <ExtensionIcon />, title: 'Integrations', desc: 'Connect with Stripe, QuickBooks, Slack, Zapier, and hundreds of other tools.', color: '#3b82f6' },
    { icon: <SecurityIcon />, title: 'Security & Compliance', desc: 'Enterprise-grade security, data encryption, SOC 2 compliance ready.', color: '#10b981' },
    { icon: <CloudIcon />, title: 'Cloud Infrastructure', desc: 'Scalable cloud hosting with 99.9% uptime SLA and automatic backups.', color: '#3b82f6' },
    { icon: <InsightsIcon />, title: 'AI & Automation', desc: 'Smart automation, predictive analytics, and AI-powered recommendations.', color: '#10b981' },
    { icon: <IntegrationInstructionsIcon />, title: 'API Access', desc: 'RESTful API with comprehensive documentation for custom integrations.', color: '#3b82f6' }
  ];

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      {}
      <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: '#10b981', fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', mb: 2, display: 'block' }}>
                OUR MODULES
              </Typography>
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
                Built to Scale.<br />
                <span style={{ color: '#10b981' }}>Designed to Grow.</span>
              </Typography>
              <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: { xs: '100%', md: '90%' } }}>
                Our modular architecture lets you pick and choose the features you need. Start small and scale as you grow, without switching platforms.
              </Typography>
              <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 600 }}>
                Explore All Modules
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', height: { xs: 300, md: 400 } }}>
                <img
                  src="https://placehold.co/600x400/3b82f6/ffffff?text=Modules+Showcase"
                  alt="Modules Dashboard"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>All Modules</Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1rem', maxWidth: 600, mx: 'auto' }}>
              From customer management to advanced analytics, every module is designed to work seamlessly together.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {modules.map((module, idx) => {
              const idMap: Record<number, string> = {
                0: 'customers',
                1: 'subscriptions',
                2: 'invoicing',
                3: 'reports',
                4: 'config',
                5: 'roles',
                6: 'notifications',
                7: 'integrations',
                8: 'security',
                9: 'cloud',
                10: 'ai',
                11: 'api'
              };
              
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={idx} id={idMap[idx]}>
                <Paper elevation={0} sx={{
                  p: 3,
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s',
                  '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.08)', borderColor: '#10b981' }
                }}>
                  <Box sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '10px',
                    bgcolor: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}>
                    <Box sx={{ color: '#10b981', display: 'flex', alignItems: 'flex-start' }}>
                      {module.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{module.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.9rem', flexGrow: 1 }}>
                    {module.desc}
                  </Typography>
                </Paper>
              </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0f172a' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: '#fff', mb: 3, fontWeight: 800, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              Need a Custom Module?
            </Typography>
            <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem', mb: 4, maxWidth: 600, mx: 'auto' }}>
              Can't find what you're looking for? Our team can build custom modules tailored to your specific business requirements.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700 }}>
                Request Custom Module
              </Button>
              <Button variant="outlined" size="large" sx={{ color: '#fff', borderColor: '#10b981', fontSize: '1rem', fontWeight: 700, px: 4, py: 1.5, borderRadius: '8px' }}>
                Talk to Our Team
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
