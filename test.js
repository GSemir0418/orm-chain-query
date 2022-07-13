const Query = require("./Query.js");
const data = [
  {
    id: 1,
    factoryName: "f1",
    soip: "s1",
  },
  {
    id: 2,
    factoryName: "f2",
    soip: "s2",
  },
  {
    id: 3,
    factoryName: "f3",
    soip: "s3",
  },
  {
    id: 4,
    factoryName: "f4",
    soip: "s4",
  },
  {
    id: 5,
    factoryName: "f1",
    soip: "s4",
  },
];

const params = {
  factoryNames: ["f1", "f2"],
  soips: ["s1"],
};

const onSubmit = (params) => {
  const q = new Query(data);
  const result = q.factory(params.factoryNames).soip(params.soips);
  console.log(result.data);
};

onSubmit(params);
