import {PureComponent} from "react";
import "./Header.css"

export default  class Header extends PureComponent {

    render(){
        return(
            <header>
                <img
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
                    alt=""
                    height="32"
                    width="32"
                />
                Emoji Search
                <img
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
                    alt=""
                    height="32"
                    width="32"
                />
            </header>
        )
    }

}