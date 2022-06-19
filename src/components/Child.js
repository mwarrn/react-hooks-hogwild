import { React, useState } from "react";

function Child({ hog }) {
    const [isClick, setClick] = useState(false);

    return (
        <div className="ui eight wide column" onClick={() => setClick(!isClick)}>
            <div className="image">
                <img src={hog.image} alt={hog.name} />
            </div>
            <div className="content">
                <div className="content">
                    {hog.name}
                </div>
                {isClick ? (
                    <>
                        <div className="description">
                            Specialty: {hog.specialty}
                            <br />
                            Greased: {hog.greased ? "True" : "False"}
                            <br />
                            Weight: {hog.weight}
                            <br />
                            Highest Medal: {hog["highest medal achieved"]}
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default Child;
