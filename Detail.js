import  React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia,Button } from '@mui/material';


export default function Detail() {
  return (
    <Card sx={{ maxWidth: 662}}>
        <CardMedia
            component="img"
            img="#"
            height="597"
            alt="product info"
        />
        <CardContent>
              <Typography gutterBottom variant="h9" component="div">
                Catagory
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Product Name
              </Typography>
              <Typography>
                      $ price
                </Typography>
              <Typography variant="body2" color="text.secondary">
                Detail Information
              </Typography>
        </CardContent>
        <CardActions>
                    <Button size="small" variant="contained">Add</Button>
                    <Button size="small" variant="outlined">Edit</Button>
          </CardActions>
    </Card>
  )
}


