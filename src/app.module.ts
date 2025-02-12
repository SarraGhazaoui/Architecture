import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './core/domain/entities/user.entity';
import { UserModule } from './core/modules/user.module';
import { UserController } from './application/controllers/user.controller';
import { UserService } from './core/domain/services/user.service';
import { UserRepository } from './core/domain/repositories/user.repository';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: 'sarra', 
      database: 'test', 
      entities: [User],
      synchronize: true, // generates tables automatically (entities)
    }),
    UserModule
  ],
  controllers: [UserController],
  providers : [
    UserService,
    UserRepository,
  ],
  exports : [UserRepository],
})
export class AppModule {}