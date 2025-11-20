import styles from "./page.module.css";
import NavBar from "../../../Components/NavBar/NavBar";
import data from "../../../Service/data.json";

import Link from "next/link";
import Image from "next/image";

export default function Animals() {
  return (
    <div className={styles.animalsWrapper}>
      <h2 className={styles.header}>Your Pets</h2>

      <div className={styles.topCard}>
        <p>Welcome back! 🐾</p>
        <p>Here are all your lovely animals.</p>
      </div>

      <div className={styles.searchBox}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          placeholder="Find best vaccinate, treatment..."
          className={styles.searchInput}
        />
      </div>

      <div className={styles.animalsList}>
        {data.animals.map((animal) => {
          const owner = data.owners.find((o) => o.idOwner === animal.owner);

          return (
            <Link
              key={animal.idAnimal}
              href={`/Home/Animals/${animal.idAnimal}`}
            >
              <div className={styles.animalCard}>
                <Image
                  src={animal.photoUrl}
                  alt={animal.name}
                  width={150}
                  height={150}
                  className={styles.animalPhoto}
                />

                <div className={styles.animalInfo}>
                  <h3>{animal.name}</h3>
                  <p>{animal.breed}</p>
                  <p>{animal.species}</p>

                  {owner && (
                    <p className={styles.ownerText}>
                      Owner: {owner.firstName} {owner.lastName}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <NavBar />
    </div>
  );
}
