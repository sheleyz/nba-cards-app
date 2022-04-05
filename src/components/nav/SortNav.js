import React from "react";
import SortTag from "./SortTag";
import { useSelector } from "react-redux";

function SortNav() {
    const [show, updateShow] = React.useState(false);
    const [tags, updateTags] = React.useState([]);
    const sorted = useSelector((state) => state.sorted);

    React.useEffect(() => {
        let check = false;
        let tagArray = [];

        for (let i in sorted) {
            if (sorted[i].toggle) {
                check = true;
                for (let x = 0; x < sorted[i].value.length; x++) {
                    let obj = {
                        option: i,
                        value: "",
                    };
                    obj.value = sorted[i].value[x];
                    tagArray.push(obj);
                }
            }
        }
        updateShow(check);
        updateTags(tagArray);
    }, [sorted]);

    let shower;

    if (show) {
        shower = {
            top: "60px",
            color: "white",
            backgroundColor: "grey",
            position: "fixed",
            display: "flex",
            flexWrap: "wrap"
        };
    } else {
        shower = {
            display: "none"
        };
    }

    let tagEles = tags.map((item, index) => (
        <SortTag key={index} value={item.value} option={item.option} />
    ));

    return (
        <div className="sortNav" style={shower}>
            {tagEles}
        </div>
    );
}

export default SortNav;
