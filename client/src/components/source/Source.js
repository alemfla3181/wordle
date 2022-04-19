import moment from "moment";

export function f1() {
  const day = moment().day();
  let answerResult;
  switch (day) {
    case 0:
      answerResult = ['', 'h', 'e', 'l', 'l', 'o'];
      break;
    case 1:
      answerResult = ['', 'p', 'r', 'o', 'x', 'y'];
      break;
    case 2:
      answerResult = ['', 'n', 'a', 'v', 'a', 'l'];
      break;
    case 3:
      answerResult = ['', 'a', 'b', 'a', 's', 'e'];
      break;
    case 4:
      answerResult = ['', 's', 't', 'a', 'f', 'f'];
      break;
    case 5:
      answerResult = ['', 't', 'r', 'a', 'c', 'k'];
      break;
    case 6:
      answerResult = ['', 'b', 'r', 'a', 'v', 'o'];
      break;
  }
  

  return answerResult;
}