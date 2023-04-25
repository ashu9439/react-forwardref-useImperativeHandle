import { useRef, useState } from "react";
import CustomInput from "./CustomInput";
import CustomModal from "./CustomModal";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  return (
    <div className="App">
      <hr />
      <h1>forwardRef : </h1>
      <h2>
        "forwardRef" lets your component expose a DOM node to parent component
        with a ref.
      </h2>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <hr /> <hr />
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current.closeBtn.focus()}>
        Focus Close Btn
      </button>
      <button onClick={() => modalRef.current.confirmBtn.focus()}>
        Focus Confirm Btn
      </button>
      <button onClick={() => modalRef.current.denyBtn.focus()}>
        Focus Deny Btn
      </button>
      <CustomModal ref={modalRef} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
