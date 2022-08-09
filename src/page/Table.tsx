import React, { Component } from "react";
import Form from './From';
import '../assets/css/index.css';

const Renders=({initialState}:any) => {
  const { name, job } = initialState.state.initialState;
  return (
    <form onSubmit={initialState.onFormSubmit}>
      <label htmlFor="name">Name：</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={initialState.handleChange} />
      <label htmlFor="job">Job：</label>
      <input
        type="text"
        name="job"
        id="job"
        value={job} 
        onChange={initialState.handleChange}/>
        <button type="submit" >Submit</button>
    </form>
  );
}
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>序号</th>
        <th>名称</th>
        <th>名字</th>
        <th>操作</th>
      </tr>
    </thead>
  )
}
const TableBody = (e:any) => {
  const rows = e.characters.map((row:any, index:number) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => e.removeCharacter(index)}>删除</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class App extends Component {
  componentDidMount() {
    setInterval(() =>{
      this.setState({num:new Date()})
     },1000) 
  //   const url ='https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/shop/hot-list'
  //   fetch(url)
  //     .then((result) => result.json())
  //     .then((result) => {
  //       console.log(result);
  //       this.setState({
  //         data: result,
  //       })
  //     })
  }
  props:any
  state:any = {
    num: new Date(),
    asd: 0,
    characters: [
      {
        name: 'Charlie',
        job: 'sdf',

      },
    ],
    initialState: {
      name: '',
      job: '',
    }
  }
  removeCharacter = (index:any) => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character: any, i: any) => {
        return i !== index
      }),
    })
  }
  handleChange = (event:any) => {
    const { name, value } = event.target
    let data = Object.assign( {},this.state.initialState,{ [name]: value })
    this.setState({
      initialState:data
    })
  }
  onFormSubmit = (event:any) => {
    event.preventDefault();
    this.handleSubmit(this.state.initialState);
    this.setState(this.state.initialState);
  }
  handleSubmit = (character:any) => {
    this.setState({ characters: [...this.state.characters, character] })
    let data = Object.assign({}, this.state.initialState, { name:'',job:''})
    this.setState({
      initialState:data
    })
  }
  aa = () => {
    this.setState({ asd: (this.state.asd===0?1:this.state.asd)*2 })
    this.setState({ characters: [...this.props.characters] })
  }
  render() {
    const { characters } = this.state;
    return (
      <div style={{ width: '90%', textAlign: 'center' }}>
        <p className="pap">{this.state.num.toLocaleTimeString()}</p>
        {/* <Form handleSubmit={this.handleSubmit}></Form> */}
        <Renders initialState={this}></Renders>
        {this.state.asd}
        <button onClick={this.aa} style={{ cursor: 'pointer', width: '100%', textAlign: 'center' }}>点击刷新</button>
        <table border={1} style={{ width: '100%', textAlign: 'center' }}>
          <TableHeader />
          <TableBody characters={characters} removeCharacter={this.removeCharacter} />
        </table>
      </div>
    )
  }
}
export default App;