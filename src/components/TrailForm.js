import React from 'react';
import {Form} from 'semantic-ui-react';


class TrailForm extends React.Component {
  state = { name: '', vert: '', miles:'', location:'', tech:'' }

  handleSubmit = (e) => {
    this.props.add(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return(
      <>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input 
          placeholder="Enter Trail Name"
          label="Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <Form.Input 
          placeholder="Enter Distance (miles)"
          label="Distance"
          name="miles"
          onChange={this.handleChange}
          value={this.state.miles}
        />
        <Form.Input 
          placeholder="Enter Vertical Gain (ft)"
          label="Vert"
          name="vert"
          onChange={this.handleChange}
          value={this.state.vert}
        />
        <Form.Input 
          placeholder="Enter Technical Difficulty"
          label="Tech"
          name="tech"
          onChange={this.handleChange}
          value={this.state.tech}
        />
        <Form.Input 
          placeholder="Enter Location"
          label="Location"
          name="location"
          onChange={this.handleChange}
          value={this.state.location}
        />
        <Form.Button color="teal">Add Trail!</Form.Button>
      </Form.Group>
      </Form>
      </>
    )
  }
}

export default TrailForm;

