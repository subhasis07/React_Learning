
import Button from './components/Button'
import ListGroups from './components/ListGroups'

function App() {

  let items=["Kolkata", "Berhampore", "Bangalore", "Mumbai", "Hydrabad"]

  return (
    <div>
      <ListGroups items={items} heading="Cities"/>
      <Button Children={"Click Me!"} onClick={()=>console.log("Clicked")
      }/>
    </div>
  )
}

export default App
