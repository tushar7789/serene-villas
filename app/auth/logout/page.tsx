import React from 'react'
import { auth, signOut } from "../../../auth";

const PageONE = async () => {
    // const session = await auth();
    // console.log("session: ", session);
    return (
        <form
            action={async () => {
                "use server"
                await signOut();
            }}
        >
            <button type="submit">Log Out</button>
        </form >
    )
}

export default PageONE
