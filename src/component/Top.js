import dot from  '../assets/dot.svg';
import x from '../assets/x.svg';
import usama from "../assets/usama.jpg"


function TopItems(){

    return  <div style={{ marginTop: 20, marginLeft: 10, paddingTop: 7 }} >
     <div style={{ display: 'flex', marginTop: 10}}>
    <img src={usama} style={{ width: 50, borderRadius: 50, height: 50 }} />
    <h3 style={{ marginLeft: 15, marginTop: 0 }} >usama javed</h3>
    <div style={{marginLeft:300}}>
    <img src={dot} />
    <img src={x} />
    </div>
  </div>
</div>

}

export default TopItems;