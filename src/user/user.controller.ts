import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from './user.schema';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Post('add')
  createUser(@Body() body: UserDto): Promise<User> {
    console.log('request body', body);
    return this.userService.addUser(body);
  }
}
