interface AppProps {
  index: number,
  choice: {
    name: string,
    isSelected: Boolean,
    isCorrect: Boolean,
    icon: string
  },
  isAnswering: Boolean,
  checkAnswer: Function
}

const ChoiceButton = ({choice, index, isAnswering, checkAnswer}: AppProps) => {
  const choiceLetters = [`A`, `B`, `C`, `D`]
  return (
    <button
      key={index}
      value={choice.name}
      onClick={() => checkAnswer(choice, index)}
      className={`w-full my-7 p-4 grid grid-cols-5 gap-4 text-6066D0B2 border border-6066D0B2 rounded-xl ${isAnswering ? 'hover:text-white hover:bg-F9A826 hover:border-F9A826' : ''} ${choice.isSelected && choice.isCorrect === false? '!text-white bg-EA8282 border-EA8282' : ''} ${choice.isCorrect? '!text-white bg-60BF88 border-60BF88': ''}`}
    >
    <span className="">{choiceLetters[index]}</span>
    <span className='col-span-3 text-left'>{choice.name}</span>
    <span className="material-icons">{choice.icon}</span>
    </button>
  )
}

export default ChoiceButton
