import React from "react";
import { setSort } from "../../redux/reducers/setActions";
import { useDispatch } from "react-redux";

function SortTag(props) {
    const dispatch = useDispatch();

    const handleSort = (prop, value) => {
        dispatch(setSort(prop, value));
    };

    const numberCheck = (value) => {
        if (value.includes("C")) {
            return <span>Center</span>;
        } else if (value.includes("F")) {
            return <span>Forward</span>;
        } else if (value.includes("G")) {
            return <span>Guard</span>;
        } else if (isNaN(value)) {
            return value.charAt(0).toUpperCase() + value.substring(1);
        } else {
            return value;
        }
    };

    return (
        <div className={"itm"} onClick={() => handleSort(props.prp, props.value)}>
            {props.prp === "set_name" ? props.value : numberCheck(props.value)} <button>X</button>
        </div>
    );
}

export default SortTag;
