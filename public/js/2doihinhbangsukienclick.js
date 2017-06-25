var BaiTap2 = React.createClass({
  next(){
    if(parseInt(this.state.soluong) < 6){
      this.state.soluong = parseInt(this.state.soluong) + 1;
    }
		this.setState(this.state);//thay đổi trạng tháu của một đối tượng state
	},
  prev(){
    if(parseInt(this.state.soluong) > 1)
    {
      this.state.soluong = parseInt(this.state.soluong) - 1;
    }
    this.setState(this.state);//thay đổi trạng tháu của một đối tượng state
  },
  getInitialState(){
    return {soluong: this.props.soluong};//tạo đối tượng state tongHocVien
  },
  render: function(){
    return(
      <div>
        <img src={"image/" + this.state.soluong + ".jpg"} width="150px" height="200px"/>
        <div>
          <button onClick={this.next}>Tiếp theo</button>
          <button onClick={this.prev}>Quay lại</button>
        </div>
      </div>
    );
  }
});
ReactDOM.render(
  <div>
    <BaiTap2 soluong="1"></BaiTap2>
  </div>,document.getElementById("root")
)
