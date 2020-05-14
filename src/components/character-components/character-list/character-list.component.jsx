import React, { Component } from "react";
import CharacterCard from "../character-card/character-card.component";

import "./character-list.styles.scss";
import { getCharacters } from "../../../marvel-api/characters";
import Pagination from "react-js-pagination";
import Search from "../../general-components/search/search.component";

class CharacterList extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      activePage: 1,
      charactersPerPage: 24,
      totalCharacters: 0,
    };
  }

  componentWillMount() {
    const charactersCall = getCharacters([
      { key: "limit", value: this.state.charactersPerPage },
    ]);

    fetch(charactersCall)
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          characters: response.data.results,
          totalCharacters: response.data.total,
        })
      );
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });

    const charactersCall = getCharacters([
      { key: "limit", value: this.state.charactersPerPage },
      {
        key: "offset",
        value: `${(pageNumber - 1) * this.state.charactersPerPage}`,
      },
    ]);

    fetch(charactersCall)
      .then((response) => response.json())
      .then((response) => this.setState({ characters: response.data.results }));
  };

  handleSearch = (event) => {
    const pageNumber = 1;
    this.setState({ activePage: pageNumber });

    const charactersCall = getCharacters([
      { key: "limit", value: this.state.charactersPerPage },
      {
        key: "offset",
        value: `${(pageNumber - 1) * this.state.charactersPerPage}`,
      },
      { key: "nameStartsWith", value: event.target.value },
    ]);

    fetch(charactersCall)
      .then((response) => response.json())
      .then((response) => this.setState({ characters: response.data.results }));
  };

  render() {
    return (
      <div className="character-list-container">
        <h2 className="title">CHARACTERS</h2>
        <Search
          placeholder="Search character"
          handleSearch={this.handleSearch}
        />
        <div className="character-list">
          {this.state.characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.charactersPerPage}
          totalItemsCount={this.state.totalCharacters}
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
