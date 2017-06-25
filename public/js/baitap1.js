var BaiTap1 = React.createClass({
  addStudent(){
		this.state.soluong = parseInt(this.state.soluong) + 1;
		this.setState(this.state);//thay đổi trạng tháu của một đối tượng state
	},
  getInitialState(){
    return {soluong: this.props.soluong};//tạo đối tượng state tongHocVien
  },
  render: function(){
    return(
      <button onClick={this.addStudent}>Hello<span> {this.state.soluong}</span></button>
    );
  }
});
ReactDOM.render(
  <div>
    <BaiTap1 soluong="0"></BaiTap1>
  </div>,document.getElementById("root")
)
