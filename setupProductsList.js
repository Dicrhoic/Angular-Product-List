/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('product-list-app');

// Insert a few documents into the sales collection.
db.getCollection('products').insertMany([
    {id: 12, name: "BenQ GW2480 Monitor", price: 169, currency: "AUD", vendor: "PC Case Gear",
    link: "https://www.pccasegear.com/products/39659/benq-gw2480-fhd-eyecare-24in-monitor" },
   {id: 13, name: "Celsius BC2 FID Bench", price: 229.99, currency: "AUD", vendor: "Rebel Sport",
    link: "https://www.rebelsport.com.au/p/celsius-bc2-fid-bench-573097.html?cgid=REB070901"},
   {id: 14, name: "Celsius 50kg Weight Set", price: 229.99, currency: "AUD", vendor: "Rebel Sport",
    link: "https://www.rebelsport.com.au/p/celsius-50kg-weight-set-406383.html?cgid=REB071805#start=2"},
   {id: 15, name: "Final Fantasy XVI", price: 9900, currency: "YEN", vendor: "Square Enix e-store",
    link: "https://store.jp.square-enix.com/item/ELJM_30240.html"},
]);

// Run a find command to view items brought from Rebel.
const prodsFromRebel = db.getCollection('products').find(
  { vendor: "Rebel Sport"}).count();

// Print a message to the output window.
console.log(`${prodsFromRebel} items from Rebel.`);


