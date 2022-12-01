import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

function App() {
    return (
        <section>
            <div className='hero is-primary'>
                <div className='hero-body'>
                    <h1 className='title'>Personal Digital Assistants</h1>
                </div>
            </div>

            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="alexa" handle="@alexa99" img={AlexaImg} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="cortana" handle= "@cortana69" img={CortanaImg}/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="siri" handle="@siri28" img={SiriImg}/>
                        </div>
                    </div>
                </div>
            </div>      
        </section>
    )
}

export default App;