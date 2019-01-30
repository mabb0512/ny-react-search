import React, { Component } from "react";
import Saved from "./Saved";
import Search from "./Search";
import Results from "./Results";
import API from "../utils/API";

class Main extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
  };

  componentDidMount() {
    this.getArticlesDb()
  }

  // get all articles from the db
  getArticlesDb = () => {
    API.getArticle()
      .then((res) => {
        this.setState(
          { saved: res.data }
        );
      });
  }

  renderArticles = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        saveButton={this.saveButton}
        getArticlesDb={this.getArticlesDb}
      />
    ));
  }

  renderSaved = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        date={save.date}
        url={save.url}
        deleteButton={this.deleteButton}
        getArticlesDb={this.getArticlesDb}
      />
    ));
  }

  topicChange = (event) => {
    this.setState(
      { topic: event.target.value }
    );
  }

  startYearChange = (event) => {
    this.setState(
      { startYear: event.target.value }
    );
  }

  endYearChange = (event) => {
    this.setState(
      { endYear: event.target.value }
    );
  }

  formSubmit = (event) => {
    event.preventDefault();
    API.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then((res) => {
        this.setState({ articles: res.data.response.docs });
      });
  }

  saveButton = (id) => {
    const searchArticleById = this.state.articles.find((res) => res._id === id);
    const newArticle = {
      title: searchArticleById.headline.main, 
      date: searchArticleById.pub_date, 
      url: searchArticleById.web_url
    };
    API.saveArticle(newArticle)
    .then(this.getArticlesDb()).then(this.renderArticles());
  }

  // When delete article button is clicked, remove article from db
  deleteButton = (id) => {
    API.deleteArticle(id)
      .then(this.getArticlesDb()).then(this.renderArticles());
  }

  render() {
    return <div className="container">
          <div className="jumbotron">
            <h1 className="text-center">
              <strong>New York Times Article Scrubber</strong>
            </h1>
            <h2 className="text-center">
              Search and save for later
            </h2>
          </div>
          <Search topicChange={this.topicChange} startYearChange={this.startYearChange} endYearChange={this.endYearChange} formSubmit={this.formSubmit} renderArticles={this.renderArticles} />
            <div className="row">
              <div className="col-12">
                  <h3><strong>Saved Articles</strong></h3>
                  <ul className="list-group">
                    <div className="col-12">{this.renderSaved()}</div>
                  </ul>
              </div>
            </div>
        </div>
  }
}

export default Main;
