import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 349 , m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1588723071875-2c8c39b51c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TITULO AQUI
        </Typography>
        <Typography variant="body2" color="text.secondary">
          previv da materia
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ir para materia</Button>
      </CardActions>
    </Card>
  );
}