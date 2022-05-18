import { useState, useCallback, useMemo } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [opne, setOpen] = useState(false);

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onClickOpne = () => {
    setOpen(!opne);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const temp = useMemo(() => {
    return 1 + 3;
  }, []);

  console.log(temp);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpne}>表示</button>
      <ChildArea open={opne} onClickClose={onClickClose} />
    </div>
  );
}
