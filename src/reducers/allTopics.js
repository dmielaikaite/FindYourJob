export function topics(state = [], action){
  switch (action.type) {
    case 'TOPICS_FETCH_DATA_SUCCESS':
      return action.topics
    default:
      return state;
  }
}

export function topicsHasRerrored(state = false, action){
  switch (action.type) {
    case 'TOPICS_HAS_ERRORED':
      action.topicsHasErrored
    default:
      return state;
  }
}
