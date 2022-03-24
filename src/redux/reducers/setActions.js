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

export const toggleOptions = () => {
    return {
        type: "TOGGLE_OPTIONS"
    };
};

export const clearOptions = () => {
    return {
        type: "CLEAR_OPTIONS"
    };
};

export const setSort = (prop, val) => {
    return {
        type: "SET_SORT",
        prop: prop,
        value: val
    };
};
