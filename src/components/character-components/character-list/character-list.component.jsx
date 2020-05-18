import React, { Component } from "react";
import CharacterCard from "../character-card/character-card.component";

import "./character-list.styles.scss";
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
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
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
      nameStartsWith: this.state.searchText,
    });
  }

  handlePageChange = (pageNumber) => {
    const { getCharactersStart, selectCharactersPerPage } = this.props;

    getCharactersStart({
      charactersPerPage: selectCharactersPerPage,
      pageNumber: pageNumber,
      nameStartsWith: this.state.searchText,
    });
  };

  handleSearch = (event) => {
    const pageNumber = 1;
    this.setState({ searchText: event.target.value });

    const { getCharactersStart, selectCharactersPerPage } = this.props;

    getCharactersStart({
      charactersPerPage: selectCharactersPerPage,
      pageNumber: pageNumber,
      nameStartsWith: event.target.value,
    });
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
