let addCLArgs = (...args) => {
  console.log(args);
  if (args.length === 0) {
    console.log(undefined);
  } else {
    let addedArgs = args.reduce((accumulate, element) => accumulate + element);
    console.log(addedArgs);
  }
};
module.exports = addCLArgs;
