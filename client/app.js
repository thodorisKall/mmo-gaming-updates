const headerTitle = document.querySelector("h1")
const headerDescription = document.querySelector("h3")
const header = document.querySelector(".header")
const mainTag = document.querySelector("main")
const mainGrid = document.querySelector(".main__grid")

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
  // console.log(games[0])
  headerTitle.innerText = games[0].short_description
  headerDescription.innerText = games[0].title
  header.style.backgroundImage = `url('${games[0].main_image}')`

  for (let [index, game] of games.entries()) {
    if (index === 0) {
      continue
    } else if (index === 1) {
      mainTag.innerHTML = `<div class="main__banner">
        <div class="main__box">
          <div class="box__img">
            <img src=${games[1].main_image} alt="" />
          </div>
          <div class="box__text">
            <h2>${games[1].short_description}</h2>
            <p>
              ${games[1].title}
            </p>
            <h3>date</h3>
          </div>
        </div>
      </div>`
    } else {
      mainGrid.innerHTML += `
      <div class="grid__box">
        <div class="box__img">
          <img src="${games[index].main_image}" alt="" />
        </div>
        <div class="box__text">
          <h4>${games[index].short_description}</h4>
          <h2>${games[index].title}</h2>
          <h5>${games[index].id}</h5>
        </div>
      </div>      
      `
    }
    mainTag.appendChild(mainGrid)
  }
}
