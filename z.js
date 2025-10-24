
// Considering that it is a common namespace which has multiple methods in it 

export const Z = function () {
  this.data = '';
}

Z.prototype.string = function (data) {
  if (typeof data === 'string') {
    this.data = data
    return this;
  } else throw new Error(`Error while parsing ${data}`)
}


export const P = function () {
  Z.call(this)
}

P.prototype = Object.create(Z.prototype);
P.prototype.constructor = P;


P.prototype.min = function (num) {
  if (this.data.length < num) {
    throw new Error(`Minimum length should is ${num}`)
  } else {
    return this;
  }
}

P.prototype.max = function (num) {
  if (this.data.length > num) {
    throw new Error(`Maximum length should is ${num}`)
  } else return this;
}

export const z = new P();



