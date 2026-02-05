import {prisma} from "../../lib/prisma"

export const userExsits = (email : string) => {
    const user = prisma.user.findUnique(
        {where: {email}}
    );

    if(!user) return false;
    
    return true;
}