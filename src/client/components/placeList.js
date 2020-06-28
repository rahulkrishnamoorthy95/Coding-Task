import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlacess } from "./../container/placeAction";
import Navbar from "./Navbar";
import Loading from "./Loading";
import Ul from "./Ul";
import Error from "./Error";

// To display the list of places returned by API
class PlaceList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPlacess()); // Dispatch the action to fetch API
  }

  render() {
    const { error, loading, places, favourites } = this.props;

    if (error) { // Any error render Error component
      return <Error error={error}/>
    }

    if (loading) { // Show spinner until fetchPlacess finishes
      return <Loading />;
    }


    return (
        <div id='container' className='class-container'>
        <div className="card bg-dark text-white">
            <Navbar favourites={favourites}/>
            <Ul list={places}/>
        </div>
        </div>
    )       
  }
}

const mapStateToProps = state => ({ // Mapping the state values to Prop
  places: state.places.items,
  loading: state.places.loading,
  error: state.places.error,
  favourites: state.places.favourites
});

export default connect(mapStateToProps)(PlaceList);
