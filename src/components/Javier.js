import React from "react"
import {Header} from "semantic-ui-react"
import JavierPost from "./JavierPost"
import JavierForm from "./JavierForm"

class Javier extends React.Component{

  state = {
    recipes: [
      { id:1, name: "Shrimpy", ingridients:"Large shrip, Garlic, butter, Lemon, cilantro", time: "5"},
      { id:2, name: "Tacos", ingridients:"tortillas, meat, salsa, cilantro, union, tomatoes", time: "7"},
      { id:3, name: "Salmon", ingridients:"Salmon, Butter, Fresh herbs, Lemon", time: "5"},
      { id:4, name: "Chicken Alfredo", ingridients:"Chicken, butter, pasta, alfredo sauce", time: "5"},
    ]
  }

  addRecipe = (recipeData) => {
    const recipe = {id:`Math.random()`, ...recipeData} //storing the new recipe here
    const newRecipes = [recipe, ...this.state.recipes] //add the new recipe to our existing recipe state
    this.setState({
      recipes: newRecipes, //this set state will make the new recipe official
    })
    
  }
  
  renderRecipes(){
    return this.state.recipes.map((recipe) => {
      return <JavierPost 
      key={recipe.id}
      name={recipe.name} 
      ingridients={recipe.ingridients} 
      time={recipe.time}
      />
    })
  }

  render(){
    return(
      <div>
        <Header as="h1">Javiers Secret Recipes</Header>
        <JavierForm addRecipe={this.addRecipe}/>
        {this.renderRecipes()}
      </div>
    )
  }
}

export default Javier