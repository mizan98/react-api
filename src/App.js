import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Users from './components/Users'

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount(){
    this.setState({
      loading: true
    })

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    
    this.setState({
      users: response.data,
      loading: false
    })

  }
  render (){
    const allUsers = this.state.users.map((user) =>{
      return <h1 key={user.id}>{user.name} works at {user.company.name} </h1>
    })
    return(
      <div>
        <Users data={allUsers} loading={this.state.loading}/>
      </div>
    )
  }
}

export default App;

//whenever we wanty to fetch data from an api we need to do it inside the componentDidMount