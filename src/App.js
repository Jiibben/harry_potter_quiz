import React from 'react';
import Answer from "./components/answer.js";
import Character from "./components/character.js";
import Question from "./components/question.js";
import QuestionInput from "./components/questionInput.js";
import Submit from "./components/submit.js";
import Next from "./components/next.js";
import Counter from "./components/counter.js"
import './App.css'

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
      state:"",
      counter:{
        total:10,
        right:0,
        wrong:0,
      }
      };
  }
  resetCounter = () => {
    this.setState({counter:{total:10, right:0, wrong:0}});
    this.setState({state:""})
  };
  
  rightCounter = () => {
    this.setState({counter:{total:this.state.counter.total, right:this.state.counter.right+1, wrong:this.state.counter.wrong}});
  }
  wrongCounter = () => {
    this.setState({counter:{total:this.state.counter.total, right:this.state.counter.right, wrong:this.state.counter.wrong+1}});
  };

  checkEnd = () => {
    if (this.state.counter.total === (this.state.counter.wrong + this.state.counter.right)){
      alert(`You did a score of ${this.state.counter.right +"/" + this.state.counter.total}`);
      this.resetCounter();
    }
  };

  async componentDidMount(){
    this.resetCounter()
    this.setState({state:""})
    const response = await fetch("https://hp-api.herokuapp.com/api/characters")
    const data = await response.json()
    const char = data[Math.floor(Math.random()*data.length)]
    this.setState({character:{name:char.name, image:char.image, actor:char.actor, patronus:char.patronus, house:char.house}})
    const questionList = Object.keys(this.state.character).filter(item => item !== "image")
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
    }else if (questionKeyword ==="name"){
      this.setState({question:`What's the name of this character ?`});
      this.setState({answer:char.name.toLowerCase()});
    }
  }

  onNext = async () =>{
    if (this.state.state !=="true"){
    this.wrongCounter()
    }
    this.checkEnd()
    this.setState({state:""})
    const response = await fetch("https://hp-api.herokuapp.com/api/characters")
    const data = await response.json()
    const char = data[Math.floor(Math.random()*data.length)]
    this.setState({character:{name:char.name, image:char.image, actor:char.actor, patronus:char.patronus, house:char.house}})
    const questionList = Object.keys(this.state.character).filter(item => item !== "image")
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
    }else if (questionKeyword ==="name"){
      this.setState({question:`What's the name of this character ?`});
      this.setState({answer:char.name.toLowerCase()});
    };
    this.setState({showAnswer:""})
  }

  onInput = (event) =>{
    this.setState({userInput:event.target.value}) 
  }



  

  onSubmit = () =>{
    if (this.state.userInput.toLowerCase() === this.state.answer){
      this.setState({showAnswer:"you're right"})
      this.rightCounter()
    }else{
      this.setState({showAnswer:`You're wrong the correct answer is ${this.state.answer}`})
      this.wrongCounter()
      this.checkEnd()
    }
    this.setState({state:"true"})
  }
  render(){
    return(
    <div className="app">
    <h1>Harry Potter Quiz</h1>
    <div className="charQuest">
      < Character name={this.state.character.name} image={this.state.character.image}/>
      < Counter total={this.state.counter.total} right={this.state.counter.right} wrong={this.state.counter.wrong} />
      < Question question={this.state.question}/>
    </div>
      <div className="sub">
        < QuestionInput handleChange={this.onInput}/>
        < Submit state={this.state.state} handleClick={this.onSubmit}/>
      </div>  
      <div className ="ans">  
        < Answer text={this.state.showAnswer}/>
      </div>
      <div className="next">
      < Next  handleClick={this.onNext}/>
      <h3 onClick={this.resetCounter}>reset</h3>
      </div>
    </div>)
  }
};

export default App;
