
import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,  Container,Typography,Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Inventory from "./Add"
import Splitbutton from "./Splitbutton";


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function List() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <section>
        <Splitbutton />
        </section>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
         <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />



                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Apple Iphone
                    </Typography>
                    <Typography>
                      $ price
                    </Typography>
                    <Inventory />
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">Add</Button>
                    <Button size="small" variant="outlined">Edit</Button>
                  </CardActions>
                  <Pagination count={10} variant="outlined" shape="rounded" />
                </Card>
              </Grid>
                ))} 
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
  );
}

