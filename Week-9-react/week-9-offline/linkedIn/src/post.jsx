
export function PostComponent(props) {

    const postStyle = { maxWidth: 300, padding: 15, borderRadius: 10, borderWidth: 1, borderColor: "#e9e9e9", borderStyle: "solid"}

  return (
    <div>
      <div style={ postStyle }>
    <div style={ { display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>    
      <img style={ { width: 50, height: 50 } } src={props.imgSrc} alt="Chetan Kumar photo" />
      <div>    
        <div style={{ fontSize: 16, fontWeight: "bold"}}>{props.name}</div>
        <div style={{ fontSize: 14 }}>{props.subtitle}</div>
        { props.time !== undefined ? (<div style={{ fontSize: 12, fontWeight: "bold"}}>
          <span>{props.time}</span>
          <span><img style={{ width: 15, height: 10 }} src="https://banner2.cleanpng.com/20181130/vyj/kisspng-globe-computer-icons-vector-graphics-world-illustr-pgia-annual-congress-5c01e16b1d7524.1660412215436271151207.jpg" alt="" /></span>
        </div>): null}
      </div>
    </div>
    <div>{ props.content }</div>
    </div>
  </div>
  )
}