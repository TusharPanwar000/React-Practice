// import {useState, useEffect} from 'react'

// function App() {
//    const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(res => res.json())
//     .then(data => setUser(data));
    

//   }, [])


//   return (
//     <div>
//       <h1>User Info</h1>
//       {user && <p>Name: {user.name}</p>}
//       {user && <p>Email: {user.email}</p>}
//     </div>
//   )
// }

// export default App;




  // import {useState, useEffect} from 'react'

  // function App() {

  //   const [user, setUser] = useState(null);

  //   useEffect(() =>{
  //     fetch("https://jsonplaceholder.typicode.com/users/1")
  //     .then(res => res.json())
  //     .then(data => setUser(data))
  //   }, []);


  //   return (
  //     <div>
  //       {user && <p>Name: {user.name}</p>}
  //       {user && <p>Email: {user.email}</p>}
  //       {user && <p>Address: {user.address.city}</p>}
  //       {user && <p>Phone: {user.phone}</p>}
  //     </div>
  //   )
  // }


  // export default App;


  //challenge



  import {useState, useEffect} from 'react'

  function App() {
    const [user, setUser] = useState([])

    useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data))
    },[])

    return (  
      <div>
        {user.map(user => <p  key={user.id}>Name: {user.name}</p>)}
      </div>
    )
  }

  export default App;