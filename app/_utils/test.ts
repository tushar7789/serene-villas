import { prisma } from "../../lib/prisma"

const func = async (user : any) =>{
     const existingUser = await prisma.user.findUnique({
        where: { email: user?.email }
    })
    
    if (existingUser) {
        // Update existing user
        await prisma.user.update({
            where: { id: existingUser.id },
            data: { 
                email: user?.email, 
                name: user?.name 
            }
        })
    } else {
        // Create new user
        await prisma.user.create({ 
            data: { 
                email: user?.email, 
                name: user?.name 
            }
        })
    }
}

export default func;