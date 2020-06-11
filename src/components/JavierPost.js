import React from "react"
import {Link} from "react-router-dom"
import {Header, Segment, Icon, Button} from "semantic-ui-react"
import JavierForm from "./JavierForm";

class JavierPost extends React.Component{

  state = {editing: false,};

  toggleEdit = () => this.setState({editing: !this.state.editing,});



render(){
  return(
    <Segment 
      style={{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between"
      }}>
      {this.state.editing ? (
        <JavierForm
          {...this.props}
          edit={this.props.edit}
          toggle={this.toggleEdit}
          />
      ) : (
        <>
        <Header as="h3">{this.props.name}</Header>
        <p>{this.props.ingridients.substring(0,30)}...</p>
        </>
      )}
      <div>
        <Button icon color="blue" onClick={this.toggleEdit}>
          <Icon name="pencil"/>
        </Button>

        <Button icon color="red">
          <Icon name="trash"/>
        </Button>
        <Link to={{
          pathname: `/Javier/${this.props.id}`,
          state: {
            key1:'whatever',
            name: this.props.name,
            ingridients: this.props.ingridients,
            time : this.props.time,
          }
        }}>

        <Button icon color="green">
          <Icon name="eye"/>
        </Button>
        </Link>
      </div>
    
    </Segment>
  )
}
}
export default JavierPost