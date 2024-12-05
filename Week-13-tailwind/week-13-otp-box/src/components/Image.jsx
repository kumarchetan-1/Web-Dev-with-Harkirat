
export function Image({size, src, alt, cornerRadiusClass}) {
    let dimentions = { width: "auto", height: "auto" }
    if(size==="l"){ 
         dimentions = { width: "40", height: "40"}
    }
    if(size==="xl"){ 
         dimentions = { width: "100", height: "100"}
    }
    return <img className={cornerRadiusClass} width={dimentions.width} height={dimentions.height} src={src} alt={alt} />
}