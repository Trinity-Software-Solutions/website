import { 
  Container, Typography, Box, Button, Grid, Paper, Breadcrumbs, Link
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SecurityIcon from '@mui/icons-material/Security';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';


import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

export default function ProcurementSolution() {

   const StatCard = ({ title, value, trend, icon: Icon }: { title: string, value: string, trend: string, icon: any }) => (
     <Paper elevation={0} sx={{ p: 1.5, borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
         <Box sx={{ color: '#10b981', bgcolor: '#ecfdf5', p: 0.5, borderRadius: 1, display: 'flex' }}>
           <Icon sx={{ fontSize: { xs: 16, md: 16 } }} />
         </Box>
         <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.65rem' }, color: '#64748b', fontWeight: 600 }}>{title}</Typography>
       </Box>
       <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.2rem' }, fontWeight: 800, color: '#0f172a', mb: 0.5 }}>{value}</Typography>
       <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.65rem' }, color: '#10b981', fontWeight: 700 }}>{trend}</Typography>
     </Paper>
   );

   return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 12 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: '#f8fafc', zIndex: 0, clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
        
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 }, position: 'relative', zIndex: 2 }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 6, '& .MuiBreadcrumbs-li': { fontSize: '0.85rem', fontWeight: 500 } }}>
            <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
            <Link component={RouterLink} to="/solutions" color="inherit" underline="hover">Solutions</Link>
            <Typography color="text.primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Procurement & Order Management System</Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.1, color: '#0f172a' }}>
                Procurement &<br/>
                <span style={{ color: '#10b981' }}>Order Management</span>
              </Typography>
              <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Streamline your supply chain with automated purchase requisitions, supplier management, and real-time order tracking.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 8, flexWrap: 'wrap' }}>
                <Button component={RouterLink} to="/contact" variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700, textTransform: 'none', bgcolor: '#10b981' }}>
                  Request Demo
                </Button>
                <Button variant="outlined" size="large" startIcon={<PlayArrowIcon />} sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', fontWeight: 700, color: '#0f172a', borderColor: '#cbd5e1', textTransform: 'none', '&:hover': { borderColor: '#94a3b8', bgcolor: '#f8fafc' } }}>
                  Watch Overview
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                {[
                  { icon: <BusinessOutlinedIcon />, title: "Supplier Network" },
                  { icon: <FactCheckOutlinedIcon />, title: "Audit Trail" },
                  { icon: <AutoGraphIcon />, title: "Spend Analytics" },
                  { icon: <RuleOutlinedIcon />, title: "Compliance Ready" }
                ].map((badge, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ color: '#10b981', display: 'flex' }}>
                      {badge.icon}
                    </Box>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155', maxWidth: '80px', lineHeight: 1.2 }}>{badge.title}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ position: 'relative', width: '100%', pt: { xs: 4, md: 0 } }}>
                <Box
                  sx={{
                    position: { xs: 'relative', md: 'absolute' },
                    bottom: { xs: 0, md: -20 },
                    left: { xs: 0, md: -80 },
                    width: { xs: '100%', md: '500px' },
                    height: { xs: 300, md: 400 },
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: { xs: 4, md: 0 }
                  }}
                >
                  <Box component="img" src="https://placehold.co/500x400/1e293b/ffffff?text=Procurement+Flow+Dashboard" alt="Procurement Dashboard" sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} />
                </Box>
                
                <Paper elevation={24} sx={{ position: 'relative', zIndex: 2, p: 3, borderRadius: '16px', bgcolor: '#fff', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)', width: '95%', ml: 'auto' }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 3 }}><StatCard title="Active PRs" value="42" trend="12 pending approval" icon={RequestQuoteOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Total Suppliers" value="156" trend="+5 new this month" icon={BusinessOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Monthly Spend" value="KES 4.2M" trend="-2.4% vs budget" icon={AccountBalanceOutlinedIcon} /></Grid>
                    <Grid size={{ xs: 3 }}><StatCard title="Delivery Rate" value="94%" trend="+3.1% improvement" icon={LocalShippingOutlinedIcon} /></Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={{ xs: 8 }}>
                      <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Approval Workflow Status</Typography>
                        </Box>
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                          {[
                            { label: 'Pending Dept. Head', val: 75, color: '#f59e0b' },
                            { label: 'Pending Finance', val: 45, color: '#3b82f6' },
                            { label: 'Pending Admin', val: 20, color: '#a855f7' }
                          ].map((item, i) => (
                            <Box key={i}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                <Typography sx={{ fontSize: '0.65rem', color: '#64748b' }}>{item.label}</Typography>
                                <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>{item.val}%</Typography>
                              </Box>
                              <Box sx={{ width: '100%', height: 4, bgcolor: '#f1f5f9', borderRadius: 2, overflow: 'hidden' }}>
                                <Box sx={{ width: `${item.val}%`, height: '100%', bgcolor: '#10b981' }} />
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                    <Grid size={{ xs: 4 }}>
                      <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a', mb: 1 }}>Audit Score</Typography>
                        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>A+</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '0.6rem', color: '#64748b', mt: 1 }}>100% Compliant</Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Capabilities */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: '#a855f7', fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', mb: 2 }}>KEY CAPABILITIES</Typography>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' } }}>Maximize your procurement efficiency</Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {[
              { icon: <RequestQuoteOutlinedIcon />, title: "Purchase Requisitions", desc: "Digitalize and automate the entire requisition process from request to approval." },
              { icon: <BusinessOutlinedIcon />, title: "Supplier Management", desc: "Maintain a centralized database of verified suppliers with performance tracking." },
              { icon: <FactCheckOutlinedIcon />, title: "Order Tracking", desc: "Monitor every order in real-time with automated status updates." },
              { icon: <InventoryOutlinedIcon />, title: "Inventory Management", desc: "Track stock levels, manage warehouses, and automate reordering." },
              { icon: <RuleOutlinedIcon />, title: "Approval Workflows", desc: "Custom multi-level approval hierarchies to ensure compliance and budget control." },
              { icon: <AccountBalanceOutlinedIcon />, title: "Financial Integration", desc: "Seamlessly link procurement data with your accounting and billing systems." }
            ].map((cap, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #f1f5f9', display: 'flex', gap: 2, height: '100%', transition: 'all 0.2s', '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderColor: '#10b981' } }}>
                  <Box sx={{ color: '#10b981', bgcolor: '#ecfdf5', p: 1.5, borderRadius: '12px', display: 'flex', alignItems: 'flex-start' }}>
                    {cap.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a', mb: 1 }}>{cap.title}</Typography>
                    <Typography sx={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{cap.desc}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Built-in Modules */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0f172a', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>Procurement Modules</Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              { icon: <DashboardOutlinedIcon />, title: "Command Center", desc: "Centralized view of all procurement activities." },
              { icon: <AssignmentOutlinedIcon />, title: "Requisition Engine", desc: "Custom forms and automated request routing." },
              { icon: <BusinessOutlinedIcon />, title: "Supplier Portal", desc: "Self-service portal for vendors to manage orders." },
              { icon: <VerifiedOutlinedIcon />, title: "Contract Management", desc: "Store and track all vendor contracts and terms." },
              { icon: <RequestQuoteOutlinedIcon />, title: "RFQ & Bidding", desc: "Manage quotes and competitive bidding processes." },
              { icon: <LocalShippingOutlinedIcon />, title: "Logistics Hub", desc: "Track shipments and manage delivery schedules." },
              { icon: <InventoryOutlinedIcon />, title: "Warehouse Mgt", desc: "Optimize storage and inventory movement." },
              { icon: <FactCheckOutlinedIcon />, title: "Receiving & QC", desc: "Standardize the receiving and quality check process." },
              { icon: <AssessmentOutlinedIcon />, title: "Spend Reports", desc: "Detailed analytics on category and vendor spend." },
              { icon: <RuleOutlinedIcon />, title: "Policy Compliance", desc: "Enforce company procurement policies automatically." },
              { icon: <NotificationsActiveOutlinedIcon />, title: "Smart Reminders", desc: "Never miss a renewal or delivery deadline." },
              { icon: <SecurityIcon />, title: "Risk Management", desc: "Identify and mitigate supply chain risks." }
            ].map((mod, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <Paper elevation={0} sx={{ p: 2.5, borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: 2, height: '100%', bgcolor: '#fff' }}>
                  <Box sx={{ color: '#10b981', display: 'flex', alignItems: 'flex-start' }}>
                    {mod.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', mb: 0.5 }}>{mod.title}</Typography>
                    <Typography sx={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.4 }}>{mod.desc}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, lg: 8 } }}>
          <Box sx={{ 
            background: `linear-gradient(90deg, #3b0764 0%, #581c87 100%)`,
            borderRadius: '24px', 
            p: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
            boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.2)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: '50%', display: 'flex', backdropFilter: 'blur(10px)' }}>
                <InventoryOutlinedIcon sx={{ color: '#fff', fontSize: 32 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ color: '#fff', mb: 1, fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' } }}>Ready to Optimize Your Supply Chain?</Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1rem' }}>Take control of your procurement process with Trinity Softwares.</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', md: 'auto' } }}>
              <Button component={RouterLink} to="/contact" variant="contained" size="large" sx={{ bgcolor: '#fff', color: '#064e3b', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '8px', textTransform: 'none', '&:hover': { bgcolor: '#f1f5f9' } }}>
                Request Demo
              </Button>
              <Button component={RouterLink} to="/contact" variant="outlined" size="large" sx={{ color: '#fff', borderColor: '#10b981', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '8px', textTransform: 'none', '&:hover': { borderColor: '#34d399', bgcolor: 'rgba(16, 185, 129, 0.1)' } }}>
                Talk to Sales
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
