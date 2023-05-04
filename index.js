// Code your solution here
function findMatching(drivers, name){
return drivers.filter(drivers => drivers.toLowerCase().includes(name.toLowerCase()))
}

function fuzzyMatch(drivers, name){
    return drivers.filter(drivers => drivers.startsWith(name)) 
}

function matchName(drivers, name){
    return drivers.filter((drivers => drivers.name===name))
}