import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
 
  const display = false;
  let message;
  if (display) {
    message = <h1>This is message one</h1>;
  } else {
    message = <h2>This is message two</h2>;
  }
  return message;
}
