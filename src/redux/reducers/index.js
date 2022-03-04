const initState = {
    cards: [],
    card: "",
    itemLimit: 10
};

const rootReducer = (state = initState, action) => {
    if (action.type === "SET_CARDS") {
        return {
            ...state,
            cards: action.cards
        };
    }

    if (action.type === "SET_CARD") {
        return {
            ...state,
            card: action.card
        };
    }

    if (action.type === "INCREASE_LIMIT") {
        let limit = state.itemLimit;
        limit = limit + 10;

        return {
            ...state,
            itemLimit: limit
        };
    }

    return state;
};

export default rootReducer;
