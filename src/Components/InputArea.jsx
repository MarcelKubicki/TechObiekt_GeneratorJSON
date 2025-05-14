import { useRef, useState } from "react";
import { Trash2, Upload, Copy } from "lucide-react";
import { json } from "@codemirror/lang-json";
import { tokyoNightStorm } from "@uiw/codemirror-theme-tokyo-night-storm";
import { duotoneLight } from "@uiw/codemirror-theme-duotone";
import CodeMirror from "@uiw/react-codemirror";

import { useDarkMode } from "../Contexts/DarkModeContext";
import Popup from "./Popup";
import styles from "./InputArea.module.css";

function InputArea({
  name,
  placeHolder,
  readOnly = false,
  deleteButton = false,
  copyButton = false,
  uploadButton = false,
}) {
  const [code, setCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  let timeout;
  const inputFile = useRef(null);
  const { isDark } = useDarkMode();

  function handleUpload(file) {
    if (file.type !== "text/plain" && file.type !== "application/json") {
      alert("Please upload a .json or .txt file");
      return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
      const content = e.target.result;
      setCode(content);
    };
    reader.readAsText(file);
  }

  function handleCopyClipboard() {
    navigator.clipboard.writeText(code);
    setShowModal(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => setShowModal(false), 3000);
  }

  return (
    <section className={styles.window}>
      <div className={styles.topToolBar}>
        <div className={styles.dotsContainer}>
          <div className={styles.redDot}></div>
          <div className={styles.yellowDot}></div>
          <div className={styles.greenDot}></div>
          <h2>{name}</h2>
        </div>
        <div className={styles.buttonsContainer}>
          {uploadButton && (
            <button onClick={() => inputFile.current.click()}>
              <Upload size={16} />
              <p>upload</p>
              <input
                className={styles.upload}
                type="file"
                accept=".json, .txt"
                ref={inputFile}
                onChange={(e) => handleUpload(e.target.files[0])}
              />
            </button>
          )}

          {deleteButton && (
            <button className={styles.clearButton} onClick={() => setCode("")}>
              <Trash2 size={16} />
              <p>clear</p>
            </button>
          )}

          {copyButton && (
            <button onClick={handleCopyClipboard}>
              <Copy size={16} />
              <p>copy</p>
            </button>
          )}

          {showModal && <Popup>Copied to clipboard</Popup>}
        </div>
      </div>

      <CodeMirror
        value={code}
        onChange={(e) => setCode(e)}
        placeholder={placeHolder}
        height="700px"
        extensions={json()}
        theme={isDark ? tokyoNightStorm : duotoneLight}
        readOnly={readOnly}
      />
    </section>
  );
}

export default InputArea;
