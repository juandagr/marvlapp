import React, { Component } from "react";
import CharacterCard from "../character-card/character-card.component";

import "./character-list.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentCharacters } from "../../../redux/characters/characters.selectors";

class CharacterList extends Component {
  render() {
    const { selectCharacters } = this.props;
    return (
      <div className="character-list-container">
        <div className="character-list">
          {selectCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectCharacters: selectCurrentCharacters,
});

export default connect(mapStateToProps)(CharacterList);
