import { join } from "lodash-es";
import "./style.css";
import "./test1.less";
import "./test2.scss";

const component = () => {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.className = "hello";

  return element;
}

document.body.appendChild(component());