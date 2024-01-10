import React from "react";
import "./App.css";
import { Button, Dropdown } from "explore-react-ui-library";
import "explore-react-ui-library/lib/components/style.css";

function App() {

  const showSelection = (selectedOption: string) => {
    console.log(selectedOption)
  }

  return (
   <div className="px-4 py-2 space-y-2">
    <div>
      <Button
        text="Testing Primary Button"
        type="primary"
        customClasses="px-4 py-2"
        onClick={() => { console.log("Primary"); }} />
    </div>
    <div>
      <Button
        text="Testing Secondary Button"
        type="secondary"
        customClasses="px-4 py-2"
        onClick={() => { console.log("Secondary"); }} />
    </div>
    <Dropdown
      options={["Test 1", "Test 2", "Test 3"]}
      containerClasses=""
      buttonClasses="border border-gray-500 px-4 py-2"
      menuClasses="border border-gray-500 px-4"
      onSelect={showSelection}
      defaultCaption="Choose option" />
   </div>
  );
}

export default App;
