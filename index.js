// Code your solution in this file!
const hqBlock=42

function distanceFromHqInBlocks(block) {
  return Math.abs(block-hqBlock);
}


function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block)*264 
}
