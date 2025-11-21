import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="logo">
        <span className="logo-icon">🐾</span>
        <span className="logo-text">Patte & Cie</span>
      </div>

      <Link href="/Home/Animals">
        <button>
          <p className="hero-text">
            Nous vous aidons <br />à garder <span>votre compagnon</span> <br />
            en pleine santé !
          </p>
        </button>
      </Link>

      <div className="shiba">
        <img src="/Shiba.png" alt="Logo Patte & Cie" />
      </div>
    </div>
  );
}
