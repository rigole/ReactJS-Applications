import  { PureComponent } from "react";
import EmoijiResultRow from "./EmoijiResultRow"

export default class EmoijiResults extends PureComponent{
    render() {
        const {emojiData} = this.props;

        return(
            <div className="component-emoji-results">
                {
                    emojiData.map(emoji=> (
                        <EmoijiResultRow
                            key={emoji.title}
                            symbol={emoji.symbol}
                            title={emoji.title}
                        />
                    ))}
            </div>
        )
    }
}