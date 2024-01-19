async function getUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error('Error fetching users');
        }

        const users = await response.json();    
        return users;
    }catch (error){
        throw new error(`Error fetching users: ${error}`);
    }
}

async function renderUsers(){
    try{
        const users = await getUsers();
        
        users.forEach(user => {
            console.log(user.name);
        });
    }catch (error){
        console.log(error);
    }
}

renderUsers();