import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';

@Injectable()
export class DailyTaskService {
  private readonly cronSchedule = process.env.CRON_SCHEDULE
    ? process.env.CRON_SCHEDULE
    : '00 00 00 * * *'; //default CRON_SCHEDULE | task run every day at 00:00.00 (everyday)

  constructor() {
    cron.schedule(this.cronSchedule, () => {
      this.scheduledSendMail();
    });
  }

  private async scheduledSendMail() {
    const dateNow = new Date();
    console.log('Daily task executed at ' + dateNow);
  }
}
