import React, { Component } from "react";
import { getCharactersStart } from "../../../redux/characters/characters.actions";
import { connect } from "react-redux";
import {
  selectActivePage,
  selectCharactersPerPage,
  selectTotalCharacters,
} from "../../../redux/characters/characters.selectors";
import { createStructuredSelector } from "reselect";
import CharactersListContainer from "../../character-components/character-list/character-list-container";

import "./character-list-page.styles.scss";
import Pagination from "react-js-pagination";
import Search from "../../general-components/search/search.component";

class CharactersListPage extends Component {
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
      nameStartsWith: "",
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
      selectActivePage,
      selectCharactersPerPage,
      selectTotalCharacters,
    } = this.props;
    return (
      <div className="character-list-page">
        <h2 className="title">CHARACTERS</h2>
        <Search
          placeholder="Search character"
          handleSearch={this.handleSearch}
        />
        <CharactersListContainer />
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
  selectActivePage: selectActivePage,
  selectCharactersPerPage: selectCharactersPerPage,
  selectTotalCharacters: selectTotalCharacters,
});

const mapDispatchToProps = (dispatch) => ({
  getCharactersStart: (params) => dispatch(getCharactersStart(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersListPage);
