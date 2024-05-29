import React from "react";
import Card from "./Component";

const Index = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col items-start gap-2">
        <span>Basic Card</span>
        <Card
          title="basic card"
          content={<>This is the basic card component</>}
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <span>Card With Footer</span>
        <Card
          title="basic card"
          content={<>This is the basic card component</>}
          footer="true"
          okText="save"
          cancelText="cancel"
          onOk={() => alert("data saved")}
          onCancel={() => alert("cancel")}
        />
      </div>
    </div>
  );
};

export default Index;
