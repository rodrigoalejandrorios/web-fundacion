import { useState } from "react";

const useCForm = () => {
  const [state, setState] = useState({});
  const handleForm = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return [state, handleForm, setState];
};

export default useCForm;
