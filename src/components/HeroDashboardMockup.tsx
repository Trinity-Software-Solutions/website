import { Box, Typography, Paper, Grid } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import ShieldIcon from '@mui/icons-material/Shield';

export default function HeroDashboardMockup() {
  const StatCard = ({ title, value, trend }: { title: string, value: string, trend: string }) => (
    <Paper elevation={0} sx={{ p: 1.5, borderRadius: 2, border: '1px solid #e2e8f0' }}>
      <Typography sx={{ fontSize: '0.6rem', color: '#64748b', fontWeight: 600, mb: 0.5 }}>{title}</Typography>
      <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{value}</Typography>
      <Typography sx={{ fontSize: '0.55rem', color: '#10b981', fontWeight: 600 }}>{trend}</Typography>
    </Paper>
  );

  return (
    <Box sx={{ position: 'relative', width: '100%', aspectRatio: { xs: 'auto', md: '1.4/1' }, minHeight: { xs: 500, md: 'auto' }, display: 'flex' }}>
      
      {}
      <Box sx={{ position: 'absolute', top: '5%', left: '-8%', width: { xs: 40, md: 64 }, height: { xs: 40, md: 64 }, bgcolor: '#eff6ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)', zIndex: 10, border: '1px solid rgba(255,255,255,0.5)' }}>
        <CloudIcon sx={{ color: '#3b82f6', fontSize: { xs: 24, md: 36 } }} />
      </Box>
      <Box sx={{ position: 'absolute', top: '35%', right: '-6%', width: { xs: 48, md: 72 }, height: { xs: 48, md: 72 }, bgcolor: '#3b82f6', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 30px -10px rgba(59, 130, 246, 0.6)', zIndex: 10, border: '1px solid rgba(255,255,255,0.2)' }}>
        <ShieldIcon sx={{ color: '#fff', fontSize: { xs: 28, md: 40 } }} />
      </Box>
      <Box sx={{ position: 'absolute', bottom: '10%', left: '-5%', width: { xs: 48, md: 72 }, height: { xs: 48, md: 72 }, bgcolor: '#fff', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.15)', zIndex: 10, border: '1px solid rgba(255,255,255,0.5)' }}>
        <BarChartIcon sx={{ color: '#10b981', fontSize: { xs: 28, md: 40 } }} />
      </Box>

      {}
      <Paper elevation={0} sx={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        borderRadius: '24px', 
        overflow: 'hidden',
        boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.8)',
        bgcolor: '#f8fafc',
        position: 'relative',
        zIndex: 5
      }}>
        {}
        <Box sx={{ width: '25%', bgcolor: '#0f172a', p: 2, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
            <Box sx={{ display: 'flex' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="6" r="4" fill="#10b981"/>
                <circle cx="6" cy="18" r="4" fill="#3b82f6"/>
                <circle cx="18" cy="18" r="4" fill="#3b82f6"/>
                <path d="M12 6L6 18H18L12 6Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </Box>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em' }}>TRINITY<br/><span style={{ fontSize: '0.5rem', color: '#10b981' }}>SOFTWARES</span></Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ bgcolor: '#3b82f6', color: '#fff', p: 1, borderRadius: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
              <DashboardIcon sx={{ fontSize: 16 }} />
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 600 }}>Dashboard</Typography>
            </Box>
            {[
              { icon: <PeopleIcon sx={{ fontSize: 16 }} />, label: 'Customers' },
              { icon: <ReceiptIcon sx={{ fontSize: 16 }} />, label: 'Subscriptions' },
              { icon: <ReceiptIcon sx={{ fontSize: 16 }} />, label: 'Invoices' },
              { icon: <BarChartIcon sx={{ fontSize: 16 }} />, label: 'Reports' },
              { icon: <SettingsIcon sx={{ fontSize: 16 }} />, label: 'Settings' }
            ].map((item, i) => (
              <Box key={i} sx={{ color: '#94a3b8', p: 1, borderRadius: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                {item.icon}
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 500 }}>{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {}
        <Box sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column', gap: 2, overflow: 'hidden' }}>
          
          {}
          <Grid container spacing={1.5}>
            <Grid size={{ xs: 3 }}><StatCard title="Total Customers" value="2,543" trend="+12.5% from last month" /></Grid>
            <Grid size={{ xs: 3 }}><StatCard title="Active Subscriptions" value="1,892" trend="+8.2% from last month" /></Grid>
            <Grid size={{ xs: 3 }}><StatCard title="Monthly Revenue" value="KES 2.45M" trend="+15.2% from last month" /></Grid>
            <Grid size={{ xs: 3 }}><StatCard title="Outstanding Invoices" value="320" trend="+5.1% from last month" /></Grid>
          </Grid>

          {}
          <Grid container spacing={1.5} sx={{ flex: 1 }}>
            <Grid size={{ xs: 8 }}>
              <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#0f172a', mb: 2 }}>Revenue Overview</Typography>
                <Box sx={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
                  {}
                  <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <path d="M0,30 L10,25 L20,28 L30,20 L40,22 L50,15 L60,18 L70,10 L80,12 L90,5 L100,2" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="10" cy="25" r="1.5" fill="#3b82f6" />
                    <circle cx="20" cy="28" r="1.5" fill="#3b82f6" />
                    <circle cx="30" cy="20" r="1.5" fill="#3b82f6" />
                    <circle cx="40" cy="22" r="1.5" fill="#3b82f6" />
                    <circle cx="50" cy="15" r="1.5" fill="#3b82f6" />
                    <circle cx="60" cy="18" r="1.5" fill="#3b82f6" />
                    <circle cx="70" cy="10" r="1.5" fill="#3b82f6" />
                    <circle cx="80" cy="12" r="1.5" fill="#3b82f6" />
                    <circle cx="90" cy="5" r="1.5" fill="#3b82f6" />
                    <circle cx="100" cy="2" r="1.5" fill="#3b82f6" />
                  </svg>
                  <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(59,130,246,0.1) 0%, rgba(255,255,255,0) 100%)', clipPath: 'polygon(0 30px, 10% 25px, 20% 28px, 30% 20px, 40% 22px, 50% 15px, 60% 18px, 70% 10px, 80% 12px, 90% 5px, 100% 2px, 100% 100%, 0 100%)' }} />
                </Box>
              </Paper>
            </Grid>
            <Grid size={{ xs: 4 }}>
              <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#0f172a', mb: 2 }}>Plan Distribution</Typography>
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {}
                  <svg width="80" height="80" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="6" />
                    <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#3b82f6" strokeWidth="6" strokeDasharray="50 50" strokeDashoffset="25" />
                    <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#10b981" strokeWidth="6" strokeDasharray="30 70" strokeDashoffset="-25" />
                    <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#f59e0b" strokeWidth="6" strokeDasharray="15 85" strokeDashoffset="-55" />
                    <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#ef4444" strokeWidth="6" strokeDasharray="5 95" strokeDashoffset="-70" />
                  </svg>
                  <Box sx={{ position: 'absolute', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, lineHeight: 1 }}>1,892</Typography>
                    <Typography sx={{ fontSize: '0.4rem', color: '#64748b' }}>Total</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {}
          <Grid container spacing={1.5}>
            <Grid size={{ xs: 6 }}>
              <Paper elevation={0} sx={{ p: 1.5, borderRadius: 2, border: '1px solid #e2e8f0' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>Recent Invoices</Typography>
                  <Typography sx={{ fontSize: '0.55rem', color: '#3b82f6' }}>View All</Typography>
                </Box>
                {[
                  { id: 'INV-00254', client: 'Acme Ltd', amt: 'KES 45,000', status: 'Paid', color: '#10b981' },
                  { id: 'INV-00253', client: 'TechCorp', amt: 'KES 120,000', status: 'Pending', color: '#f59e0b' }
                ].map((inv, i) => (
                  <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                    <Typography sx={{ fontSize: '0.55rem', color: '#64748b' }}>{inv.id}</Typography>
                    <Typography sx={{ fontSize: '0.55rem', fontWeight: 600 }}>{inv.client}</Typography>
                    <Typography sx={{ fontSize: '0.55rem', fontWeight: 600 }}>{inv.amt}</Typography>
                    <Box sx={{ bgcolor: `${inv.color}20`, color: inv.color, px: 0.5, borderRadius: 1, fontSize: '0.5rem', fontWeight: 700 }}>{inv.status}</Box>
                  </Box>
                ))}
              </Paper>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Paper elevation={0} sx={{ p: 1.5, borderRadius: 2, border: '1px solid #e2e8f0' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>Recent Activity</Typography>
                  <Typography sx={{ fontSize: '0.55rem', color: '#3b82f6' }}>View All</Typography>
                </Box>
                {[
                  { desc: 'New subscription created for Acme Ltd', time: '2 mins ago' },
                  { desc: 'Invoice INV-00254 paid', time: '15 mins ago' }
                ].map((act, i) => (
                  <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: '#10b981' }} />
                      <Typography sx={{ fontSize: '0.55rem', color: '#334155' }}>{act.desc}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.5rem', color: '#94a3b8' }}>{act.time}</Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
