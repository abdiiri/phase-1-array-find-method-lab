// code your solution here
function superbowlWin(records) {
  // Use find() to locate the first win ("W")
  const win = records.find(record => record.result === "W");
  
  // If a win is found, return the year, otherwise return undefined
  if (win) {
    return win.year;
  }
  return undefined;
}

// Example usage:
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

console.log(superbowlWin(record)); // Output: "2015"

// Additional test cases:
console.log(superbowlWin([
  { year: "2015", result: "L" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" }
])); // Output: undefined (no wins)

console.log(superbowlWin([
  { year: "2000", result: "L" },
  { year: "2001", result: "W" },
  { year: "2002", result: "L" }
])); // Output: "2001" (first win)
