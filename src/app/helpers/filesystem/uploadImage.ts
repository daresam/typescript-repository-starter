import cloudinaryV from 'cloudinary';

const cloudinary = cloudinaryV.v2;

export async function uploadImage(path: any, slug: string, folder: string) {
  console.log(path);
  
  const get = (name: any) => process.env[name];

  cloudinary.config({
    cloud_name: get('CLOUDINARY_CLOUD_NAME'),
    api_key: get('CLOUDINARY_API_KEY'),
    api_secret: get('CLOUDINARY_API_SECRET'),
  });

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      {
        public_id: slug,
        folder: folder,
        tags: folder,
      },
      (error, response: any) => {
        console.log(error);
        
        if (error) {
          reject(error);
        }
        resolve(response.secure_url);
      },
    );
  });
}
