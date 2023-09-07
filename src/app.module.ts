import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivitiesModule } from './activities/activities.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ActivitiesModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:ZE6NJJRCYH5MsXLX@cluster0.ppyhv0e.mongodb.net/naboo',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
