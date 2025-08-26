import { getHaulers } from "./database.js";

export const haulerList = () => {
    const haulers = getHaulers()

    let haulerHTML = "<ul>"
    
    for (const hauler of haulers) {

        haulerHTML += `<li>${hauler.name}</li>`
        
    }
    
    
    haulerHTML += "</ul>"

    return haulerHTML

}

const haulerTest = haulerList()
console.log(haulerTest)