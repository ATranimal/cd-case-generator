import React, { useState } from "react";
import "./App.scss";

import { Form } from "./components/Form";
import { Case } from "./components/Case";

interface AppProps {
  name: string;
}

export const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="app">
      {isSubmitted ? <Case /> : <Form setIsSubmitted={setIsSubmitted} />}
    </div>
  );
};
