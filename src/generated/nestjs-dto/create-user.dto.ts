





export class CreateUserDto {
  username: string;
email: string;
nik: string;
name: string;
phone?: string;
address: string;
birthDate: Date;
division: string;
position: string;
profilePic: string;
fileLocation: string;
role: string;
hashedPassword: string;
hashedRT?: string;
userCreated?: string;
userModified?: string;
}
