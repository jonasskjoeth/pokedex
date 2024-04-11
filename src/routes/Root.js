import styles from "./root.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div>
        <ul className={styles.navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
