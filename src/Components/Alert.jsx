function Alert(props) {
  return (
    <>
      {/* //This is very time taken to solve the problem */}
      <div style={{ height: "50px" }}>
        {props.alert && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong> {props.alert.type}</strong>: <span>{props.alert.msg}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Alert;
