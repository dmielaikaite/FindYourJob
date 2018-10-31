export function news(state = [], action){
  switch (action.type) {
    case 'NEWS_FETCH_DATA_SUCCESS':
      return action.news
    default:
      return state;
  }
}

export function newsHasRerrored(state = false, action){
  switch (action.type) {
    case 'NEWS_HAS_ERRORED':
      action.newsHasRerrored
    default:
      return state;
  }
}
