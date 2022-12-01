import ProfileCard from "./ProfileCard";

function App() {
    return (
        <section>
            <div>
                <h1>Personal Digital Assistants</h1>
            </div>
            <ProfileCard title="alexa" handle="@alexa99" />
            <ProfileCard title="cortana" handle= "@cortana69"/>
            <ProfileCard title="siri" handle="@siri28"/>
        </section>
    )
}

export default App;