interface AppProps {
  isLoading: boolean,
  flag: string
}

const FlagQuestion = ({ isLoading, flag }: AppProps) => {
  return (
    <>
      {isLoading ?
        <div className='my-5'>
          <div className="w-full h-40 bg-F2F2F2"></div>
          <div className="mt-4 px-20 py-4 bg-F2F2F2"></div>
        </div>
        :
        <div>
          <img
          src={flag}
          alt="flag of the country"
          />
          <h2 className="my-5 text-2F527B font-bold">Which country does this flag belong to?</h2>
        </div>
      }
    </>
  )
}

export default FlagQuestion