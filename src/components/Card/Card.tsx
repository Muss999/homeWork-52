interface Props {
    rank: string;
    suit: string;
}

const Card = (props: Props) => {
    const rank = props.rank.toLowerCase();
    let suit: string = "";
    switch (props.suit) {
        case "diams":
            suit = "♦";
            break;
        case "hearts":
            suit = "♥";
            break;
        case "clubs":
            suit = "♣";
            break;
        case "spades":
            suit = "♠";
            break;
        default:
            alert("Get wrong suit of card");
    }

    return (
        <span className={`card rank-${rank} ${props.suit}`}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{suit}</span>
        </span>
    );
};

export default Card;
