import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async createBlog(title: string, content: string): Promise<Blog> {
    const poll = this.blogRepository.create({ title, content });
    return this.blogRepository.save(poll);
  }

  async getAllBlogs(): Promise<Blog[]> {
    return this.blogRepository.find();
  }
}
