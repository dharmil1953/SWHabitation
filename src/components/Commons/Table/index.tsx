import clsx from "clsx";
import React from "react";

export interface TableRowsType {
  cells: string[];
}

export interface TableProps {
  block: {
    rows: TableRowsType[];
    _type: "table";
  };
}

const Table: React.FC<TableProps> = ({ block }) => {
  const { rows } = block || {};
  const [tableheading, ...body] = rows;

  return (
    <div className="mb-[20px] md:mb-[40px] overflow-auto w-full tableScrollbar">
      <table className="w-full border-collapse border-b border-neutral-200">
        {tableheading && (
          <thead>
            <tr>
              {tableheading.cells.map((cell, index) => (
                <th
                  key={index}
                  className="border border-neutral-200 text-16 text-theme-ivory font-semibold !leading-[1] py-[0.938rem] px-[1.875rem] bg-theme-orange capitalize"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {body &&
            body.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={clsx(
                      "border border-neutral-200 py-[1.3rem] px-[1.5rem] s(767):text-14 text-16 font-normal text-theme-black !leading-[1.3] capitalize",
                      rowIndex === body.length - 1 && cellIndex === 0 && "",
                      rowIndex === body.length - 1 &&
                        cellIndex === row.cells.length - 1 &&
                        ""
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
