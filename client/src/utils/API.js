import axios from "axios";

export default {

  searchArticles: function(topic, startYear, endYear) {
    const authKey = "Jk9yCXj3jldkoohF38V13hiSG9FOEbLR";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + topic + "&begin_date=" + startYear + "&end_date=" + endYear;
    return axios.get(queryURL);
  },

  //get all articles from db
  getArticle: function() {
    return axios.get('/api/articles');
  },
  // Save new article to db
  saveArticle: function(articleData) {
    return axios.post('/api/articles', articleData);
  },
  // Delete article from db
  deleteArticle: function(id) {
    return axios.delete('/api/articles/' + id);
  }
};
