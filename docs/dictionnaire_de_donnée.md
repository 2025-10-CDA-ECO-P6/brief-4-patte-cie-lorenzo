# 📘 Dictionnaire de Données — Patte & Cie

## Owner (Propriétaire)

| Attribut  | Type    | Taille | Description                            |
|-----------|---------|--------|----------------------------------------|
| idOwner   | INTEGER | -      | Identifiant unique du propriétaire     |
| lastName  | VARCHAR | 50     | Nom de famille                         |
| firstName | VARCHAR | 50     | Prénom                                 |
| phone     | VARCHAR | 20     | Numéro de téléphone                    |
| email     | VARCHAR | 100    | Adresse email                          |
| address   | TEXT    | -      | Adresse complète                       |

## Animal

| Attribut   | Type    | Taille | Description                         |
|------------|---------|--------|-------------------------------------|
| idAnimal   | INTEGER | -      | Identifiant unique de l'animal      |
| name       | VARCHAR | 50     | Nom de l'animal                     |
| species    | VARCHAR | 50     | Espèce (chien, chat, etc.)          |
| breed      | VARCHAR | 50     | Race                                |
| birthDate  | DATE    | -      | Date de naissance                    |
| photoUrl   | VARCHAR | 255    | URL de la photo                      |
| owner      | INTEGER | -      | Propriétaire associé                 |

## Veterinarian

| Attribut        | Type    | Taille | Description                    |
|-----------------|---------|--------|--------------------------------|
| idVeterinarian  | INTEGER | -      | Identifiant du vétérinaire     |
| lastName        | VARCHAR | 50     | Nom de famille                 |
| firstName       | VARCHAR | 50     | Prénom                         |

## Vaccine

| Attribut        | Type    | Taille | Description                           |
|-----------------|---------|--------|---------------------------------------|
| idVaccine       | INTEGER | -      | Identifiant du vaccin                 |
| name            | VARCHAR | 100    | Nom du vaccin                         |
| description     | TEXT    | -      | Description / maladie ciblée          |
| validityPeriod  | INTEGER | -      | Durée de validité (en mois)           |

## Consultation

| Attribut         | Type    | Taille | Description                           |
|------------------|---------|--------|---------------------------------------|
| idConsultation   | INTEGER | -      | Identifiant de la consultation        |
| date             | DATE    | -      | Date de la consultation               |
| reason           | TEXT    | 1500      | Motif de la consultation              |
| notes            | TEXT    | 1500      | Observations / compte-rendu           |


#  Résumé simple des relations (sans mots techniques)

| Relation | Type | Explication |
|---------|------|-------------|
| Owner ⟶ Animal | Un à plusieurs | Un propriétaire peut avoir plusieurs animaux |
| Animal ⟶ Consultation | Un à plusieurs | Un animal peut avoir plusieurs consultations |
| Veterinarian ⟶ Consultation | Un à plusieurs | Un vétérinaire peut faire plusieurs consultations |
| Animal ⟶ Vaccination | Un à plusieurs | Un animal peut recevoir plusieurs vaccins |
| Vaccine ⟶ Vaccination | Un à plusieurs | Un même vaccin peut être donné à plusieurs animaux |
