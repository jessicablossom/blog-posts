import { useState, useCallback } from 'react';
import { storage } from '../firebase.js';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

import 'firebase/storage';

const useImageUpload = () => {
  const uploadImages = async (file) => {
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    const promise = new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          const returnUrl = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(returnUrl);
        }
      );
    });

    return promise;
  };

  return { uploadImages };
};

export default useImageUpload;
