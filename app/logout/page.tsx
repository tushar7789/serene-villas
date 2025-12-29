import React from 'react'


import { auth, signOut } from "../../auth";
import { notFound } from "next/navigation";

const PageONE = async () => {
    const session = await auth();
    if (!session) return notFound();
    return (
        <form
            action={async () => {
                // "use server";
                await signOut();
            }}
        >
            <button type="submit">Log Out</button>
        </form>
    )
}

export default PageONE
