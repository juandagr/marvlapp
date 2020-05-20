import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithSpinner from "../../general-components/with-spinner/with-spinner.component";
import characterList from "./character-list.component";
import { selectCharactersLoading } from "../../../redux/characters/characters.selectors";

/**
 * Container pattern, using HigherOrderComponents
 */
const mapStateToPorps = createStructuredSelector({
  isLoading: selectCharactersLoading,
});

const CharactersListContainer = compose(
  connect(mapStateToPorps),
  WithSpinner
)(characterList);

export default CharactersListContainer;
