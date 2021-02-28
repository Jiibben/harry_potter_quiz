import React from 'react';
import Answer from "./components/answer.js";
import Character from "./components/character.js";
import Question from "./components/question.js";
import QuestionInput from "./components/questionInput.js";
import Submit from "./components/submit.js";
import Next from "./components/next.js";



class App extends React.Component{
  constructor(){
    super()
    this.state ={
      character:{
        name:"",
        house:"",
        actor:"",
        patronus:"",
        image:""
      },
      questionKeyword:"",
      question:"",
      answer:"",
      showAnswer:"",
      userInput:"",
      state:""
      };
  }
  async componentDidMount(){
    this.setState({state:""})
    const response = await fetch("https://hp-api.herokuapp.com/api/characters")
    const data = await response.json()
    const char = data[Math.floor(Math.random()*data.length)]
    this.setState({character:{name:char.name, image:char.image, actor:char.actor, patronus:char.patronus, house:char.house}})
    const questionList = Object.keys(this.state.character).filter(item => item !== "name" && item !== "image")
    const questionKeyword = questionList[Math.floor(Math.random()*questionList.length)]
    this.setState({questionKeyword:questionKeyword})
    if (questionKeyword ==="patronus"){
      this.setState({question:`What is the patronus of ${char.name} ?`});
      this.setState({answer:char.patronus.toLowerCase()});
    }else if (questionKeyword ==="actor"){
      this.setState({question:`What is the name of the actor that played ${char.name} ?`});
      this.setState({answer:char.actor.toLowerCase()});
    }else if (questionKeyword ==="house"){
      this.setState({question:`In which hogwarts house is/was ${char.name} in ?`});
      this.setState({answer:char.house.toLowerCase()});
    };
  }
  onNext = async () =>{
    this.setState({state:""})
    const response = await fetch("https://hp-api.herokuapp.com/api/characters")
    const data = await response.json()
    const char = data[Math.floor(Math.random()*data.length)]
    this.setState({character:{name:char.name, image:char.image, actor:char.actor, patronus:char.patronus, house:char.house}})
    const questionList = Object.keys(this.state.character).filter(item => item !== "name" && item !== "image")
    const questionKeyword = questionList[Math.floor(Math.random()*questionList.length)]
    this.setState({questionKeyword:questionKeyword})
    if (questionKeyword ==="patronus"){
      this.setState({question:`What is the patronus of ${char.name} ?`});
      this.setState({answer:char.patronus.toLowerCase()});
    }else if (questionKeyword ==="actor"){
      this.setState({question:`What is the name of the actor that played ${char.name} ?`});
      this.setState({answer:char.actor.toLowerCase()});
    }else if (questionKeyword ==="house"){
      this.setState({question:`In which hogwarts house is/was ${char.name} in ?`});
      this.setState({answer:char.house.toLowerCase()});
    };
  }
  onInput = (event) =>{
    this.setState({userInput:event.target.value}) 
  }

  onSubmit = () =>{
    if (this.state.userInput === this.state.answer){
      this.setState({showAnswer:"you're right"});
    }else{
      this.setState({showAnswer:`You're wrong the correct answer is ${this.state.answer}`})
    }
    this.setState({state:"true"})
  }
  render(){
    return(
    <div>
      <h1>Harry Potter Quiz Game</h1>
      < Character name={this.state.character.name} image={this.state.character.image}/>
      < Question question={this.state.question}/>
      < QuestionInput handleChange={this.onInput}/>
      < Submit state={this.state.state} handleClick={this.onSubmit}/>
      < Answer text={this.state.showAnswer}/>
      < Next handleClick={this.onNext}/>
    </div>)
  }
};

export default App;
