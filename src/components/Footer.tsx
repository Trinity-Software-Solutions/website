import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Link,
  useTheme
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../assets/design/trignity software logo.png';

export default function Footer() {
  const theme = useTheme();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    if (email) {
      alert(`Thanks for subscribing with ${email}! We'll keep you updated.`);
      form.reset();
    }
  };

  const FooterLink = ({ to, children, primary }: { to: string, children: React.ReactNode, primary?: boolean }) => (
    <Link
      component={RouterLink}
      to={to}
      sx={{
        color: primary ? theme.palette.primary.main : '#94a3b8',
        textDecoration: 'none',
        fontSize: '0.875rem',
        '&:hover': {
          color: '#ffffff',
        },
        display: 'block',
        mb: 1.5
      }}
    >
      {children}
    </Link>
  );

  const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <Typography
      variant="overline"
      sx={{
        color: '#ffffff',
        letterSpacing: '0.1em',
        fontWeight: 700,
        display: 'block',
        mb: 2
      }}
    >
      {children}
    </Typography>
  );

  return (
    <Box sx={{ bgcolor: 'secondary.main', pt: 8, pb: 4, color: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
           {/* Brand Column */}
           <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ mb: 3 }}>
                <img 
                  src={logo} 
                  alt="Trinity Softwares" 
                  style={{ height: '40px', filter: 'brightness(0) invert(1)' }} 
                />
              </Box>
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, maxWidth: 280 }}>
              Integrated SaaS solutions to help businesses automate, manage, and grow smarter.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              <IconButton size="small" sx={{ color: '#94a3b8', '&:hover': { color: '#fff' } }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: '#94a3b8', '&:hover': { color: '#fff' } }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: '#94a3b8', '&:hover': { color: '#fff' } }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <EmailIcon sx={{ fontSize: 16 }} />
                </Box>
                <Link href="mailto:info@trinitysoft.co.ke" sx={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>
                  info@trinitysoft.co.ke
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <PhoneIcon sx={{ fontSize: 16 }} />
                </Box>
                <Box>
                  <Link href="tel:0792620934" sx={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', display: 'block', '&:hover': { color: '#fff' } }}>
                    0792620934
                  </Link>
                   <Link href="tel:0725835781" sx={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', display: 'block', '&:hover': { color: '#fff' } }}>
                     0725835781
                   </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Links Columns */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <SectionHeading>SOLUTIONS</SectionHeading>
            <FooterLink to="/solutions/real-estate">Real Estate Management</FooterLink>
            <FooterLink to="/solutions/poultry">Poultry Management System</FooterLink>
            <FooterLink to="/solutions/ecommerce">Ecommerce Management</FooterLink>
            <FooterLink to="/solutions/procurement">Procurement & Order Mgt</FooterLink>
            <FooterLink to="/solutions" primary>View All Solutions</FooterLink>
          </Grid>



           <Grid size={{ xs: 12, sm: 6, md: 3 }}>
             <SectionHeading>COMPANY</SectionHeading>
             <FooterLink to="/about">About Us</FooterLink>
             <FooterLink to="/contact">Contact Us</FooterLink>
           </Grid>

           {/* Newsletter Column */}
           <Grid size={{ xs: 12, md: 3 }}>
             <SectionHeading>NEWSLETTER</SectionHeading>
             <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2 }}>
               Subscribe to get updates on new features and releases.
             </Typography>
             <Box component="form" onSubmit={handleNewsletterSubmit} sx={{ display: 'flex', gap: 1 }}>
               <input
                 type="email"
                 name="email"
                 placeholder="Enter your email"
                 aria-label="Email address"
                 style={{ 
                   flexGrow: 1, 
                   background: 'rgba(255,255,255,0.05)', 
                   border: '1px solid rgba(255,255,255,0.1)', 
                   color: '#fff', 
                   padding: '12px 16px', 
                   borderRadius: '8px',
                   fontSize: '0.875rem',
                   outline: 'none'
                 }}
               />
               <Button 
                 type="submit" 
                 variant="contained" 
                 color="primary" 
                 sx={{ 
                   borderRadius: '8px', 
                   px: 2, 
                   textTransform: 'none', 
                   fontWeight: 600,
                   whiteSpace: 'nowrap'
                 }}
               >
                 Subscribe
               </Button>
             </Box>
           </Grid>
        </Grid>

         {/* Bottom Bar */}
         <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
           <Typography variant="body2" sx={{ color: '#64748b' }}>
             &copy; {new Date().getFullYear()} Trinity Softwares. All rights reserved.
           </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link component={RouterLink} to="#" sx={{ color: '#64748b', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>Privacy Policy</Link>
            <Link component={RouterLink} to="#" sx={{ color: '#64748b', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>Terms of Service</Link>
            <Link component={RouterLink} to="#" sx={{ color: '#64748b', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>Security</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
