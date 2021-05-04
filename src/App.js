import React from 'react'

import './App.css';
import Header from './components/header/header'
import BlogPage from './pages/blog-page/blog-page';
import WritePage from './pages/write/write'
import {firestore} from './firebase/firebase-utils'
import {Route} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      articles : [
      ]  
    }
}

componentDidMount(){
  firestore.collection('articles').get()
  .then((snapShot)=>snapShot.docs.map(doc=>this.state.articles.push(doc.data())))
}
  render(){
    return(
      <div>
        <Header />
        <Route exact path='/articles/new' component={WritePage}/>
        <Route exact path='/blogs' render={()=><BlogPage articles={this.state.articles} />}/>
        <Route exact path='/about' render = {()=><h1>About</h1>} />

      </div>
    )
  }

}
export default App;
