import { Grid } from './domains/game/models/grid'
import { PersonApiResult } from './domains/game/models/people'
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>A lor game - Sam journey</h1>
  </div>

`

async function getAllPeople(): Promise<PersonApiResult> {
  const response = await fetch('https://swapi.dev/api/people')
  const result = await response.json() as Promise<PersonApiResult>

  return result
}

getAllPeople().then(result => {
  console.info(result.results[0].name)
})


const grid = new Grid()
grid.init(20)

grid.generate(cells => {
  const container = document.createElement('div') as HTMLDivElement
  
  container.className = 'grid'

  cells.forEach(cell => {
    const div = document.createElement('div') as HTMLDivElement
    div.className = 'cell'

    container.appendChild(div)  
  })

  document.querySelector<HTMLDivElement>('#app')?.appendChild(container)
})
// document.createElement('div') as HTMLDivElement
