import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux' ;

// function App() {
class App extends Component{
  // state ={
  //   count:0
  // }

  increase = ()=>{
    this.setState({
      count:this.state.count + 1
    })
  }

  decrease = ()=>{
    this.setState({
      count:this.state.count - 1
    })
  }
  render(){
    console.log(this.props);
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Install Redux
          </p>
    
        </header>
        <section>
          <button onClick={this.increase}>+</button>
          <p>{this.props.count}</p>
          <button onClick={this.decrease}>-</button>

        </section>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    count : state.count
  }
}
  export default connect(mapStateToProps)(App);
