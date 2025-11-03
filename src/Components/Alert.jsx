function Alert(props) {
  return (
    //This is very time taken to solve the problem
    props.alert && (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong> {props.alert.type}</strong>: <span>{props.alert.msg}</span>
      </div>
    )
  );
}

export default Alert;
