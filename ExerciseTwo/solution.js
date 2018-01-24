let addCLArgs = () => {
  let addedArgs = process.argv.slice(2);
  console.log(addedArgs.map(stringArg => Number(stringArg))
    .reduce((accumulate, element) => accumulate + element));
};
addCLArgs();
module.exports = addCLArgs;
