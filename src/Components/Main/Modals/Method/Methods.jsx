import React from "react";
import Method1 from "./Methodcompo/Method1";
import Method2 from "./Methodcompo/Method2";
import Method3 from "./Methodcompo/Method3";
import Method4 from "./Methodcompo/Method4";
import Method5 from "./Methodcompo/Method5";
import Method6 from "./Methodcompo/Method6";

export default function Methods() {
    return (
        <>
            <div className="home-modals healthcare-methods">
                <Method1 />
                <Method2 />
                <Method3 />

                <Method4 />
                <Method5 />
                <Method6 />
            </div>
        </>
    )
}