import { storage } from '../firebase.js';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const useImageUpload = () => {
	const uploadImages = async (file) => {
		if (!file) {
			throw new Error('No file selected for upload');
		}

		const storageRef = ref(storage, `files/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		const promise = new Promise((resolve, reject) => {
			uploadTask.on(
				'state_changed',
				(snapshot) => {},
				(error) => {
					reject(error);
				},
				async () => {
					try {
						const returnUrl = await getDownloadURL(uploadTask.snapshot.ref);
						resolve(returnUrl);
					} catch (err) {
						reject(err);
					}
				}
			);
		});

		return promise;
	};

	return { uploadImages };
};

export default useImageUpload;
