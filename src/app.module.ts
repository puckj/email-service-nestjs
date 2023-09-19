import { Module } from '@nestjs/common';
import { DailyTaskModule } from './daily-task/daily-task.module';

@Module({
  imports: [DailyTaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
