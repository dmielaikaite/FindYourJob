export function getAllNews(url){
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then((news) => dispatch(newsFetchDataSuccess(news)))
      .catch(() => dispatch(newsHasErrored(true)));
  };
}

export function newsFetchDataSuccess(news){
  return {
    type: 'NEWS_FETCH_DATA_SUCCESS',
    news
  };
}

export function newsHasErrored(bool){
  return {
    type: 'NEWS_HAS_ERRORED',
    newsHasRerrored: bool
  }
}

export function getAllTopics(url){
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then((topics) => dispatch(topicsFetchDataSuccess(topics)))
      .catch(() => dispatch(topicsHasErrored(true)));
  };
}

export function topicsFetchDataSuccess(topics){
  return{
    type: 'TOPICS_FETCH_DATA_SUCCESS',
    topics
  }
}

export function topicsHasErrored(bool){
  return{
    type: 'TOPICS_HAS_ERRORED',
    topicsHasErrored: bool
  }
}
