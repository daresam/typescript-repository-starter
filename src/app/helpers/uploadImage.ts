import cloudinary from 'cloudinary';

export async function uploadImage(path: any, slug: string, folder: string) {
  const get = (name: string) => {
      return process.env[name];
  };

  cloudinary.v2.config({
    cloud_name: get('CLOUDINARY_CLOUD_NAME'),
    api_key: get('CLOUDINARY_API_KEY'),
    api_secret: get('CLOUDINARY_API_SECRET'),
  });

  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      path,
      {
        public_id: slug,
        folder: folder,
        tags: folder,
      },
      (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response);
      },
    );
  });
}
