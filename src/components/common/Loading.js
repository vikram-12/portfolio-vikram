// src/components/common/Loading.js
import React from "react";

const Loading = () => {
  return (
    // Use Bootstrap classes for centering (text-center) and spacing (my-5)
    <div className="text-center my-5">
      {/* Bootstrap Spinner component */}
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="mt-2 text-muted">Fetching data from the CMS...</p>
    </div>
  );
};
export default Loading;
