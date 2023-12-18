import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomUser } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(CustomUser)
    private readonly userRepository: Repository<CustomUser>,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.getUserByEmail(email);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async getAllUsers(): Promise<CustomUser[]> {
    return this.userRepository.find();
  }

  async getUserByEmail(email: string): Promise<CustomUser> {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundException(`User with email: ${email} does not exist`);
    }

    return user;
  }

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<CustomUser> {
    const blog = this.userRepository.create({ name, email, password });
    return this.userRepository.save(blog);
  }
}
