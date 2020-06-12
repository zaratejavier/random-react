import React from 'react';
import { Button, Header, Card } from 'semantic-ui-react';
import TrailForm from'./TrailForm';


class Trails extends React.Component {
  state= {editing: false};

  toggleEdit = () => this.setState ({ editing: !this.state.editing });

  render(){
    return(
      <>
      {this.state.editing ? (<TrailForm edit={this.props.edit} toggle={this.toggleEdit} {...this.props} />) : 
    (<Card key={this.props.id}>
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
          <Button basic color='purple' onClick={this.toggleEdit}>
            Edit
          </Button>
          <Button basic color='red'onClick={() => this.props.delete(this.props.id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>)
  }
    </>
    )
  }

}

export default Trails;