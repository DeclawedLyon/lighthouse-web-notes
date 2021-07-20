const args = process.argv;
let len = args.length;
argsArr = [];
argsArr.push(args.slice(2, len));

const reverse = function(argsArr) {
  let argsArray = argsArr;
  let finalArray = [[]];
  for (let i = 0; i < argsArray.length; i++) {
    //console.log(argsArray[i]);
    for (let j = 0; j < argsArray[i].length; j++) {
      console.log(argsArray[i][j]);
      for (let l = argsArray[i][j].length ; l > 0 - 1; l--) {
        console.log(argsArray[i][j].length)
        finalArray.push(argsArray[i][j][l]);
        console.log(argsArray[i][j][l]);
      }
    }
  }
  console.log(finalArray.concat());
  //console.log(argsLength);
  //console.log(argsArray);
  //return argsArray;
  
  

};

console.log(reverse(argsArr));
