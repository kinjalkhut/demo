import React, {Component} from 'react';

class timeline extends Component {
  state={
    timeline :{

    }
  }


    render (){
      const timeline = this.props.timeline
    return (
      <div className="App">
        {timeline && timeline.sport_event && 
        timeline.sport_event.competitors.map(data=>(
           <div key={data.id}>
            <label>{data.name}</label>
         </div>
        )

        )

        }
      <h1>timeline</h1>
      </div>
    )
    }
  }
  
  export default timeline;