import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIOa2z4K_Cctge3puAfXKlvXvgJXp5g_g",
  authDomain: "my-own-project-abf5b.firebaseapp.com",
  projectId: "my-own-project-abf5b",
  storageBucket: "my-own-project-abf5b.appspot.com",
  messagingSenderId: "582039547549",
  appId: "1:582039547549:web:506b6949c8ae3d6c002e74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage();

// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: "image/jpeg",
};

const uploadFileFirebase = (file) => {
  return new Promise(function (resolve, reject) {
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        reject(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          resolve({ downloadURL, ref: "images/" + file.name });
        });
      }
    );
  });
};

const deleteFileFireBase = (imageRef) => {
  const desertRef = ref(storage, imageRef);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
      console.log("image's deleted")
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error)
    });

};

export { uploadFileFirebase, deleteFileFireBase };
