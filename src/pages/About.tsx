import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleIcon from '@mui/icons-material/People';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StarIcon from '@mui/icons-material/Star';

export default function About() {
  const values = [
    { icon: <PeopleIcon />, title: 'Customer First', desc: 'Your success is our priority. We listen, adapt, and deliver solutions that truly work.' },
    { icon: <RocketLaunchIcon />, title: 'Innovation', desc: 'We continuously push boundaries with cutting-edge technology and forward-thinking solutions.' },
    { icon: <SecurityIcon />, title: 'Trust & Security', desc: 'Enterprise-grade security and compliance to keep your data safe and protected.' },
    { icon: <SupportAgentIcon />, title: '24/7 Support', desc: 'Our dedicated support team is always available to help you succeed.' }
  ];

  const team = [
    
    { name: 'Joseph Mbera', role: 'Founder', image: 'https://placehold.co/150x150/10b981/ffffff?text=JM' },
    { name: 'Jared Mogonchi', role: 'CTO', image: 'https://placehold.co/150x150/3b82f6/ffffff?text=JM' },
    { name: 'Beatrice Omolo', role: 'Head of Product', image: 'https://placehold.co/150x150/10b981/ffffff?text=BO' },
    { name: 'Grace Njoki', role: 'Customer Success', image: 'https://placehold.co/150x150/3b82f6/ffffff?text=GN' }
  ];

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      {}
      <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: '#10b981', fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', mb: 2, display: 'block' }}>
                ABOUT US
              </Typography>
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
                Transforming Business<br />
                <span style={{ color: '#10b981' }}>Through Technology</span>
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Trinity Softwares is a leading SaaS company dedicated to helping businesses automate, manage, and grow smarter. Founded in 2020, we've been empowering companies across Africa with innovative software solutions.
              </Typography>
              <Typography variant="body1" sx={{ mb: 5, color: '#64748b', fontSize: '1rem', lineHeight: 1.7, maxWidth: '90%' }}>
                Our mission is to democratize access to enterprise-grade software, making powerful business tools accessible to companies of all sizes. We believe that technology should be a catalyst for growth, not a barrier.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 600 }}
                  onClick={() => document.getElementById('values')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Our Story
                </Button>
                <Button 
                  component={RouterLink}
                  to="/contact"
                  variant="outlined" 
                  size="large" 
                  sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 600, color: '#0f172a', borderColor: '#cbd5e1' }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', height: { xs: 300, md: 400 } }}>
                <img
                  src="https://placehold.co/600x400/0f172a/ffffff?text=Our+Team+at+Work"
                  alt="Trinity Softwares Team"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 800, color: '#10b981', fontSize: { xs: '2.5rem', md: '3rem' } }}>500+</Typography>
                <Typography variant="body1" sx={{ color: '#64748b', mt: 1 }}>Happy Clients</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 800, color: '#10b981', fontSize: { xs: '2.5rem', md: '3rem' } }}>1M+</Typography>
                <Typography variant="body1" sx={{ color: '#64748b', mt: 1 }}>Transactions/Month</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 800, color: '#10b981', fontSize: { xs: '2.5rem', md: '3rem' } }}>99.9%</Typography>
                <Typography variant="body1" sx={{ color: '#64748b', mt: 1 }}>Uptime</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 800, color: '#10b981', fontSize: { xs: '2.5rem', md: '3rem' } }}>24/7</Typography>
                <Typography variant="body1" sx={{ color: '#64748b', mt: 1 }}>Support</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box id="values" sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>Our Values</Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1rem', maxWidth: 600, mx: 'auto' }}>
              The principles that guide everything we do
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Paper elevation={0} sx={{
                  p: 3,
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.08)', transform: 'translateY(-4px)' }
                }}>
                  <Box sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    bgcolor: '#ecfdf5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Box sx={{ color: '#10b981', fontSize: 28 }}>
                      {value.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{value.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.9rem' }}>
                    {value.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>Meet Our Team</Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1rem', maxWidth: 600, mx: 'auto' }}>
              The passionate people behind Trinity Softwares
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {team.map((member, idx) => (
              <Grid size={{ xs: 6, sm: 4, md: 3 }} key={idx}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{ width: '100%', aspectRatio: '1', borderRadius: '50%', overflow: 'hidden', mb: 2, border: '3px solid #10b981' }}>
                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', fontSize: '1rem' }}>{member.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.9rem' }}>{member.role}</Typography>
                </Box>
              </Grid>
            ))}
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
              Join Our Growing Community
            </Typography>
            <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem', mb: 4, maxWidth: 600, mx: 'auto' }}>
              Ready to transform your business? Let's build something great together.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700 }}>
                Get Started Free
              </Button>
              <Button variant="outlined" size="large" sx={{ color: '#fff', borderColor: '#10b981', fontSize: '1rem', fontWeight: 700, px: 4, py: 1.5, borderRadius: '8px' }}>
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
