import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import classNames from "classnames";

const Home = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState("Button");

  const components = [
    {
      name: "Button",
      path: "button",
    },
    {
      name: "Input",
      path: "input",
    },
    {
      name: "Header",
      path: "header",
    },
    {
      name: "Spinner",
      path: "spinner",
    },
    {
      name: "Table",
      path: "table",
    },
    {
      name: "Tabs",
      path: "tabs",
    },
    {
      name: "Modal",
      path: "modal",
    },
    {
      name: "Autocomplete",
      path: "autocomplete",
    },
    {
      name: "Card",
      path: "card",
    },
  ];
  return (
    <div className="flex gap-5">
      {/** navbar */}
      <div className="h-screen bg-primary">
        <h1 className="text-2xl text-white px-10 my-10">BOOM UI</h1>
        <div className="flex flex-col gap-3 px-10">
          {components.map((component) => {
            return (
              <div
                key={component.name}
                className={classNames("cursor-pointer px-3 py-2", {
                  "border border-white":
                    window.location.pathname === `/${component.path}`,
                })}
                onClick={() => {
                  setSelectedComponent(component.name);
                  navigate(`./${component.path}`);
                }}
              >
                <span className="text-white">{component.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/** selected component */}
      <div className="px-10 py-5 my-10 w-full flex flex-col gap-5">
        <h1 className="text-2xl text-primary">{selectedComponent}</h1>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
