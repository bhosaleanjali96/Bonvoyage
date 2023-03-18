import React from "react";

const Loader = () => {
  return (
    <div class="text-center d-flex justify-content-center text-primary">
      <strong>Loading...</strong>
      <div className="spinner-border ms-2" role="status"></div>
    </div>
  );
};

export default Loader;
