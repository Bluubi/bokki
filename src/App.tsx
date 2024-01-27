import './app.module.css'
import Nav from "./features/nav/nav.component.tsx";
import styles from './app.module.css';
import Breadcrumb from "./features/breadcrum/breadcrum.component.tsx";
import {Outlet} from "react-router";

function App() {

  return (
        <main className={styles.main}>
            <Breadcrumb />
            <Nav />
            <Outlet />
        </main>
  )
}

export default App
