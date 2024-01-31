import "./Main.css";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import Sidebar from "./Sidebar";
import Table from "./Table";

function Main() {
  const [file, setFile] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer.files;
    setFile(droppedFiles[0]);
    console.log(droppedFiles[0]);
  };

  const handleFileInput = (event) => {
    const selectedFiles = event.target.files;
    setFile(selectedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleFile = () => {
    const selectedFile = file;
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming you want to read the first sheet
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert sheet data to JSON
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      console.log(jsonData);
      setExtractedData(jsonData);
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  return (
    <div className="Main">
      <Sidebar
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
      ></Sidebar>
      <div className="mainContainer">
        <div className="mobileHeader">
          <div className="hamIcon" onClick={() => setIsMenuVisible(true)}></div>
          <div className="mobileLogo"></div>
          <div className="mobileTitle">Base</div>
        </div>
        <div className="mainHeader">Upload CSV</div>
        <div className="fileUploadContainer">
          <div
            className="dropArea"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="excelIcon"></div>
            {!file && (
              <div className="dropAreaText">
                Drop your excel sheet here or <a href="">browse</a>
              </div>
            )}
            {file && (
              <div className="selectedFilesContainer">
                {file.name}
                <div className="removeText" onClick={() => handleRemoveFile()}>
                  Remove
                </div>
              </div>
            )}
          </div>
          <div className="uploadBtn" onClick={handleFile}>
            <div className="uploadBtnIcon"></div>
            <div className="uploadBtnText">Upload</div>
          </div>
        </div>
        {extractedData && <Table data={extractedData}></Table>}
      </div>
    </div>
  );
}

export default Main;
