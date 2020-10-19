//function to count number of pairs of socks for every unique color.
function sockStore(socksArray) {
  //Storing the count all socks in this javascript object.
  const socksHashMap = {};
  //variable to count total pairs
  let totalPair = 0;

  //looping through through each items in the array
  //and finding the count of each sock type
  socksArray.forEach((socks) => {
    if(!socksHashMap[socks]) {
      socksHashMap[socks] = 1;
      return;
    }
    totalPair++;
    delete socksHashMap[socks];
  });
  //return the total socks pair count as an integer.
  return totalPair;
}

const socksArray = [10, 10, 10, 10, 20, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40];
console.log(sockStore(socksArray)); //7
