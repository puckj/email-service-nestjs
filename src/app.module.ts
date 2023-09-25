import { Module } from '@nestjs/common';
import { DailyTaskModule } from './daily-task/daily-task.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.SENDER_TRANSPORT_HOST,
        port: process.env.SENDER_TRANSPORT_PORT,
        secure: false,
        auth: {
          user: process.env.SENDER_TRANSPORT_EMAIL,
          pass: process.env.SENDER_TRANSPORT_PASSWORD,
        },
      },
    }),
    DailyTaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
