# registro_notas_crud
Repositorio para el registros de notas del sistema de Gestión Académica (SGA)

API CRUD desarrollada en NestJS para la gestión de base de datos no relacional (MongoDB). 

# Especificaciones Técnicas

## Tecnologías Implementadas y Versiones

* [NestJS](https://github.com/nestjs/nest)
* [MongoDB](https://github.com/mongodb/mongo)

**Entorno Local:** NodeJS Version: v17.3.0 | NPM Version: 8.4.1 | Nest CLI Version: 8.2.0 | MongoDB version: v5.0.6

## Variables de Entorno

```shell
USER: process.env.REGISTRO_NOTAS_CRUD_USER,
PASS: process.env.REGISTRO_NOTAS_CRUD_PASS,
HOST: process.env.REGISTRO_NOTAS_CRUD_HOST,
PORT: process.env.REGISTRO_NOTAS_CRUD_PORT,
DB: process.env.REGISTRO_NOTAS_CRUD_DB,
HTTP_PORT: process.env.REGISTRO_NOTAS_CRUD_HTTP_PORT,
AUTH_DB: process.env.REGISTRO_NOTAS_CRUD_AUTH_DB 
```
**Nota:** Las variables se pueden encontrar en el fichero _src/config/configuration.ts_ y están identificadas con **REGISTRO_NOTAS_CRUD_**

## Ejecución del Proyecto

```shell
#1. Clonar el repositorio
git clone git@github.com:udistrital/registro_notas_crud.git #Opcion 1: Via SSH
git clone https://github.com/udistrital/registro_notas_crud.git #Opcion 2: Via HTTPS

#2. Moverse a la carpeta del repositorio
cd registro_notas_crud

#3. Moverse a la rama **develop**
git pull origin develop && git checkout develop

#4. Instalar dependencias
npm install
# Si no se instalan en su totalidad, ejecutar:
npm install --save @nestjs/mongoose mongoose
npm install --save @nestjs/swagger swagger-ui-express

#5. Alimentar todas las variables de entorno que utiliza el proyecto.
REGISTRO_NOTAS_CRUD_HTTP_PORT=3000 ...
```

## Ejecución Pruebas

Pruebas unitarias

```shell
# En proceso...
```

# Estado CI

| Develop | Relese 0.0.1 | Master |
| -- | -- | -- |
| [![Build Status]()]() | [![Build Status]()]() | [![Build Status]()]() |

# Modelo de Datos

![Modelo de datos Registro notas](/database/registro_notas_final.png)

# Licencia

This file is part of registro_notas_crud.

registro_notas_crud is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

registro_notas_crud is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with novedades_crud. If not, see https://www.gnu.org/licenses/.
