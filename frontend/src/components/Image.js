import React, { useState, useEffect } from 'react'
import { storage } from './Firebase';
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import "./image.css"
import {v4} from "uuid";
import Nav from "./Nav";
import Footer from './Footer';
const Image = () => {

    const [image, setImage] = useState(null);
    const [imageList, setImageList] = useState([])

    const imageListRef = ref(storage, 'image/')

    const HandleClick = () => {
        if(image == null) return;
        const imageRef = ref(storage, `image/${image.name + v4()} `)
        uploadBytes(imageRef, image).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImageList((prev) => [...prev, url]);
          });
        });
        alert("Image Uploaded")
    };

    useEffect(() => {
      listAll(imageListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [...prev, url]);
          });
        });
      });
    }, []);

  return (
    <>
    <Nav/>
    <div className="image-upload">
        {/* <input type="text" value={tittle} onChange={HandleChange} placeholder='Enter Tittle Here' className="input-image" /> */}
        <input type="file" onChange={(e) => {setImage(e.target.files[0])}} />
        <button onClick={HandleClick} className='upload-btn'>Upload</button>
        <h3 className="image-list">
          List Of Images :
        </h3>
        {imageList.map((url) => {
          return <img src={url} alt='error' />
        })}
    </div>
    <Footer/>
    </>
  )
}

export default Image