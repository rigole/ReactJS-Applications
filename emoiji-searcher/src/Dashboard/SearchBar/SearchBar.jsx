import { PureComponent } from "react";
import "./SearchBar.css"

export default class SearchBar extends PureComponent {

    handleText = (event) => {
        this.props.handleChange(event)
    }

    render(){
        return (
            <div className="search-input">
                <div>
                    <input
                        className="input-text"
                        placeholder="Search Emoiji"
                        onChange={this.handleText}
                    />
                </div>
            </div>
        )
    }
}