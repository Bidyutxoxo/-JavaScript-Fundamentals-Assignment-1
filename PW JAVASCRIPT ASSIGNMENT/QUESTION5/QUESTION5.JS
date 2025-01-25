let packageType = "express";

switch (packageType) {
  case "standard":
    console.log("Estimated delivery time: 3-5 days");
    break;
  case "express":
    console.log("Estimated delivery time: 1-2 days");
    break;
  case "overnight":
    console.log("Estimated delivery time: Delivered the next day");
    break;
  default:
    console.log("Invalid package type. Please choose 'standard', 'express', or 'overnight'.");
}
