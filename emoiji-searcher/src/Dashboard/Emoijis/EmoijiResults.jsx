import  { PureComponent } from "react";
import EmoijiResultRow from "./EmoijiResultRow"
import ClipboardJS  from "clipboard";

export default class EmoijiResults extends PureComponent{

    componentDidMount() {
        this.clipboard = new ClipboardJS(".copy-it")
    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

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