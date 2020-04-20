import React from "react";

interface FormProps {
  setIsSubmitted: any;
}

export const Form = (props: FormProps) => {
  const { setIsSubmitted } = props;

  return (
    <div className="submission-form">
      <input
        type="submit"
        onClick={setIsSubmitted}
        value="Generate CD Case"
      ></input>
    </div>
  );
};
