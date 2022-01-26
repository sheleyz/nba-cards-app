const initState = {
    players: [
        {
            name: "Nikola Jokic",
            position: "C",
            pts: 26.1,
            reb: 13.8,
            ast: 7.6
        },
        {
            name: "Giannis Antetokounmpo",
            position: "PF",
            pts: 28.6,
            reb: 11.3,
            ast: 6.0
        },
        {
            name: "LeBron James",
            position: "SF",
            pts: 29.0,
            reb: 7.7,
            ast: 6.3
        },
        {
            name: "Kevin Durant",
            position: "PF",
            pts: 29.3,
            reb: 7.4,
            ast: 5.8
        }
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;
