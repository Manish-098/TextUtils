function TextSummary(props) {
  let wordCount = props.text.split(" ");
  wordCount = wordCount.filter((value) => {
    return value.length !== 0;
  });
  let textCount = props.text.length;
  let countTime = wordCount * 0.006;
  return (
    <>
      <div
        className={`container my-2 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2 className="fw-bold">Text Summary</h2>
        <div>
          <b>{wordCount.length}</b> Words <b>{textCount}</b> Characters{" "}
        </div>
        <div>
          <b>{Math.round(countTime)} Minutes</b>
        </div>
      </div>
    </>
  );
}

export default TextSummary;
