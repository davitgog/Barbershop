

const users = [
    {
        telephone: 123123123,
        email: "qweqwe",
        password: "qweqwe",
    }
    ,
    {
        telephone: 3213213213123,
        email: "qweqwe123",
        password: "qweqwe123",
    }
]
export{login, singUp, logOut}
function login(user)
{
    const loggedUser = users.find(u => u.email == user.email && u.password == user.password);

    if (loggedUser)
    {
        localStorage.setItem("activeUser", JSON.stringify(loggedUser))
        
    }
}

function logOut()
{
    localStorage.removeItem("activeUser")
}

function singUp(user)
{
    const loggedUser = users.find(u => u.email == user.email);

    if(!loggedUser)
    {
        users.push(user)
        localStorage.setItem("activeUser", JSON.stringify(user))
    }

}
