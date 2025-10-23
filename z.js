
// Considering that it is a common namespace which has multiple methods in it 

export const Z = function () {
  this.data = '';
}

Z.prototype.string = function (data) {
  try {
    if (typeof data === 'string') {
      this.data = data
      return this;
    } else throw new Error(`Error while parsing ${data}`)
  } catch (error) {
    console.log(error)
  }
}

Z.prototype.min = function (num) {
  if (this.data.length < num) {
    throw new Error(`Minimum length should is ${num}`)
  } else {
    return this;
  }
}


Z.prototype.max = function (num) {
  if (this.data.length > num) {
    throw new Error(`Maximum length should is ${num}`)
  } else return this;
}

export const z = new Z()

// export const z = {
//   string: (data) => {
//     try {
//       if (typeof data === 'string') {
//         return data;
//       } else throw new Error(`Error while parsing ${data}`)
//     } catch (error) {
//       console.log(error)
//     }
//   },
//   min:(data) => {
//     if(data.length > data){
//       return data
//     }
//   }
// }



