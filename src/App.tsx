import { useState } from "react";
import Card from "./components/Card/Card.tsx";
import CardClass from "./lib/Card.ts";
import CardDeck from "./lib/CardDeck.ts";

const App = () => {
    const [cardDeck, setCardDeck] = useState(new CardDeck());
    console.log(cardDeck.deck);

    const [cards, setCards] = useState<CardClass[]>([]);

    if (cards.length === 0) {
        return (
            <>
                <div>
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
                </div>
            </>
        );
    } else {
        return (
            <>
                <button
                    type="button"
                    onClick={() => {
                        setCards(cardDeck.getCards(5));
                    }}
                >
                    Set Cards
                </button>
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <Card key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            </>
        );
    }
};

export default App;
