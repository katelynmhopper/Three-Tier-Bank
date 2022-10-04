const User = ({ user }) => {
    return (
        <div> 
            Name: {user.name}
            Email: {user.email}
            Balance: {user.balance}
        </div>

    )
};

export default User;  