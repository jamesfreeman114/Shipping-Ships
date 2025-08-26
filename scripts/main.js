import { DockList } from "./docks.js";
import { haulerList } from "./haulers.js";
import { shippingShipsList } from "./shippingShips.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Shipping Ships</h1>
    <article class ="docks">
        <h2>Docks</h2>
        ${DockList()}
    </article>
    <article class ="haulers">
        <h2>Hauler Ships</h2>
        ${haulerList()}
    </article>
    <article class ="shippingShips">
        <h2>Cargo Ships</h2>
        ${shippingShipsList()}
    </article>
`

mainContainer.innerHTML = applicationHTML