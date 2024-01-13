// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
    const blocks=(((pickUp-42)**2)**0.5);
    return blocks;
}


function distanceFromHqInFeet(pickUp){
    const blocks = (((pickUp-42)**2)**0.5);
    const feet=blocks*264;
    return feet;
}

function distanceTravelledInFeet(start,destination){
    const blocks=(((start-destination)**2)**0.5);
    const feet=blocks*264
    return feet;
  
    

}

function calculatesFarePrice(start,destination){
    const blocks=(((start - destination)**2)**0.5);
    const feet = blocks *264;
    let fare;
    if (feet<= 400) {
        return 0;
}else if (feet>400 && feet <=2000) {
    fare = (2 *(feet-400))/100;
    return fare;
}else if(feet > 2000 && feet <= 2500){
 return 25;   
}else{
 return 'cannot travel that far';
}
}