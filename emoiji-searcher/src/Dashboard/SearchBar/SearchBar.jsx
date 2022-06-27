import { PureComponent } from "react";
import "./SearchBar.css"

export default class SearchBar extends PureComponent {

    render(){
        return (
            <div className="search-input">
                <div>
                    <input className="input-text" placeholder="Search Emoiji"/>
                </div>
            </div>
        )
    }
}