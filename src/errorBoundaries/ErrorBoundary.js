import {Component} from "react";
import axios from "axios";
export default class ErrorBoundary extends Component{
  constructor(props){
    super(props);
    this.state ={
      hasError:false
    }
  }
  static getDerivedStateFromError(error){
    return {hasError:true};
  }

  componentDidCatch(error,info){
    axios.post("/.netlify/functions/error-logging", {
      body:{
        error,
        info,
      }
    })
    .then(response => console.log(response));
    // console.error(error,errorInfo);
  }
  render(){
    if (this.state.hasError){
      return (
        <>
        <h1>Oopsie something went wrong</h1>
        <p>try again later</p>
        <p><small>contact admin via admin@email.com</small></p>
        </>
      );
    }
    return this.props.children;
  }
}
