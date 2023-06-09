import { Inject, Injectable } from '@nestjs/common';

import { IStorageProvider } from '../providers';
import { STORAGE_TOKEN } from '../storage.constants';

@Injectable()
export class StorageService {
  constructor(
    @Inject(STORAGE_TOKEN) private readonly storageProvider: IStorageProvider,
  ) {}

  getName(): string {
    return this.storageProvider.getName();
  }

  async upload(
    path: string,
    file: string,
    data: Buffer,
    bucket: string,
  ): Promise<void> {
    await this.storageProvider.upload(path, file, data, bucket);
  }

  async download(path: string, bucket: string): Promise<Buffer> {
    return await this.storageProvider.download(path, bucket);
  }
}

