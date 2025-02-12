import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "src/application/dto/create.user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository : UserRepository,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async createUser(createUserDto : CreateUserDto): Promise<User>{
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    }

    async updateUser(id: number, updateUserDto: Partial<CreateUserDto>) : Promise<User> {
        const user = await this.userRepository.findOne({where : {id} });
        if(!user){
            throw new Error("User not found");
        }
        Object.assign(user, updateUserDto);
        return this.userRepository.save(user);
    }

    async deleteUser(id: number): Promise<string> {
        const user = await this.userRepository.findOne({where : {id}});
        if(!user){
            throw new Error("User not found");
        }
        await this.userRepository.delete(id);
        return 'User deleted successfully';
    }
}