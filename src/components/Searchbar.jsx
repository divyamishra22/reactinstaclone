
import React,{useState} from 'react';
import Profile from './Profile';

const Searchbar = () => {
    const [term, setTerm] = useState('');
     const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!term) {
            alert("Please insert all fields");
        }
        else {
            searchAction();
        }
        setTerm('');
    };

    const searchAction = () => {
        try{
          if (term) {
            setLoading(true);
            fetch(`http://localhost:3000/user/search/${term}`, {
            method: "get",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
          })
          
          .then((res) => res.json())
            .then((result) => {
              console.log(result);
               setUsers(result);
            })
          }
        }
           catch (error) {
          console.log(error.message);
        } finally {
          setLoading(false);
        }
    }   

  return (
    <div className='searchclass'>

        <div className='searchinput'>
        <input type="text" name="searchtext" id="searchtext" value={term} placeholder='Serach by Username..Name'
           onChange={(e) => { setTerm(e.target.value) }}/>
         <button type="submit" id="submit-btn" onClick={handleSubmit}>Search</button>
        </div>

        <div className='profile'>
        {users.length > 0 ? (
            users.map((user) => (
        <Profile 
                // img={user.avatar}
                username={user.username}
                name={user.name}/>
            ))): (
            <p>No Results </p>
            )}
        </div>
        
    </div>
  )
}

export default Searchbar
