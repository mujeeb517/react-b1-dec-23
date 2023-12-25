function UserItem({ user }) {
    return (<div className="m-4">
        <h1 style={{ fontWeight: 'lighter' }} className="font-bold">{user.login}</h1>
        <img className="rounded-full" width={100} height={100} src={user.avatar_url} />
    </div>);
}

export default UserItem;