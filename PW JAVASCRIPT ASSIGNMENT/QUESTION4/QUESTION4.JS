const child_price = 100;
const adult_price = 150;
const senior_price = 120;

const number_of_childs = 2;
const number_of_adults = 1;
const number_of_seniors = 1;

const total_child_price = number_of_childs * child_price;
const total_adult_price = number_of_adults * adult_price;
const total_senior_price = number_of_seniors * senior_price;

const total_price = total_child_price + total_adult_price + total_senior_price;

console.log("The total ticket price is", total_price);
