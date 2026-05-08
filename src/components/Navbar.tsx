import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../assets/design/trignity software logo.png';

const menuItems = [
  { title: 'Home', path: '/', dropdown: false },
  { title: 'Solutions', path: '/solutions', dropdown: false },
  { title: 'Pricing', path: '/pricing', dropdown: false },
  { title: 'About Us', path: '/about', dropdown: false }
];

const NavButton = ({ 
  item, 
  isActive, 
  theme 
}: { 
  item: typeof menuItems[0], 
  isActive: (path: string) => boolean,
  theme: any
}) => {
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
  isActive, 
  theme 
}: { 
  mobileOpen: boolean, 
  handleMobileClose: () => void, 
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
        <ListItem key={idx} disablePadding>
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
      ))}
    </List>
  </Drawer>
);

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
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



  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        bgcolor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1100 
      }}
    >
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
                  isActive={isActive}
                  theme={theme}
                />
              ))}
            </Box>
          )}

          {}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
        isActive={isActive}
        theme={theme}
      />
      
      {}

    </AppBar>
  );
}
