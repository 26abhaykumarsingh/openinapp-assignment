import React, { useState } from "react";
import "./TableRow.css";

function TableRow({ id, link, prefix, tags }) {
  const [selTags, setSelTags] = useState([]);

  const handleSelect = (e) => {
    if (!selTags.includes(e.target.value)) {
      const temp = [...selTags, e.target.value];
      setSelTags(temp);
    }
  };

  const handleCross = (selTag) => {
    const temp = selTags.filter((item) => {
      if (item === selTag) {
        return false;
      } else return true;
    });
    setSelTags(temp);
  };
  return (
    <div className="TableRow">
      <div className="tableRowData tableRowDataId">{id}</div>
      <div className="tableRowData tableRowDataLinks">
        <a href={link}>{link}</a>
      </div>
      <div className="tableRowData tableRowDataPrefix">{prefix}</div>
      <div className="tableRowData tableRowDataTags">
        <select onChange={handleSelect}>
          <option value="" disabled selected hidden>
            Select Tags
          </option>
          {tags.split(", ").map((tag) => (
            <option value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      <div className="tableRowData tableRowDataSelTags">
        {selTags.map((selTag) => (
          <div className="tableRowDataSelTag">
            {selTag}{" "}
            <div
              className="crossIcon"
              onClick={() => handleCross(selTag)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableRow;
