import { useState } from "react";
import Card from "./components/Card/Card.tsx";
import CardClass from "./lib/Card.ts";
import CardDeck from "./lib/CardDeck.ts";
import PokerHand from "./lib/PokerHand.ts";
import "./App.css";

const App = () => {
    const [cardDeck, setCardDeck] = useState(new CardDeck());
    const [cards, setCards] = useState<CardClass[]>([]);

    if (cards.length === 0) {
        return (
            <div className="container">
                <button
                    type="button"
                    onClick={() => {
                        setCards(cardDeck.getCards(5));
                    }}
                >
                    Set Cards
                </button>

                <button
                    type="button"
                    onClick={() => {
                        const newCardDeck = new CardDeck();
                        setCardDeck(newCardDeck);
                    }}
                >
                    Set new card deck
                </button>
                <p>Cards left: {cardDeck.deck.length}</p>
            </div>
        );
    } else {
        const combination = new PokerHand(cards);
        const currentCombination = combination.getOutcome();
        return (
            <div className="container">
                <button
                    type="button"
                    onClick={() => {
                        setCards(cardDeck.getCards(5));
                    }}
                >
                    Set Cards
                </button>
                <p>Cards left: {cardDeck.deck.length}</p>
                <p>Current combination is {currentCombination}</p>
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <Card key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            </div>
        );
    }
};

export default App;
