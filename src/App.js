
import './App.css';

import React, { Component,Fragment } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      form:
      {
         title:"",
         author:"",
         genre:""
      },
      formError:
      {
          titleError:"",
          authorError:"",
          genreError:""
      },
      formValid:
      {
        titleField:false,
        authorField:false,
        genreField:false,
        buttonActive:false
      },
      successmessage:""
    }
  }
  handleChange= event =>
  {
    const target=event.target;
    const name=target.name;
    const value=target.value;
    const {form}=this.state;
    this.setState({form:{...form,[name]:value}})
    this.validateField(name,value);

  }
  submitBooking=(event)=>
  {
      event.preventDefault()
      this.setState({successmessage:"This is SuccessMessage"})
  }
  validateField=(fieldName,value)=>
  {
      let fieldValidationErrors=this.state.formError;
      let formValid=this.state.formValid;
      switch(fieldName)
      {
        case "title":
          if(value.length<4)
          {
            fieldValidationErrors.titleError="Title must contain atleast 4 Characters";
            formValid.titleField=false;
          }
          else{
            fieldValidationErrors.titleError="";
            formValid.titleField=true;
          }
          break;
        case "author":
          if(value.length<3)
          {
             fieldValidationErrors.authorError="Title must contain atleast 3 Characters"
             formValid.authorField=false;
          }
          else
          {
            fieldValidationErrors.authorError="";
            formValid.authorField=true;
          }
          break;
        case "genre":
          if(value==="")
          {
            fieldValidationErrors.genreError="Please select genre";
            formValid.genreField=false;
          }
          else{
            fieldValidationErrors.genreError="";
            formValid.genreField=true;
          }
          break;
        default:
          break;
      }
      formValid.buttonActive= formValid.authorField && formValid.genreField &&
                formValid.titleField;
      this.setState({formError:fieldValidationErrors,formValid:formValid})
  }
  render() {
    return (
      <Fragment>
      <h4 className="display-3 text-center">FORM</h4>
      <div className="container" style={{border:"1px solid black",padding:"10px"}}>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
         <form className="form" onSubmit={this.submitBooking}>
            <div className="form-group">
                <label for="title">Title:</label>
                <input type="text" className="form-control" name="title" id="title" value={this.state.form.title} onChange={this.handleChange}/>
                <span className="text-danger">{this.state.formError.titleError}</span>
            </div>
            <div className="form-group">
                <label for="author">Author:</label>
                <input type="text" className="form-control" name="author" id="author" value={this.state.form.author} onChange={this.handleChange}/>
                <span className="text-danger">{this.state.formError.authorError}</span>
            </div>
            <div className="form-group">
                <label for="genre">Genre</label>
                <select className="form-control" id="genre" name="genre" value={this.state.form.genre} onChange={this.handleChange}>
                  <option  value="">--select--</option>
                  <option  value="action">Action</option>
                  <option  value="comdey">Comdey</option>
                  <option  value="thriller">thriller</option>
                </select>
                <span className="text-danger">{this.state.formError.genreError}</span>
            </div>
            <button className="btn btn-block btn-success" disabled={!(this.state.formValid.buttonActive)} type="submit">Add Book</button>
            <span className="text-success">{this.state.successmessage}</span>        
         </form>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default App
