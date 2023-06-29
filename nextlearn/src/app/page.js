'use client'
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <main className={styles.main}>
    <h1>Events, function and state</h1>
    <button onClick={()=>alert('Hello world its me! ')}>Click Me </button>
    </main>
  );
}

