interface AppProps {
  isLoading: boolean,
  capital: string
}

const CapitalQuestion = ({ isLoading, capital }: AppProps) => {
  return (
    <div className="my-5 text-2F527B font-bold">
      {isLoading ?
        <div className="px-20 py-4 bg-F2F2F2"></div>
        :
        <h2>{`${capital} is the capital of`}</h2>
      }
    </div>
  )
}

export default CapitalQuestion