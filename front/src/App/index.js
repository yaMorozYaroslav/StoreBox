import React from 'react'
import {Header} from '../Comps/Header'
import Headline from '../Comps/Headline'
import SharedButton from '../Comps/Button'
import ListItem from './component/ListItem'
import {connect} from 'react-redux'
import {fetchPosts} from './actions'
import './styles.scss'

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]

class App extends React.Component{
  render(){
  return (<div className="App">
           <Header/>
           <section className="main">
            <Headline 
                 header='The Planet'
                 desc='Touch the planet'
                 tempArr={tempArr}/>
           </section>
           </div>)
         }
        }
export default App