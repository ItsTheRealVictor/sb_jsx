const Person = (props) => {

    return (
        <div>
            <p>Learn some information about this person</p>
            <h2>{props.name}</h2>
            
            <h4>{props.name.slice(0, 6)}'s hobbies</h4>
            <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
            <h3>{props.age >= 18 ? 'Please go vote': 'Must be 18 to vote'}</h3>
        </div>
    )
}