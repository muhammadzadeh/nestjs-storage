export type StorageOption =
  | LocalStorageOption
  | S3StorageOption
  | GcCloudStorageOption;

export type LocalStorageOption = {
  root: string;
};

export type S3StorageOption = {
  accessKeyId: string;
  endpoint: string;
  secretAccessKey: string;
  bucket: string;
  region: string;
};

export type GcCloudStorageOption = {
  keyFilename: string;
  bucket: string;
};
