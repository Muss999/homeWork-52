import Card from "./Card.ts";

class PokerHand {
    public cardsArr: Card[] = [];
    constructor(cardsArr: Card[]) {
        this.cardsArr = cardsArr;
    }

    public getOutcome() {
        let combination: string = "";

        let isFleshCombination: boolean = false;
        for (let i = 0; i < this.cardsArr.length; i++) {
            for (let j = i + 1; j < this.cardsArr.length; j++) {
                if (this.cardsArr[i].suit === this.cardsArr[j].suit) {
                    isFleshCombination = true;
                } else {
                    isFleshCombination = false;
                    break;
                }
            }
            break;
        }
        if (isFleshCombination === true) {
            combination = "Flush!";
            return combination;
        }
    }
}
export default PokerHand;
