import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotaController } from './nota.controller';
import { NotaService } from './nota.service';
import { Nota, NotaSchema } from './schemas/nota.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Nota.name, schema: NotaSchema}])
  ],
  controllers: [NotaController],
  providers: [NotaService],
  exports: [NotaService]
})
export class NotaModule {}
