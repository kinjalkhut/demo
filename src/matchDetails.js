

import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {connect} from'react-redux';
import { fetchTimeline, fetchInfo} from './redux/reducer';
import MatchInfo from './components/matchInfo'
import Timeline from './components/timeline'


class matchDetails extends Component {

    render (){
    return (
      <div className="App">
      <h1>matchDetails</h1>
      <MatchInfo info={ this.props.info }/>
      <Timeline timeline ={ this.props.timeline}/>
      <Button color="danger" onClick ={()=> this.props.fetchTimeline()}>Get Timeline</Button>
      <Button color="danger" onClick ={()=> this.props.fetchInfo()}>Get Match Info</Button>

      </div>
    )
    }
  }

  const mapStateToprops =state =>{
    console.log("state",state)
    return({
      timeline : state.timeline,
      info : state.info
  })}
  
  export default connect(mapStateToprops, {fetchTimeline, fetchInfo})(matchDetails);