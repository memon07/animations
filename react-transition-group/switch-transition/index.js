import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./styles.css";

export default function App() {
  const [state, setState] = React.useState(false);
  return (
    <SwitchTransition>
      <CSSTransition
        key={state ? "Goodbye, world!" : "Hello, world!"}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames="fade"
      >
        <button onClick={() => setState((state) => !state)}>
          {state ? "Goodbye, world!" : "Hello, world!"}
        </button>
      </CSSTransition>
    </SwitchTransition>
  );
}
