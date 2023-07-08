import React, { Component, Fragment } from "react";
import "./AutoComplete.css";

class MultiAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      selectedTags: []
    };
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput
    });
  };

  onClick = e => {
    const { selectedTags, filteredSuggestions } = this.state;
    const clickedTag = e.currentTarget.innerText;

    if (!selectedTags.includes(clickedTag)) {
      const updatedTags = [...selectedTags, clickedTag];

      this.setState({
        activeSuggestion: 0,
        filteredSuggestions: filteredSuggestions,
        showSuggestions: false,
        userInput: "",
        selectedTags: updatedTags
      });
    }
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions, selectedTags } = this.state;

    if (e.keyCode === 13) {
      if (filteredSuggestions.length > 0) {
        const clickedTag = filteredSuggestions[activeSuggestion];
        if (!selectedTags.includes(clickedTag)) {
          const updatedTags = [...selectedTags, clickedTag];

          this.setState({
            activeSuggestion: 0,
            filteredSuggestions: filteredSuggestions,
            showSuggestions: false,
            userInput: "",
            selectedTags: updatedTags
          });
        }
      }
    } else if (e.keyCode === 38) {
      e.preventDefault();
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      e.preventDefault();
      if (activeSuggestion + 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  removeTag = tag => {
    const { selectedTags } = this.state;
    const updatedTags = selectedTags.filter(item => item !== tag);
    this.setState({ selectedTags: updatedTags });
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      removeTag,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
        selectedTags
      }
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }
              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions available.</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <div className="tags">
          {selectedTags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
              <button
                className="tag-remove"
                onClick={() => removeTag(tag)}
              >
                &#x2715;
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default MultiAutocomplete;
