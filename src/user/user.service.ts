import { Injectable, Req } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from "express";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entity/user.entity";

@Injectable()
export class UserService{
    //deals with entity
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
        ){}
        // closed the deals of entity
    get(): Promise<User[]>{
        return this.userRepository.find();
        // return {
        //     name: "phakiso" ,
        //     email: "account@account.com"
        // };
    }

    create( createUserDto: CreateUserDto ){

        return this.userRepository.save(createUserDto);
    }
    
    update( updateUserDto: UpdateUserDto , userId: number){

        return this.userRepository.update(userId,updateUserDto);
    }

    show( userId: number ){
        return this.userRepository.findOne({ where : { id: userId }});
    }
    
    //for auth 
    findByEmail(email: string){
        return this.userRepository.findOne({ where : { email } });
    }

    delete( userId: number ){
        return this.userRepository.delete(userId);
    }

}