import React from "react"
import {Form, FormInput} from "semantic-ui-react"

class JavierForm extends React.Component{
  state = {name: "", ingridients: "", time:""}

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder ={"Enter recipe name"}
            label={"Name"}
            name={"name"}
            onChange={this.handleChange}
            value={this.state.name}
          />

          <Form.Input
            placeholder ={"Enter ingridients"}
            label={"Ingridients"}
            name={"ingridients"}
            onChange={this.handleChange}
            value={this.state.ingridients}
          />    

          <Form.Input
            placeholder ={"Enter time"}
            label={"Time"}
            name={"time"}
            onChange={this.handleChange}
            value={this.state.time}
          />     

          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default JavierForm