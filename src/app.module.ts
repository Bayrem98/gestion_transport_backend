import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoyantModule } from './voyant/voyant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(`${process.env.MONGODB_URI}`),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.gjbdf3j.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
    VoyantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
