import React from "react";
import Button from "../@atoms/Buttom";

const ExportJSONButton = ({ data, title }) => {
  const handleExport = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.json";
    link.click();
    URL.revokeObjectURL(url);
  };
  return <Button text={title} onClick={handleExport} />;
};
export default ExportJSONButton;
