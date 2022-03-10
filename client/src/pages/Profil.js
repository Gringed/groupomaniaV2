import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";

const Profil = () => {
  const uid = useContext(UidContext);
  return (
    <div className="profil-page">
      {uid ? (
        <h1>Mon compte</h1>
      ) : (
        <div className="profil-page">
          <div className="log-container">
            <Log signin={false} signup={true} />
            <div className="img-container">
              <img src="./img/log.svg" alt="Connexion / inscription" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;