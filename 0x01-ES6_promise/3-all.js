
import {uploadPhoto, createUser} from "./utils"

export default async function handleProfileSignup(){
    try {
        const [profile, user] = await Promise.all([uploadPhoto, createUser])
        const profileData = await profile();
        const userData = await user();
        console.log(`${profileData.body} ${userData.firstName} ${userData.lastName}`)
    } catch (error) {
        console.log("SIgnup system offline")
    }
}