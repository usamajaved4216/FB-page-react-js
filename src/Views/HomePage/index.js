import PostComp from "../../component/PostComponent";



function HomePage(prop) {
    return <div>
        
        <PostComp text={prop.text} type ={prop.type} />
    </div>
}
export default HomePage;