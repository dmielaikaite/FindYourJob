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
