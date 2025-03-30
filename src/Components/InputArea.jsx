import styles from "./InputArea.module.css";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { tokyoNightStorm } from "@uiw/codemirror-theme-tokyo-night-storm";
import { useState } from "react";
import Popup from "./Popup";
import { Trash2, Upload, Copy } from "lucide-react";

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
            <button>
              <Upload size={16} />
              <p>upload</p>
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
              <Copy size={16} /> copy
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
        theme={tokyoNightStorm}
        readOnly={readOnly}
      />
    </section>
  );
}

export default InputArea;
