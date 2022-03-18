import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useStyles from './styles';
import axios from 'axios';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import  {useNavigate}  from 'react-router-dom';

const apiURL = "http://localhost:4000/";

const AddPPage = () => {
  const navigate = useNavigate();

  async function registerProduct(product) {
    return await axios.post(apiURL + "Products/admin/add-products", product).catch(() => { return null });
  }
  
    const classes = useStyles();

    const [Category, setCategory] = React.useState("");
    const [Description, setDescription] = React.useState("");
    const [Name, setName] = React.useState("");
    const [Price, setPrice] = React.useState("");
    const [Image, setImage] = React.useState("");
    const [nameError, setNameError] = React.useState("");

    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    }
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    }
    const handleNameChange = (e) => {
      setName(e.target.value);
    }
    const handlePriceChange = (e) => {
      setPrice(e.target.value);
    }
    const handleImageChange = (e) => {
      setImage(e.target.value);
    }

    const validate = () => {
      let nameError = "";

      setNameError("");

      if (!Name) {
        nameError = "Invalid Name";
      }
      if (nameError) {
        setNameError(nameError);
      }
      return true
    };
  

    const handleSubmit = async (event) => {
      event.preventDefault();
      const isValid = validate();
      if (isValid) {
        const res = await registerProduct({
          Category: Category,
          Description: Description,
          Name: Name,
          Price: Price,
          Image: Image,
        });
        if (res == null) {
          setNameError("Name already exists");
        }
        else {
          navigate("/")
        }
      }
    };
  

    return(
      <main className={classes.content}>
      <div className={classes.toolbar}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Products
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Category"
                    label="Category"
                    name="Category"
                    value={Category}
                    onChange={handleCategoryChange}
                  
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Description"
                    value={Description}
                    onChange={handleDescriptionChange}
                    label="Description"
                    type="Description"
                    id="Description"
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Name"
                    value={Name}
                    onChange={handleNameChange}
                    label="Name"
                    type="Name"
                    id="Name"
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Price"
                    value={Price}
                    onChange={handlePriceChange}
                    label="Price"
                    type="Price"
                    id="Price"
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Image"
                    value={Image}
                    onChange={handleImageChange}
                    label="Image"
                    type=""
                    id="Image"
                    
                  />
                </Grid>

              </Grid>
              <div display style={{ fontSize: 15, color: "red" }}>{nameError}</div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add product
              </Button>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </main>
    );
}

export default AddPPage;