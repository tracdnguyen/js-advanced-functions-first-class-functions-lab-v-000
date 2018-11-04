// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return function(fare) {
    return fare * 4
  }
}
