const MainForm = () => {
    return(
        <main>
            <section className="quiz quiz-small">
                <form action="">
                    <h2>Setup quiz</h2>
                    <div className="form-control">
                        <label htmlFor="amount">Number of Questions</label>
                        <input
                            type="number"
                            id="amount"
                            min={1}
                            max={50}
                            name="amount"
                            className="form-input"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="category">category</label>
                        <select name="category" id="category" className="form-input">
                            <option value="sports">Sports</option>
                            <option value="history">History</option>
                            <option value="politics">Politics</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="difficulty">Difficulty</label>
                        <select name="difficulty" id="difficulty" className="form-input">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <p className="error">
                        Can't generate questions please try again
                    </p>
                    <button type="submit" className="submit-btn">Start</button>
                </form>
            </section>
        </main>
    )
}
export default MainForm;