<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">API services that send emails to another email address at specified intervals or specific times each day as defined.</p>
  <p align="center">Created with Nest JS</p>
    <p align="center">
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
  
## Installation
1. ```$ yarn install ```
2. create ```.env``` file by following .env.example

```bash
#cron patterns
* * * * * *
| | | | | |
| | | | | day of week
| | | | months
| | | day of month
| | hours
| minutes
seconds (optional)
```
Some sample cron patterns are:
- ```* * * * * *```	every second
- ```45 * * * * *```	every minute, on the 45th second
- ```0 10 * * * *```	every hour, at the start of the 10th minute
- ```0 */30 9-17 * * *```	every 30 minutes between 9am and 5pm
- ```0 30 11 * * 1-5```	Monday to Friday at 11:30am

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

 **Please Note !** that using your Gmail password directly is not recommended for security reasons. It's a better practice to generate an app-specific password for your application to use. To generate an app-specific password, you can follow these steps:
1. Go to your Google Account settings: https://myaccount.google.com/
2. In the left navigation panel, click on "Security."
3. Under "Signing in to Google," click on "App passwords."
4. Sign in with your Google account password if prompted.
5. In the "App passwords" section, select "Mail" for the "Select app" dropdown and "Other (Custom name)" for the "Select device" dropdown.
6. Enter a custom name for your app (e.g., "NestJS Email Service").
7. Click the "Generate" button. Google will generate a 16-character app-specific password for you. Use this generated password as the pass value in your .env file

## License

Nest is [MIT licensed](LICENSE).
