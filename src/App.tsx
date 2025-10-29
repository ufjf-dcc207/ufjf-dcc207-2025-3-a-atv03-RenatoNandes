import Animal from './Animal'
import './App.css'
import Exibicao from './Exibicao'

function App() {

  const exibicao1 = [
    <Animal icone="🦁" nome="Leão" peso={190.0} emExtincao={false} />,
    <Animal icone="🦭" nome="Foca" peso={65.0} emExtincao={false} />,
    <Animal icone="🦍" nome="Gorila" peso={160.0} emExtincao={false} />,
  ];

  const exibicao2 = [
    <Animal icone="🫎" nome="Alce" peso={380.0} emExtincao={true} />,
    <Animal icone="🐻" nome="Urso Pardo" peso={600.0} emExtincao={false} />,
    <Animal icone="🐻‍❄️" nome="Urso Polar" peso={800.0} emExtincao={true} />,
  ];

  return (
    <>
      <div>
        <Exibicao inicio={new Date("2025-10-11T08:00:00-03:00")} fim={new Date("2025-10-11T12:00-03:00")} cercado='ICE - UFJF'></Exibicao>
        Animais:
        {exibicao1}
        {exibicao2}
        <Exibicao inicio={new Date("2025-10-11T08:00:00-03:00")} fim={new Date("2025-10-11T12:00-03:00")} cercado='ICE - UFJF'></Exibicao>
      </div>
    </>
  )
}

export default App
