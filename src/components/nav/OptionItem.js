import React from "react";
import { setSort } from "../../redux/reducers/setActions";
import { useDispatch } from "react-redux";

function OptionItem(props) {
    const dispatch = useDispatch();

    const handleSort = (prop, value) => {
        dispatch(setSort(prop, value));
    };

    const numberCheck = () => {
        if (props.value === "C") {
            return <span>Center</span>;
        } else if (props.value === "PF") {
            return <span>Power Forward</span>;
        } else if (props.value === "SF") {
            return <span>Small Forward</span>;
        } else if (props.value === "PG") {
            return <span>Point Guard</span>;
        } else if (props.value === "SG") {
            return <span>Shooting Guard</span>;
        } else if (isNaN(props.value)) {
            return props.value.charAt(0).toUpperCase() + props.value.substring(1);
        } else {
            return props.value;
        }
    };

    return (
        <div
            className={"item"}
            onClick={() => handleSort(props.type, props.value)}>
            {numberCheck()}
        </div>
    );
}

export default OptionItem;
