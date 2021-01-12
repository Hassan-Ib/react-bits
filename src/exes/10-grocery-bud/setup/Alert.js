import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list, setAlert }) => {
  useEffect(() => {
    const alertTimeOut = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(alertTimeOut);
  }, [list, removeAlert]);

  return <h3 className={`alert alert-${type}`}>{msg}</h3>;
};

export default Alert;
