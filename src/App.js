import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useOnChange } from './hooks/useOnChange'
import './App.css'
import { useStateHistory } from './hooks/useStateHistory'

export default () => {
  const [ input, setInput ] = useState('')
  const [ result, setResult, resultsHistory ] = useStateHistory({})
  const [ isLoading, setIsLoading ] = useState(false)
  const timerRef = useRef()

  useOnChange(() => {
    timerRef.current = setTimeout(() => {
      setResult(input)
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [ input ])

  return (
    <MainSection>
      <Section>
        <Title>Search Term</Title>
        <InputSearch
          type="text"
          value={ input }
          onChange={ e => setInput(e.target.value) }
        />
      </Section>

      <Section>
        <Title>Result</Title>
        { !isLoading && result }
      </Section>

      <Section>
        <Title>History of Results</Title>
        <List>
          {
            resultsHistory.map((result, index) => (
              <ListItem key={ index }>{ result }</ListItem>
            ))
          }
        </List>
      </Section>
    </MainSection>
  )
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-height: 150px;
  margin: 15px 0;
  padding-bottom: 30px;
  border: 2px solid slateblue;
  border-radius: 5px;
`

const MainSection = styled(Section)`
  width: 100%;
  border: none;
`

const Title = styled.h2``

const InputSearch = styled.input`
  padding: 5px;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  padding: 5px 0;
`