import { Container, Typography, Box, Button, Grid, Card, Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessIcon from '@mui/icons-material/Business';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import SupportIcon from '@mui/icons-material/Support';

export default function Resources() {
  const resources = [
    {
      title: 'Documentation',
      desc: 'Comprehensive guides and manuals to help you get the most out of our platform.',
      icon: <DescriptionIcon />,
      color: '#3b82f6',
      features: ['Getting Started Guide', 'User Manuals', 'Best Practices', 'Release Notes']
    },
    {
      title: 'API Reference',
      desc: 'Complete API documentation with examples, endpoints, and integration guides.',
      icon: <CodeIcon />,
      color: '#10b981',
      features: ['REST API Docs', 'SDK References', 'Webhook Guides', 'Code Samples']
    },
    {
      title: 'Blog',
      desc: 'Stay updated with the latest news, tips, and insights from our team.',
      icon: <ArticleIcon />,
      color: '#f59e0b',
      features: ['Product Updates', 'Industry Insights', 'Success Stories', 'Tutorials']
    },
    {
      title: 'Case Studies',
      desc: 'See how businesses like yours are achieving remarkable results with our platform.',
      icon: <BusinessIcon />,
      color: '#8b5cf6',
      features: ['Real Estate', 'Poultry', 'Retail', 'Manufacturing']
    },
    {
      title: 'Help Center',
      desc: 'Find quick answers to common questions and troubleshooting guides.',
      icon: <HelpIcon />,
      color: '#ec4899',
      features: ['FAQs', 'Troubleshooting', 'Video Tutorials', 'Community Forum']
    },
    {
      title: 'Support',
      desc: 'Get in touch with our dedicated support team for personalized assistance.',
      icon: <SupportIcon />,
      color: '#06b6d4',
      features: ['24/7 Support', 'Live Chat', 'Email Support', 'Phone Support']
    }
  ];

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      {}
      <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: '#3b82f6', fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', mb: 2, display: 'block' }}>
                RESOURCES
              </Typography>
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
                Everything You Need<br />
                <span style={{ color: '#3b82f6' }}>to Succeed</span>
              </Typography>
              <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '90%' }}>
                Access documentation, APIs, tutorials, and support resources to maximize your use of our platform.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 600 }}>
                  Browse Documentation
                </Button>
                <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 600, color: '#0f172a', borderColor: '#cbd5e1' }}>
                  Contact Support
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', height: { xs: 300, md: 400 } }}>
                <img
                  src="https://placehold.co/600x400/3b82f6/ffffff?text=Resources+Hub"
                  alt="Resources Dashboard"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: 4, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'stretch', sm: 'center' },
            gap: 2,
            bgcolor: '#fff',
            borderRadius: '12px',
            p: { xs: 1.5, sm: 2 },
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 1.5 }}>
              <SearchIcon sx={{ color: '#64748b', ml: { xs: 0, sm: 1 } }} />
              <input
                type="text"
                placeholder="Search documentation, guides, and answers..."
                style={{
                  flexGrow: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  padding: '8px 0',
                  background: 'transparent',
                  width: '100%'
                }}
              />
            </Box>
            <Button variant="contained" color="primary" sx={{ px: 3, py: { xs: 1.2, sm: 1 } }}>
              Search
            </Button>
          </Box>
        </Container>
      </Box>

      {}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>Explore Our Resources</Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1rem', maxWidth: 600, mx: 'auto' }}>
              Everything you need to learn, integrate, and succeed with our platform.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {resources.map((resource, idx) => {
              const idMap: Record<number, string> = {
                0: 'docs',
                1: 'api',
                2: 'blog',
                3: 'cases',
                4: 'help'
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
                    bgcolor: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5
                  }}>
                    <Box sx={{ color: '#10b981', fontSize: 28 }}>
                      {resource.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1.5, fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>{resource.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7, mb: 3, fontSize: '0.95rem', flexGrow: 1 }}>
                    {resource.desc}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {resource.features.map((feature, fIdx) => (
                      <Typography key={fIdx} variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem', mb: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ArrowForwardIcon sx={{ fontSize: 14, color: resource.color }} /> {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    size="medium"
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: resource.color,
                      p: 0,
                      '&:hover': { bgcolor: 'transparent', color: resource.color }
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Access {resource.title}
                  </Button>
                </Card>
              </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>Popular Articles</Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1rem', maxWidth: 600, mx: 'auto' }}>
              Quick answers and step-by-step guides to common questions.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 3, borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.08)' } }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0f172a' }}>Getting Started with Our Platform</Typography>
                <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, mb: 2 }}>A complete walkthrough for new users to set up and configure their account.</Typography>
                <Button size="small" sx={{ color: '#3b82f6', fontWeight: 600, p: 0 }}>Read More →</Button>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 3, borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.08)' } }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0f172a' }}>API Integration Basics</Typography>
                <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, mb: 2 }}>Learn how to connect your applications using our RESTful API.</Typography>
                <Button size="small" sx={{ color: '#3b82f6', fontWeight: 600, p: 0 }}>Read More →</Button>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 3, borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.08)' } }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0f172a' }}>Billing & Subscription Management</Typography>
                <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, mb: 2 }}>Understand how to manage subscriptions, invoices, and payments.</Typography>
                <Button size="small" sx={{ color: '#3b82f6', fontWeight: 600, p: 0 }}>Read More →</Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{
            background: `linear-gradient(90deg, #0f172a 0%, #064e3b 100%)`,
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            textAlign: 'center'
          }}>
            <Typography variant="h3" sx={{ color: '#fff', mb: 2, fontWeight: 800, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              Need More Help?
            </Typography>
            <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem', mb: 4, maxWidth: 600, mx: 'auto' }}>
              Our support team is available 24/7 to assist you with any questions or issues.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700 }}>
                Contact Support
              </Button>
              <Button variant="outlined" size="large" sx={{ color: '#fff', borderColor: '#10b981', fontSize: '1rem', fontWeight: 700, px: 4, py: 1.5, borderRadius: '8px' }}>
                View All Resources
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
