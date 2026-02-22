import mongoose, {Schema} from "mongoose"

interface UserSchemaInterface {
    name?: string;
    email: string;
    hashedPassword?: string; 
}

const UserSchema : Schema = new Schema<UserSchemaInterface>({
    name : {
        type: String,
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword : {
        type: String,
    }
});

const Users = mongoose.models.Users || mongoose.model<UserSchemaInterface>('Users', UserSchema);

export default Users;