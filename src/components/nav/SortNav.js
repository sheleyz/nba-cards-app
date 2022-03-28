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

        for (let p in sorted) {
            if (sorted[p].toggle) {
                check = true;
                for (let x = 0; x < sorted[p].value.length; x++) {
                    let obj = {
                        prop: p,
                        value: "",
                    };
                    obj.value = sorted[p].value[x];
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
            backgroundColor: "orange",
            position: "fixed",
            display: "flex",
            flexWrap: "wrap"
        };
    } else {
        shower = {
            top: "-60px",
            backgroundColor: "orange"
        };
    }

    let tagEles = tags.map((st, idx) => (
        <SortTag key={idx} value={st.value} prp={st.prop} />
    ));

    return (
        <div className={"sortNav"} style={shower}>
            {tagEles}
        </div>
    );
}

export default SortNav;
