import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';

@Injectable()
export class DailyTaskService {
  constructor() {
    // Schedule the task to run every day at 3:30 PM
    cron.schedule('16 15 * * *', () => {
      this.performDailyTask();
    });
  }

  private async performDailyTask() {
    // Your daily task logic here
    const dateNow = new Date();
    console.log('Daily task executed at ' + dateNow);
  }
}
