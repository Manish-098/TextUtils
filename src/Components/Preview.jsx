function Preview({ text, mode }) {
  return (
    <>
      <div className={`container text-${mode === "light" ? "dark" : "light"}`}>
        <h2 className="fw-bold">Preview</h2>
        <p>{text.length > 0 ? text : "Nothimg to preview!"}</p>
      </div>
    </>
  );
}

export default Preview;
