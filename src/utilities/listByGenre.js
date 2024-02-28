export function listByGenre(items, currentGenre) {
  if (items.foreach((item) => item.genre.name === currentGenre)) {
    const genreItems = items.reduce((item) =>
      item.genre.name === currentGenre ? item : null
    );
    return genreItems;
  } else return items;
}
