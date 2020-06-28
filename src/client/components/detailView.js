import React from "react";
import { connect } from "react-redux";
import { fetchDetailPlace, addFavourites } from "./../container/placeAction";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Error from "./Error";

class DetailView extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchDetailPlace(this.props.location.state));
  }

  addFavourites = (place) => {
    this.props.dispatch(addFavourites(place));
  }

  render() {
    const { error, loading, place, favourites } = this.props;
    if (error) {
      return <Error error={error}/>;
    }

    if (loading) { // Show spinner until fetchDetailPlace finishes
      return <Loading />;
    }

    if (place !== null) {
      return (
        <div className="card mb-3">
          <Navbar favourites={favourites}/>
          <div className="card-body">
            <h4 className="card-title">{place.name}</h4>
            <p className="card-text">{place.official_description}</p>
            <button type='button' className='btn btn-outline-dark' onClick={() => this.addFavourites(place)}>Add to Favourites</button>
          </div>
          {place.cover ? <img src={place.cover} className="card-img-top" alt={place.location} ></img> : <h2>NO COVER</h2>}
        </div>
      )
    }
    return null;
  }
}

const mapStateToProps = state => ({
  places: state.places.items,
  loading: state.places.loading,
  error: state.places.error,
  place: state.places.item,
  favourites: state.places.favourites
});

export default connect(mapStateToProps)(DetailView);
