import { useState } from "react";
// import "./ListGroup.css";

function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    const [selectedIndex, setselectedIndex] = useState(-1);
    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "listg-group-item active"
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
