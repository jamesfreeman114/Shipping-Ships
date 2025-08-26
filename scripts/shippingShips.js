import { getShippingShips, getHaulers } from "./database.js";




export const shippingShipsList = () => {

    const cargoShips = getShippingShips()

    let cargoShipHTML = "<ul>"
    
    for (const ship of cargoShips) {

        cargoShipHTML += `<li
                           data-type="cargoship"
                           data-id="${ship.id}"
                           data-foreignkey=${ship.haulerId}>
                           ${ship.name}
                           </li>`        
    }
    
    cargoShipHTML += "</ul>"

    return cargoShipHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?

        if (itemClicked.dataset.type === "cargoship") {

            // Get the haulerId value of the shipping ship clicked

            const haulerId = itemClicked.dataset.foreignkey

            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects

            const haulers = getHaulers()

                // Does the haulerId foreign key match the id of the current hauler?
                for (const hauler of haulers) {
                    if (parseInt(haulerId) === hauler.id) {
                    
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip =  hauler.name
                    }
                } 
            // Show an alert to the user with this format...
            const shippingShips = getShippingShips()
            const shipId = itemClicked.dataset.id

            let shippingShip = {name: "Incorrect"}

            for (const ship of shippingShips) {
                if(parseInt(shipId) === ship.id) {
                    shippingShip = ship.name
                }
                
            }

            window.alert(`${shippingShip} is being hauled by ${haulingShip}`)
            // Palais Royal is being hauled by Seawise Giant
        }    
     }
)