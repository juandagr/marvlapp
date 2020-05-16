import React, { Component } from "react";
import CharacterCard from "../character-card/character-card.component";

import "./character-list.styles.scss";
import { getCharacters } from "../../../marvel-api/characters";
import Pagination from "react-js-pagination";
import Search from "../../general-components/search/search.component";

import { getCharactersStart } from "../../../redux/characters/characters.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentCharacters,
  selectActivePage,
  selectCharactersPerPage,
  selectTotalCharacters,
} from "../../../redux/characters/characters.selectors";

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

  componentDidMount() {
    const {
      getCharactersStart,
      selectActivePage,
      selectCharactersPerPage,
    } = this.props;
    getCharactersStart({
      charactersPerPage: selectCharactersPerPage,
      pageNumber: selectActivePage,
    });
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
    const {
      selectCharacters,
      selectActivePage,
      selectCharactersPerPage,
      selectTotalCharacters,
    } = this.props;
    return (
      <div className="character-list-container">
        <h2 className="title">CHARACTERS</h2>
        <Search
          placeholder="Search character"
          handleSearch={this.handleSearch}
        />
        <div className="character-list">
          {selectCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        <Pagination
          activePage={selectActivePage}
          itemsCountPerPage={selectCharactersPerPage}
          totalItemsCount={selectTotalCharacters}
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

const mapStateToProps = createStructuredSelector({
  selectCharacters: selectCurrentCharacters,
  selectActivePage: selectActivePage,
  selectCharactersPerPage: selectCharactersPerPage,
  selectTotalCharacters: selectTotalCharacters,
});

const mapDispatchToProps = (dispatch) => ({
  getCharactersStart: (params) => dispatch(getCharactersStart(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
