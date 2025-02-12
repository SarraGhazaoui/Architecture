import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../domain/entities/user.entity";
import { UserController } from "src/application/controllers/user.controller";
import { UserService } from "../domain/services/user.service";
import { UserRepository } from "../domain/repositories/user.repository";
import exp from "constants";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
})
export class UserModule {}