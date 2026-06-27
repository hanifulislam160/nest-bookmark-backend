// // src/app.controller.ts
// import { Controller, Get } from '@nestjs/common';
// import { PrismaService } from './prisma/prisma.service';

// @Controller('users')
// export class AppController {
//   constructor(private readonly prisma: PrismaService) {}

//   @Get()
//   async getUsers() {
//     return this.prisma.user.findMany();
//   }
// }
