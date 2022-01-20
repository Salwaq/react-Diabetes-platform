import ButtonFirst from "../components/ButtonFirst"
function Home() {
  return (
    <>
      <div>
        {!localStorage.tokenDiabetes ? (
          <div id="home">
            <div id="firstPage">
              <h2>ACCESS TO DIABETES CARE: </h2>
              <h3>IF NOT NOW, WHEN?</h3>
            </div>{" "}
            <ButtonFirst />{" "}
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Home
