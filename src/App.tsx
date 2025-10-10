import Animal from './Animal'
import './App.css'
import Exibicao from './Exibicao'

function App() {

  return (
    <>
      <div>
        <Exibicao inicio={new Date("2025-10-11T08:00:00-03:00")} fim={new Date("2025-10-11T12:00-03:00")} cercado='ICE - UFJF'></Exibicao>
        Animais:
        <Animal icone="🦁" nome="Leão" peso={190.0} emExtincao={true} />
        <Animal icone="🦭" nome="Foca" peso={65.0} emExtincao={false} />
        <Animal icone="🫎" nome="Alce" peso={380.0} emExtincao={true} />
        <Animal icone="🐻" nome="Urso" peso={600.0} emExtincao={false} />
        <Animal icone="🐻‍❄️" nome="Urso Polar" peso={800.0} emExtincao={false} />
        <Exibicao inicio={new Date("2025-10-11T08:00:00-03:00")} fim={new Date("2025-10-11T12:00-03:00")} cercado='ICE - UFJF'></Exibicao>
      </div>
    </>
  )
}

export default App
