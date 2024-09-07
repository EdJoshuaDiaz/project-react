import { useState } from "react";
import { useTheme } from "./ThemeContext";

function About(props) {
    const lisItems = props.desserts.filter(dessert => {
        return dessert.price > 30;
    }).sort((a,b) => {
        return a.price - b.price;
    }).map(dessert => {
        return <li className="item-text" key={dessert.id}>{dessert.title} - ${dessert.price}</li>
    })

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("")
    const [rate, setRate] = useState("0");
    const [comment, setComment] = useState("");
    const {theme} = useTheme();

    function formValidate (e) {
        e.preventDefault();
        alert("Form has been submitted!");
        setFname("");
        setLname("");
        setRate("10");
        setComment("");
    }

    function formCheck() {
        if (Number(rate) <= 5 && comment.length >= 10) {
            return true;
        } else if (Number(rate) > 5) {
            return true;
        }
    }

    return (
        <>
            <h1>{props.title}</h1>
            <ul className="item-list">
                {lisItems}
            </ul>
            <div className="form-wrapper">
                <form className="feedback-form" style={{backgroundColor: theme === "light" ? "#e9e9e9" : "#333333"}} onSubmit={formValidate}>
                    <h2>Feedback Form</h2>
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" value={fname} onChange={e => setFname(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="last-name">First Name</label>
                        <input type="text" id="last-name" value={lname} onChange={e => setLname(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="rate">Rate {rate}</label>
                        <input type="range" id="rate" min="0" max="10" value={rate} onChange={e => setRate(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="feedback">Feedback</label>
                        <textarea id="feedback" rows="3" value={comment} onChange={e => setComment(e.target.value)}/>
                    </div>
                    <button type="Submit" disabled={!formCheck()}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default About;