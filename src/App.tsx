import React from "react";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Registration</h1>
        <h2>At the registration office</h2>
      </header>
      <main>
        <RegistrationForm />
      </main>
    </div>
  );
}

export default App;
