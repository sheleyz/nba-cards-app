const initState = {
    players: [
        {
            name: "Jonathan Taylor",
            position: "RB",
            yds: 1811,
            td: 18,
            avg: 5.5
        },
        {
            name: "Aaron Rodgers",
            position: "QB",
            yds: 4115,
            td: 37,
            avg: 7.8
        },
        {
            name: "Cooper Kupp",
            position: "WR",
            yds: 1947,
            td: 16,
            avg: 13.4
        },
        {
            name: "Travis Kelce",
            position: "TE",
            yds: 1125,
            td: 9,
            avg: 12.2
        }
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;
