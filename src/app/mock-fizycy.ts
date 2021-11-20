import { Fizyk } from './fizyk';

export const FIZYCY: Fizyk[] = [{
  id: 1,
  nazwisko: 'Maria Curie Skłodowska',
  data_ur: new Date(1947, 1, 24),
  zdjecie: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTesePmFDRKADhLEaLs7pOTfI1Y3DgWXlgF7efaGawpsSL9Q4pDaljHw-kpcYq9",
  info: "Maria Skłodowska urodziła się 7 listopada 1867 w Warszawie, znajdującej się wówczas pod zaborem rosyjskim. Była piątym, najmłodszym dzieckiem nauczycieli Władysława Skłodowskiego i Bronisławy z domu Boguskiej. Wszechstronnie uzdolniona i pracowita, od najmłodszych lat odnosiła duże sukcesy w nauce. W wieku zaledwie 9 lat straciła najstarszą siostrę Zofię zmarłą na tyfus, a dwa lata później matkę, chorującą na gruźlicę. Te dramatyczne wydarzenia zacieśniły więzi rodzinne, a szczególnie z siostrą Bronisławą (1865-1939). Obie siostry łączyła prawdziwa pasja do nauki. Ponieważ wstęp na uniwersytet w Warszawie pod zaborem rosyjskim był zabroniony dla kobiet,",
},
{
  id: 2,
  nazwisko: 'Michio KAKU',
  data_ur: new Date(1947, 1, 24),
  zdjecie: 'data:image/jpeg;base64,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',
  info: 'Michio Kaku (Japanese: ミチオ カク or 賀来 道雄, ; born January 24, 1947) is an American theoretical physicist, futurist, and popularizer of science (science communicator). He is a professor of theoretical physics in the City College of New York and CUNY Graduate Center. Kaku has written several books about physics and related topics, has made frequent appearances on radio, television, and film, and writes online blogs and articles. He has written the New York Times best sellers Physics of the Impossible (2008), Physics of the Future (2011), and The Future of the Mind (2014).Kaku has hosted several TV specials for the BBC, the Discovery Channel, the History Channel, and the Science Channel.'
},
{
  id: 3,
  nazwisko: 'Albert Einstein',
  data_ur: new Date(1927, 11, 14),
  zdjecie: 'https://bi.im-g.pl/im/4d/2d/17/z24304717Q,Albert-Einstein-w-Princeton-w-1935-roku.jpg',
  info: 'Albert Einstein (wym. [ˈalbɐt ˈaɪ̯nʃtaɪ̯n] i) (ur. 14 marca 1879 w Ulm, zm. 18 kwietnia 1955 w Princeton) – fizyk teoretyczny i laureat Nagrody Nobla w dziedzinie fizyki za 1921 rok, w uznaniu za „wkład do fizyki teoretycznej, zwłaszcza opis prawa efektu fotoelektrycznego”. Einstein zrewolucjonizował zarówno mechanikę, jak i teorię pola, głównie w wersji klasycznej, choć odegrał też kluczową rolę dla mechaniki kwantowej. Zwykle jest uznawany za niemieckiego fizyka żydowskiego pochodzenia, pomimo związków ze Szwajcarią i USA; por. niżej.'
}
]
