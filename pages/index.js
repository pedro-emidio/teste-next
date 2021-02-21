import { useState } from 'react'

function Home() {
    return <div>
        <h4>Home</h4>
        <Contador />
    </div>
}
function Contador() {
    const [contator, setContador] = useState(1)
    function addContador() {
        setContador(contator + 1)
    }
    return (
        <div>
            <div>{contator}</div>
            <button onClick={addContador}>+</button>
        </div>
    )
}

export default Home