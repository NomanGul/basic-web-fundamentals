let initialValue = document.getElementsByClassName("initial_value");
// console.log(initialValue[0].innerHTML);

const increamentValue = () => {
  return initialValue[0].innerHTML++;
  // console.log(initialValue);
};

const decreamentValue = () => {
  return initialValue[0].innerHTML--;
  // console.log(initialValue);
};

const reset = () => {
  return (initialValue[0].innerHTML = 0);
  // console.log(initialValue);
};

// function name(param, param2) {
//   return;
// }

// let name = () => a+b
