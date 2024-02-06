import './App.css'
import {PhotoViewer} from './PhotoViewer/PhotoViewer.tsx'
import {ImageSelector} from './PhotoViewer/ImageSelector.tsx'
import { useState } from 'react';


export function App() {
  const [imageURL, setImageURL] = useState('');
     
  return (
    <div>      
        <PhotoViewer imageURL = {imageURL}/>
        <ImageSelector setImageURL = {setImageURL}/>
      </div>
  );
}
