import React, {Component} from 'react';
import API from '../../utils/api'

class table extends Component{
  state = {
    response:[]
  }
  componentDidMount(){
    const {res} = API.get();
    this.setState({response:res});
  }
  render(){  
    return(
    <div>
    {
      this.state.response ? this.state.response.map(user=>(
      <p>{user.Username} : {user.UserId}</p>
      )):""
    }
    </div>
  )}
}

export default table;