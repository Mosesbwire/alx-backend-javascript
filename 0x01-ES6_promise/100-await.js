import {uploadPhoto, createUser} from "./utils"

export default async function asyncUploadUser(){
    const data = {
        photo: null,
        user: null
    };
    try {
        const profileData = await uploadPhoto();
        const userData = await createUser();
        data.photo = profileData;
        data.user = userData;
    } catch (error) {
        console.log(error);
    }

    return data;
}