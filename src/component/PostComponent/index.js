function PostComp(prop) {
    return <div >
        <h2 style={{marginLeft:8}}> brand: {prop.brand}</h2>
        <h4 style={{paddingTop :15 , marginTop: 15 , marginLeft: 8 }}>Product: {prop.text}</h4>
        <h5 style={{marginLeft: 8}}> {prop.type}</h5>
        <h2 style={{marginLeft:8}}> Price: ${prop.price}</h2>
        <h6 style={{display:"flex", justifyContent:"right", marginRight:13}}>Rating: {prop.rating}</h6>
        {/* <a>{prop.name}</a> */}
    </div>
}

export default PostComp;

