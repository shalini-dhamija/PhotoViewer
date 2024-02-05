import './App.css'
import {PhotoViewer} from './PhotoViewer/PhotoViewer.tsx'
import {ImageSelector} from './PhotoViewer/ImageSelector.tsx'
import { useState } from 'react';


export function App() {
  const [imageURL, setImageURL] = useState('https://picsum.photos/id/600/1600/900.jpg');
     
  return (
    <div>      
        <PhotoViewer imageURL = {imageURL}/>
        <ImageSelector setImageURL = {setImageURL}/>
      </div>
  );
}
