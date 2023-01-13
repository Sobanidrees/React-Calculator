import React, { useState } from "react";
import "./Calculator.css";
export default function Calculator() {
  const [first, setfirst] = useState("");
  const [secound, setsecound] = useState("");
  const [oponend, setoponend] = useState(null);
  const [full, setFull] = useState("");
  const [Checked, setChecked] = useState(false);
  const [result, setResult] = useState(null);
  const [isAns, setAns] = useState(false);

  const operatorHandler = (oper) => {
    if (!isAns && first) {
      if (first) {
        if (!oponend) {
          setChecked(true);
          setFull((prev) => prev.concat(oper));
          setoponend(oper);
        }
      }
    } else {
      setFull("");
      setResult(null);
      setAns(false);
    }
  };

  const numHandler = (num) => {
    if (!isAns) {
      setFull((prev) => prev.concat(num));
      if (Checked) {
        setsecound((prev) => prev.concat(num));
        console.log(first);
      } else {
        setfirst((prev) => prev.concat(num));
      }
    } else {
      setFull("");
      setResult(null);
      setAns(false);
    }
  };

  const zeroHandler = () => {
    if (!isAns && first !== "0" && secound !== "0") {
      setFull((prev) => prev.concat(0));
      if (Checked) {
        setsecound((prev) => prev.concat("0"));
      } else {
        setfirst((prev) => prev.concat("0"));
      }
    } else {
      setFull("");
      setResult(null);
      setAns(false);
    }
  };
  const delHandler = () => {
    if (full[full.length - 1] !== "s") {
      setFull((prev) => prev.slice(0, -1));
    }

    if (Checked) {
      setsecound((prev) => prev.slice(0, -1));
    } else {
      setfirst((prev) => prev.slice(0, -1));
    }
  };
  const pointHandler = () => {
    if (!isAns && first) {
      setFull((prev) => prev.concat("."));
      if (Checked && !secound.includes(".")) {
        setsecound((prev) => prev.concat("."));
      } else if (!Checked && !first.includes(".")) {
        setfirst((prev) => prev.concat("."));
      }
    } else {
      setFull("");
      setResult(null);
      setAns(false);
    }
  };

  const equalHandler = () => {
    if (full !== "") {
      setChecked(false);
      if (oponend === "+") {
        setResult(parseFloat(first) + parseFloat(secound));
      } else if (oponend === "-") {
        setResult(parseFloat(first) - parseFloat(secound));
      } else if (oponend === "*") {
        setResult(parseFloat(first) * parseFloat(secound));
      } else if (oponend === "/") {
        setResult(parseFloat(first) / parseFloat(secound));
      }

      setFull("Answer is");
      setfirst("");
      setsecound("");
      setoponend(null);
      setAns(true);
    }
  };

  const clearHandler = () => {
    setFull("");
    setfirst("");
    setsecound("");
    setResult(0);
    setAns(false);
    setoponend(null);
    setChecked(false);
    setResult(null);
  };

  return (
    <div className="Cointainer">
      <div className="tabCoint">
        <div className="full">{full}</div>
        <div className="result">{result}</div>
        <table className="Table">
          
          <tr>
            <td className="Operator" onClick={clearHandler}>
              CLEAR
            </td>
            <td className="Operator" onClick={delHandler}>
              DEL
            </td>
            <td className="Operator" onClick={() => operatorHandler("+")}>
              +
            </td>
          </tr>
          <tr>
            <td onClick={() => numHandler(9)}>9</td>
            <td onClick={() => numHandler(8)}>8</td>
            <td onClick={() => numHandler(7)}>7</td>
            <td className="Operator" onClick={() => operatorHandler("-")}>
              -
            </td>
          </tr>
          <tr>
            <td onClick={() => numHandler(6)}>6</td>
            <td onClick={() => numHandler(5)}>5</td>
            <td onClick={() => numHandler(4)}>4</td>
            <td className="Operator" onClick={() => operatorHandler("*")}>
              *
            </td>
          </tr>
          <tr>
            <td onClick={() => numHandler(3)}>3</td>
            <td onClick={() => numHandler(2)}>2</td>
            <td onClick={() => numHandler(1)}>1</td>
            <td className="Operator" onClick={() => operatorHandler("/")}>
              /
            </td>
          </tr>
          <tr>
            <td onClick={zeroHandler}>0</td>
            <td onClick={pointHandler}>.</td>
            <td>%</td>
            <td className="Operator" onClick={equalHandler}>
              =
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
