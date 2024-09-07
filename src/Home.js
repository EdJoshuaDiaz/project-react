import React, { useState, useRef } from "react";

function Home(props) {

    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function Add(e) {
        e.preventDefault();

        if (result >= 1) {
            let addResult = (result) => result + Number(inputRef.current.value);
            setResult(addResult);
        } else {
           
           setResult((result) => result + 1);
        }
        
    }

    function Minus(e) {
        e.preventDefault();
        const minusResult = (result) => result - Number(inputRef.current.value);
        setResult(minusResult);
    }

    function Times(e) {
        e.preventDefault();
        const timesResult = (result) => result * Number(inputRef.current.value)
        setResult(timesResult)
    }

    function Divide(e) {
        e.preventDefault();
        const divideResult = (result) => result / Number(inputRef.current.value)
        setResult(divideResult);
    }

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = "";
    }

    function resetResult(e) {
        e.preventDefault();
        setResult(0);
    }

    const Row = ({children, spacing}) => {
        const childStyle = {
            marginLeft: `${spacing}px`,
            display: "inline-block",
        }

        return (
            <div className="Row">
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {
                        style : {
                            ...child.props.style,
                            ...(index > 0 ? childStyle:{display:"inline-block"})
                        }
                    });
                })}
            </div>
        )
    }

    return (
        <>
            <h1>{props.title}</h1>
            <form>
                <p className="result" ref={resultRef}>{result}</p>
                <input type="number" pattern="[0-9]" ref={inputRef} placeholder="Type a Number"/>
                <button onClick={Add}>Addition</button>
                <button onClick={Minus}>Subtraction</button>
                <button onClick={Times}>Multiply</button>
                <button onClick={Divide}>Division</button>
                <button onClick={resetInput}>Reset Input</button>
                <button onClick={resetResult}>Reset Result</button>
            </form>

            <Row spacing={30}>
                <p>Pizza</p>
                <p>2</p>
                <p>30$</p>
                <p>18:30</p>
                <p>John</p>
            </Row>
        </>
    );
}

export default Home;