import { formateCurrency } from "../scripts/utils/money.js";

console.log("test suite: formateCurrency");
console.log("Basic test cases");
if (formateCurrency(2095) === "20.95") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log("work with zeros");
if (formateCurrency(0) === "0.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log("round up to the nearest cent");
if (formateCurrency(2000.4) === "20.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}
