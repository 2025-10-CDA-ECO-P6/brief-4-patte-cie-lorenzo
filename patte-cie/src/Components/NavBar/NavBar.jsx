import React from "react";
import styles from "../NavBar/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <section className="relative mx-auto">
      <div className={styles.bottomNav}>
        <Link href="/Home">
          <span className={styles.navItem}>🏠</span>
        </Link>

        <Link href="/Home/Animals">
          <span className={styles.navItem}>🐶</span>
        </Link>
      </div>
    </section>
  );
};

export default NavBar;
