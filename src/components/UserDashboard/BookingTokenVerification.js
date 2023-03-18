const tokencheck = (handleShow) => {
  let token = localStorage.getItem("token");

  if (token === null) {
    handleShow();
    return 1;
  } else {
    return 0;
  }
};
export default tokencheck;
