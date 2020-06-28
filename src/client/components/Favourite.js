import React from "react";
import { connect } from "react-redux";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Ul from "./Ul";
import Error from "./Error";

class Favourites extends React.Component {

  render() {
    const { error, loading, favourites } = this.props;
    
    if (error) { // Any error render Error component
      return <Error error={error}/>;
    }

    if (loading) {
      return <Loading />;
    }

      return (
        <div className="card bg-dark text-white">
          <Navbar favourites={favourites}/>
          <h3>Favourite List</h3>
          {favourites.length <= 0 ? <div><h3>No Favourites</h3></div> : <Ul list={favourites}/>}
        </div>
      );
    }
}

const mapStateToProps = state => ({
  loading: state.places.loading,
  error: state.places.error,
  place: state.places.item,
  favourites: state.places.favourites
});

export default connect(mapStateToProps)(Favourites);
