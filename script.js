const userInput = prompt (
    "Please enter a list of froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const froyoFlavor = userInput.split(",");
console.log(froyoFlavor)


const flavorObj = froyoOrder(froyoFlavor)
function froyoOrder (flavorsArr){
const flavors = {};

for(const key of flavorsArr){
    console.log(key)
    if(flavors[key]){
      flavors[key]=flavors[key] + 1;
    }
    else{
      flavors[key]=1;
    }
 }
return flavors;
}

console.log(flavorObj)
console.table(flavorObj)