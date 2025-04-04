let a = 5;

let b = () => {
  return "hello";
};

let c = () => {
  return "hii";
};

// export { a, b };
// export default c;
module.exports = {
  a,
  b,
  c,
};

module.exports.m = 10;
