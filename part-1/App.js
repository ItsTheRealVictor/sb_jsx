const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name='Hank'/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))