import React from "react";
import { Query } from "react-apollo";
import GET_RESTAURANTS from "./queries";
import Restaurants from "./Restaurants";

function ListPage(props) {

  
    const RestaurantsData=[];
   
  return (
    <div>
      <h1>List of restaurants</h1>
      <Query query={GET_RESTAURANTS} >
        {({ data, error, loading }) => {
          if (error) {
            console.log("error",error)
            return <div>An error occured</div>;
          }

          if (loading) {
            console.log("loading",loading)
            return <div>Loading...</div>;
          }
          
          return <Restaurants {...data} />;
          
          {console.log("ggggggg",)}
          {console.log("aaaa",RestaurantsData)}
          
        }}
      </Query>
    </div>
  );
}

export default ListPage;
