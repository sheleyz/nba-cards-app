import React from "react";
import { setSort } from "../../redux/reducers/setActions";
import { useDispatch } from "react-redux";

function SortTag(props) {
    const dispatch = useDispatch();

    let tagStyle = {
        padding: "10px",
        margin: "5px",
        backgroundColor: "#1d428a",
        borderRadius: "10px"
    };

    const handleSort = (prop, value) => dispatch(setSort(prop, value));

    return (
        <div className="tag" style={tagStyle}>
            {props.value} <button onClick={() => handleSort(props.option, props.value)} style={{ cursor: "pointer" }}>X</button>
        </div>
    );
}

export default SortTag;
