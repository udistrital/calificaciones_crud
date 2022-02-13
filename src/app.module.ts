import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistroModule } from './registro/registro.module';
import { NotaModule } from './nota/nota.module';
import { environment } from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@`+
    `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`, {
      //useFindAndModify: false
    }),
    RegistroModule,
    NotaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
