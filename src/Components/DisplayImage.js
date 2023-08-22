import React from "react";

const DisplayImage=({search})=>{

    // console.log(search);
    
    return(
        <div className="displayImage">
            {
                search&&(search.map( (image) =>(
                    <img key={image.id}
                       src={image.urls.small}
                       alt={image.alt_description}
                    />
                )))
            }
        </div>
    )
}
export default DisplayImage;