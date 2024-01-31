import React from "react";
import "./Table.css";
import TableRow from "./TableRow";

function Table({ data }) {
  return (
    <>
      <div className="Table">
        <div className="tableTitle">Uploads</div>
        <div className="tableMain">
          <div className="tableHeading">
            {Object.entries(data[0]).map(([key, value]) => (
              <div
                key={key}
                className={`columnHeading ${key.split(" ").join("")}`}
              >
                {key.toUpperCase()}
              </div>
            ))}
            <div className="columnHeading">SELECTED TAGS</div>
          </div>
          {data.map((item) => {
            return (
              <TableRow
                key={item.id}
                id={item.id}
                link={item.links}
                prefix={item.prefix}
                tags={item["select tags"]}
              ></TableRow>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Table;
