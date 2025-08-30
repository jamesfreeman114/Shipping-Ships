import { getHaulers, getShippingShips } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?

        if (itemClicked.dataset.type === "hauler") {

            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id

            // Start a counter variable at 0
            let shipCounter = 0

            // Iterate all of the shipping ships
            const shippingShips = getShippingShips()
                // Does the haulerId foreign key match the id?

                for (const ship of shippingShips) {
                    if ( parseInt(haulerId) === ship.haulerId) {
                    shipCounter ++                        

                    }
                    
                }

                    // Increase the counter by 1

                window.alert(`This hauler is carrying ${shipCounter} shipping ships.`)    
      }              
    }
)

export const haulerList = () => {
    const haulers = getHaulers()

    const sortedHaulers = haulers.sort((a,b) => {
        const haulerA = a.name
        const haulerB = b.name

        if (haulerA < haulerB) {
            return -1
        }

        if (haulerA > haulerB) {
            return 1
        }

        return 0
    })

    let haulerHTML = "<ul>"
    
    for (const hauler of sortedHaulers) {

        haulerHTML += `<li 
                          data-id="${hauler.id}"
                          data-type="hauler">
                          ${hauler.name}
                        </li>`
        
    }
    
    
    haulerHTML += "</ul>"

    return haulerHTML

}

