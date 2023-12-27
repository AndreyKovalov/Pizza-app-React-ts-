import Button from './components/button/Button'
import Input from './components/Input/Input'
function App() {
  return (
    <>
      <Button appearence={'big'}>Вход</Button>
      <Input placeholder="Email" isValid={true} />
    </>
  )
}

export default App
