import React from "react";

const SearchForm = props => (
    <form>
        <div className="row ">
            <div className="input-field col m4 s10 ">
                <input id="topic" name="topic" type="text"   value={props.topic} onChange={props.handleInputChange} required />
                <label htmlFor="topic">Topic</label>
            </div>
            <div className="input-field col m4 s10">
                <input id="start_date" name="start_date" type="text"  value={props.startDate} onChange={props.handleInputChange} required />
                <label htmlFor="start_date">Start Date(YYYYMMDD)</label>
            </div>
            <div className="input-field col m4 s10">
                <input id="end_date" name="end_date" type="text"  value={props.endDate} onChange={props.handleInputChange} required />
                <label htmlFor="end_date">End Date(YYYYMMDD)</label>
            </div>
        </div>
        <button type="submit" className="waves-effect waves-light btn btn-large pulse  deep-orange accent-2" onClick={props.handleFormSubmit}><i className="material-icons left tiny">search</i> Search</button>
    </form>
)
export default SearchForm;