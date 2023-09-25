import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    // items = [];

    // if (items.length === 0) {
    //     return (
    //         <>
    //             <h1>List</h1>
    //             <p>No item found</p>
    //         </>
    //     );
    // }

    // this is just variable
    // const message = items.length == 0 ? <p>No item found</p> : null;

    // this is funcation:
    // const getMessage = () => {
    //     return items.length == 0 ? <p>No item found</p> : null;
    // };

    // let selectedIndex = 0;
    // Hook(state hook exactly)
    const [selectedIndex, setselectedIndex] = useState(-1);
    // arr[0]; // variable (selectedIndex)
    // arr[1]; // updater function

    // const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>List</h1>
            {/* {getMessage()} */ items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        //className="list-group-item active"
                        className={
                            selectedIndex === index
                                ? "listg-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        // onClick={() => console.log(item, index)}
                        // onClick={(event: MouseEvent) => console.log(event)}
                        //onClick={handleClick}
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
