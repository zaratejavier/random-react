import React from 'react';
import { Button, Header, Card } from 'semantic-ui-react';


class Trails extends React.Component {
  state= {editing: false};

  render(){
    return(
      <>
    <Card>
      <Card.Content>
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Meta>{this.props.location}</Card.Meta>
        <Card.Description>
      <p>Distance: {this.props.miles} miles</p>
      <p>Vertical Gain: {this.props.vert}</p>
      <p>Techincal Difficulty: {this.props.tech}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    </>
    )
  }

}

export default Trails;