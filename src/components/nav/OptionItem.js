import React from "react";
import { setSort } from "../../redux/reducers/setActions";
import { useDispatch } from "react-redux";

function OptionItem(props) {
    const dispatch = useDispatch();

    const handleSort = (prop, value) => dispatch(setSort(prop, value));

    return (
        <div className="item" onClick={() => handleSort(props.type, props.value)}>
            {props.value}
        </div>
    );
}

export default OptionItem;
