import ButtonFirst from "../components/ButtonFirst"
function Home() {
  return <>{!localStorage.tokenDiabetes ? <ButtonFirst /> : null}</>
}

export default Home
