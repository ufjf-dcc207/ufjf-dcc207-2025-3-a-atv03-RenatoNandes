import Animal from './Animal'
import './App.css'
import Exibicao from './Exibicao'

type ExibicaoTuplaType = [string, string, string, Array<AnimalTuplaType>];
type AnimalTuplaType = [string, string, number, boolean];

function App() {

  const exibicoes: Array<ExibicaoTuplaType> = [
    ["2025-10-11T08:00-03:00",
      "2025-10-11T12:00-03:00",
      "ICE",
      [
        ["🦁", "Leão", 190.0, false],
        ["🦭", "Foca", 65.0, false],
        ["🦍", "Gorila", 160.0, false]
      ]
    ],
    ["2025-10-11T13:00-03:00",
      "2025-10-11T18:00-03:00",
      'ICB',
      [
        ["🫎", "Alce", 380.0, true],
        ["🐻", "Urso Pardo", 600.0, false],
        ["🐻‍❄️", "Urso Polar", 800.0, true]
      ]
    ]
  ];

  return (
    <div>

      {exibicoes.map(ex =>
        <Exibicao
          key={ex[2]}
          inicio={new Date(ex[0])}
          fim={new Date(ex[1])}
          cercado={ex[2]}>
          {ex[3].map(an =>
            <Animal
              key={an[1]}
              nome={an[1]}
              icone={an[0]}
              peso={an[2]}
              emExtincao={an[3]}
            />)}
        </Exibicao>
      )}

    </div>
  )
}

export default App
