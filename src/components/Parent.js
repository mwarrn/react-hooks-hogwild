import React from "react";
import Child from "./Child";

function Parent({ hogs }) {
    return (
        <div className="ui grid container">
            {hogs.map((hog) =>
                <Child key={hog.name} hog={hog}/>
            )}
        </div>
    )

}

export default Parent;
