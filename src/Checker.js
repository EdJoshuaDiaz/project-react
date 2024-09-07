import { useState, useEffect } from "react";
import "./App.css"

const boxStyle = {
    margin: "auto",
    width: "40%",
    border: "2px solid #cccccc",
    padding: "20px",
    fontSize: "24px",
}

const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({
            x:0,
            y:0,
        })
        useEffect(() => {
            const handleMousePositionChange = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                })
            }
            window.addEventListener("mousemove", handleMousePositionChange)

            return () => {
                window.removeEventListener("mousemove", handleMousePositionChange)
            }
        },[])

        return (
            <WrappedComponent {...props} mousePosition={mousePosition} />
        )
    }
}

const PanelMouseLogger = ({mousePosition}) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <div>
            <span>X: {mousePosition.x}</span>
            <span>Y: {mousePosition.y}</span>
        </div>
    )
}

const PointMouseLogger = ({mousePosition}) => {
    if (!mousePosition) {
        return null
    }
    return (
        <p>
            ({mousePosition.x} | {mousePosition.y})
        </p>
    )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

//RENDERING PROPS

const MousePosition = ({ render }) => {
    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0,
    });

    useEffect(() => {
        const handleMousePositionChange = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMousePositionChange);

        return () => {
            window.removeEventListener("mousemove", handleMousePositionChange);
        };
    }, []);

    return render({ mousePosition });
};

const NewPanelMouseLogger = () => {
    return (
        <div>
            <MousePosition 
                render={({ mousePosition }) => (
                    <div>
                        {`X value: ${mousePosition.x} | Y Value: ${mousePosition.y}`}
                    </div>
                )}
            />
        </div>
    );
};

const NewPointMouseLogger = () => {
    return (
        <MousePosition 
        render = {({mousePosition}) => {
            <p>
                {mousePosition.x} {mousePosition.y}
            </p>
        }}
    />
    )
}



function Checker() {
    return (
        <>
            <div style={boxStyle}>
                <h1>Mouse Position Checker</h1>
                <PanelMouseTracker/>
                <PointMouseTracker/>
            </div>
            <div>
                <h1>Mouse Position Using Render Props</h1>
                <NewPanelMouseLogger/>
                <NewPointMouseLogger/>
            </div>
        </>
    )
}

export default Checker;