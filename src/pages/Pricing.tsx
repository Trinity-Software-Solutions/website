import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Container, Typography, Box, Button, Grid, Card, CardContent, CardActions,
  List, ListItem, ListItemIcon, ListItemText, useTheme, Chip, Paper
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

export default function Pricing() {
  const theme = useTheme();
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      title: 'Starter',
      desc: 'Perfect for small businesses getting started.',
      price: annual ? '7,999' : '9,999',
      features: ['Up to 3 Users', '1 Solution / Application', '5 GB Storage', 'Basic Reports', 'Email Support'],
      buttonVariant: 'outlined' as const,
      buttonText: 'Get Started',
      icon: <SendOutlinedIcon />,
      iconBg: '#ecfdf5',
      iconColor: '#10b981',
      borderColor: '#e2e8f0'
    },
    {
      title: 'Growth',
      desc: 'For growing businesses that need more power.',
      price: annual ? '15,999' : '19,999',
      features: ['Up to 10 Users', '2 Solutions / Applications', '25 GB Storage', 'Advanced Reports', 'Priority Email Support', 'Automated Workflows'],
      buttonVariant: 'outlined' as const,
      buttonText: 'Get Started',
      icon: <BarChartOutlinedIcon />,
      iconBg: '#ecfdf5',
      iconColor: '#10b981',
      borderColor: theme.palette.primary.main
    },
    {
      title: 'Professional',
      desc: 'For established businesses looking to scale.',
      price: annual ? '31,999' : '39,999',
      features: ['Up to 25 Users', '5 Solutions / Applications', '100 GB Storage', 'Advanced Reports & Analytics', 'Priority Support', 'Automated Workflows', 'API Access', 'Custom Roles & Permissions'],
      buttonVariant: 'contained' as const,
      buttonText: 'Get Started',
      popular: true,
      icon: <WorkspacePremiumOutlinedIcon />,
      iconBg: '#ecfdf5',
      iconColor: '#10b981',
      borderColor: theme.palette.primary.main
    },
    {
      title: 'Enterprise',
      desc: 'For large organizations with advanced needs.',
      price: annual ? '59,999' : '74,999',
      features: ['Up to 100 Users', 'Unlimited Solutions', '500 GB Storage', 'Advanced Analytics', '24/7 Premium Support', 'API Access', 'Custom Integrations', 'SLA & Uptime Guarantee'],
      buttonVariant: 'outlined' as const,
      buttonText: 'Get Started',
      icon: <DomainOutlinedIcon />,
      iconBg: '#ecfdf5',
      iconColor: '#10b981',
      borderColor: '#e2e8f0'
    },
    {
      title: 'Custom',
      desc: 'Tailored solutions for your unique requirements.',
      price: 'Custom',
      features: ['Unlimited Users', 'Unlimited Solutions', 'Custom Storage', 'Custom Integrations', 'Dedicated Support', 'On-Premise / Cloud', 'SLA & Uptime Guarantee'],
      buttonVariant: 'outlined' as const,
      buttonText: 'Contact Sales',
      customPrice: true,
      icon: <SettingsOutlinedIcon />,
      iconBg: '#ffedd5',
      iconColor: '#f97316',
      borderColor: '#e2e8f0'
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
        
        {}
        <Box sx={{ textAlign: 'left', mb: 8, maxWidth: '800px' }}>
          <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.8rem' }}>
            SIMPLE, TRANSPARENT PRICING
          </Typography>
          <Typography variant="h1" sx={{ mt: 2, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
            Choose the Perfect Plan<br />
            <span style={{ color: theme.palette.primary.main }}>for Your Business</span>
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, color: '#64748b', fontSize: '1.1rem', maxWidth: '500px' }}>
            Flexible pricing plans designed to grow with your business.<br />
            Pay monthly or annually and save up to 20%.
          </Typography>
        </Box>

        {}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 6, mt: -10 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', color: '#10b981', fontWeight: 600, fontSize: '0.9rem' }}>
              Save 20% with Annual Billing
              <SubdirectoryArrowRightIcon sx={{ ml: 1, transform: 'rotate(-90deg) scaleY(-1)', fontSize: 20 }} />
            </Box>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: '#f8fafc', p: 0.5, borderRadius: '50px', border: '1px solid #e2e8f0' }}>
              <Box onClick={() => setAnnual(false)} sx={{ cursor: 'pointer', py: 1, px: 3, borderRadius: '50px', bgcolor: !annual ? '#fff' : 'transparent', boxShadow: !annual ? '0 2px 4px rgba(0,0,0,0.05)' : 'none', color: !annual ? '#0f172a' : '#64748b', fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.2s' }}>
                Monthly
              </Box>
              <Box onClick={() => setAnnual(true)} sx={{ cursor: 'pointer', py: 1, px: 3, borderRadius: '50px', bgcolor: annual ? '#fff' : 'transparent', boxShadow: annual ? '0 2px 4px rgba(0,0,0,0.05)' : 'none', color: annual ? '#0f172a' : '#64748b', fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 1 }}>
                Annual
                <Chip label="-20%" size="small" sx={{ bgcolor: '#ecfdf5', color: '#10b981', fontWeight: 800, height: 20, fontSize: '0.7rem' }} />
              </Box>
            </Box>
          </Box>
        </Box>

        {}
        <Grid container spacing={3} sx={{ alignItems: 'flex-start', justifyContent: 'center', mb: 12 }}>
          {plans.map((plan, idx) => (
            <Grid size={{ xs: 12, sm: 6, lg: 2.4 }} key={idx} sx={{ position: 'relative' }}>
              {plan.popular && (
                <Box sx={{ position: 'absolute', top: -16, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1 }}>
                  <Chip label="MOST POPULAR" sx={{ bgcolor: theme.palette.primary.main, color: '#fff', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.05em', px: 1 }} />
                </Box>
              )}
              <Card elevation={0} sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                border: `1px solid ${plan.borderColor}`,
                boxShadow: plan.popular ? '0 20px 40px -10px rgba(16, 185, 129, 0.15)' : '0 4px 6px -1px rgba(0,0,0,0.02)',
                borderRadius: '16px',
                pt: plan.popular ? 3 : 2,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)' }
              }}>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ bgcolor: plan.iconBg, color: plan.iconColor, p: 1, borderRadius: '8px', display: 'flex' }}>
                      {plan.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>{plan.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.75rem', lineHeight: 1.4, mt: 0.5, minHeight: '34px' }}>{plan.desc}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3, minHeight: '48px' }}>
                    {plan.customPrice ? (
                      <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>Custom</Typography>
                    ) : (
                      <>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>KES {plan.price}</Typography>
                        <Typography variant="body2" sx={{ color: '#64748b', ml: 0.5, fontWeight: 500 }}>/month</Typography>
                      </>
                    )}
                  </Box>

                  <List disablePadding>
                    {plan.features.map((feat, i) => (
                      <ListItem disableGutters disablePadding key={i} sx={{ mb: 1.2, alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 24, mt: 0.2 }}>
                          <CheckIcon sx={{ fontSize: 16, color: theme.palette.primary.main, fontWeight: 900 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={<Typography variant="body2" sx={{ color: '#334155', fontWeight: 500, fontSize: '0.8rem', lineHeight: 1.3 }}>{feat}</Typography>} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button 
                    component={RouterLink}
                    to="/contact"
                    fullWidth 
                    variant={plan.buttonVariant} 
                    color="primary" 
                    size="medium"
                    sx={{ 
                      py: 1.2, 
                      fontWeight: 700,
                      borderRadius: '8px',
                      textTransform: 'none',
                      ...(plan.buttonVariant === 'outlined' && { borderColor: '#e2e8f0', color: theme.palette.primary.main })
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {}
        <Box sx={{ mb: 10 }}>
          <Paper elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: '16px', overflowX: 'auto' }}>
            <Box sx={{ minWidth: 800 }}>
              {}
              <Grid container sx={{ borderBottom: '2px solid #e2e8f0', bgcolor: '#f8fafc', py: 2, px: 3 }}>
                <Grid size={2.4}><Typography sx={{ fontWeight: 800, color: '#0f172a' }}>Compare Plans</Typography></Grid>
                <Grid size={1.92} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '0.85rem' }}>Starter</Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>KES {annual ? '7,999' : '9,999'}/month</Typography>
                </Grid>
                <Grid size={1.92} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '0.85rem' }}>Growth</Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>KES {annual ? '15,999' : '19,999'}/month</Typography>
                </Grid>
                <Grid size={1.92} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '0.85rem', color: theme.palette.primary.main }}>Professional</Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>KES {annual ? '31,999' : '39,999'}/month</Typography>
                </Grid>
                <Grid size={1.92} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '0.85rem' }}>Enterprise</Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>KES {annual ? '59,999' : '74,999'}/month</Typography>
                </Grid>
                <Grid size={1.92} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '0.85rem' }}>Custom</Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>Custom Pricing</Typography>
                </Grid>
              </Grid>

              {}
              {[
                { label: 'Users', values: ['Up to 3', 'Up to 10', 'Up to 25', 'Up to 100', 'Unlimited'] },
                { label: 'Solutions / Applications', values: ['1', '2', '5', 'Unlimited', 'Unlimited'] },
                { label: 'Storage', values: ['5 GB', '25 GB', '100 GB', '500 GB', 'Custom'] },
                { label: 'Support', values: ['Email Support', 'Priority Email Support', 'Priority Support', '24/7 Premium Support', 'Dedicated Support'] },
                { label: 'API Access', values: [false, true, true, true, true] },
                { label: 'Custom Integrations', values: [false, false, true, true, true] },
                { label: 'SLA & Uptime Guarantee', values: [false, false, true, true, true] },
              ].map((row, idx) => (
                <Grid container key={idx} sx={{ borderBottom: idx === 6 ? 'none' : '1px solid #e2e8f0', py: 2, px: 3, '&:hover': { bgcolor: '#f8fafc' } }}>
                  <Grid size={2.4} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>{row.label}</Typography>
                  </Grid>
                  {row.values.map((val, i) => (
                    <Grid size={1.92} key={i} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {typeof val === 'boolean' ? (
                        val ? <CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} /> : <CloseIcon sx={{ color: '#ef4444', fontSize: 18 }} />
                      ) : (
                        <Typography sx={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>{val}</Typography>
                      )}
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Box>
          </Paper>
        </Box>

        {}
        <Box sx={{ mt: 10, pt: 6, borderTop: '1px solid #e2e8f0' }}>
          <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
            {[
              { icon: <ShieldOutlinedIcon color="primary" />, title: "14-Day Free Trial", desc: "No credit card required" },
              { icon: <LockOutlinedIcon color="primary" />, title: "Secure & Compliant", desc: "Enterprise-grade security" },
              { icon: <SyncOutlinedIcon color="primary" />, title: "Cancel Anytime", desc: "No long-term contracts" },
              { icon: <SupportAgentOutlinedIcon color="primary" />, title: "24/7 Support", desc: "We're here to help" },
              { icon: <CloudQueueOutlinedIcon color="primary" />, title: "99.9% Uptime", desc: "Reliable and dependable" }
            ].map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={idx}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <Box sx={{ p: 1, bgcolor: '#ecfdf5', borderRadius: 2, display: 'flex' }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: '0.85rem', color: '#0f172a' }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#64748b' }}>{item.desc}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
