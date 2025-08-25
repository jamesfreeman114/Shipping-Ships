import { getHaulers } from "./database.js";

export const haulerList = () => {
    const haulers = getHaulers()

    let haulerHTML = "<ul>"
    
    for (const hauler of haulers) {

        haulerHTML += `${hauler.name}`
        
    }
    
    
    haulerHTML += "</ul>"

    return haulerHTML

}

const haulerTest = haulerList()
console.log(haulerTest)