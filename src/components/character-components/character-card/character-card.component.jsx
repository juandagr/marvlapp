import React from "react";

import "./character-card.styles.scss";

const CharacterCard = ({ character }) => {
  console.log(character);
  return (
    <div className="character-card">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension})`,
        }}
      />
      <div className="name-container">
        <h3>{character.name}</h3>
      </div>
    </div>
  );
};

export default CharacterCard;
