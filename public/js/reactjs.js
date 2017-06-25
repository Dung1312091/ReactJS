//khoi tao Component
//props: không thay đổi được nộ dung
//State: Có thể thay đổi trạng thái =>layout thay đổi, không truyền thẳng trực tiếp như props mà phải khai báo qua hàm getInitialState()
//Ref:
function getName(name){
	alert(name);
}
var ComponentChaoMung = React.createClass({
	addStudent(){
		this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
		this.setState(this.state);//thay đổi trạng tháu của một đối tượng state
	},
	layThongTin: function(){
		alert(this.props.children);
	},
	getInitialState(){
		return {tongHocVien: this.props.tongHocVien};//tạo đối tượng state tongHocVien
	},
	render: function(){
		return(
			<div>
				<h1>{this.props.khoahoc}-{this.props.giangvien}</h1>
				<p>So hoc vien:{this.state.tongHocVien}</p>
				<p>{this.props.children}</p>
				<button onClick={this.layThongTin}>Thông Tin</button>
				<button onClick={()=>{getName(this.props.giangvien)}}>Tên Giảng Viên</button>
				<button onClick={this.addStudent}>Đăng ký</button>
				<ComponentKhoaHoc tenkhoahoc="khóa học nodejs" />
			</div>
		);
	}
});
var ComponentKhoaHoc = React.createClass({
	render: function() {
		return(
			<h1 className="do">{this.props.tenkhoahoc}</h1>
		);
	}
});
var InputTag = React.createClass({
	show(){
		var text = this.refs.txtname.value + this.refs.sl.value;
		alert(text);
	},
	render(){
		return (
			<div>
				<select ref="sl">
					<option value="a">AAA</option>
					<option value="b">BBB</option>
					<option value="c">CCC</option>
				</select>
				<input type="text" ref="txtname" />
				<button onClick={this.show}>Hiển thị</button>
			</div>
		);
	}
});
ReactDOM.render(
	<div>
		<InputTag></InputTag>
		<ComponentChaoMung khoahoc="Nodejs" giangvien="MrA" tongHocVien="10">NodeJS </ComponentChaoMung>
		<ComponentChaoMung khoahoc="Reactjs" giangvien="MrB" tongHocVien="20">ReactJS </ComponentChaoMung>
  	</div>
  	,
 	 document.getElementById('root')
);
