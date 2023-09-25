import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';
import formattedDate from '../helper/formattedDate'

@Injectable()
export class DailyTaskService {
  constructor(private readonly mailerService: MailerService) {
    cron.schedule(
      process.env.CRON_SCHEDULE ? process.env.CRON_SCHEDULE : '00 00 00 * * *', //default CRON_SCHEDULE | task run every day at 00:00.00 (everyday)
      () => {
        this.scheduledSendMail();
      },
      {
        scheduled: true,
        timezone: process.env.SERVER_TZ ? process.env.SERVER_TZ: 'Asia/Bangkok'
      }
    );
  }

  private async scheduledSendMail() {
    const emailMessage = {
        to: process.env.RECIPIENT_EMAIL,
        subject: process.env.SUBJECT_EMAIL,
        text: process.env.TEXT_EMAIL,
      };
    const utcDate = new Date();
    console.log('Daily task executed at ' + formattedDate(utcDate));
    try {
      const result = await this.mailerService.sendMail({
        ...emailMessage,
        // Additional email options if needed
      });
      console.log(result, ' Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
