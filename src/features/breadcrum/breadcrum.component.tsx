import {useEffect, useState} from "react";
import {useLocation} from 'react-router';
import styles from './styles.module.css'
import {NavLink} from "react-router-dom";

export default function Breadcrumb() {

    const [breadcrumbs, setBreadcrumbs] = useState<string[]>()

    const location = useLocation();

    useEffect(() => {
        const routes = location.pathname.split('/');

        function clean(){
            return routes.filter((value, index) => routes.indexOf(value) === index);
        }

        setBreadcrumbs(clean());
    }, [location])

    return <nav className={styles.breadcrumbs}>{ breadcrumbs?.map( (breadcrumb, index) =>
        <NavLink to={breadcrumb} key={`breadcrumb-${index}`} className={`${styles.breadcrumb}`} style={({ isActive }) => {
            return {
                fontWeight: isActive ? styles.active : "",
            };
        }}>
        { breadcrumb === '' ? ' Home ' :  breadcrumb }</NavLink>) }
    </nav>
}
