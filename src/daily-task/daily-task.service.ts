import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';

@Injectable()
export class DailyTaskService {
  constructor(private readonly mailerService: MailerService) {
    cron.schedule(
      process.env.CRON_SCHEDULE ? process.env.CRON_SCHEDULE : '00 00 00 * * *', //default CRON_SCHEDULE | task run every day at 00:00.00 (everyday)
      () => {
        this.scheduledSendMail();
      },
    );
  }

  private async scheduledSendMail() {
    console.log('Daily task executed at ' + new Date());

    const emailMessage = {
      to: process.env.RECIPIENT_EMAIL,
      subject: process.env.SUBJECT_EMAIL,
      text: process.env.TEXT_EMAIL,
    };
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
