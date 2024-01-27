import './app.module.css'
import Nav from "./features/nav/nav.component.tsx";
import styles from './app.module.css';
function App() {

  return (
        <main className={styles.main}>
            <Nav />
        </main>
  )
}

export default App
