/*componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      this.setState({post: result})
    })
    function : //{this.state.post.title}
}*/


function App() {
  return (
    <div className="h-[100vh] bg-slate-900"> 
      <h1 className="text-gray-50" >MeetFlix</h1> 
    </div>
  );
}

export default App;
