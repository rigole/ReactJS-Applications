import { PureComponent } from "react"
import "./EmoijiResultRow.css"

export default class EmoijiResultRow extends PureComponent{

    render(){
        const { title, symbol } = this.props;
        const codePointHex = symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;


        return(
            <div className="component-emoji-result-row">
                <img src={src} alt={title}/>
                <span className="title">{title}</span>
                <span className="info">Click to copy</span>
            </div>
        )

    }
}