import { LoginUserDto, RegisterUserDto } from "..";
import { UserEntity } from "../entities/user.entity";

//Crear una clase abstracta permitirá que no se pueda instanciar la clase sino que se deba heredar de ella.
export abstract class AuthDatasource {

    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;

    abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>;

}