function ProfileCard({title, handle}) {
    // const title = props.title
    // const handle = props.handle
    // const {title, handle} = props;
    return (
        <div>
            <h2>title: {title}</h2>
            <p>{handle}</p>
        </div>
    )
}

export default ProfileCard;