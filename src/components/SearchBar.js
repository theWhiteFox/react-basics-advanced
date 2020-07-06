import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
 
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
           <label>Image search: <a href="https://unsplash.com/ ">Unsplash</a> <a href="https://github.com/theWhiteFox/react-basics-advanced">GitHub Repo</a></label>
            <input type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;
