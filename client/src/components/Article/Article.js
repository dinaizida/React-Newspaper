import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Article.css";

const Article = props => (
    <div id={props.articleId} className="article-item col s12 l12">
        <div className="card article-card">
            <div className="card-content">
                <span className="card-title"><a href={props.articleUrl} target="_blank">{props.articleTitle}</a></span>
                <div className="row">
                    <div className="view col s12 l6">
                        <a href={props.articleUrl} target="_blank"><i className="material-icons tiny">open_in_new</i> View Article</a>
                    </div>
                    <div className="col s12 l6 text-right">
                        <small>Published: {moment(props.articleDate).format("MM/DD/YYYY")}</small>
                    </div>
                </div>
            </div>

            <div className="card-action">
                {props.saveArticle ?  <Link to="#" className="btn-unsave waves-effect waves-light btn btn-large pulse  deep-orange lighten-3" onClick={() => props.saveArticle(props.articleTitle, props.articleDate, props.articleUrl)}> <i className="material-icons tiny">bookmark</i> Save Article</Link> : null}


                {props.deleteArticle ?  <Link to="#" className="btn-unsave waves-effect waves-light btn btn-large pulse  deep-orange lighten-3" onClick={() => props.deleteArticle(props.articleId)}> Delete Article</Link> : null}
            </div>
        </div>
    </div>
);

export default Article;