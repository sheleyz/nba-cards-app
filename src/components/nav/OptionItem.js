import React from "react";
import { setSort } from "../../redux/reducers/setActions";
import { useDispatch } from "react-redux";

function OptionItem(props) {
    const dispatch = useDispatch();
    // const [clicked, setClicked] = React.useState(false);

    const handleSort = (prop, value) => dispatch(setSort(prop, value));

    // const sorted = useSelector((state) => state.sorted);

    // React.useEffect(() => {
    //     let check = false;

    //     for (let i in sorted) {
    //         if (sorted[i].toggle) {
    //             check = true;
    //             for (let x = 0; x < sorted[i].value.length; x++) {
    //                 let obj = {
    //                     option: i,
    //                     value: ""
    //                 };
    //                 obj.value = sorted[i].value[x];
    //             }
    //         }
    //     }
    //     setClicked(check);
    // }, [sorted]);

    // let itemStyle;

    // if (clicked) {
    //     itemStyle = {
    //         color: "#78A5FF"
    //     };
    // } else {
    //     itemStyle = {
    //         color: "white"
    //     };
    // }

    return (
        <div
            className="item"
            // style={itemStyle}
            onClick={() => {
                // setClicked(!clicked);
                handleSort(props.type, props.value);
            }}>
            {props.value}
        </div>
    );
}

export default OptionItem;
