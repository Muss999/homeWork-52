import Card from "./Card.ts";

class CardDeck {
    private ranks: string[] = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
    ];
    private suits: string[] = ["diams", "spades", "hearts", "clubs"];
    public deck: Card[] = [];
    constructor() {
        for (let i = 0; i < this.ranks.length; i++) {
            for (let j = 0; j < this.suits.length; j++) {
                const card = new Card(this.ranks[i], this.suits[j]);
                this.deck.push(card);
            }
        }

        const shuffleCards = (array: Card[]) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        };
        shuffleCards(this.deck);
    }
}

export default CardDeck;
