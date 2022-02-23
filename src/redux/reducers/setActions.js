export const setCards = (cards) => {
    return {
        type: "SET_CARDS",
        cards: cards,
    };
};
export const increaseLimit = () => {
    return {
        type: "INCREASE_LIMIT",
    };
};
