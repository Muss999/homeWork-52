import Card from "./Card.ts";

class PokerHand {
    public cardsArr: Card[] = [];
    constructor(cardsArr: Card[]) {
        this.cardsArr = cardsArr;
    }

    public getOutcome() {
        let combination: string = "";
        let isFleshCombination: boolean = false;
        let isSetCombination: boolean = false;
        let whichPair: number = 0;

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
            return (combination = "Flush!");
        }

        const amountRank: { [rank: string]: number } = {};

        for (let i = 0; i < this.cardsArr.length; i++) {
            const card = this.cardsArr[i];
            const rank = card.rank;

            if (amountRank[rank]) {
                amountRank[rank] = amountRank[rank] + 1;
            } else {
                amountRank[rank] = 1;
            }
        }

        for (let rank in amountRank) {
            if (amountRank[rank] === 3) {
                isSetCombination = true;
            }
            if (amountRank[rank] === 2) {
                whichPair++;
            }
        }

        if (whichPair === 1) {
            return (combination = "One Pair!");
        } else if (whichPair === 2) {
            return (combination = "Two Pair!");
        }

        if (isSetCombination === true) {
            return (combination = "Set!");
        }

        const ranksStrength: { [rank: string]: number } = {
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "10": 10,
            J: 11,
            Q: 12,
            K: 13,
            A: 14,
        };

        let highestCard = this.cardsArr[0];

        for (let i = 1; i < this.cardsArr.length; i++) {
            const currentRank = ranksStrength[this.cardsArr[i].rank];
            const highestRank = ranksStrength[highestCard.rank];

            if (currentRank > highestRank) {
                highestCard = this.cardsArr[i];
            }
        }

        return (combination = `High Card: ${highestCard.rank}`);
    }
}
export default PokerHand;
