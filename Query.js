class Query {
  constructor(data) {
    this.data = [...data];
  }
  factory(factoryNames) {
    return queryFilter.apply(this, ["factoryName", factoryNames]);
  }
  soip(soips) {
    return queryFilter.apply(this, ["soip", soips]);
  }
}

function queryFilter(key, keys) {
  if (!keys.length) {
    return this;
  }
  const result = [];
  for (let i = 0; i < this.data.length; i++) {
    for (let ii = 0; ii < keys.length; ii++) {
      if (this.data[i][key] === keys[ii]) {
        result.push(this.data[i]);
      }
    }
  }
  this.data = [...result];
  return this;
}
module.exports = Query;
