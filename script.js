const albums = {
  "2023-2024": {
    "Marché de Noël": {
      "Portraits": "https://photos.app.goo.gl/EXEMPLE1",
      "Stands": "https://photos.app.goo.gl/EXEMPLE2"
    },
    "Course inter-écoles": "https://photos.app.goo.gl/EXEMPLE3"
  },
  "2022-2023": {
    "Remise des diplômes": "https://photos.app.goo.gl/EXEMPLE4"
  }
};

const container = document.getElementById('albums-container');

for (const year in albums) {
  const folder = document.createElement('div');
  folder.className = 'folder';

  const title = document.createElement('h2');
  title.textContent = year;
  title.onclick = () => {
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
  };

  const list = document.createElement('div');
  list.className = 'album-list';

  for (const event in albums[year]) {
    const item = albums[year][event];
    const div = document.createElement('div');

    if (typeof item === 'string') {
      div.innerHTML = `📁 <strong>${event}</strong> – <a href="${item}" target="_blank">Voir l'album</a>`;
    } else {
      div.innerHTML = `📁 <strong>${event}</strong>`;
      for (const sub in item) {
        const subLink = item[sub];
        const subDiv = document.createElement('div');
        subDiv.style.paddingLeft = '20px';
        subDiv.innerHTML = `↳ ${sub} – <a href="${subLink}" target="_blank">Voir l'album</a>`;
        div.appendChild(subDiv);
      }
    }

    list.appendChild(div);
  }

  folder.appendChild(title);
  folder.appendChild(list);
  container.appendChild(folder);
}
