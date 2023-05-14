const headerTitle = document.querySelector("h1")
const headerDescription = document.querySelector("h3")
const header = document.querySelector(".header")

const getGames = () => {
  fetch("http://localhost:8000/video-games")
    .then((response) => response.json())
    .then((games) => {
      fillGames(games)
    })
    .catch((err) => console.log(err.message))
}

getGames()

const fillGames = (games) => {
  console.log(games[0])
  headerTitle.innerText = games[0].short_description
  headerDescription.innerText = games[0].title
  header.style.backgroundImage = `url('${games[0].main_image}')`

  // for (let [index, game] of games.entries()) {
  //   if (index === 0) continue

  // }
}
