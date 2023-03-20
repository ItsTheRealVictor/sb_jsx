const App = () => {
    return (
        <div>
            <Person name='Phil' age={18} hobbies={['riding bikes, cooking']}/>
            <Person name='Chris' age={59} hobbies={['Fencing, farming, eating salad']}/>
            <Person name='Arnold' age={5} hobbies={['reading', 'eating fancy foods', 'rollercoasters']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))