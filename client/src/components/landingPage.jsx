import React from "react";
import { Link } from "react-router-dom";

export default function landingPage() {
  return (
    <div>
      <h1>Bienvenidos</h1>
      <Link to="/home">
        <button>HOME</button>
      </Link>
    </div>
  );
}
