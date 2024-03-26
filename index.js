// Code your solution in this file!

// a few statements
// 1. 42nd street the hq isn't the starting point but the central point which calculartion begin from therefore 40th street would -2 blocks for example therefore the need for an absolute

// part 1

function distanceFromHqInBlocks(clientLocation) {

    const distanceHq = 42 //------> 42nd street

    return Math.abs(42 - clientLocation )
    
}

// part 2

function distanceFromHqInFeet(feet) {

    const distanceHq = 42;
    const feetInABlock = 264; // -------> One block is 264

    return (Math.abs(42 - feet )) * feetInABlock ;

    
  }

// part3


  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled

    const feetInABlock = 264;

    return (Math.abs(start-destination) * feetInABlock)
  }


//   part5

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer

    const feetInABlock = 264;
 

    const distanceInFeet = (Math.abs(start-destination)* feetInABlock)

    if (distanceInFeet <= 400) {
    return 0; 
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    
    return 25;
  } else {
    
    return 'cannot travel that far';
  }



  }
