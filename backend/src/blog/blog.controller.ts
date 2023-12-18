import { Controller, Get, Post, Body } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('/blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  createBlog(@Body() { title, content }: { title: string; content: string }) {
    return this.blogService.createBlog(title, content);
  }

  @Get()
  getAllBlogs() {
    return this.blogService.getAllBlogs();
  }
}
