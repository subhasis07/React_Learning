import React from "react";
import { useParams } from "react-router-dom";

function User() {
    let {userId}= useParams();
    return(
        <div className="text-2xl text-center text-white p-3 bg-zinc-600">
            User:{userId}
        </div>
    )
}

export default User;