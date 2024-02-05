
const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }

    return urls;
}

export function ImageSelector(props:{setImageURL: React.Dispatch<React.SetStateAction<string>>}){
    const urls = getImageUrls();

    function handleClick(url: React.SetStateAction<string>){
        props.setImageURL(url);
      } 
    
    return (                
        <div>
            <h2>Select Your Photo</h2>
            <div className="gridContainer">
            {urls.map(url =>(
                <div className="gridItem"><img src={url} alt={url} className="thumbNailImage" onClick={() => handleClick(url)}/>
                </div>                
            ))}                    
            </div>
        </div>
        );
}
//export const imageUrls = getImageUrls();