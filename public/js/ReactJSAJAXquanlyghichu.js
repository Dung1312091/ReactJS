function addDiv(){
  ReactDOM.render(
  <div>
    <InputDiv></InputDiv>
  </div>,
  document.getElementById("div-add")
)
}
var list;
var Note = React.createClass({
  save(){
    var flag = this;
    $.post("/update",{idSua:this.props.id,noidung:this.refs.txt.value},function(data){
      list.setState({mang: data});
      flag.setState({onEdit: false});
    });
  },
  cancel(){
    this.setState({onEdit: false});
  },
  edit(){
    this.setState({onEdit: true});
  },
  getInitialState(){
    return{onEdit: false};
  },
  delete(){
    $.post("/delete",{idxoa: this.props.id},function(data){
      list.setState({mang:data});
    });
  },
  render: function(){
    if(this.state.onEdit){
      return(
        <div className="div-note">
          <input defaultValue={this.props.children} ref="txt"/>
          <button onClick={this.save}>Lưu</button>
          <button onClick={this.cancel}>Hủy</button>
        </div>
      )
    }else{
      return(
        <div className="div-note">
          <p>{this.props.children}</p>
          <button onClick={this.delete}>Xóa</button>
          <button onClick={this.edit}>Sửa</button>
        </div>
      );
    }
  }
});
var List = React.createClass({
  getInitialState(){
    list = this;
    return {mang: []};//tạo đối tượng state tongHocVien
  },
  render: function(){
    return(
      <div className="div-list">
      <div id="div-add"></div>
      <button onClick={addDiv}>Thêm</button>
      {
        this.state.mang.map(function(note,index){
          return <Note key={index} id={index}>{note}</Note>
        })
      }
      </div>
    );
  },
  componentDidMount(){
    $.post("/noidungquanlyghichu",function(data){
      list.setState({mang:data});
    });
  }
});
var InputDiv = React.createClass({
  send(){
    var text = this.refs.txtname.value;
    $.post("/add",{note:text},function(data){
      list.setState({mang:data});
    });

    // list.state.mang.push(text);
    // list.setState();
    ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));//gở 1 phần tử ra
    // mang: list.state.mang.concat(text);
    //list.setState({mang:list.state.mang.concat(text)});//concat dùng để nối chuổi
  },
  render(){
    return(
      <div>
        <input type="text" ref="txtname" palceHolder="Nhập nội dung" />
        <button onClick={this.send}>Gửi</button>
      </div>
    );
  }
});
ReactDOM.render(
  <div>
    <List></List>

  </div>,document.getElementById("root")
)
