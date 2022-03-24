const initState = {
    cards: [],
    card: "",
    itemLimit: 10,
    options: false,
    sorted: {
        position: { toggle: false, value: [] },
        conference: { toggle: false, value: [] },
        division: { toggle: false, value: [] },
        team_name: { toggle: false, value: [] }
    }
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

    if (action.type === "TOGGLE_OPTIONS") {
        return {
            ...state,
            options: !state.options
        };
    }

    if (action.type === "CLEAR_OPTIONS") {
        return {
            ...state,
            itemLimit: 10,
            options: false,
            sorted: {
                position: { toggle: false, value: [] },
                conference: { toggle: false, value: [] },
                division: { toggle: false, value: [] },
                team_name: { toggle: false, value: [] }
            }
        };
    }

    if (action.type === "SET_SORT") {
        let originalArray = state.sorted[action.prop].value;

        if (originalArray.includes(action.value)) {
            let ind = originalArray.indexOf(action.value);
            originalArray.splice(ind, 1);
        } else {
            originalArray.push(action.value);
        }

        let togg = originalArray.length > 0;

        return {
            ...state,
            itemLimit: 10,
            sorted: {
                ...state.sorted,
                [action.prop]: {
                    toggle: togg,
                    value: originalArray
                }
            }
        };
    }

    return state;
};

export default rootReducer;
