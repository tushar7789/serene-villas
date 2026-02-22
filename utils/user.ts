import Users from "../models/users";

const createNewUser = async (user : any) => {     // eslint-disable-line @typescript-eslint/no-explicit-any
    const res = await Users.find({email : user.email});

    if(!res){
        const newUser = await Users.create({
            name : user.name,
            email : user.email,
        });

        return newUser;
    }

    return null;
} 

export default createNewUser;