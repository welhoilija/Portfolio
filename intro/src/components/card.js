import Card from "@material-ui/core/Card";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import { CardMedia, CardActions, Button } from "@material-ui/core";

export default function MyCard({ text, title, image, link, className }) {
  return (
    <Card
      sx={{
        width: "300px",
        height: "500px",
        margin: "50px",
        padding: "20px",
        boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.2)",
        backgroundColor: "darkblue",
      }}
      className={className}
    >
      <CardHeader
        sx={{
          width: "250px",
          height: "150px",
          padding: "10px",
          backgroundColor: "darkblue",
        }}
        title={title}
        subheader={text}
      />
      <CardMedia
        sx={{
          alignItems: "center",
          width: "250px",
          height: "200px",
          padding: "10px",
          backgroundColor: "darkblue",
        }}
        component="img"
        height="200"
        image={image}
        alt={title}
      />
      <CardActions
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          size="large"
          color="primary"
          className="submitbutton"
          href={link}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
