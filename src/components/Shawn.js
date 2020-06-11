import React from 'react';

class Shawn extends React.Component { 
  state = {
    trails: [
      {id:1, name:"Mt. Aire", vert:"2,000ft", miles: 6, tech:"Med-Low"},
      {id:2, name:"Pfiefferhorn", vert:"4,000ft", miles: 9, tech:"High"},
      {id:3, name:"Timp", vert:"5,000ft", miles: 15, tech:"Med-Low"},
      {id:4, name:"SLC Overlook", vert:"2,000ft", miles: 5.4, tech:"Low"},
      {id:5, name:"BoSho Marathon", vert:"6,000ft", miles: 26.2, tech:"Low"},
    ]
  };

  renderTrails= () => {
    return ( <p>it works </p>)
  }

  render() {
    return(
      <>
      <h1>SLC Running Trails</h1>
     
      {this.renderTrails()}
      </>
    )
  }
};

export default Shawn;