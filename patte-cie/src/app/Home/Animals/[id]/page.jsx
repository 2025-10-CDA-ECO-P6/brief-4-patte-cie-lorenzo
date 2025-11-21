import data from "../../../../Service/data.json";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../../../../Components/NavBar/NavBar";

export default async function AnimalDetails({ params }) {
  const { id } = await params;
  const animal = data.animals.find(
    (animals) => animals.idAnimal === Number(id)
  );
  const owner = data.owners.find((owner) => owner.idOwner === animal.owner);

  const consultations = data.consultations.filter(
    (c) => c.animal === animal.idAnimal
  );
  const vaccinations = data.vaccinations.filter(
    (vaccinations) => vaccinations.animal === animal.idAnimal
  );

  return (
    <div>
      <div className={styles.detailsAnimal}>
        <h2>{animal.name}</h2>

        <Image
          src={animal.photoUrl}
          alt={animal.name}
          width={200}
          height={200}
          className={styles.photo}
        />

        <h3>Animal info</h3>
        <p>Species: {animal.species}</p>
        <p>Breed: {animal.breed}</p>
        <p>Birth date: {animal.birthDate}</p>

        <h3>Owner</h3>
        {owner ? (
          <>
            <p>
              {owner.firstName} {owner.lastName}
            </p>
            <p>{owner.phone}</p>
            <p>{owner.email}</p>
            <p>{owner.address}</p>
          </>
        ) : (
          <p>No owner found</p>
        )}
      </div>

      <div className={styles.detailsAnimal}>
        <h3>Consultations</h3>

        {consultations.length > 0 ? (
          consultations.map((consultations, index) => (
            <div key={index} className={styles.sectionContent}>
              <p>
                <strong>Date:</strong> {consultations.date}
              </p>
              <p>
                <strong>Reason:</strong> {consultations.reason}
              </p>
              <p>
                <strong>Notes:</strong> {consultations.notes}
              </p>
            </div>
          ))
        ) : (
          <p>No consultations found</p>
        )}
      </div>

      <div className={styles.detailsAnimal}>
        <h3>Vaccinations</h3>

        {vaccinations.length > 0 ? (
          vaccinations.map((vaccinations, test) => (
            <div key={test} className={styles.sectionContent}>
              <p>
                <strong>Date:</strong> {vaccinations.date}
              </p>

              <p>
                <strong>Vaccin:</strong> {vaccinations.name}
              </p>
            </div>
          ))
        ) : (
          <p>No vaccinations found</p>
        )}
      </div>

      <NavBar />
    </div>
  );
}
