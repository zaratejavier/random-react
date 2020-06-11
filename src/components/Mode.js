import React from "react";
import {Link} from "react-router-dom";
import {Segment, Header, Button, Icon } from "semantic-ui-react";
import ModeForm from "./ModeForm";

export default class Mode extends React.Component {
  state = {editing: false};

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    return (
      <Segment>
        {this.state.editing ? (
          <ModeForm
            {...this.props}
            edit={this.props.edit}
            toggle={this.toggleEdit}
          />
        ) :(
          <div>
            <Header as="h3">{this.props.name}</Header>
            <p>{this.props.description}</p>
          </div>
        )}
        <div>
          <Button icon color="yellow" onClick={this.toggleEdit}>
            <Icon name="music" />
          </Button>
          <Button icon color="red">
            <Icon name="eraser" />
          </Button>
          <Link to={{
            pathname: '/mode/${this.props.id}',
            state: {
              key1: "some data",
              name: this.props.name,
              description: this.props.description,
            },
          }}>
            <Button icon color="yellow">
              <Icon name="eye" />
            </Button>
          </Link>
        </div>
      </Segment>
    )
  }
}
