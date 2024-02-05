import "./PhotoViewer.css";


export function PhotoViewer(props:{imageURL: string}) {    // declare and export new function called 'PhotoViewer'
    return (                
    <div>
        <h1>React Photo Viewer</h1>
        <div className="topImage">
            <img src={props.imageURL} alt={props.imageURL}/>
        </div>        
    </div>
    );
}
