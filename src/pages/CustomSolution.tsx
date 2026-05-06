import { 
  Container, Typography, Box, Button, Grid, Paper, useTheme, Breadcrumbs, Link
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';


import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

export default function CustomSolution() {
  const theme = useTheme();

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      {}
      <Box sx={{ pt: 4, pb: { xs: 8, md: 12 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: '#f8fafc', zIndex: 0, clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
        
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 }, position: 'relative', zIndex: 2 }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 6, '& .MuiBreadcrumbs-li': { fontSize: '0.85rem', fontWeight: 500 } }}>
            <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
            <Link component={RouterLink} to="/solutions" color="inherit" underline="hover">Solutions</Link>
            <Typography color="text.primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Custom System Development</Typography>
          </Breadcrumbs>

          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
                Your Unique Business,<br/>
                <span style={{ color: '#0f172a' }}>Tailored <span style={{ color: theme.palette.primary.main }}>Solutions</span></span>
              </Typography>
               <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
                 Can't find an off-the-shelf solution that fits? We build custom, scalable, and enterprise-grade systems designed specifically for your unique business processes.
               </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 8, flexWrap: 'wrap' }}>
                <Button component={RouterLink} to="/contact" variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700, textTransform: 'none' }}>
                  Discuss Your Project
                </Button>
                <Button variant="outlined" size="large" startIcon={<PlayArrowIcon />} sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700, color: '#0f172a', borderColor: '#cbd5e1', textTransform: 'none', '&:hover': { borderColor: '#94a3b8', bgcolor: '#f8fafc' } }}>
                  View Portfolio
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {[
                  { icon: <CodeIcon />, title: "Custom Architecture" },
                  { icon: <IntegrationInstructionsIcon />, title: "Deep Integrations" },
                  { icon: <RocketLaunchIcon />, title: "Rapid Deployment" },
                  { icon: <DeveloperModeIcon />, title: "Expert Engineering" }
                ].map((badge, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ color: theme.palette.primary.main, display: 'flex' }}>
                      {badge.icon}
                    </Box>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a' }}>{badge.title}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', width: '100%', p: 4, bgcolor: '#0f172a', borderRadius: '32px', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.3)', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(16, 185, 129, 0.1)', filter: 'blur(40px)' }} />
                
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', gap: 1.5, mb: 4 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
                  </Box>
                  
                  <Box sx={{ fontFamily: 'monospace', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    <Box component="span" sx={{ color: '#c084fc' }}>class</Box> <Box component="span" sx={{ color: '#38bdf8' }}>CustomSolution</Box> &#123;<br/>
                    &nbsp;&nbsp;<Box component="span" sx={{ color: '#c084fc' }}>constructor</Box>(specs) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: '#fbbf24' }}>this</Box>.design = specs.tailored;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: '#fbbf24' }}>this</Box>.stack = <Box component="span" sx={{ color: '#10b981' }}>'Enterprise Grade'</Box>;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: '#fbbf24' }}>this</Box>.scaling = <Box component="span" sx={{ color: '#10b981' }}>'Unlimited'</Box>;<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;<Box component="span" sx={{ color: '#38bdf8' }}>deploy</Box>() &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: '#c084fc' }}>return</Box> <Box component="span" sx={{ color: '#fbbf24' }}>this</Box>.buildSuccess();<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &#125;
                  </Box>

                  <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem' }}>100%</Typography>
                      <Typography sx={{ color: '#94a3b8', fontSize: '0.75rem' }}>Tailored Code</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem' }}>24/7</Typography>
                      <Typography sx={{ color: '#94a3b8', fontSize: '0.75rem' }}>Dedicated Support</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem' }}>Inf</Typography>
                      <Typography sx={{ color: '#94a3b8', fontSize: '0.75rem' }}>Scalability</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Capabilities */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', mb: 2 }}>DEVELOPMENT PROCESS</Typography>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>How we build your custom solution</Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              { icon: <LightbulbOutlinedIcon />, title: "Discovery & Analysis", desc: "We deep dive into your business processes to understand every unique requirement." },
              { icon: <LayersOutlinedIcon />, title: "UI/UX Design", desc: "Creating intuitive, beautiful, and brand-aligned interfaces for your users." },
              { icon: <CodeIcon />, title: "Agile Development", desc: "Transparent building process with regular updates and feedback loops." },
              { icon: <SecurityOutlinedIcon />, title: "Quality Assurance", desc: "Rigorous testing to ensure security, performance, and bug-free operation." },
              { icon: <RocketLaunchIcon />, title: "Deployment", desc: "Seamless launch on cloud infrastructure with zero downtime." },
              { icon: <SupportAgentOutlinedIcon />, title: "Ongoing Support", desc: "Continuous monitoring, updates, and scaling as your business grows." }
            ].map((cap, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: '24px', border: '1px solid #f1f5f9', height: '100%', transition: 'all 0.2s', '&:hover': { boxShadow: '0 10px 40px rgba(0,0,0,0.05)', borderColor: theme.palette.primary.main } }}>
                  <Box sx={{ color: theme.palette.primary.main, bgcolor: 'rgba(16, 185, 129, 0.1)', p: 2, borderRadius: '16px', display: 'flex', width: 'fit-content', mb: 3 }}>
                    {cap.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>{cap.title}</Typography>
                  <Typography sx={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>{cap.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Tech Stack Modules */}
      <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0f172a', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>Expertise & Technologies</Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              { icon: <CloudOutlinedIcon />, title: "Cloud Native", desc: "AWS, Google Cloud, and Azure expertise." },
              { icon: <DevicesOutlinedIcon />, title: "Multi-Platform", desc: "Web, iOS, and Android development." },
              { icon: <SecurityOutlinedIcon />, title: "Cybersecurity", desc: "Industry-leading security protocols." },
              { icon: <StorageOutlinedIcon />, title: "Big Data", desc: "Scalable database architectures." },
              { icon: <SettingsSuggestOutlinedIcon />, title: "Microservices", desc: "Modular and maintainable systems." },
              { icon: <AutoFixHighOutlinedIcon />, title: "AI & ML", desc: "Smart automation and insights." },
              { icon: <IntegrationInstructionsIcon />, title: "API First", desc: "Seamless third-party integrations." },
              { icon: <SpeedOutlinedIcon />, title: "High Performance", desc: "Optimized for speed and efficiency." },
              { icon: <GroupsOutlinedIcon />, title: "Collaborative", desc: "Working as an extension of your team." },
              { icon: <DashboardOutlinedIcon />, title: "Admin Panels", desc: "Powerful internal management tools." },
              { icon: <VerifiedOutlinedIcon />, title: "Compliance", desc: "GDPR, HIPAA, and industry standards." },
              { icon: <SupportAgentOutlinedIcon />, title: "Full Support", desc: "Maintenance and feature expansion." }
            ].map((mod, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', gap: 2, height: '100%', bgcolor: '#fff' }}>
                  <Box sx={{ color: theme.palette.primary.main, display: 'flex' }}>
                    {mod.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a', mb: 0.5 }}>{mod.title}</Typography>
                    <Typography sx={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.4 }}>{mod.desc}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ 
            background: `linear-gradient(90deg, #0f172a 0%, #064e3b 100%)`,
            borderRadius: '24px', 
            p: { xs: 4, md: 8 },
            textAlign: 'center',
            boxShadow: '0 30px 60px -15px rgba(16, 185, 129, 0.3)'
          }}>
            <Typography variant="h2" sx={{ color: '#fff', mb: 3, fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' } }}>
              Build Your Vision with Us
            </Typography>
            <Typography variant="h6" sx={{ color: '#cbd5e1', mb: 6, maxWidth: 800, mx: 'auto', fontWeight: 400 }}>
              Stop compromising with generic software. Let's build the perfect platform tailored to your business needs and future growth.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button component={RouterLink} to="/contact" variant="contained" size="large" sx={{ px: 6, py: 2, borderRadius: '12px', fontSize: '1.1rem', fontWeight: 800, textTransform: 'none' }}>
                Get a Free Consultation
              </Button>
              <Button component={RouterLink} to="/contact" variant="outlined" size="large" sx={{ color: '#fff', borderColor: '#10b981', px: 6, py: 2, borderRadius: '12px', fontSize: '1.1rem', fontWeight: 800, textTransform: 'none', '&:hover': { borderColor: '#34d399', bgcolor: 'rgba(16, 185, 129, 0.1)' } }}>
                Request a Quote
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
