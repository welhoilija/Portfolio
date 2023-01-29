import Card from '@material-ui/core/Card';
import React from "react";
import CardHeader from '@mui/material/CardHeader';
import { CardMedia, Typography } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '300px',
    height: '500px',
    margin: '50px',
    padding: "20px",
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.2)',
    border: '1px solid #1E2EDE',
  },
  cardHeader: {
    width: '250px',
    height: '150px',
    padding: '10px',
    backgroundColor: theme.palette.secondary.main,
  },
  cardMedia: {
    alignItems: 'center',
    width: '250px',
    height: '200px',
    padding: '10px',
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function MyCard({ text, title, image, link, className}) {
    const classes = useStyles();
    return (
      <Card className={`${classes.card} ${className}`} style={{ border: "1px solid #1E2EDE"}} >
        <CardHeader
          className={`${classes.cardHeader}`}
          title={title}
          subheader={text}
        />
        <CardMedia
          className={`${classes.cardMedia}`}
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        <CardActions>
          <Button size="large" color="primary" className='submitbutton' href={link} style={{ alignItems: 'center'}} >
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
