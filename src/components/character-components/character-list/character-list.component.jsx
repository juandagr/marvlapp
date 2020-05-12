import React, { Component } from "react";
import CharacterCard from "../character-card/character-card.component";

import "./character-list.styles.scss";
import { getCharacters } from "../../../marvel-api/characters";
import Pagination from "react-js-pagination";

class CharacterList extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      activePage: 1,
    };
  }

  componentWillMount() {
    const charactersCall = getCharacters([{ key: "limit", value: "24" }]);

    fetch(charactersCall)
      .then((response) => response.json())
      .then((response) => this.setState({ characters: response.data.results }));
  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });

    const charactersCall = getCharacters([
      { key: "limit", value: "24" },
      { key: "offset", value: `${(pageNumber - 1) * 24}` },
    ]);
    console.log(charactersCall);

    fetch(charactersCall)
      .then((response) => response.json())
      .then((response) => this.setState({ characters: response.data.results }));
  };

  render() {
    return (
      <div className="character-list-container">
        <div className="character-list">
          {this.state.characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={24}
          totalItemsCount={1493}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          innerClass={"pagination"}
          itemClass={"item"}
          linkClass={"link"}
        />
      </div>
    );
  }
}

export default CharacterList;
