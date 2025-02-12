import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { User } from "src/core/domain/entities/user.entity";
import { UserService } from "src/core/domain/services/user.service";
import { CreateUserDto } from "../dto/create.user.dto";


@Controller('users')
export class UserController {
    constructor(
        private readonly userService : UserService
    ){}

    @Get()
    async findAll() : Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    async createUser(
        @Body() createUserDto : CreateUserDto
    ) : Promise<User> {
        return this.userService.createUser(createUserDto);
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id : number,
        @Body() updateUserDto : Partial<CreateUserDto>
    ): Promise<User> {
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:number): Promise<string> {
        return this.userService.deleteUser(id);
    }
}