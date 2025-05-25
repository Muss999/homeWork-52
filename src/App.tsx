import Card from "./components/Card/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";

const App = () => {
    const cardDeck = new CardDeck();
    console.log(cardDeck.deck);
    cardDeck.getCards(5);

    return (
        <div className="playingCards faceImages">
            <Card rank="J" suit="diams" />
        </div>
    );
};

export default App;
