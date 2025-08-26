const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Ol Bessy", dockId: 4 },
        { id: 2, name: "Jenny", dockId: 4 },
        { id: 3, name: "Edmund Fitzgerald", dockId: 4 },
        { id: 4, name: "TC Tugger", dockId: 3 },
        { id: 5, name: "Boaty McBoatface", dockId: 2}
    ],
    shippingShips: [
        {id: 1, name: "Royale", haulerId: 1 },
        {id: 2, name: "Atlantic Star", haulerId: 2 },
        {id: 3, name: "Pacific Dream", haulerId: 3 },
        {id: 4, name: "Northern Wind", haulerId: 3 },
        {id: 5, name: "Golden Horizon", haulerId: 4 },
        {id: 6, name: "Ocean Pioneer", haulerId: 5 },
        {id: 7, name: "Voyager Elite", haulerId: 3 },
        {id: 8, name: "Cargo Master", haulerId: 1 },
        {id: 9, name: "Maritime Glory", haulerId:4 },
        {id: 10, name: "Seabound Trader", haulerId: 2 },
    ]

}



export const getDocks = () => {
    return structuredClone(database.docks)
}

export const getHaulers = () => {
    return structuredClone(database.haulers)
}

export const getShippingShips = () => { 
    return structuredClone(database.shippingShips)
}