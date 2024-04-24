import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null
    };
  }
}
