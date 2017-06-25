var BaiTap5 = React.createClass({
  render: function(){
    return(
      <div>
        <img src={this.props.src}/>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
});
var List = React.createClass({
  add(){
    var text = this.refs.txtname.value;
    this.state.mang.unshift({srchinh:"image/3.jpg" ,noidung: text});//thêm vào đầu mảng
    this.setState();
  },
  getInitialState(){
		return {mang: [
      {srchinh:"image/1.jpg", noidung: "HotGirl1"},
      {srchinh:"image/2.jpg", noidung: "HotGirl2"},
    ]};
	},
  render(){
    return(
      <div>
      {
        this.state.mang.map(function(note,index){
          return <BaiTap5 key={index} src={note.srchinh}>{note.noidung}</BaiTap5>
          })
        }
        <input type="text" ref="txtname" />
        <button onClick={this.add}>Thêm</button>
      </div>
    );
  }
});
ReactDOM.render(
  <div>
    <List></List>
  </div>,document.getElementById("root")
)
