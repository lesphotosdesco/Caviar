const albums = {
  "2022-2023": {
    "Meuh d'aurevoir aux M1 - 07/04/2023": "",
    "Meuh Pré-Cartel BDS x Supporter": "",
    "AW x Meuh Schroumpfs": "",
    "30 ans de l'EMAC - 01/06/23": "",
    "AW I2D French x American - 12/06/23": "",
    "ABC": "",
    "Meuh César": "",
    "Photos Cartel 2023": ""
  },

  "2023-2024": {
    "Pompoms": "",
    "Vidéos de familles": "",
    "Intervilles": "",
    "Meuh BDE d'inté": "",
    "AW - Partenariat Judo": "",
    "AW I2D": "",
    "Meuh BDA 09/09": "",
    "AW Les Savanturiers": "",
    "AW JIMAxCaviar": "",
    "Cross": "",
    "Meuh BTP": "",
    "BTP": "",
    "Meuh Club Supporter (France-Italie)": "",
    "BumbAlbi 14/10/23": "",
    "WEI": "",
    "Meuh Halloween": "",
    "TTF": "",
    "GALA 2023": "",
    "Meuh Savanturiers": "",
    "OVNI": "",
    "ASG": "",
    "AW X Meuh de Noël 16/12": "",
    "Meuh S2D": "",
    "Les Berges Sonores": "",
    "DESINTE": "",
    "HACKATARN": "",
    "Challenge du mineur": "",
    "Campagnes": "",
    "Meuh Club Supporters": "",
    "Tournois de TD": "",
    "AW Diversité BDA": "",
    "AW Palets & Terroirs x Diversité": "",
    "Meuh Cirque BDA": "",
    "Sortie Canoë": "",
    "ABC": "",
    "Fête de la musique": "",
    "Relais Caritatif": "",
    "Meuh JIMA": "",
    "César": ""
  },

  "2024-2025": {
    "Meuh d’inté": "",
    "Meuh BDA Dessins Animés": "",
    "AW BDA Laser game": "",
    "WEI 2024": "",
    "AW Savanturiers": "",
    "AW Jima": "",
    "AW Challenge": "",
    "AW BDE": "",
    "AW Thérèse": "",
    "Black BumbAlbi": "",
    "BTP²": "",
    "Club supporter": "",
    "Meuh Halloween BDA": "",
    "Meuh O.V.N.I.": "",
    "TTF": "",
    "GALA": "",
    "Soirée All Campus SNA": "",
    "Meuh ASG": "",
    "Meuh Sport d'hiver": "",
    "Meuh de Noel": "",
    "AW Breton": "",
    "Meuh I2D": "",
    "Meuh Poké mines": "",
    "Meuh": "",
    "Meuh Saint Valentin": "",
    "Meuh Supporter": "",
    "Challenge du mineur": "",
    "Campagnes": "",
    "Départ des MI": "",
    "Show pompon": "",
    "BDS x Club Supporter": "",
    "Meuh Paquza": "",
    "Meuh Lu'Mines'escence": "",
    "AW Americain": "",
    "ABC": "",
    "Meuh Cinéma": ""
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
