import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
// why added manually
import { AuthGuard } from '@nestjs/passport';



@Controller('auth')
export class AuthController { 
   constructor(private authService : AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req: any){
       
        return this.authService.login(req.user);
    }
}
