import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
  Grid
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GroupIcon from '@mui/icons-material/Group';
import PaymentIcon from '@mui/icons-material/Payment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GppGoodIcon from '@mui/icons-material/GppGood';
import ExtensionIcon from '@mui/icons-material/Extension';
import SecurityIcon from '@mui/icons-material/Security';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessIcon from '@mui/icons-material/Business';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloudIcon from '@mui/icons-material/Cloud';
import InsightsIcon from '@mui/icons-material/Insights';

import logo from '../assets/design/trignity software logo.png';

const menuItems = [
  { title: 'Home', path: '/', dropdown: false },
  { title: 'Solutions', path: '/solutions', dropdown: false },
  { 
    title: 'Products', 
    dropdown: true,
    items: [
      { title: 'Customers', path: '/products#customers', desc: 'CRM & Relationship history.', icon: <GroupIcon />, color: '#10b981' },
      { title: 'Billing', path: '/products#billing', desc: 'Recurring tiers & automation.', icon: <PaymentIcon />, color: '#10b981' },
      { title: 'Analytics', path: '/products#analytics', desc: 'Real-time performance data.', icon: <AssessmentIcon />, color: '#10b981' },
      { title: 'Security', path: '/products#security', desc: 'Enterprise-grade protection.', icon: <SecurityIcon />, color: '#10b981' },
      { title: 'Cloud', path: '/products#cloud', desc: 'Scalable cloud infrastructure.', icon: <CloudIcon />, color: '#10b981' },
      { title: 'POS System', path: '/solutions/pos', desc: 'Integrated retail checkout.', icon: <PaymentIcon />, color: '#10b981' },
      { title: 'Integrations', path: '/products#integrations', desc: 'Connect your favorite apps.', icon: <ExtensionIcon />, color: '#10b981' },
      { title: 'Notifications', path: '/products#notifications', desc: 'Real-time alerts & SMS.', icon: <NotificationsIcon />, color: '#10b981' }
    ]
  },
  { 
    title: 'Modules', 
    dropdown: true,
    items: [
      { title: 'CRM Core', path: '/modules#customers', desc: 'Central data hub.', icon: <GroupIcon />, color: '#10b981' },
      { title: 'Billing', path: '/modules#subscriptions', desc: 'Lifecycle logic.', icon: <PaymentIcon />, color: '#10b981' },
      { title: 'Reports', path: '/modules#reports', desc: 'Data visualization.', icon: <AssessmentIcon />, color: '#10b981' },
      { title: 'Roles', path: '/modules#roles', desc: 'Access control.', icon: <GppGoodIcon />, color: '#10b981' },
      { title: 'Alerts', path: '/modules#notifications', desc: 'Auto reminders.', icon: <NotificationsIcon />, color: '#10b981' },
      { title: 'Connect', path: '/modules#integrations', desc: 'API & webhooks.', icon: <ExtensionIcon />, color: '#10b981' },
      { title: 'Security', path: '/modules#security', desc: 'Audit trails.', icon: <SecurityIcon />, color: '#10b981' },
      { title: 'Hosting', path: '/modules#cloud', desc: '99.9% Uptime.', icon: <CloudIcon />, color: '#10b981' },
      { title: 'POS Core', path: '/solutions/pos', desc: 'Retail logic.', icon: <PaymentIcon />, color: '#10b981' },
      { title: 'AI Ops', path: '/modules#ai', desc: 'Predictive tools.', icon: <InsightsIcon />, color: '#10b981' },
      { title: 'Dev API', path: '/modules#api', desc: 'Custom build.', icon: <CodeIcon />, color: '#10b981' }
    ]
  },
  { title: 'Pricing', path: '/pricing', dropdown: false },
  { 
    title: 'Resources', 
    dropdown: true,
    items: [
      { title: 'Docs', path: '/resources#docs', desc: 'Complete manuals.', icon: <DescriptionIcon />, color: '#3b82f6' },
      { title: 'API', path: '/resources#api', desc: 'Developer hub.', icon: <CodeIcon />, color: '#10b981' },
      { title: 'Blog', path: '/resources#blog', desc: 'Latest tips.', icon: <ArticleIcon />, color: '#f59e0b' },
      { title: 'Cases', path: '/resources#cases', desc: 'User stories.', icon: <BusinessIcon />, color: '#8b5cf6' },
      { title: 'Help', path: '/resources#help', desc: 'Quick answers.', icon: <HelpIcon />, color: '#ec4899' }
    ]
  },
  { title: 'About Us', path: '/about', dropdown: false }
];

const NavButton = ({ 
  item, 
  openMenu, 
  handleMenuClick, 
  isActive, 
  theme 
}: { 
  item: typeof menuItems[0], 
  openMenu: string | null, 
  handleMenuClick: (event: React.MouseEvent<HTMLElement>, menuName: string) => void,
  isActive: (path: string) => boolean,
  theme: any
}) => {
  if (item.dropdown) {
    return (
      <Button
        color="inherit"
        onClick={(e) => handleMenuClick(e, item.title)}
        endIcon={<KeyboardArrowDownIcon fontSize="small" sx={{ transform: openMenu === item.title ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />}
        sx={{
          color: openMenu === item.title ? theme.palette.primary.main : theme.palette.text.secondary,
          fontWeight: 600,
          px: 2,
          fontSize: '0.92rem',
          textTransform: 'none',
          '&:hover': { color: theme.palette.primary.main, backgroundColor: 'transparent' }
        }}
      >
        {item.title}
      </Button>
    );
  }

  return (
    <Button
      component={RouterLink}
      to={item.path || '#'}
      color="inherit"
      sx={{
        color: isActive(item.path || '') ? theme.palette.primary.main : theme.palette.text.secondary,
        fontWeight: 600,
        px: 2,
        fontSize: '0.92rem',
        textTransform: 'none',
        borderBottom: isActive(item.path || '') ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
        borderRadius: 0,
        '&:hover': { color: theme.palette.primary.main, backgroundColor: 'transparent' }
      }}
    >
      {item.title}
    </Button>
  );
};

const MobileDrawer = ({ 
  mobileOpen, 
  handleMobileClose, 
  handleMenuClick, 
  openMenu, 
  isActive, 
  theme 
}: { 
  mobileOpen: boolean, 
  handleMobileClose: () => void, 
  handleMenuClick: (event: React.MouseEvent<HTMLElement>, menuName: string) => void,
  openMenu: string | null,
  isActive: (path: string) => boolean,
  theme: any
}) => (
  <Drawer
    anchor="right"
    open={mobileOpen}
    onClose={handleMobileClose}
    slotProps={{
      paper: { sx: { width: 320, bgcolor: '#fff', pt: 2 } }
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pb: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 800, color: theme.palette.primary.main }}>Trinity Solutions</Typography>
      <IconButton onClick={handleMobileClose} size="small">
        <CloseIcon />
      </IconButton>
    </Box>
    <Divider />
    <List sx={{ pt: 0 }}>
      {menuItems.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.dropdown ? (
            <>
              <ListItem disablePadding>
                <ListItemButton onClick={(e) => handleMenuClick(e, item.title)}>
                  <ListItemText primary={item.title} sx={{ '& .MuiTypography-root': { fontWeight: 700 } }} />
                  <ChevronRightIcon sx={{ transform: openMenu === item.title ? 'rotate(90deg)' : 'none', transition: '0.2s' }} />
                </ListItemButton>
              </ListItem>
              {openMenu === item.title && (
                <Box sx={{ pl: 0, bgcolor: '#f8fafc' }}>
                  {item.items?.map((subItem, subIdx) => (
                    <ListItem key={subIdx} disablePadding>
                      <ListItemButton 
                        onClick={handleMobileClose}
                        component={RouterLink}
                        to={subItem.path}
                        sx={{ py: 1.5, pl: 3 }}
                      >
                        <Box sx={{ 
                          width: 32, 
                          height: 32, 
                          borderRadius: '8px', 
                          bgcolor: `${subItem.color}15`, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          mr: 2,
                          color: subItem.color,
                          '& svg': { fontSize: 18 }
                        }}>
                          {subItem.icon}
                        </Box>
                        <ListItemText 
                          primary={subItem.title}
                          secondary={subItem.desc}
                          sx={{ 
                            '& .MuiTypography-primary': { fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' },
                            '& .MuiTypography-secondary': { fontSize: '0.7rem', color: '#64748b' }
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Box>
              )}
            </>
          ) : (
            <ListItem disablePadding>
              <ListItemButton 
                component={RouterLink}
                to={item.path}
                onClick={handleMobileClose}
                selected={isActive(item.path || '')}
              >
                <ListItemText 
                  primary={item.title}
                  sx={{ 
                    '& .MuiTypography-root': { 
                      fontWeight: isActive(item.path || '') ? 700 : 600,
                      color: isActive(item.path || '') ? theme.palette.primary.main : '#334155'
                    } 
                  }}
                />
              </ListItemButton>
            </ListItem>
          )}
        </React.Fragment>
      ))}
    </List>
  </Drawer>
);

export default function Navbar({ mode, toggleColorMode }: { mode: string, toggleColorMode: () => void }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, menuName: string) => {
    if (openMenu === menuName) {
      handleClose();
    } else {
      setAnchorEl(event.currentTarget);
      setOpenMenu(menuName);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#fff', borderBottom: `1px solid ${theme.palette.divider}`, zIndex: 1100 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '80px !important' }}>
          {}
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src={logo} 
              alt="Trinity Softwares" 
              style={{ height: isMobile ? '32px' : '40px', transition: 'height 0.3s' }} 
            />
          </Box>

          {}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {menuItems.map((item, idx) => (
                <NavButton 
                  key={idx} 
                  item={item} 
                  openMenu={openMenu}
                  handleMenuClick={handleMenuClick}
                  isActive={isActive}
                  theme={theme}
                />
              ))}
            </Box>
          )}

          {}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton 
              onClick={toggleColorMode} 
              sx={{ 
                color: theme.palette.text.secondary,
                '&:hover': { bgcolor: mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)' }
              }}
            >
              {mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>

            {isMobile && (
              <IconButton
                color="inherit"
                onClick={handleMobileToggle}
                sx={{ ml: 1, color: theme.palette.text.primary }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
      
      <MobileDrawer 
        mobileOpen={mobileOpen}
        handleMobileClose={handleMobileClose}
        handleMenuClick={handleMenuClick}
        openMenu={openMenu}
        isActive={isActive}
        theme={theme}
      />
      
      {}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && !isMobile}
        onClose={handleClose}
        elevation={0}
        slotProps={{
          paper: { 
            sx: { 
              mt: 1, 
              minWidth: openMenu === 'Modules' ? 600 : (openMenu === 'Products' ? 540 : 320),
              maxWidth: 800,
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              p: 2
            } 
          }
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <Box sx={{ p: 1 }}>
          <Grid container spacing={1}>
            {menuItems.find(item => item.title === openMenu)?.items?.map((subItem: any, idx) => (
              <Grid size={{ xs: openMenu === 'Resources' ? 12 : 6 }} key={idx}>
                <MenuItem 
                  onClick={handleClose}
                  component={RouterLink}
                  to={subItem.path}
                  sx={{
                    borderRadius: '12px',
                    py: 1.5,
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    transition: 'all 0.2s',
                    '&:hover': { 
                      bgcolor: `${subItem.color}10`,
                      '& .icon-box': { bgcolor: `${subItem.color}25`, transform: 'scale(1.1)' }
                    }
                  }}
                >
                  <Box 
                    className="icon-box"
                    sx={{ 
                      width: 44, 
                      height: 44, 
                      borderRadius: '12px', 
                      bgcolor: `${subItem.color}15`, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: subItem.color,
                      transition: 'all 0.2s'
                    }}
                  >
                    {subItem.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1.2, fontSize: '0.9rem' }}>
                      {subItem.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mt: 0.5, fontSize: '0.75rem', lineHeight: 1.3 }}>
                      {subItem.desc}
                    </Typography>
                  </Box>
                </MenuItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Menu>
    </AppBar>
  );
}
