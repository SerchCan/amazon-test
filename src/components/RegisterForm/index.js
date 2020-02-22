import React,{Component} from 'react';
import API from '../../utils/api';

class RegisterForm extends Component{
  state = {
    username:'',
    password:''
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  sendToAmazon(e){
    e.preventDefault()
    API.post(this.state)
    this.setState({
      username:'',
      password:''
    })
  }
  render(){
    const {username,password} = this.state
    return (
      <form>
        User: <input name="username" value={username} onChange={this.handleChange.bind(this)}></input>
        Password<input name="password" type="password" value={password} onChange={this.handleChange.bind(this)}></input>
        <button onClick={this.sendToAmazon.bind(this)}>Registrarse</button>
      </form>
    )
  }
}

export default RegisterForm;