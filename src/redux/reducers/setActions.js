export const setCards = (cards) => {
    return {
        type: "SET_CARDS",
        cards: cards
    };
};
export const setCard = (card) => {
    return {
        type: "SET_CARD",
        card: card
    };
};
export const increaseLimit = () => {
    return {
        type: "INCREASE_LIMIT"
    };
};
