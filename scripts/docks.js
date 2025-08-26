import { getDocks, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target


        // Your job is to design an algorithm and implement it

        // Was a dock item clicked?

        if (itemClicked.dataset.type === "dock") {

            // Get the dock id for the item that was clicked.

            const dockId = itemClicked.dataset.id



            //Iterate the array of docks

            let dockName = { name: "Incorrect" }

            const docks = getDocks()

            for (const dock of docks) {
                if (parseInt(dockId) === dock.id) {
                    dockName = dock.location
                }


            }

            // Iterate the array of hauler ships
            // Using the haulers foreign key is there a hauler at this dock?


            let haulerName = []
            let haulerCount = 0

            const haulers = getHaulers()
            for (const hauler of haulers) {
                if (parseInt(dockId) === hauler.dockId) {
                    haulerCount ++
                    haulerName.push(hauler.name)
                }

            }

            // Set a counter to find number of hauler ships



            // If there are no haulers display: "The Shanghai, China dock is currently unloading nothing"

            if (haulerCount === 0) {

                window.alert(`The ${dockName} dock is currently unloading nothing.`)
            }

            // If there is one hauler at the dock display: "The Shanghai, China dock is currently unloading Boaty McBoatface"

            if (haulerCount === 1) {

                window.alert(`The ${dockName} dock is currently unloading ${haulerName}.`)
            }

            // If there is more than one hauler at the dock display: "The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant"

            if (haulerCount > 1)



            window.alert(`The ${dockName} dock is currently unloading ${(haulerName).join(", ")}`)

        }


    }
)


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
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

