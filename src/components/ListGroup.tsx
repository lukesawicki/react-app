import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "./ListGroup.css";

// we will pass data to parametrise few things:
// {items: [], heading: string}

interface Props {
    items: string[];
    heading: string;
}

function ListGroup({ items, heading }: Props) {
    const [selectedIndex, setselectedIndex] = useState(-1);
    // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setselectedIndex(index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
