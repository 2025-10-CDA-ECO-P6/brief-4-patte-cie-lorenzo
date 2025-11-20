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
            Helping you <br />
            to keep <span>your bestie</span> <br />
            stay healthy!
          </p>
        </button>
      </Link>

      <div className="shiba">
        <img src="/Shiba.png" alt="Patte & Cie Logo" />
      </div>
    </div>
  );
}
