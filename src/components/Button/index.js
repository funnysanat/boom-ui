import React from "react";
import Button from "./Component";

const Index = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col items-start">
        <span>Primary Button</span>
        <Button title="primary" onClick={() => {}}></Button>
      </div>
      <div className="flex flex-col item-start">
        <span>Primary Button with onClick</span>
        <Button
          title="primary with onClick"
          onClick={() => alert("Primary Button Clicked")}
        ></Button>
      </div>
      <div className="flex flex-col item-start">
        <span>Outlined Button</span>
        <Button title="primary outlined" variant="outlined"></Button>
      </div>
      <div className="flex flex-col item-start">
        <span>Disbaled Button</span>
        <Button title="disabled" disabled></Button>
      </div>
      <div className="flex flex-col item-start">
        <span>Rounded Button</span>
        <Button title="primary" rounded="full"></Button>
      </div>
    </div>
  );
};

export default Index;
