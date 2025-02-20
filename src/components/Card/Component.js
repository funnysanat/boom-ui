import React from "react";
import Button from "../Button/Component";

const Card = ({
  title,
  footer,
  content,
  okText = "Save",
  cancelText = "cancel",
  onOk = () => {},
  onCancel = () => {},
}) => {
  return (
    <div className="border border-gray-300 rounded-md p-5">
      <span className="font-sembold text-center">{title}</span>
      <div className="mt-5">{content}</div>
      {footer && (
        <div className="flex justify-end mt-5 gap-5">
          <Button
            title={cancelText}
            color="primary"
            variant="outlined"
            onClick={onCancel}
          />
          <Button
            title={okText}
            color="primary"
            variant="contained"
            onClick={onOk}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
