import Animal from './Animal'
import './App.css'

function App() {

  return (
    <>
      <div>
        Animais:
        <Animal icone="🦁" nome="Leão" peso={190.0} emExtincao={true} />
        <Animal icone="🦭" nome="Foca" peso={65.0} emExtincao={false} />
        <Animal icone="🫎" nome="Alce" peso={140.0} emExtincao={true} />
        <Animal icone="🐻" nome="Urso" peso={350.0} emExtincao={false} />
        <Animal icone="🐻‍❄️" nome="Urso Polar" peso={450.0} emExtincao={false} />
      </div>
    </>
  )
}

export default App
