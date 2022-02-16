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
import { Link } from 'react-router-dom';

const pages = [['Home', '/'], ['Products', '/Products'], ['Contact Us', '/']];
const settings = ['Profile', 'My Cart', 'Logout'];
const productlist = ['Shoes', 'Shirts', 'Pants'];

const Navbar = () => {
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

    const Sidebar = () => (
        <Box
            sx={{ width: 250 }}
            onClick={handleCloseNavMenu}
        >
            <List>
                {pages.map((text, index) => (
                    <ListItem component = {Link} to = {text[1]} button key={text}>
                        <ListItemText component primary={text[0]} />
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
                            <Button name = "home"
                                component={Link}
                                to={pages[0][1]}
                                key={pages[0][1]}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'inherit', display: 'block' }}
                                >
                                {pages[0][0]}
                            </Button>

                            <Button name = "products"
                                key={pages[0][1]}
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
                            {productlist.map((products) => (
                                <MenuItem key={products} onClick={handleCloseProductMenu}>
                                    <Typography textAlign="center">{products}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                            <Button name = "contactus"
                                component={Link}
                                to={pages[2][1]}
                                key={pages[2][0]}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'inherit', display: 'none' }}
                               >
                                {pages[2][0]}
                            </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 , display:'none'}} >
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
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0 }} >
                        <IconButton 
                            component={Link} 
                            to={"/signin"} 
                            sx={{ my: 2, color: 'inherit', display: 'block', p: 0 }}
                            >
                            <Avatar alt="Lorem Ipsum" src="" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;