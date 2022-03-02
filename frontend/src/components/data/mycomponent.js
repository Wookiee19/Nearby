import React, { useEffect, useState} from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const data1="{userResultByLatitudeAndLongitude(latitude:12.96,longitude:77.68){nearByResult{places}}}";
  
  axios
  .get(
    `http://cdkst-mynea-tsm46196ump7-1862001417.ap-south-1.elb.amazonaws.com/graphql`,data1 )
  .then((response) => {
    console.log("axios",response);
    
  })
  .catch((error) => {
    if (error.response) {
      
    }
  });
  

  
}

export default MyComponent;