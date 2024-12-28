// import APP_HOST from "../configs/envVariables";
import APP_HOST from "../config/envVariables";
//auth routes : 
export const registerRoute = `${APP_HOST}/api/auth/register`
export const loginRoute = `${APP_HOST}/api/auth/login`
export const logoutRoute = `${APP_HOST}/api/auth/logout`;
export const setAvatarRoute = `${APP_HOST}/api/auth/setavatar`;

export const allUsersRoute = `${APP_HOST}/api/auth/allusers`

//message routes :
export const sendMessageRoute = `${APP_HOST}/api/messages/add`
export const getMessageRoute = `${APP_HOST}/api/messages/getAllHistory`

//cloud routes : 
export const uploadMedia = `${APP_HOST}/api/cloud/upload`
