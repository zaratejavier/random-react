import React from "react"
import { Form } from "semantic-ui-react"

export default class PostForm extends React.Component {
  state = { name: "", description: ""};

  componentDidMount() {
    if (this.props.id) {
      this.setState({
        name: this.props.name,
        description: this.props.description,
      });
    }
  }

  handleSubmit = (e) => {
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state });
      this.props.toggle();
    } else {
      this.props.add(this.state);
    }

    this.setState({
      name: "",
      description: "",
    });
  };

  handleChange = (e) => { this.setState({ [e.target.name]: e.target.value, })}

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder={"Enter Name"}
            label={"Name"}
            name={"name"}
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Form.Input
            placeholder={"Enter Description"}
            label={"Description"}
            name={"description"}
            onChange={this.handleChange}
            value={this.state.description}
          />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

