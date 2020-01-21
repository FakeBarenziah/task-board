import React from 'react';
import './App.css';
import ColumnHead from './components/ColumnHead'
import Card from './components/Card'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      nickTasks : ["nick", "dog"],
      launeTasks : ["wood", "face"],
      timTasks : ["leg", "bread"],
      janeTasks: ["toilet", "seltzer"]
    }
    this.addCard = this.addCard.bind(this)
  }

  addCard(person){
    const newDesc = window.prompt("Describe this task.", "Description")
    const newState = [...this.state[person]]
    newState.push(newDesc)
    this.setState({...this.state, [person]:newState})
  }

  move(desc, idx, listFrom, listTo){
    const newToList = [...this.state[listTo]]
    newToList.push(desc)
    const newFromList = [...[...this.state[listFrom]].slice(0, idx), ...[...this.state[listFrom]].slice(idx+1)]
    this.setState({...this.state, [listFrom]: newFromList, [listTo]: newToList})
  }

  render(){
    return (
      <div className="App">
        <div className="column">
          <ColumnHead contributorName="Nick" />
          {this.state.nickTasks.map((each, id) => {
            return (
              <div className="card">
                <Card description={`${each}`} key={id}/>
                <button onClick={() => this.move(each, id, "nickTasks", "launeTasks")}>{">"}</button>
              </div>
            )
          })}
          <button onClick={() => this.addCard("nickTasks")}>+ Add Card</button>
        </div>
        <div className="column">
          <ColumnHead contributorName="Laune" />
          {this.state.launeTasks.map((each, id) => {
            return(
              <div className="card">
                <button onClick={() => this.move(each, id, "launeTasks", "nickTasks")}>{"<"}</button>
                <Card description={`${each}`} key={id}/>
                <button onClick={() => this.move(each, id, "launeTasks", "timTasks")}>{">"}</button>
              </div>
            )
          })}
          <button onClick={() => this.addCard("launeTasks")}>+ Add Card</button>
        </div>
        <div className="column">
          <ColumnHead contributorName="Tim" />
          {this.state.timTasks.map((each, id) => {
            return (
              <div className="card">
                <button onClick={() => this.move(each, id, "timTasks", "launeTasks")}>{"<"}</button>
                <Card description={`${each}`} key={id}/>
                <button onClick={() => this.move(each, id, "timTasks", "janeTasks")}>{">"}</button>
              </div>
            )
          })}
          <button onClick={() => this.addCard("timTasks")}>+ Add Card</button>
        </div>
        <div className="column">
          <ColumnHead contributorName="Jane" />
          {this.state.janeTasks.map((each, id) => {
            return(
              <div className="card">
                <button onClick={() => this.move(each, id, "janeTasks", "timTasks")}>{"<"}</button>
                <Card description={`${each}`} key={id}/>
              </div>
              )
            })}
          <button onClick={() => this.addCard("janeTasks")}>+ Add Card</button>
        </div>
      </div>
    );
  }
}

export default App;
