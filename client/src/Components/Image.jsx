import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const url ="http://localhost:1337/uploads"

function Image() {

    const [postImage, setPostImage]= useState({myFile:""})
    const [username, setUsername]= useState("") 
    const createPost = async (newImage, username)=>{
        try{
        await axios.post(url, newImage,username)
        }catch(error){
            console.log(error)
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        createPost(postImage, username)
        console.log("Uploaded")
    }
    const handleFileUpload = async(e)=>{
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPostImage({...postImage, myFile:base64})
    }

 
    return (
      <form onSubmit={handleSubmit}>
       
        <input type="file" name='myFile' label="Image" id="file-upload" accept='.jpeg, .png, .jpg' onChange={(e)=>handleFileUpload(e)} />
        <button type="submit">Upload Image</button>
      </form>

    );
  };
export default Image

function convertToBase64(file){
    return new Promise((resolve, reject)=>{
        const  fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        };
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}
