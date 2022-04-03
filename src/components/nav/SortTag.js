import React from "react";
import { setSort } from "../../redux/reducers/setActions";
import { useDispatch } from "react-redux";

function SortTag(props) {
    const dispatch = useDispatch();

    const handleSort = (prop, value) => dispatch(setSort(prop, value));

    return (
        <div className={"itm"} onClick={() => handleSort(props.prp, props.value)}>
            {props.value} <button>X</button>
        </div>
    );
}

export default SortTag;
