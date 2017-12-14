import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <section className="todoapp">
        <div>
            <header className="header">
                <h1>todos</h1>
                {/*TODO create todo input*/}
            </header>
            <section className="main">
                {/*TODO toggle all todos*/}
                {/*TODO todo list*/}
            </section>
            <footer className="footer">
                {/*TODO todo count*/}
                {/*TODO todo filters*/}
                {/*TODO clear complete todos*/}
            </footer>
        </div>
    </section>,
    document.getElementById("todoApp")
);