'use client'
import styles from "./page.module.css";
import {useState} from 'react';
export default function Home() {
  const [Name,setname]=useState('Ahmad');
  const name=()=>{
   setname('Ali')
  }
  const Innercomp=()=>{
    return(
      <h1>Inner Component</h1>
    )
  }
  return (
    <main className={styles.main}>
    <h1>Events, function and state {Name}</h1>
    <button onClick={name}>Click Me </button>
    <Innercomp />
    {Innercomp()}
    </main>
  );
}

