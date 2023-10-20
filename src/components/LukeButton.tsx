// import React from "react"; // it is imported by default

import { ReactNode } from "react";

interface Props {
    buttonText: string;

    onClickB: () => void;
}

const LukeButton = () => {
    //{ buttonText, onClickB }: Props) => {
    return (
        <button
        //     type="button"
        //     onClick={
        //         onClickB(textToShow);
        //     }}
        //     className="btn btn-primary"
        // >
        //     {buttonText}
        ></button>
    );
};

export default LukeButton;
