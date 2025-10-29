import Animal from './Animal'
import './App.css'
import Exibicao from './Exibicao'

type AnimalTuplaType = [string, string, number, boolean];

function App() {

  const exibicao1:AnimalTuplaType[] = [
    ["🦁", "Leão", 190.0, false],
    ["🦭", "Foca", 65.0, false],
    ["🦍", "Gorila", 160.0, false]
  ];

  const exibicao2:AnimalTuplaType[] = [
    ["🫎", "Alce", 380.0, true],
    ["🐻", "Urso Pardo", 600.0, false],
    ["🐻‍❄️", "Urso Polar", 800.0, true]
  ];

  const elementosAnimais1 = [];
  for (let i = 0; i < exibicao1.length; i++) {
    elementosAnimais1.push(
      <Animal
        icone={exibicao1[i][0]}
        nome={exibicao1[i][1]}
        peso={exibicao1[i][2]}
        emExtincao={exibicao1[i][3]}
        key={exibicao1[i][1]}
      />
    );
  }

  const elementosAnimais2 = [];
  for (let i = 0; i < exibicao2.length; i++) {
    elementosAnimais2.push(
      <Animal
        icone={exibicao2[i][0]}
        nome={exibicao2[i][1]}
        peso={exibicao2[i][2]}
        emExtincao={exibicao2[i][3]}
        key={exibicao2[i][1]}
      />
    );
  }
  return (
    <>
      <div>
        <Exibicao inicio={new Date("2025-10-11T08:00:00-03:00")} fim={new Date("2025-10-11T12:00-03:00")} cercado='ICE - UFJF'></Exibicao>
        Animais:
        {elementosAnimais1}
        {elementosAnimais2}
        <Exibicao inicio={new Date("2025-10-11T08:00:00-03:00")} fim={new Date("2025-10-11T12:00-03:00")} cercado='ICE - UFJF'></Exibicao>
      </div>
    </>
  )
}

export default App
