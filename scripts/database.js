const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Ol Bessy", dockId: 4 },
        { id: 2, name: "Jenny", dockId: 2 },
        { id: 3, name: "Edmund Fitzgerald", dockId: 1 },
        { id: 4, name: "TC Tugger", dockId: 3 },
        { id: 5, name: "Boaty McBoatface", dockId: 2}
    ],
    shippingShips: [
        {id: 1, name: "Royale", dockId: 1 },
        {id: 2, name: "Atlantic Star", dockId: 2 },
        {id: 3, name: "Pacific Dream", dockId: 3 },
        {id: 4, name: "Northern Wind", dockId: 1 },
        {id: 5, name: "Golden Horizon", dockId: 4 },
        {id: 6, name: "Ocean Pioneer", dockId: 2 },
        {id: 7, name: "Voyager Elite", dockId: 3 },
        {id: 8, name: "Cargo Master", dockId: 1 },
        {id: 9, name: "Maritime Glory", dockId: 4 },
        {id: 10, name: "Seabound Trader", dockId: 2 },
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