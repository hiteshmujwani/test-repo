import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState("");
  // const getData = async () => {
  //   const response = await axios.get("http://localhost:5050/api/v1/home");
  //   setdata(response.data);
  // };
  return (
    <>
      {/* <div>{JSON.stringify(data)}</div> */}
      <button>click me to get data</button>
    </>
  );
}

export default App;
