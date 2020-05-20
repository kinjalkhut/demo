// import remove from 'lodash.remove'
// Action Types
export const FETCH_TIMELINE = 'FETCH_TIMELINE'
export const FETCH_INFO = 'FETCH_INFO'


// Action Creators

export function getTImeline(timeline) {
  return {
    type: FETCH_TIMELINE,
    timeline
  }
}

export function getInfo(info) {
  return {
    type: FETCH_INFO,
    info
  }
}


  export const fetchTimeline = () =>dispatch=>  {
   fetch('https://backend.sports.info/api/v1/cricket/match/sr:match:21246257/timeline')
   .then(res=>
     res.json()

    // dispatch(getTImeline(res))
    ).then(response=>{
        console.log("tt1",response)
        const timeline = response.data
        dispatch(getTImeline(timeline))
    })
 
}

export const fetchInfo = () =>dispatch=>  {
    fetch('https://backend.sports.info/api/v1/kabaddi/match/275/info')
    .then(res=>
      res.json()
 
     // dispatch(getTImeline(res))
     ).then(response=>{
         const info = response.data.items.match_info
         dispatch(getInfo(info))
     })
  
 }



// reducer

const initialState = {
    timeline: [],
    info:{}
}

function matchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TIMELINE:
      return {
        ...state,
        timeline :  action.timeline
        
      }

    case FETCH_INFO:
        return {
            ...state,
            info :  action.info
            
          }
    default:
      return state
  }
}

export default matchReducer
