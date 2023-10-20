import Alert from "./components/Alert";
import LukeButton from "./components/LukeButton";

function App() {
    const doSomething = () => {
        console.log("something");
    };
    return (
        <div>
            <Alert>
                Hello <span>World</span>
            </Alert>
            {/* <LukeButton buttonText="Oskar" onClickB={doSomething()} /> */}
        </div>
    );
}

export default App;

// const handleSelectItem = (item: string) => {
//     console.log(item);
// };

// return (
//     <div>
//         <ListGroup
//             items={items}
//             heading="Cities"
//             onSelectItem={handleSelectItem}
//         />
// </div>
