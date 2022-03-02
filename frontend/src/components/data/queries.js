import gql from "graphql-tag";

const GET_RESTAURANTS = gql`
query
{
   userResultByLatitudeAndLongitude(latitude:"13.96",longitude:"77.68"){
    latitude,
    longitude,
    nearByResult{
      places{
        name
      }
    }
  }
}
  
`;
{console.log("a111",GET_RESTAURANTS)}
export default GET_RESTAURANTS;
