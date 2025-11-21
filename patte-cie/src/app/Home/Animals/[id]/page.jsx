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

        <h3>Informations de l’animal</h3>
        <p>Espèce : {animal.species}</p>
        <p>Race : {animal.breed}</p>
        <p>Date de naissance : {animal.birthDate}</p>

        <h3>Propriétaire</h3>
        {owner ? (
          <>
            <p>
              {owner.firstName} {owner.lastName}
            </p>
            <p>Téléphone : {owner.phone}</p>
            <p>Email : {owner.email}</p>
            <p>Adresse : {owner.address}</p>
          </>
        ) : (
          <p>Aucun propriétaire trouvé</p>
        )}
      </div>

      <div className={styles.detailsAnimal}>
        <h3>Consultations</h3>

        {consultations.length > 0 ? (
          consultations.map((consultation, index) => (
            <div key={index} className={styles.sectionContent}>
              <p>
                <strong>Date :</strong> {consultation.date}
              </p>
              <p>
                <strong>Motif :</strong> {consultation.reason}
              </p>
              <p>
                <strong>Notes :</strong> {consultation.notes}
              </p>
            </div>
          ))
        ) : (
          <p>Aucune consultation trouvée</p>
        )}
      </div>

      <div className={styles.detailsAnimal}>
        <h3>Vaccinations</h3>

        {vaccinations.length > 0 ? (
          vaccinations.map((vaccination, index) => (
            <div key={index} className={styles.sectionContent}>
              <p>
                <strong>Date :</strong> {vaccination.date}
              </p>

              <p>
                <strong>Vaccin :</strong> {vaccination.name}
              </p>
            </div>
          ))
        ) : (
          <p>Aucune vaccination trouvée</p>
        )}
      </div>

      <NavBar />
    </div>
  );
}
