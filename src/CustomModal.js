import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";

function CustomModal({ open, onClose }, ref) {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();
  // const [isFocused, setIsFocused] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      closeBtn: closeRef.current,
      confirmBtn: confirmRef.current,
      denyBtn: denyRef.current
    };
  });

  if (!open) return null;

  return (
    <div>
      <button
        ref={closeRef}
        onClick={onClose}
        // style={{ color: isFocused ? "black" : "grey" }}
        // onBlur={() => setIsFocused(false)}
        // onFocus={() => setIsFocused(true)}
      >
        &times;
      </button>
      <h1>Title</h1>
      <div>
        <button
          ref={confirmRef}
          // style={{ color: isFocused ? "black" : "grey" }}
        >
          Confirm
        </button>
        <button
          ref={denyRef}
          // style={{ color: isFocused ? "black" : "grey" }}
        >
          Deny
        </button>
      </div>
    </div>
  );
}

export default forwardRef(CustomModal);
