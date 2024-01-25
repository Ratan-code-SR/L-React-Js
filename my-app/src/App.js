import Card from './components/Card.js'
import Data from './data.json'

function App() {


    return <div>
        <h1 className='headingStyle'>Todo App</h1>
        {Data.map((item, index) => <Card key={index} headingTitle={item.title} todoDec={item.dec} />)
        }

    </div >
}

export default App;