import { useState, useEffect } from 'react'
import CapitalQuestion from '../CapitalQuestion'
import FlagQuestion from '../FlagQuestion'
import ChoiceButton from '../ChoiceButton'
import ResultPage from '../ResultPage'
import adventure from '../../assets/images/undraw_adventure_4hum 1.svg'

interface choiceType {
  name: string;
  isSelected: boolean;
  isCorrect: boolean;
  icon: string;
}

const Main = () => {
  const [data, setData] = useState([]);
  const [questionPassed, setQuestionPassed] = useState(0)
  const [questionType, setQuestionType] = useState(0)
  const [country, setCountry] = useState(``)
  const [capital, setCapital] = useState(``)
  const [flag, setFlag] = useState(``)
  const [choices, setChoices] = useState([] as choiceType[])
  const [loading, setLoading] = useState(true)
  const [isAnswering, setIsAnswering] = useState(true)
  const [results, setResults] = useState(true)
  const [showNextButton, setShowNextButton] = useState(false)
  const [resultPage, setResultPage] = useState(false)
  const [isReplay, setIsReplay] = useState(false)

  const ranNum = (num: number) => {
    return Math.floor(Math.random() * num)
  }

  const loadData = (jsonData: []) => {
    setData(jsonData);
    quizSetup(jsonData);
    setQuestionType(ranNum(2))
    setLoading(false);
  }

  const quizSetup = (arr: any[]) => {
    const num = ranNum(arr.length)
    let choiceArr: choiceType[] = []
    let nameArr: string[] = []
    let selectedCountry = arr[num]
    setCountry(selectedCountry.name.common)
    selectedCountry.capital[0] !== undefined? setCapital(selectedCountry.capital[0]) : setCapital(selectedCountry.name.common)
    setFlag(selectedCountry.flags.png)
    choiceArr.push({
      name: arr[num].name.common,
      isSelected: false,
      isCorrect: false,
      icon: ''
    })
    nameArr.push(arr[num].name.common)
    for (let i=0; i< 3; i++) {
      let tempCountryArr = arr.filter((obj) => nameArr.indexOf(obj.name.common) < 0)
      let ranCountry = tempCountryArr[ranNum(tempCountryArr.length)]
     choiceArr.push({
       name: ranCountry.name.common,
       isSelected: false,
       isCorrect: false,
       icon: ''
      })
      nameArr.push(ranCountry.name.common)
    }
    choiceArr.sort(() => Math.random() - 0.5 )
    setChoices(choiceArr);
  }

  const question = (questionType: number) => {
    switch (questionType) {
      case 1:
        return <FlagQuestion
          isLoading = {loading}
          flag = {flag}
        />

      default:
        return <CapitalQuestion
          isLoading = {loading}
          capital = {capital}
        />
    }
  }

  const checkAnswer = (answer: choiceType, index: number) => {
    if (isAnswering) {
      setIsAnswering(false)
      choices.map( (choice, i) => {
        if (i === index ) {
          choice.isSelected = true
          if (choice.name !== country) {
            choice.icon = 'highlight_off'
          }
        }
        if (choice.name === country) {
          choice.isCorrect = true
          choice.icon = 'check_circle_outline'
        }
        return <></>
      })
      if (answer.name === country) {
        setResults(true)
        setQuestionPassed(prev => prev + 1)
     } else {
        setResults(false)
     }
     setShowNextButton(true)
    }
  }

  const handleNextButton = () => {
    setLoading(true)
    if (results) {
      setQuestionType(ranNum(2))
      quizSetup(data)
    } else {
      setResultPage(true)
    }
    setShowNextButton(false)
    setIsAnswering(true)
    setLoading(false)
  }

  useEffect(() => {
    const replay = async () => {
      setLoading(true)
      setResultPage(false)
      setResults(true)
      setQuestionType(ranNum(2))
      quizSetup(data)
      setShowNextButton(false)
      setIsAnswering(true)
      setQuestionPassed(0)
      setLoading(false)
    }
    if (isReplay) {
      replay()
      setIsReplay(false)
    }
  },[isReplay])

  useEffect(() => {
    setLoading(true)
    setResultPage(false)
    setIsReplay(false)
    const fetchData = async (url: string) => {
      setLoading(true);
      const response = await fetch(url).then(response =>response.json())
      localStorage.setItem('countries', JSON.stringify(response))
      loadData(response)
      return
    }
    if (localStorage.getItem('countries') === undefined || localStorage.getItem('countries') === null) {
      fetchData(process.env.REACT_APP_URL as string)
    } else {
      loadData(JSON.parse(localStorage.getItem('countries') as string))
    };
    },[])

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div>
        <div className='flex justify-between items-end'>
          <h1 className="py-2 uppercase text-white font-bold text-4xl">
            country quiz
          </h1>
          {resultPage? <></> : <img className='-my-12' src={adventure} alt="Adventure"/>}
        </div>
        <div className="min-h-96 min-w-80 px-8 pt-16 pb-8 rounded-3xl bg-white">
          {resultPage?
            <div>
              <ResultPage
                questionPassed={questionPassed}
                setIsReplay={setIsReplay}
              />
            </div>
            :
            <div>
              <div className="text-2F527B font-bold text-2xl">
                {question(questionType)}
              </div>
              {loading ?
                <div className="px-12 py-4 bg-F2F2F2"></div>
                :
                <div>
                  {choices.map((choice, index) =>
                    <ChoiceButton
                      key={index}
                      choice={choice}
                      index={index}
                      isAnswering={isAnswering}
                      checkAnswer={checkAnswer}
                    />
                  )}
                </div>
              }
              <div className='flex justify-end'>
                {showNextButton?
                  <button
                    className='flex justify-end px-9 py-4 bg-F9A826 rounded-xl text-white'
                    onClick={handleNextButton}
                  >
                    Next
                  </button>
                  :
                  <></>
                }
              </div>
           </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Main