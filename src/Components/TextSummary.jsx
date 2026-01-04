function TextSummary(props) {
  let wordCount = props.text.split(/\s/);
  wordCount = wordCount.filter((value) => {
    return value.length !== 0;
  });
  console.log(wordCount);
  let textCount = props.text.length;
  let countTime = wordCount.length * 0.3;
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
          <b>{Math.floor(countTime)} Minutes</b>
        </div>
      </div>
    </>
  );
}

export default TextSummary;
