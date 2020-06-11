import React from 'react';
import Trails from './Trails';
import { Card } from 'semantic-ui-react';
import TrailForm from "./TrailForm";

class Shawn extends React.Component { 
  state = {
    trails: [
      {id:1, name:"Mt. Aire", vert:"2,000 ft", miles: 6, tech:"Med-Low", location:"Millcreek"},
      {id:2, name:"Pfiefferhorn", vert:"4,000 ft", miles: 9, tech:"High", location:"Little Cottonwood"},
      {id:3, name:"Timp", vert:"5,000 ft", miles: 15, tech:"Med-Low", location:"AF Canyon"},
      {id:4, name:"SLC Overlook", vert:"2,000 ft", miles: 5.4, tech:"Low", location:"Millcreek"},
      {id:5, name:"BoSho Marathon", vert:"6,000 ft", miles: 26.2, tech:"Low", location:"SLC Foothills"},
      {id:6, name:"King's Peak", vert:"5,000 ft", miles: 26, tech:"Med", location:"Uintas"},
    ]
  };

  renderTrails= () => {
    return this.state.trails.map ( trail => {
      return <Trails key={trail.id} {...trail} edit={this.editTrail} />
    })
  }

  addTrail = (trailSpecs) => {
    const newTrail = {id:`Math.random()`, ...trailSpecs };
    const newTrails = [newTrail, ...this.state.trails];
    this.setState({
      trails: newTrails,
    })
  }

  editTrail = (trailSpecs) => {
    const trails = this.state.trails.map ( t => {
      if (trailSpecs.id === t.id) {
        return trailSpecs;
      }
      return t; 
    })
    this.setState({
      trails,
    })
  }

  render() {
    return(
      <>
      <h1>SLC Running Trails</h1>
      <TrailForm add={this.addTrail} />
      <Card.Group itemsPerRow="3">
      {this.renderTrails()}
      </Card.Group>
      </>
    )
  }
};

export default Shawn;