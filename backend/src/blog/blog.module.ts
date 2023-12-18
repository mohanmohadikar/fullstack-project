import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import { Blog } from './blog.entity';
import { BlogService } from './blog.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
