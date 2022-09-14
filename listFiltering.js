function filter_list(l) {
  return l.filter((el) => el !== String(el));
}

console.log(filter_list([1, 2, "a", "b"]));

function filter_listOne(l) {
  return l.filter((el) => el === Number(el));
}

console.log(filter_listOne([1, 2, "a", "b"]));

const filter_listTwo = (l) => {
  const arr = [];
  for (el of l) {
    if (el !== String(el)) {
      arr.push(el);
    }
  }
  return arr;
};
console.log(filter_listTwo([1, 2, "a", "b"]));
