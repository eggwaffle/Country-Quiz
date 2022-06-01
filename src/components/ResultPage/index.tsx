import winner from '../../assets/images/undraw_winners_ao2o 2.svg'

interface AppProps {
  questionPassed: number,
  setIsReplay: Function
}

const ResultPage = ({ questionPassed, setIsReplay }: AppProps) => {
  return (
    <div className='max-h-96 px-16 grid grid-rows-6 grid-flow-col gap-4 text-center'>
      <img className='row-span-3' src={winner} alt='You Win!' />
      <h1 className='text-1D355D font-bold text-4xl'>Results</h1>
      <div>You got <b className='text-2xl text-60BF88'>{questionPassed}</b> correct answers</div>
      <div>
        <button className='px-16 py-4 border-2 border-1D355D rounded-xl hover:bg-1D355D text-1D355D hover:text-white font-semibold text-lg' onClick={() => setIsReplay(true)}>
          Try again
        </button>
      </div>
    </div>
  )
}
export default ResultPage