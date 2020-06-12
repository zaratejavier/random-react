import React from "react"
import {Form} from "semantic-ui-react"

class JavierForm extends React.Component{
  state = {name: "", ingridients: "", time:""}

  componentDidMount() {
    // console.log("form mounted")
    // console.log(this.props)
    if(this.props){
      this.setState({
        name: this.props.name, ingridients: this.props.ingridients, time: this.props.time,})
      }
  }

  handleSubmit = (e) => {
    // e.preventDefault(); //this will prevent the whole page from reloading
    if (this.props.id){
      this.props.edit({id: this.props.id, ...this.state})
      this.props.toggle()
    }else{
      this.props.add(this.state); //will add the new info to the state
    }
    this.setState({name:"", ingridients:"", time:""}) //this will reset the state to blank after user enters recipe
  }

  handleChange = (event) => {
    console.log(event.target.value) //gets what you enter
    console.log(event.target.name)  //gets where you're entering(name, ingridients or time)
    this.setState({[event.target.name]: event.target.value}) //sets the value into the name and updates the state
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder ={"Enter recipe name"}
            label={"Name"} //this will display on the computer
            name={"name"}
            onChange={this.handleChange} //when something changes handle change will be called
            value={this.state.name} //gets what you enter in each field(name)
          />

          <Form.Input
            placeholder ={"Enter ingridients"}
            label={"Ingridients"} //this will display on the computer
            name={"ingridients"}
            onChange={this.handleChange} //when something changes handle change will be called
            value={this.state.ingridients} //gets what you enter in each field(ingridients)
          />    

          <Form.Input
            placeholder ={"Enter time"}
            label={"Time"} //this will display on the computer
            name={"time"}
            onChange={this.handleChange} //when something changes handle change will be called
            value={this.state.time} //gets what you enter in each field(time)
          />     

          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default JavierForm