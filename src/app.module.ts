import { Module } from '@nestjs/common';
import { DailyTaskModule } from './daily-task/daily-task.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DailyTaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
