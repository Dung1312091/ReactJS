var BaiTap4 = React.createClass({
  render: function(){
    return(
      <div>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
});
var List = React.createClass({
  add(){
    var text = this.refs.txtname.value;
    this.state.mang.push("PHP",text);
    this.setState();
  },
  getInitialState(){
		return {mang: ["NodeJS","ReactJS","AngularJS"]};//tạo đối tượng state tongHocVien
	},
  render(){
    return(
      <div>
      {
        this.state.mang.map(function(note,index){
          return <BaiTap4 key={index}>{note}</BaiTap4>
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
