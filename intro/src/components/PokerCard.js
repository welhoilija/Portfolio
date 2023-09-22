import React from "react";
import Card from '@mui/material/Card';

export default function PokerCard({ CardName }) {
    const types = {
        H: "♥",
        C: "♣",
        S: "♠",
        D: "♦",
    };
    const getSuit = (name) => {
        for (let key in types) {
            if (name.includes(key)) {
                return types[key];
            }
        }
        throw new Error(`Invalid card name: ${name}`);
    };
    const suit = getSuit(CardName)

    return (
      <Card sx={{margin: 2, height: "200px", width: "100px", position: "relative"}}>
        <div className={`suit top-left ${suit}`}>{suit}{CardName.slice(0,1)}</div>
        <div className={`middle ${suit}`}>{suit}{CardName.slice(0,1)}</div>
        <div className={`suit bottom-right ${suit}`}>{suit}{CardName.slice(0,1)}</div>
      </Card>
  );
}
  