
function Button({ text, setValue, showAlert }) {
  const changeUpperCase = () => {
    let newText = text.toUpperCase();
    setValue(newText);
    showAlert("Converted To Uppar Case", "success");
  };
  const changeLowerCase = () => {
    let newText = text.toLowerCase();
    setValue(newText);
    showAlert("Converted To Lower Case", "success");
  };

  const download = () => {
    let file = `TextUtil.pdf`;
    var opt = {
      margin: 0.5,
      filename: file,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(text).save();
    showAlert("text converted into pdf", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert("Copied into clipboard", "success");
  };

  const handleRemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setValue(newText.join(" "));
    showAlert("Remove Extra Space", "success");
  };

  const clearText = () => {
    let newText = "";
    setValue(newText);
    showAlert("Text will be erased", "success");
  };

  return (
    <>
      <div className="container px-2 d-flex gap-2 ">
        <button className="btn btn-primary" onClick={changeUpperCase}>
          Change to UpperCase
        </button>
        <button className="btn btn-primary" onClick={changeLowerCase}>
          Change to LowerCase
        </button>
        <button className="btn btn-primary" onClick={download}>
          Download in PDF
        </button>
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary" onClick={handleRemoveExtraSpace}>
          Extra Space
        </button>
        <button className="btn btn-primary" onClick={clearText}>
          Clear Text
        </button>
      </div>
    </>
  );
}

export default Button;
