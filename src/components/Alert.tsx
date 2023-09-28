// import React from "react"; // it is imported by default

interface Props {
    text: string;
}

const Alert = ({ text }: Props) => {
    return <div className="alert alert-primary">{text}</div>;
};

export default Alert;
