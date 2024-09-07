import "./App.css";
import { useState, useEffect } from "react"

const DataFetcher = ({render, url}) => {
    const [data, setData] = useState([]);

    useEffect (() => {
        if (url.includes("desserts")) {
            setData(["cake", "ice cream", "pie", "brownies", "Halo-halo"]);
        } else {
            setData(["water", "soda", "juice", "buko"]);
        }
    },[])

    return render(data);
}

const DessertCount = () => {
    return (
        <DataFetcher
            url="https://littlelemon/desserts"
            render={(data) => <p>{data.length} desserts</p>}
        />
    )
}

const DrinksCount = () => {
    return (
        <DataFetcher
            url="https://littlelemon/drinks"
            render={(data) => <p>{data.length} drinks</p>}
        />
    )
}

function RenderProps () {
    return (
        <>
            <h1>test</h1>
            <DessertCount/>
            <DrinksCount/>
        </>
    )
    
}

export default RenderProps;