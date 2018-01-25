// Add argument to the addCLArgs function and replace cmd line ars with it for tests to work

let addCLArgs = () => {
  let addedArgs = process.argv.slice(2);
  console.log(addedArgs.map(stringArg => Number(stringArg))
    .reduce((accumulate, element) => accumulate + element));
};
addCLArgs(); // Comment for tests to work
module.exports = addCLArgs;
