import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"
import { useState } from "react"


function App() {

  const [counter, setCounter] = useState<number>(1)

    return (
      <>
        <Heading title={ "Hello" } />
        <Section title=''>
          This is a testing sub headings.
        </Section>
        <Counter setCounter={setCounter}>This is a counter { counter }</Counter>
        <List items={["coffe", "tea", "milk"]} renderItem={(item: string) => <span className="bold">{item}</span>}/>
      </>
  )
}

export default App
