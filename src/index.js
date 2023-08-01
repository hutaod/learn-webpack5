import { join } from "lodash-es";

const component = () => {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  console.log(111)

  return element;
}

document.body.appendChild(component());