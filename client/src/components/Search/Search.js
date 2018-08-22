import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import Card from "../Card";
import SearchForm from "../SearchForm";
import Article from "../Article";
import "./Search.css";

class Search extends Component {
    // sets the initial values
    state = {
        articles: [],
        topic: "",
        start_date: "",
        end_date: ""
    };

    // handles any changes to the input fields
    handleInputChange = event => {
        const { name, value } = event.target;
        // sets the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    // displays the search form
    searchForm = () => {
        return (
            <SearchForm
                topic={this.state.topic}
                startDate={this.state.start_date}
                endDate={this.state.end_date}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            />
        )
    }

    // handles the submission of the form
    handleFormSubmit = event => {
        event.preventDefault();

        // form fields
        const topic = this.state.topic;
        let startDate = this.state.start_date;
        let endDate = this.state.end_date;

        // API URL
        const apiKey = "8bcb3f14f7f041999adb67da1a2b0968";
        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${topic}`;

        if (!startDate) {
            alert("Please enter Start Date")
            }
            else{
            queryURL = `${queryURL}&begin_date=${startDate}`;
        }
        if (!endDate) {
            alert("Please enter End Date")
            }
            else{
            queryURL = `${queryURL}&end_date=${endDate}`;
        }
        console.log(`queryURL: ${queryURL}`);
        if(startDate && endDate ){
            // API get request
            axios.get(queryURL)
                .then(newspaper => {
                    console.log(newspaper.data.response.docs);
                    this.setState({ articles: newspaper.data.response.docs, topic: "", start_date: "", end_date: "" });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }    
    };

    // displays search results
    searchResults = () => {
        return (
            <div className="article-grid row">
                {this.state.articles.map(article => (
                    <Article
                        key={article._id}
                        articleId={article._id}
                        articleTitle={article.headline.main}
                        articleDate={article.pub_date}
                        articleUrl={article.web_url}
                        saveArticle={this.saveArticle}
                    />
                ))}
            </div>
        )
    }

    // saves an article
    saveArticle = (title, date, url) => {
        API.saveArticle({
            title: title,
            date: date,
            url: url,
            saved: true
        })
        .then(res => console.log(title, date, url))
        .catch(err => console.log(err))
    };

    render() {
        return (
            <div  >
                <Card cardTitle="Search for Articles" cardContent={this.searchForm()}
                />
                <div className ="cardDiv col s12 m10">
                { this.state.articles.length ? <Card cardTitle="Search Results" cardContent={this.searchResults()} /> : "" }
                </div>
            </div>
        );
    }
};

export default Search;