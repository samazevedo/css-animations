import './App.css'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>CSS Animation Projects</h1>
            </header>
            <div className='App-body'>
                <div className='App-body-content'>
                    <h2>CSS Animation Projects</h2>
                    <p>
                        This is a collection of projects that use CSS
                        animations.
                    </p>
                </div>
                <div className='project-list'>
                    <h3>Simple Animation 1</h3>
                    <p>Image with infite translate Y </p>
                    <div className='container-hex'>
                        <img
                            src='../images/hexagon.svg'
                            alt='hexagon'
                            id='hexagon'
                        />
                    </div>
                    <h3>Simple Transition</h3>
                    <p>Mouse hover rotate the image 60deg</p>
                    <div className='container-hex'>
                        <img
                            src='../images/hexagon.svg'
                            alt='hexagon'
                            id='hexagon2'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
