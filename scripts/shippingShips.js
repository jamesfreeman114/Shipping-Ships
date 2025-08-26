import { getShippingShips } from "./database.js";

export const shippingShipsList = () => {

    const cargoShips = getShippingShips()

    let cargoShipHTML = "<ul>"
    
    for (const ship of cargoShips) {

        cargoShipHTML += `<li>${ship.name}</li>`        
    }
    
    cargoShipHTML += "</ul>"

    return cargoShipHTML
}