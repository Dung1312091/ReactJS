var BaiTap3 = React.createClass({
  changeImage(){
    if(parseInt(this.state.soluong) < 6){
      this.state.soluong = parseInt(this.state.soluong) + 1;
    }
    else{
      this.state.soluong = 1;
    }
		this.setState(this.state);//thay đổi trạng tháu của một
  },
  getInitialState(){
    return {soluong: this.props.soluong};//tạo đối tượng state tongHocVien
  },
  render: function(){
    return(
      <div>
        <img src={"image/" + this.state.soluong + ".jpg"} width="150px" height="200px"/>
        </div>
    );
  },
  //sau khi component render xong
  componentDidMount(){
    setInterval(this.changeImage,1000);
  }
});
ReactDOM.render(
  <div>
    <BaiTap3 soluong="1"></BaiTap3>
  </div>,document.getElementById("root")
)
