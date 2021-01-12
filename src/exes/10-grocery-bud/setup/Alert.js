import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const alertTimeOut = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(alertTimeOut);
  }, [list]);

  return <h3 className={`alert alert-${type}`}>{msg}</h3>;
};

export default Alert;
