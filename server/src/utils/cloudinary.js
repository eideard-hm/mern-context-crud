import { v2 as cloudinary } from 'cloudinary'
import { API_KEY, API_SECRET, CLOUD_NAME } from '../config.js'

// config for upload files
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
})

// upload files at cloudinary service

export const uploadFilesCloudinary = async filePath => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'posts'
  })
}

// delete files from cloudinary

export const deleteFileCloudinary = async publicId => {
  cloudinary.uploader.destroy(publicId);
}
