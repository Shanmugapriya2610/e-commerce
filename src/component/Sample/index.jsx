import React from "react";
import classes from "./style.module.scss"

const Sample = () => {
    let data = [{ name: "test", age: 3, gender: "male" }, { name: "test", age: 3, gender: "male" }, { name: "test", age: 3, gender: "male" }, { name: "test", age: 3, gender: "male" }, { name: "rrr", age: 3, gender: "male" }]
    return <div className="row">
        {data.map((val, index) => {
            return (
                <div className="col-6 pb-2" key={val?.name}>
                    {console.log(data.length - 1, "22222")}
                    <div className={`${data.length - 1 === index ? "bg-info" : classes.test} p-5`}>
                        {val?.name}
                        {val?.age}
                        {val?.gender}</div>
                </div>
            );
        })}
    </div>


};

export default Sample;
