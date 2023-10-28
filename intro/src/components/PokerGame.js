import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import PokerCard from "./PokerCard";
import * as PokerSolver from "pokersolver";

const cards = Array.from("A23456789TJQK", v => Array.from("HCSD", s => v + s)).flat();

export default function PokerPage() {
  const [players, setPlayers] = useState([
    { id: "player", hand: [], balance: 2000, currentBet: 0, status: "active" },
    { id: "computer", hand: [], balance: 2000, currentBet: 0, status: "active" },
  ]);
  const [table, setTable] = useState({ cards: [], pot: 0 });
  const [gameMeta, setGameMeta] = useState({ currentPlayerIndex: 0, currentRound: "deal", lastAction: null, minimumRaise: 100 });
  const [deck, setDeck] = useState(cards);
  const [winner, setWinner] = useState(null);

  const playerAction = (action, amount = 0) => takeAction(0, action, amount);
  const computerAction = () => {
    const { action, amount } = computeBestAction();
    takeAction(1, action, amount);
  };

  const computeBestAction = () => {
    const playerBet = players[0].currentBet;
    const computerBet = players[1].currentBet;
    const difference = playerBet - computerBet;
  
    if (difference > 0) {
      return Math.random() > 0.2 ? { action: "call", amount: difference } : { action: "fold" };
    } else {
      return Math.random() > 0.5 ? { action: "check", amount: 0 } : { action: "raise", amount: gameMeta.minimumRaise };
    }
  };

  const takeAction = (participantIndex, action, amount = 0) => {
    const actionFunction = actionFunctions[action];
    actionFunction && actionFunction(participantIndex, amount);
  };

  const actionFunctions = {
    call: (idx, amt) => updatePlayerTableMeta(idx, amt, "bet"),
    check: idx => updatePlayerTableMeta(idx, 0, "check"),
    raise: (idx, amt) => updatePlayerTableMeta(idx, amt, "raise"),
    fold: idx => {
      setPlayers(prev => prev.map((p, i) => i === idx ? { ...p, hand: [], status: "folded" } : p));
      setGameMeta(prev => ({ ...prev, lastAction: "fold", currentPlayerIndex: (idx + 1) % 2 }));
    },
  };

  const updatePlayerTableMeta = (idx, amt, action) => {
    setPlayers(prev => prev.map((p, i) => i === idx ? { ...p, balance: p.balance - amt, currentBet: p.currentBet + amt } : p));
    setTable(prev => ({ ...prev, pot: prev.pot + amt }));
    setGameMeta(prev => ({ ...prev, lastAction: action, currentPlayerIndex: (idx + 1) % 2 }));
  };

  function updatePlayerState(index, changes) {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index] = { ...updatedPlayers[index], ...changes(updatedPlayers[index]) };
      return updatedPlayers;
    });
  }

  function evaluateWinner() {
    const playerHand = PokerSolver.Hand.solve(players[0].hand.concat(table.cards));
    const computerHand = PokerSolver.Hand.solve(players[1].hand.concat(table.cards));
    const winner = PokerSolver.Hand.winners([playerHand, computerHand]);
    const winnerIndex = winner[0] === playerHand ? 0 : 1;
    endGame(winnerIndex);
  }

  function showdown() {
    setTimeout(evaluateWinner, 5000);
  }

  function playCardFromDeck(amount, deck) {
    let newCards = [...deck];
    if (newCards.length > 0) {
      let dealtCards = newCards.splice(0, amount);
      setDeck(newCards);
      return dealtCards;
    } else {
      throw new Error("Out of cards");
    }
  }

  function playCardsToTable(amount) {
    const newCards = playCardFromDeck(amount, deck);
    setTable((prevTable) => ({
      ...prevTable,
      cards: [...prevTable.cards, ...newCards],
    }));
  }

  function shuffle() {
    let shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    setDeck(shuffledCards);
    return shuffledCards;
  }

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

  function endGame(winnerIndex) {
    if (winnerIndex == 2) {
      setPlayers((prevPlayers) => {
        const updatedPlayers = [...prevPlayers];

        updatedPlayers.forEach((player) => {
          player.balance += table.pot / 2;
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

      setDeck(cards);
    } else {
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

      setDeck(cards);
      setWinner(winnerIndex === 0 ? 'Player' : (winnerIndex === 1 ? 'Computer' : 'Tie'));
    }
  }

  useEffect(() => {
    if (gameMeta.currentPlayerIndex !== 0) {
      computerAction();
    }
  }, [gameMeta.currentPlayerIndex]);

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
      const nextRound = roundSequences[gameMeta.currentRound];
      if (nextRound) {
        setGameMeta((prev) => ({
          ...prev,
          currentRound: nextRound,
          currentPlayerIndex: 0,
          lastAction: null,
        }));
      }

      if (gameMeta.currentRound === "preflop") {
        playCardsToTable(3);
      } else if (["flop", "turn"].includes(gameMeta.currentRound)) {
        playCardsToTable(1);
      }

      if (gameMeta.currentRound === "showdown") {
        showdown();
      }
    }
  }, [gameMeta]);

  return (
    <div style={{ padding: "20px", height: "70vh", backgroundColor: "#1a1a1a", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {winner && <h2>{winner} WINS!</h2>}
      {/* Player Section */}
      <Grid container style={{ flexGrow: 1, justifyContent: "space-between" }}>
        {players.map((p, index) => (
          <Grid item xs={5} md={5} key={index} style={{ backgroundColor: "#2e2e2e", borderRadius: "15px", padding: "10px", margin: "10px 0", height: "350px" }}>
            <h4 style={{ color: "whitesmoke", textAlign: 'center' }}>

              {p.id.charAt(0).toUpperCase() + p.id.slice(1)}
            </h4>
            <Grid container justifyContent="space-between" style={{ margin: "10px" }}>
              <p>Balance: ${p.balance}</p>
              <p>Current Bet: ${p.currentBet}</p>
              <p>Last Action: {p.lastAction}</p>
            </Grid>
            <Grid container spacing={1} justify="center">
              {p.hand.map((card, idx) => (
                <Grid item xs={6} md={6} key={idx}>
                  <PokerCard CardName={card} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* Table Section */}
      <Grid container spacing={3} justify="center">
        {table.cards.map((card, index) => (
          <Grid item xs={2} md={2} key={index}>
            <PokerCard CardName={card} />
          </Grid>
        ))}
      </Grid>

      {/* Action Buttons */}
      <div className="poker-actions" style={{ position: "absolute", bottom: "20px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {gameMeta.currentPlayerIndex === 0 && (
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <Button onClick={deal} sx={{ bgcolor: "#2e2e2e", color: "whitesmoke", fontWeight: "bold" }}>
              Deal
            </Button>
            <Button onClick={() => playerAction("raise", 100)} sx={{ bgcolor: "#2e2e2e", color: "whitesmoke", fontWeight: "bold" }}>
              Raise
            </Button>
            <Button onClick={() => playerAction("check")} sx={{ bgcolor: "#2e2e2e", color: "whitesmoke", fontWeight: "bold" }}>
              Check
            </Button>
            <Button onClick={() => playerAction("fold")} sx={{ bgcolor: "#2e2e2e", color: "whitesmoke", fontWeight: "bold" }}>
              Fold
            </Button>
          </div>
        )}
        <div style={{ display: "flex", gap: "10px" }}>
          <Button onClick={() => endGame(0)} sx={{ bgcolor: "#b30000", color: "whitesmoke", fontWeight: "bold" }}>
            End Game (Player wins)
          </Button>
          <Button onClick={() => endGame(1)} sx={{ bgcolor: "#b30000", color: "whitesmoke", fontWeight: "bold" }}>
            End Game (Computer wins)
          </Button>
        </div>
      </div>
    </div>
  );
}
