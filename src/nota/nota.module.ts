import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Registro, RegistroSchema } from 'src/registro/schemas/registro.schema';
import { NotaController } from './nota.controller';
import { NotaService } from './nota.service';
import { Nota, NotaSchema } from './schemas/nota.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Nota.name, schema: NotaSchema},
    {name: Registro.name, schema: RegistroSchema}]),
  ],
  controllers: [NotaController],
  providers: [NotaService],
  exports: [NotaService]
})
export class NotaModule {}
