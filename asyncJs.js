// promisified setTimeout
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("2 seconds have passed"));


// // promisified fetch
// function fetchData(url) {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   });
// }

// fetchData("https://api.example.com/data")
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));


// // promisified fs.readFile
// const fs = require("fs");
// const util = require("util");

// const readFile = util.promisify(fs.readFile);

// readFile("a.txt", "utf-8")
//   .then((contents) => console.log(contents))
//   .catch((error) => console.error("Error:", error));
