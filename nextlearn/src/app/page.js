import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <User name='Ahmad Ali'/>
    </main>
  );
}

const User=(props)=>{
  return(
  <div>
    <h1>User Hello! Welcome {props.name}</h1>
  </div>
  )
}
