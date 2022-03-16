import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useStyles from './styles';
import { Link, useNavigate } from 'react-router-dom';

const pages = [['Home', '/'], ['Products', '/Products'], ['Contact Us', '/'], ['Cart', '/Cart']];
const Navbar = ({ setToken, userInfo, setUserInfo, setCart }) => {

    const navigate = useNavigate();

    useStyles();

    const [state, setState] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElProduct, setAnchorElProduct] = React.useState(null);

    const handleOpenNavMenu = () => {
        setState(true);
    };

    const handleCloseNavMenu = () => {
        setState(false);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenProductMenu = (event) => {
        setAnchorElProduct(event.currentTarget);
    };

    const handleCloseProductMenu = () => {
        setAnchorElProduct(null);
    };

    const handleLogout = () => {
        setAnchorElUser(null);
        setCart("");
        setToken("");
        setUserInfo("");
        navigate('/signin');
    };

    const Sidebar = () => (
        <Box
            sx={{ width: 250 }}
            onClick={handleCloseNavMenu}
        >
            <List>
                {pages.map((text, index) => (
                    <ListItem component={Link} to={text[1]} button key={text[0]}>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={text[0]} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" color="default">
            <Container maxWidth="false">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={state}
                            onClose={handleCloseNavMenu}
                        >
                            {Sidebar()}
                        </Drawer>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button name="home"
                            component={Link}
                            to={pages[0][1]}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'inherit', display: 'block' }}
                        >
                            {pages[0][0]}
                        </Button>
                        <Button name="cart"
                            component={Link}
                            to={pages[3][1]}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'inherit', display: 'block' }}
                        >
                            {pages[3][0]}
                        </Button>
                        <Button name="products"
                            onClick={handleOpenProductMenu}
                            sx={{ my: 2, color: 'inherit', display: 'block' }}
                        >
                            {pages[1][0]}
                        </Button>
                        <Menu
                            anchorEl={anchorElProduct}
                            keepMounted
                            open={Boolean(anchorElProduct)}
                            onClose={handleCloseProductMenu}
                            >
                                    <MenuItem  component={Link} to='products' onClick={() => {
                                        window.location("products");
                                        }
                                    }>All Products</MenuItem>
                                    <MenuItem  component={Link} to='products/shoes' onClick={() => {
                                        window.location("products/shoes");
                                        }
                                    }>Shoes</MenuItem>
                                    <MenuItem  component={Link} to='products/shirts' onClick={() => {
                                        window.location("products/shirts");
                                        }
                                    }>Shirts</MenuItem>
                                    <MenuItem  component={Link} to='products/pants' onClick={() => {
                                        window.location("products/pants");
                                        }
                                    }>Pants</MenuItem>
                        </Menu>
                        <Button name="contactus"
                            component={Link}
                            to={pages[2][1]}
                            key={pages[2][0]}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'inherit', display: 'none' }}
                        >
                            {pages[2][0]}
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: userInfo ? 'block' : 'none' }} >
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Lorem Ipsum" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorElUser}
                            keepMounted
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu} component={Link} to="/admin/add-products" sx={{display: userInfo && userInfo.isAdmin ? "block" : "none"}}>
                                <Typography textAlign="center">Add Products</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} component={Link} to="/dashboard">
                                <Typography textAlign="center">My Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} component={Link} to="/Cart">
                                <Typography textAlign="center">My Cart</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: userInfo ? 'none' : 'block' }} >
                        <Button
                            component={Link}
                            to="/signin"
                            key="Sign In"
                            sx={{ my: 2, color: 'primary', display: 'block', fontSize: 16 }}
                        >
                            Sign in
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;