import "./App.css"
import ConvertorForm from "./components/ConvertorForm"

const App = () => {
  return (
    <div className="currency-convertor">
      <h2 className="convertor-title">Currency Convertor</h2>
        <ConvertorForm />
    </div>
  )
}

export default App