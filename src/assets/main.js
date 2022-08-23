const API =
  'https://rawg-video-games-database.p.rapidapi.com/games?key=067957d7c8ef433d8d0ebe6b53268786&platforms=4&ordering=rating_top';
const content = null || document.getElementById('content');
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fb2a63900dmsh7faf2a5a665ea59p1309dajsnaaac2e17fa9a',
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
  },
};
async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}
(async () => {
  try {
    const games = await fetchData(API);
    let view = `
    ${games.results
      .map(
        (game) =>
          `
        <div class="group relative">
        <div
            class="w-full bg-slate-500 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${game.background_image}" alt="" class="w-full h-36">
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-xl text-slate-900">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${game.name} 
            </h3>
        </div>
        <div>
          <h2>Crititcal score: ${game.rating_top}</h2>
        </div>
    </div>
    `
      )
      .slice(0, 16)
      .join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
    //Mostrar error al usuario pendeiente
  }
})();
