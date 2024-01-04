import PostComp from "../../component/PostComponent";



function HomePage(prop) {
    return <div>
        
        <PostComp brand={prop.brand} text={prop.text} type ={prop.type} price={prop.price} rating={prop.rating} />
    </div>
}
export default HomePage;