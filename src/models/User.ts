import mongoose, {Schema, Document} from 'mongoose';

export interface IUser {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
  },
  {versionKey: false},
);

export default mongoose.model<IUserModel>('User', UserSchema);
