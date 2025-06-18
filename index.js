// Code your solution here
function findMatching(drivers, searchString) {
  const lowerSearchString = searchString.toLowerCase();
  return drivers.filter(driver => driver.toLowerCase() === lowerSearchString);
}

function fuzzyMatch(drivers, searchString) {
  const lowerSearchString = searchString.toLowerCase();
  return drivers.filter(driver => driver.toLowerCase().startsWith(lowerSearchString));
}

function matchName(driverObjects, searchString) {
  const lowerSearchString = searchString.toLowerCase();
  return driverObjects.filter(driver => driver.name.toLowerCase() === lowerSearchString);
}