const App = () => {
    const tweets = [
        {
            name: 'Hank Hill',
            username: 'PropaneGuy',
            date : '2023-03-14',
            tweetBody : 'Today sure is a great day to buy some propane accessories'
        },
        {
            name: 'Peggy Hill',
            username: 'BoggleChamp',
            date: '2020-2-16',
            tweetBody: 'Come see me at the world championships of boggle this weekend!'
        },
        {
            name: 'Bobby Hill',
            username: 'FunnyGuy',
            date: '2014-5-5',
            tweetBody: 'Today I will hang out with my friends Connie and Joseph'
        }
]
    return (
            <div>
                <Tweet {...tweets[0]}/>
                <Tweet {...tweets[1]}/>
                <Tweet {...tweets[2]}/>
            </div>
            )
        }
ReactDOM.render(<App/>, document.querySelector('#root'))