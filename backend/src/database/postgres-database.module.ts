import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from 'src/blog/blog.entity';
import { CustomUser } from 'src/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'pass@123',
      database: 'fullstack_project_db',
      entities: [Blog, CustomUser],
      synchronize: true,
    }),
  ],
})
export class PGDatabaseModule {}
