import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { PGDatabaseModule } from './database/postgres-database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BlogModule, PGDatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
