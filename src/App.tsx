import React from 'react';
import logo from './logo.svg';
import './App.css';
import { isTupleTypeNode } from 'typescript';

function App() {

  const isFlag1: boolean = true;
  const isFlag2: boolean = false;

  const num1: number = 10;
  const num2: number = -10;

  const str1: string = "aaa";
  //Array型
  let temp: string[] = ["adf", "kdk", "iku"];
  let temp2: Array<string> = ["adf", "kdk", "iku"];

  //TUPLE型
  let tuple: [string, number] = ["hashimoto", 119];

  //ANY型
  let profile1: any = 123456;
  let profile2: any = "test";
  let profile3: any = false;
  let profile4: any = ["yousuke", 119];

  //VOID型
  const test = (): void => {
    //return "Hello"
  }

  //NULL型とUNDEFINED型
  const test1 = (): null => {
    return null
  };

  const test2 = (): undefined => {
    return undefined
  }

  //NEVER型
  // const error = (number: string): never => {
  //   throw new Error();
  // };

  // console.log(error("herro"));

  //OBJECT型
  let object1: object = { id: 1, name: "hashimoto" }
  let object2: { id: number, name: string } = { id: 1, name: "hashimoto" };

  //ALIASES型
  type TestType = {
    id: number;
    name: string;
    age: number;
  }
  let object3: TestType = { id: 1, name: "hashimoto", age: 28 }
  let object4: { id: number, name: string } = { id: 1, name: "hashimoto" };

  //INTERFACE型
  interface ObjectInterface {
    id: number;
    name: string;
    age: number;
  }
  let object5: ObjectInterface = { id: 1, name: "hashimoto", age: 28 }

  //UNKNOWN型
  const kansu = (): number => 43;

  let numberAny: any = kansu();
  let numberUnknown: unknown = kansu();

  let sum1 = 10 + numberAny;
  //let sum2 = 10 + numberUnknown;

  //INTERSECTION型
  type Pitcher1 = {
    throwingSpeed: number;
  };

  type Batter1 = {
    battingAverage: number;
  };

  type TwoWayPlayer = Pitcher1 & Batter1;

  let sasaki: TwoWayPlayer = {
    throwingSpeed: 154,
    battingAverage: 3.65,
  };
  //UNION型
  let name: string | number = "sasaki"
  name = 100
  //name = false

  //LITERAL型
  let nitiyoubi: "日" = "日";
  let yes: true = true;
  let week: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "土";

  //ENUM型
  enum Mouth {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    November,
    December,
  }

  //課題１
  type MondaiType = {
    id: number;
    name: string;
    url: string;
    isStart: false
  }
  let mondai: MondaiType = { id: 1, name: "hashimoto", url: "https://mondai.com", isStart: false }

  interface MondaiInterface {
    id: number;
    name: string;
    url: string;
    isStart: false
  }
  let mondai1: MondaiInterface = { id: 1, name: "hashimoto", url: "https://mondai.com", isStart: false }

  //課題２

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
