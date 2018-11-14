import React from 'react';

//import AddValue from '../containers/AddValue';
import Calculation from '../containers/Calculation';

const Home = () => (
    <div>
        <div style={{
            width: "60%",
            float: "right"
        }}>
          // <Calculation></Calculation>
          <SaleList></SaleList>
        </div>
        <div style={{
            clear: "both"
        }}></div>
    </div>
);

export default Home;
