import React, {PureComponent} from "react"
import Header from "./Dashboard/Header/Header"
import SearchBar from "./Dashboard/SearchBar/SearchBar"
import Filter from "./Dashboard/Emoijis/Filter"

export default class App extends PureComponent{

    state={
        filteredEmoijis: Filter("", 20)
    };

    render(){
        return(

            <div>
                <Header/>
                <SearchBar/>
            </div>
        )
    }

}