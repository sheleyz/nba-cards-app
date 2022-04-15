import React from "react";
import { setSort } from "../../redux/reducers/setActions";
import { useDispatch, useSelector } from "react-redux";

function OptionItem(props) {
    const dispatch = useDispatch();
    const [clicked, setClicked] = React.useState(false);

    const sorted = useSelector((state) => state.sorted);
    const handleSort = (prop, value) => dispatch(setSort(prop, value));

    React.useEffect(() => {
        let check = false;
        for (let i in sorted) {
            if (sorted[i].toggle) {
                check = true;
            }
        }
        setClicked(check);
    }, [sorted]);

    return (
        <div
            className={sorted.team[props.type].value.includes(props.value) && sorted[props.type].toggle ? "item activeItem" : "item"}
            onClick={() => {
                setClicked(!clicked);
                handleSort(props.type, props.value);
            }}>
            {props.value}
        </div>
    );
}

export default OptionItem;
