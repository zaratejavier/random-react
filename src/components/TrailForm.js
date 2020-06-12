import React from 'react';
import {Form} from 'semantic-ui-react';


class TrailForm extends React.Component {
  state = { name: '', vert: '', miles:'', location:'', tech:'' }

  componentDidMount () {
    console.log('mounted')
    if (this.props.id) {
      this.setState({
        name: this.props.name,
        vert: this.props.vert,
        miles: this.props.miles,
        location: this.props.location,
        tech: this.props.tech,
      })
    }
  }

  handleSubmit = (e) => {
    console.log(this.props)
    if (this.props.id) {
      this.props.edit({id: this.props.id, ...this.state });
      this.props.toggle();
    } else {
      this.props.add(this.state);
    }
    this.setState({
      name: '', vert: '', miles:'', location:'', tech:''
    });
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
        <Form.Button color="teal">Add Trail!"</Form.Button>
      </Form.Group>
      </Form>
      </>
    )
  }
}

export default TrailForm;

