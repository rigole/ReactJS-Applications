import React, {PureComponent} from "react"
import Header from "./Dashboard/Header/Header"
import SearchBar from "./Dashboard/SearchBar/SearchBar"
import Filter from "./Dashboard/Emoijis/Filter"
import EmoijiResults from "./Dashboard/Emoijis/EmoijiResults"

export default class App extends PureComponent{

    state= {
        filteredEmoijis: Filter("", 20)
    };

    handleChange = (event) => {
        this.setState({
            filteredEmoijis: Filter(event.target.value, 15)
        })

    }


    render(){
        return(

            <div>
                <Header/>
                <SearchBar handleChange={this.handleChange}/>
                <EmoijiResults emojiData={this.state.filteredEmoijis}/>
            </div>
        )
    }

}