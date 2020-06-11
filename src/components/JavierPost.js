import React from "react"
import {Header, Segment,} from "semantic-ui-react"

class JavierPost extends React.Component{

render(){
  return(
    <Segment>
      <Header as="h3">{this.props.name}</Header>
    </Segment>
  )
}
}
export default JavierPost