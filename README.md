<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">
    NestJS Storage module, work with famous object storage like S3, R2, Azure, Google Cloud
</p>

## Installation

```bash
$ npm i --save @muhammadzadeh/nestjs-storage
```

## How To
* select your prefered provider and provide its configs
* inject StorageService 
### Local Example

```typescript
// app.module.ts
import { Module } from '@nestjs/common'
import { StorageModule } from '@muhammadzadeh/nestjs-storage';

@Module({
  imports: [
    StorageModule.forRoot({
      provider: 'local',
      options: {
        root: 'ROOT_DIR',
      },
    }),
  ],
})
export class AppModule {}
```
### S3 Example

```typescript
// app.module.ts
import { Module } from '@nestjs/common'
import { StorageModule } from '@muhammadzadeh/nestjs-storage';

@Module({
  imports: [
    StorageModule.forRoot({
      provider: 's3',
      options: {
        accessKeyId: 'ACCESS_KEY_ID',
        secretAccessKey: 'SECRET_ACCESS_KEY',
        endpoint: 'S3_ENDPOINT',
        region: 'auto',
      },
    }),
  ],
})
export class AppModule {}
```

### R2 Example

```typescript
// app.module.ts
import { Module } from '@nestjs/common'
import { StorageModule } from '@muhammadzadeh/nestjs-storage';

@Module({
  imports: [
    StorageModule.forRoot({
      provider: 'r2',
      options: {
        accessKeyId: 'ACCESS_KEY_ID',
        secretAccessKey: 'SECRET_ACCESS_KEY',
        endpoint: 'CLOUDFLARE_R2_EXAMPLE',
        region: 'auto',
      },
    }),
  ],
})
export class AppModule {}
```
### Azure Example

```typescript
// app.module.ts
import { Module } from '@nestjs/common'
import { StorageModule } from '@muhammadzadeh/nestjs-storage';

@Module({
  imports: [
    StorageModule.forRoot({
      provider: 'azure',
      options: {
        connectionString: 'CONNECTION_STRING ',
      },
    }),
  ],
})
export class AppModule {}
```
### Google Cloud Example

```typescript
// app.module.ts
import { Module } from '@nestjs/common'
import { StorageModule } from '@muhammadzadeh/nestjs-storage';

@Module({
  imports: [
    StorageModule.forRoot({
      provider: 'gcs',
      options: {
        keyFilename: 'GOOGLE_KEY_FILE_NAME',
      },
    }),
  ],
})
export class AppModule {}
```
### StorageService

```typescript
import { Injectable } from '@nestjs/common';
import { StorageService } from "@muhammadzadeh/nestjs-storage";

@Injectable()
export class MyClass {
  constructor(private readonly storage: StorageService) {}
}

```
## Support

nestjs-storage is an MIT-licensed open source project. If this library is helpful, please click star to support it.

## License

nestjs-storage is MIT licensed.