import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  Paper, 
  IconButton,
  Link,
  useTheme,
  Alert,
  Snackbar
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // !!! ACTION REQUIRED: Create a free account at formspree.io and replace the ID below !!!
      const FORMSPREE_ID = "REPLACE_WITH_YOUR_ID"; 
      
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Oops! There was a problem submitting your form. Please try again or email us directly.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 8 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Typography variant="overline" sx={{ color: '#10b981', fontWeight: 800, letterSpacing: '0.1em', mb: 2, display: 'block' }}>
              CONTACT US
            </Typography>
            <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, color: '#0f172a' }}>
              Let's Start a <span style={{ color: '#10b981' }}>Conversation</span>
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400, color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Have questions about our solutions or want to book a demo? Our team is here to help you find the right fit for your business.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -6 }}>
        <Grid container spacing={4}>
          {/* Contact Details */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: '24px', bgcolor: '#0f172a', color: '#fff', height: '100%' }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>Contact Information</Typography>
              <Typography variant="body1" sx={{ color: '#94a3b8', mb: 6 }}>
                Fill out the form and our team will get back to you within 24 hours.
              </Typography>

              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  <Box sx={{ color: '#10b981', mt: 0.5 }}><PhoneIcon /></Box>
                  <Box>
                    <Link href="tel:0792620934" sx={{ color: '#fff', textDecoration: 'none', display: 'block', '&:hover': { color: '#10b981' } }}>0792620934</Link>
                    <Link href="tel:0725835781" sx={{ color: '#fff', textDecoration: 'none', display: 'block', '&:hover': { color: '#10b981' } }}>0725835781</Link>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  <Box sx={{ color: '#10b981', mt: 0.5 }}><EmailIcon /></Box>
                  <Link href="mailto:info@trinitysoft.co.ke" sx={{ color: '#fff', textDecoration: 'none', '&:hover': { color: '#10b981' } }}>info@trinitysoft.co.ke</Link>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ color: '#10b981', mt: 0.5 }}><LocationOnIcon /></Box>
                  <Typography variant="body1">Nairobi, Kenya</Typography>
                </Box>
              </Box>

              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Follow Us</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', '&:hover': { bgcolor: '#10b981' } }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', '&:hover': { bgcolor: '#10b981' } }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', '&:hover': { bgcolor: '#10b981' } }}>
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: '24px', border: '1px solid #e2e8f0', height: '100%' }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: '#334155' }}>Full Name</Typography>
                    <TextField
                      fullWidth
                      name="name"
                      placeholder="John Doe"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: '#334155' }}>Email Address</Typography>
                    <TextField
                      fullWidth
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: '#334155' }}>Subject</Typography>
                    <TextField
                      fullWidth
                      name="subject"
                      placeholder="How can we help?"
                      variant="outlined"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: '#334155' }}>Message</Typography>
                    <TextField
                      fullWidth
                      name="message"
                      multiline
                      rows={4}
                      placeholder="Tell us more about your business needs..."
                      variant="outlined"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary" 
                      fullWidth 
                      size="large"
                      disabled={isSubmitting}
                      sx={{ py: 2, borderRadius: '12px', fontWeight: 700, fontSize: '1rem', textTransform: 'none' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={submitted} autoHideDuration={6000} onClose={() => setSubmitted(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setSubmitted(false)} severity="success" sx={{ width: '100%', borderRadius: '12px', fontWeight: 600 }}>
          Thank you! Your message has been sent successfully. We'll be in touch soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
