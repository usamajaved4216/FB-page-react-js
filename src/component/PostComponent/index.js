function PostComp(prop) {
    return <div >
        <h1 style={{paddingTop :15 , marginTop: 15 , marginLeft: 8 }}>{prop.text}</h1>
        <p style={{marginLeft: 8}}> {prop.type}</p>
        {/* <a>{prop.name}</a> */}
    </div>
}

export default PostComp;

