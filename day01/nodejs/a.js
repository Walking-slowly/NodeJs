function FunA(){
  console.log('FunA');
}

const obj = {name: "Tom", age: 22};

/*module.exports = {
 FunA,
 obj
};*/

exports.FunA = FunA;
exports.obj = obj;