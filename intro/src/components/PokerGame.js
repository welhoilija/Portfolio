import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import PokerCard from "./PokerCard";

export default function PokerPage() {
  const cards = [
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "TH",
    "JH",
    "QH",
    "KH",
    "AH",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "TD",
    "JD",
    "QD",
    "KD",
    "AD",
    "2S",
    "3S",
    "4S",
    "5S",
    "6S",
    "7S",
    "8S",
    "9S",
    "TS",
    "JS",
    "QS",
    "KS",
    "AS",
    "2C",
    "3C",
    "4C",
    "5C",
    "6C",
    "7C",
    "8C",
    "9C",
    "TC",
    "JC",
    "QC",
    "KC",
    "AC",
  ];

  const [players, setPlayers] = useState([
    {
      id: "player",
      hand: [],
      balance: 2000,
      currentBet: 0,
      status: "active",
    },
    {
      id: "computer",
      hand: [],
      balance: 2000,
      currentBet: 0,
      status: "active",
    },
  ]);
  const [table, setTable] = useState({
    cards: [],
    pot: 0,
  });
  const [gameMeta, setGameMeta] = useState({
    currentPlayerIndex: 0,
    currentRound: "deal",
    lastAction: null,
    minimumRaise: 20,
  });

  const [Cards, setCards] = useState(cards);

  function updatePlayerState(index, changes) {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index] = { ...updatedPlayers[index], ...changes(updatedPlayers[index]) };
      return updatedPlayers;
    });
  }

  function playCardFromDeck(amount, deck) {
    let NewCards = [...deck];
    if (NewCards.length > 0) {
      let dealtCards = [];
      for (let i = 0; i < amount; i++) {+
        dealtCards.push(NewCards[0]);
        NewCards.shift();
      }
      setCards(NewCards);
      return dealtCards;
    } else {
      throw new Error("Out of cards");
    }
  }

  function playCardsToTable(amount) {
    const newCards = playCardFromDeck(amount, Cards);
    setTable((prevTable) => ({
      ...prevTable,
      cards: [...prevTable.cards, ...newCards],
    }));
  }

  function shuffle() {
    let shuffledCards = [...cards];
    let currentIndex = shuffledCards.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
        shuffledCards[randomIndex],
        shuffledCards[currentIndex],
      ];
    }

    setCards(shuffledCards);
    return shuffledCards;
  }

  const playerAction = (action, amount = 0) => {
    takeAction(0, action, amount);
  };

  const computerAction = () => {
    let act = "";
    let amount = 0;

    if (gameMeta.lastAction === "raise") {
      if (Math.random() > 0.5) {
        act = "fold";
      } else {
        act = "call";
      }
      amount = players[0].currentBet - players[1].currentBet;
    } else {
      act = "check";
    }

    takeAction(1, act, amount);
  };

  const takeAction = (participantIndex, action, amount = 0) => {
    const actionFunction = actionFunctions[action];
    if (actionFunction) {
      actionFunction(participantIndex, amount);
    }
  };

  function deal() {
    let newCards = shuffle();
    const [card1, card2, card3, card4] = playCardFromDeck(4, newCards);

    setPlayers((prevPlayers) => [
      { ...prevPlayers[0], hand: [card1, card2] },
      { ...prevPlayers[1], hand: [card3, card4] },
    ]);
    setGameMeta((prev) => ({
      ...prev,
      currentRound: roundSequences["deal"],
      currentPlayerIndex: 0,
      lastAction: "deal",
    }));
  }

  const call = (participantIndex, amount) => {
    updatePlayerState(participantIndex, (prevPlayer) => {
      if (prevPlayer.balance < amount) {
        console.error("Not enough balance!");
        return prevPlayer;
      }

      return {
        balance: prevPlayer.balance - amount,
        currentBet: prevPlayer.currentBet + amount,
      };
    });

    setTable((prevTable) => ({ ...prevTable, pot: prevTable.pot + amount }));

    setGameMeta((prev) => ({
      ...prev,
      lastAction: "bet",
      currentPlayerIndex: (participantIndex + 1) % 2,
    }));
  };

  const check = (participantIndex) => {
    setGameMeta((prev) => ({
      ...prev,
      lastAction: "check",
      currentPlayerIndex: (participantIndex + 1) % 2,
    }));
  };
  const raise = (participantIndex, amount) => {
    updatePlayerState(participantIndex, (prevPlayer) => {
      const raiseAmount = prevPlayer.currentBet + amount;
      if (prevPlayer.balance < raiseAmount) {
        console.error("Not enough balance to raise!");
        return prevPlayer;
      }
      setTable((prevTable) => ({ ...prevTable, pot: prevTable.pot + raiseAmount }));
      return {
        ...prevPlayer,
        balance: prevPlayer.balance - raiseAmount,
        currentBet: raiseAmount,
      };
    });
  
    setGameMeta((prev) => ({
      ...prev,
      lastAction: "raise",
      currentPlayerIndex: (participantIndex + 1) % 2,
    }));
  };

  const fold = (participantIndex) => {
    updatePlayerState(participantIndex, (prevPlayer) => ({
      ...prevPlayer,
      hand: [],
      status: "folded",
    }));

    setGameMeta((prev) => ({
      ...prev,
      lastAction: "fold",
      currentPlayerIndex: (participantIndex + 1) % 2,
    }));
  };

  const actionFunctions = {
    call: call,
    check: check,
    raise: raise,
    fold: fold,
  };

  function endGame(winnerIndex) {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      
      updatedPlayers[winnerIndex].balance += table.pot;

      updatedPlayers.forEach((player) => {
        player.currentBet = 0;
        player.status = "active";
        player.hand = [];
      });

      return updatedPlayers;
    });

    setTable({
      cards: [],
      pot: 0,
    });

    setGameMeta({
      currentPlayerIndex: 0,
      currentRound: "deal",
      lastAction: null,
      minimumRaise: 20,
    });

    setCards(cards);
  }

  useEffect(() => {
    if (gameMeta.currentPlayerIndex !== 0) {
      computerAction();
    }
  }, [gameMeta.currentPlayerIndex, computerAction]);

  const roundSequences = {
    deal: "preflop",
    preflop: "flop",
    flop: "turn",
    turn: "river",
    river: "showdown",
  };

  useEffect(() => {
    if (players[0].status === "folded") {
      endGame(1);
    } else if (players[1].status === "folded") {
      endGame(0);
    }
    if (gameMeta.currentPlayerIndex === 1 && gameMeta.lastAction !== null) {
      if (gameMeta.currentRound === "preflop") playCardsToTable(3);
      else if (["flop", "turn"].includes(gameMeta.currentRound))
        playCardsToTable(1);

      const nextRound = roundSequences[gameMeta.currentRound];
      if (nextRound) {
        setGameMeta((prev) => ({
          ...prev,
          currentRound: nextRound,
          currentPlayerIndex: 0,
          lastAction: null,
        }));
      }
    }
  }, [gameMeta]);

  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        {players.map((p, index) => (
          <Grid key={index}>
            <h3 style={{ color: "whitesmoke" }}>
              {p.id.charAt(0).toUpperCase() + p.id.slice(1)}
            </h3>
            <p>Balance: ${p.balance}</p>
            <p>Current Bet: ${p.currentBet}</p>
            <Grid container spacing={2}>
              {p.hand.map((card, idx) => (
                <Grid xs={6} md={6} key={idx}>
                  <PokerCard CardName={card} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} justify="center" style={{ margin: "20px 0" }}>
        {table.cards.map((card, index) => (
          <Grid xs={2} md={2} key={index}>
            <PokerCard CardName={card}></PokerCard>
          </Grid>
        ))}
      </Grid>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <Button onClick={deal} sx={{ bgcolor: "whitesmoke" }}>
          Deal
        </Button>
        <Button
          onClick={() => playerAction("raise", 100)}
          sx={{ bgcolor: "whitesmoke" }}
        >
          Raise
        </Button>
        <Button
          onClick={() => playerAction("check")}
          sx={{ bgcolor: "whitesmoke" }}
        >
          Check
        </Button>
        <Button
          onClick={() => playerAction("fold")}
          sx={{ bgcolor: "whitesmoke" }}
        >
          Fold
        </Button>
        <Button onClick={() => endGame(0)} sx={{ bgcolor: "whitesmoke" }}>
          End Game (Player wins)
        </Button>
        <Button onClick={() => endGame(1)} sx={{ bgcolor: "whitesmoke" }}>
          End Game (Computer wins)
        </Button>
      </div>
    </div>
  );
}
