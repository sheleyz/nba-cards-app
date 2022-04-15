const initState = {
    cards: [],
    itemLimit: 10,
    options: false,
    sorted: {
        team: {
            conference: { toggle: false, value: [] },
            division: { toggle: false, value: [] },
            name: { toggle: false, value: [] }
        }
    }
};

const rootReducer = (state = initState, action) => {
    if (action.type === "SET_CARDS") {
        return {
            ...state,
            cards: action.cards
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
                team: {
                    conference: { toggle: false, value: [] },
                    division: { toggle: false, value: [] },
                    name: { toggle: false, value: [] }
                }
            }
        };
    }

    if (action.type === "SET_SORT") {
        let originalArray = state.sorted.team[action.prop].value;
        if (originalArray.includes(action.value)) {
            let itemIndex = originalArray.indexOf(action.value);
            // console.log("Spliced: " + originalArray.splice(itemIndex, 1));
            originalArray.splice(itemIndex, 1);
        } else {
            originalArray.push(action.value);
            // console.log("Pushed: " + originalArray);
        }

        let toggle = originalArray.length > 0;

        return {
            ...state,
            itemLimit: 10,
            sorted: {
                ...state.sorted,
                [action.prop]: {
                    toggle: toggle,
                    value: originalArray
                }
            }
        };
    }

    return state;
};

export default rootReducer;
