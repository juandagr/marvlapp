import React, { Component } from "react";
import CharacterCard from "../character-card/character-card.component";

import "./character-list.styles.scss";
import { getCharacters } from "../../../marvel-api/characters";

class CharacterList extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  componentWillMount() {
    const charactersCall = getCharacters([{ key: "limit", value: "24" }]);

    fetch(charactersCall)
      .then((response) => response.json())
      .then((response) => this.setState({ characters: response.data.results }));
  }

  render() {
    return (
      <div className="character-list">
        {this.state.characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  }
}

export default CharacterList;
