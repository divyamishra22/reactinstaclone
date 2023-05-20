import React from 'react'

import React from 'react'

import React from 'react'

const Search = () => {
  
const { loading, users } = useSearch();
  return (
    <div>
      {loading ? (
        <Spinner style={{ marginTop: '10px' }} />
      ) : (
        <div>
          {users.length > 0 ? (
            users.map((user) => (
            //   <div key={user.id} >
           <div>
                 <Profile img={user.avatar}
                  username={user.username}
                  name={user.name}/>
                <div/>
              </div>
            ))
          ) : (
            <div>
              <p>No Results •</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
  
}

// export default Search
