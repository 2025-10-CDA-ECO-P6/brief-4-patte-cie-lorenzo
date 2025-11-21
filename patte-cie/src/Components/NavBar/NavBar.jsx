import { Home, PawPrint } from "lucide-react";
import Link from "next/link";
import styles from "../NavBar/NavBar.module.css";

const NavBar = () => {
  return (
    <section className="relative mx-auto">
      <div className={styles.bottomNav}>
        <Link href="/Home">
          <Home className={styles.icon} />
        </Link>

        <div className={styles.separator}></div>

        <Link href="/Home/Animals">
          <PawPrint className={styles.icon} />
        </Link>
      </div>
    </section>
  );
};

export default NavBar;
