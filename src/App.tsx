import Button from './components/button/Button'
import Input from './components/Input/Input'
import Layout from './layout/Menu/Layout'
function App() {
  return (
    <>
      <Button appearence={'big'}>Вход</Button>
      <Input placeholder="Email" isValid={true} />
      <Layout />
    </>
  )
}

export default App
