import React, {Component} from 'react';

class matchInfo extends Component {
  

    render (){
      const info = this.props.info
    return (
      <div className="App">
      <h1>{info.title}</h1>
      {info && info.teams &&<div>
         <div>
        <img src={info.teams.away.logo}/>
      <label>{info.teams.away.shortname}</label>
      </div>
      <div>
        <img src={info.teams.home.logo}/>
      <label>{info.teams.home.shortname}</label>
      </div>
      </div>
      }

      </div>
    )
    }
  }
  
  export default matchInfo;