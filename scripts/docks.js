import { getDocks, getHaulers, getDockContracts } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock") {

            const dockId = itemClicked.dataset.id

            const docks = getDocks()
            const dockContracts = getDockContracts()
            const haulers = getHaulers()
            let haulerMatch = []
            let dockName = { name: "Incorrect" }

            for (const dock of docks) {
                if (parseInt(dockId) === dock.id) {
                    dockName = dock.location
                }


            }
            
            const dockMatch = dockContracts.filter(dock => dock.dock_id === parseInt(dockId))


            for (const dock of dockMatch) {
                for (const hauler of haulers) {
                    if (dock.hauler_id === hauler.id) {
                        haulerMatch.push(hauler.name)
                        }

                    }
                }

            // Set a counter to find number of hauler ships



            // If there are no haulers display: "The Shanghai, China dock is currently unloading nothing"

            // if (haulerCount === 0) {

            //     window.alert(`The ${dockName} dock is currently unloading nothing.`)
            // }

            // If there is one hauler at the dock display: "The Shanghai, China dock is currently unloading Boaty McBoatface"

            // if (haulerCount === 1) {

                window.alert(`The ${dockName} dock has contracts with: ${haulerMatch.join(", ")}.`)
            }

            // If there is more than one hauler at the dock display: "The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant"

        //     if (haulerCount > 1)



        //     window.alert(`The ${dockName} dock is currently unloading ${(haulerMatch).join(", ")}`)

        // }


    }
)


export const DockList = () => {
    const docks = getDocks()

    const sortedDocks = docks.sort((a,b) => {
        const locationA = a.location
        const locationB = b.location

        if (locationA < locationB) {
            return -1
        }

        if (locationA > locationB) {
            return 1
        }

        return 0
    })

    let docksHTML = "<ul>"

    for (const dock of sortedDocks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li
                       data-type="dock"
                       data-id="${dock.id}">
                       ${dock.location} can hold ${dock.volume} tons of cargo.
                     </li>`

    }

    docksHTML += "</ul>"

    return docksHTML
}

