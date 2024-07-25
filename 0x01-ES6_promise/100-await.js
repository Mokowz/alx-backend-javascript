import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoRes = await uploadPhoto();
    const userRes = await createUser();
    return {
      photo: photoRes,
      user: userRes,
    };
  } catch
  (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
