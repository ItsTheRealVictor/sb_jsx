const Tweet = (props) => {
    return (
        <div>
            <h3>Tweet author: {props.name}</h3>
            <h5>{props.username}</h5>
            <h4>{props.date}</h4>
            <p>{props.tweetBody}</p>
        </div>
    )
}