"use client"
import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./page.module.css";
import ConditonalCompnent from "./components/ConditonalCompnent";
/*
  immutable
*/

/* Class Compnent
 1- comopnentDidMount()
 2- compnentDidUpdate()
 3- compnentWillUnmount()
 4- compnentDidCatch() -- 
 5- componentWillUpdate() -- useLayoutEffect
*/

/*
 1- use
 2- highest level inside of a react component or in a custom hook
 3- cannot be called conditionally
*/

/*
  1- useMemo
  2- useCallback
  3- useContext & Context Provider
  4- useReducer
*/

const initalValue = () => {
  return 4;
}

export default function Home() {

  const [count, setCount] = useState(initalValue);
  const [pokemonName, setPokemonName] = useState("");
  const userName = count > 6 ? "Osama" : "Ward";

  useEffect(() => {
    // console.log("Only after first mount!");
  }, []);

  useEffect(() => {
    // console.log("after cleanup");
    return () => {
      // console.log("will not work at mount!");
    };
  }, [count]);
  
  useEffect(() => {
    // console.log("Only after every update!");
  })
  useEffect(() => {
    // console.log("Only after every update!");
  })

  useEffect(() => {
    console.log("component did update");
  });
  
  useLayoutEffect(() => {
    console.log("component will update");
  });


  const increaseByOne = () => {
    // console.log("inside increase by one");
    setCount((prev) => prev+1);
  }
  const decreaseByOne = () => {
    // console.log("inside decrease by one");
    setCount((prev) => prev-1);
  }

  return (
    <div className={styles.page}>
     <button onClick={increaseByOne}>+1</button>
     <button onClick={decreaseByOne}>-1</button>
     <p>{count}</p>
     {/* <p>{userName}</p> */}
     {count < 7 && <ConditonalCompnent count={count} />}
    </div>
  );
}
