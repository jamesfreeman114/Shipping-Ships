import { DockList } from "./docks.js";
import { haulerList } from "./haulers.js";
import { shippingShipsList } from "./shippingShips.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Shipping Ships</h1>
    <article class ="details">
    <section class ="docks">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class ="haulers">
        <h2>Hauler Ships</h2>
        ${haulerList()}
    </section>
        <section class ="shippingShips">
            <h2>Cargo Ships</h2>
            ${shippingShipsList()}
        </section>
    </article>
`

mainContainer.innerHTML = applicationHTML