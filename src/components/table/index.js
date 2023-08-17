import React from "react";
import Table from "react-bootstrap/Table";
import classes from "./styles.module.scss";
const NormalTable = (props) => {
  const {
    headers,
    children,
    isCentred = false,
    styles = {},
    isleft = false,
    className,
    isCenter = false,
    isAlign = false,
    tasktable = false,
    righttable = false,
    centered = false,
    setwidth = false,
    tableAlign = false,
    taskCenter = false,
    aligncenter = false

  } = props;

  return (
    <div
      style={styles}
      className={`${classes.overAllTable} ${tasktable && classes.rightstyle} ${righttable && classes.rightcenter} ${isCentred && classes.iscenter} ${isleft && classes.leftstyle
        } ${isAlign && classes.alignstyle} ${isCenter && classes.center} ${centered && classes.alignCenter} ${tableAlign && classes.alignEnd} ${taskCenter && classes.taskCenter} ${aligncenter && classes.aligncenter}`}
    >
      <Table
        className={`${classes.normalTable} mb-1 mt-1` + className}
        responsive
      >
        <thead>
          <tr>
            {headers.map((header, index) => {
              return (

                <th key={index} className={setwidth ? classes.minwidth : undefined} >

                  {" "}
                  {/* {isCheckAll && index == 0 && (
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} />
                    </FormGroup>
                  )} */}
                  <label className="font-medium-16">{header}</label>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    </div>
  );
};

export default NormalTable;
