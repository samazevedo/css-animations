import './App.css'
import { ProjectList } from './components/ProjectList'

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
                    <ProjectList />
                </div>
            </div>
        </div>
    )
}

export default App
