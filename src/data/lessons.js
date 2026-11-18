// lessons.js - Trilha de Lições Gamificada Estilo Duolingo
// Cada unidade possui níveis com tipos variados de exercícios interativos

export const UNITS = [
  {
    "id": "unit_0",
    "number": 1,
    "title": "Acostumando",
    "description": "Primeiro contato com o app. Toque na figura e na palavra que combina.",
    "color": "#2E7D32",
    "accentColor": "#66BB6A",
    "icon": "🧩",
    "levels": [
      {
        "id": "u0_l1",
        "title": "Acostumando",
        "subtitle": "Figuras e palavras",
        "xpReward": 10,
        "questions": [
          {
            "type": "match",
            "prompt": "Toque na figura e depois na palavra certa:",
            "pairs": [
              {
                "xavante": "Tsibi",
                "portuguese": "Aranha",
                "image": "assets/aranha.png"
              },
              {
                "xavante": "Bödo",
                "portuguese": "Sol",
                "image": "assets/sol.png"
              },
              {
                "xavante": "Du",
                "portuguese": "Grama / Capim",
                "image": "assets/grama.png"
              },
              {
                "xavante": "Mã",
                "portuguese": "Ema",
                "image": "assets/ema.png"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Toque na figura e depois na palavra certa:",
            "pairs": [
              {
                "xavante": "A'odo",
                "portuguese": "Bocaiúva",
                "image": "assets/bocaiuva.png"
              },
              {
                "xavante": "Dapo're",
                "portuguese": "Ouvido",
                "image": "assets/ouvido.png"
              },
              {
                "xavante": "Apaire",
                "portuguese": "Lagartixa",
                "image": "assets/lagartixa.png"
              },
              {
                "xavante": "Uba",
                "portuguese": "Ponte",
                "image": "assets/ponte.png"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Toque na figura e depois na palavra certa:",
            "pairs": [
              {
                "xavante": "Waptsã",
                "portuguese": "Cachorro",
                "image": "assets/cachorro.png"
              },
              {
                "xavante": "Powawe",
                "portuguese": "Vaca",
                "image": "assets/vaca.png"
              },
              {
                "xavante": "Auhöiré",
                "portuguese": "Jacaré",
                "image": "assets/jacare.png"
              },
              {
                "xavante": "Dapara",
                "portuguese": "Pé",
                "image": "assets/pe.png"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Toque na figura e depois na palavra certa:",
            "pairs": [
              {
                "xavante": "Dató / Datõmõ",
                "portuguese": "Olho",
                "image": "assets/olho.png"
              },
              {
                "xavante": "Uhobö",
                "portuguese": "Porco",
                "image": "assets/porco.png"
              },
              {
                "xavante": "Piró'óre",
                "portuguese": "Borboleta",
                "image": "assets/borboleta.png"
              },
              {
                "xavante": "Idzo'úhu",
                "portuguese": "Abelha",
                "image": "assets/abelha.png"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Toque na figura e depois na palavra certa:",
            "pairs": [
              {
                "xavante": "Ma'u",
                "portuguese": "Pato",
                "image": "assets/pato.png"
              },
              {
                "xavante": "Padi",
                "portuguese": "Tamanduá",
                "image": "assets/tamandua.png"
              },
              {
                "xavante": "Wãrãhöbö",
                "portuguese": "Tatu",
                "image": "assets/tatu.png"
              },
              {
                "xavante": "Tsiwi",
                "portuguese": "Gato",
                "image": "assets/gato.png"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit_e2",
    "number": 2,
    "title": "Figura e Palavra",
    "description": "Veja a figura e toque na palavra em Xavante.",
    "color": "#1565C0",
    "accentColor": "#64B5F6",
    "icon": "🖼️",
    "levels": [
      {
        "id": "e2_l1",
        "title": "Figura e Palavra 1",
        "subtitle": "Imagem → Xavante",
        "xpReward": 10,
        "questions": [
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐆",
            "options": [
              "hu",
              "tsi'a",
              "'rãti",
              "'ru"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐍",
            "options": [
              "watsi",
              "umredzeire",
              "udzöne",
              "wahi"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐟",
            "options": [
              "pe'a",
              "ubu",
              "umnhi'ã",
              "udzö"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐔",
            "options": [
              "'rupo'rere",
              "tsi'a",
              "uba're",
              "utu'u"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🥚",
            "options": [
              "wãtãwã",
              "tã",
              "tsi'are",
              "pe'a"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐒",
            "options": [
              "uba're",
              "romnhi",
              "'ro'o",
              "tsi'are"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐀",
            "options": [
              "norõ'rã",
              "tsiwawẽ",
              "'ru",
              "'rãti"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐇",
            "options": [
              "ubu",
              "uhi",
              "'rãti",
              "'rupo'rere"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐎",
            "options": [
              "awaru",
              "utu'u",
              "wãtãwã",
              "waihörö"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐸",
            "options": [
              "uti",
              "wa'ru",
              "tsa'a",
              "wahi"
            ],
            "correctIndex": 0
          }
        ]
      },
      {
        "id": "e2_l2",
        "title": "Figura e Palavra 2",
        "subtitle": "Imagem → Xavante",
        "xpReward": 10,
        "questions": [
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐢",
            "options": [
              "tsiwawẽ",
              "tã",
              "u'ã",
              "hu"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🦜",
            "options": [
              "tsa'a",
              "waihörö",
              "romnhi",
              "ubu"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🦉",
            "options": [
              "ẽne",
              "hö'a",
              "tsiwawẽ",
              "tsa'a"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🕊️",
            "options": [
              "utu'u",
              "hö'a",
              "tãiwaipo",
              "romnhi"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🦅",
            "options": [
              "tsa'a",
              "tsiwawẽ",
              "'rupo'rere",
              "hö'a"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🪰",
            "options": [
              "robduri",
              "hötöra",
              "'rupo'rere",
              "ubu"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🦟",
            "options": [
              "hunhi'a",
              "tã",
              "wãtãwã",
              "'ru"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🦗",
            "options": [
              "udzö",
              "rob'rãpré",
              "uhi",
              "'ridi"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐜",
            "options": [
              "'rupo'rere",
              "ubu",
              "norõ'rã",
              "'rãti"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🐌",
            "options": [
              "hu",
              "wãtãwã",
              "ubu",
              "'ro'o"
            ],
            "correctIndex": 1
          }
        ]
      },
      {
        "id": "e2_l3",
        "title": "Figura e Palavra 3",
        "subtitle": "Imagem → Xavante",
        "xpReward": 10,
        "questions": [
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🌙",
            "options": [
              "wa'ru",
              "udzö",
              "tsi'are",
              "a'amo"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "⭐",
            "options": [
              "watsi",
              "robduri",
              "tãiwaptsa",
              "tsiwawẽ"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🌧️",
            "options": [
              "tsi'a",
              "tã",
              "awaru",
              "wãtãwã"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🔥",
            "options": [
              "hunhi'a",
              "umnhi'ã",
              "'ru",
              "udzö"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🪨",
            "options": [
              "ẽne",
              "watsi",
              "robduri",
              "tãiwaptsa"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "⚡",
            "options": [
              "'ro'o",
              "watsi",
              "tãiwaptsa",
              "atsaro"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🌈",
            "options": [
              "ropĩ",
              "awaru",
              "tãiwaipo",
              "utu'u"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🌊",
            "options": [
              "öporé",
              "tsa'a",
              "tsiwawẽ",
              "tsib'édzé"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "☁️",
            "options": [
              "höiwa nhirõno",
              "öporé",
              "tãiwaptsa",
              "uti"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "⛰️",
            "options": [
              "umredzeire",
              "'rãti",
              "'rupo'rere",
              "tsa'a"
            ],
            "correctIndex": 3
          }
        ]
      },
      {
        "id": "e2_l4",
        "title": "Figura e Palavra 4",
        "subtitle": "Imagem → Xavante",
        "xpReward": 10,
        "questions": [
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🌽",
            "options": [
              "waihörö",
              "'ridi",
              "hunhi'a",
              "wa'ru"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🍌",
            "options": [
              "pa'o",
              "ropĩ",
              "uhi",
              "tsib'édzé"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🍚",
            "options": [
              "atsaro",
              "u'ã",
              "ẽne",
              "wãtãwã"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🫘",
            "options": [
              "tãiwaptsa",
              "uba're",
              "atsaro",
              "uhi"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🎃",
            "options": [
              "ubu",
              "udzöne",
              "waihörö",
              "'ru"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🍉",
            "options": [
              "atsaro",
              "'ro'o",
              "umredzeire",
              "wetsu"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🍎",
            "options": [
              "tãiwaptsa",
              "pa'o",
              "rob'rãpré",
              "öporé"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🌳",
            "options": [
              "wede",
              "'ri",
              "rob'rãpré",
              "tãiwaipo"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🍃",
            "options": [
              "'ru",
              "a'amo",
              "wetsu",
              "öporé"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🍯",
            "options": [
              "tsib'édzé",
              "tã",
              "'ru",
              "ropĩ"
            ],
            "correctIndex": 3
          }
        ]
      },
      {
        "id": "e2_l5",
        "title": "Figura e Palavra 5",
        "subtitle": "Imagem → Xavante",
        "xpReward": 10,
        "questions": [
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🍞",
            "options": [
              "norõ'rã",
              "tsib'édzé",
              "udzöne",
              "pahõ"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🥩",
            "options": [
              "'ru",
              "romnhi",
              "tã",
              "u'ã"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🥥",
            "options": [
              "uba're",
              "u'ã",
              "awaru",
              "norõ'rã"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🏠",
            "options": [
              "'ri",
              "u'ã",
              "romnhi",
              "'ru"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🛶",
            "options": [
              "uba're",
              "tsiwawẽ",
              "tãiwaipo",
              "'ro'o"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🔪",
            "options": [
              "hötöra",
              "tsib'édzé",
              "udzö",
              "wãtãwã"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🪓",
            "options": [
              "tsib'édzé",
              "ropĩ",
              "hötöra",
              "ẽne"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🏹",
            "options": [
              "wa'ru",
              "umnhi'ã",
              "'rupo'rere",
              "tãiwaptsa"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "🚗",
            "options": [
              "norõ'rã",
              "robduri",
              "udzöne",
              "a'amo"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "emoji": "✈️",
            "options": [
              "höiwi",
              "tsiwawẽ",
              "'rãti",
              "romnhi"
            ],
            "correctIndex": 0
          }
        ]
      }
    ]
  },
  {
    "id": "unit_e3",
    "number": 3,
    "title": "Xavante e Português",
    "description": "Junte a palavra em Xavante com a palavra em português.",
    "color": "#6A1B9A",
    "accentColor": "#BA68C8",
    "icon": "🔤",
    "levels": [
      {
        "id": "e3_l1",
        "title": "O Corpo",
        "subtitle": "Xavante → Português",
        "xpReward": 10,
        "questions": [
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "da'rã",
                "portuguese": "Cabeça"
              },
              {
                "xavante": "dadzadawa",
                "portuguese": "Boca"
              },
              {
                "xavante": "danhitsi're",
                "portuguese": "Nariz"
              },
              {
                "xavante": "danhoto",
                "portuguese": "Língua"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "dadzéré",
                "portuguese": "Cabelo"
              },
              {
                "xavante": "danhib'rada",
                "portuguese": "Mão"
              },
              {
                "xavante": "danhipto",
                "portuguese": "Dedo"
              },
              {
                "xavante": "dadi",
                "portuguese": "Barriga"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "dahi",
                "portuguese": "Perna, osso"
              },
              {
                "xavante": "danho'udu",
                "portuguese": "Peito"
              },
              {
                "xavante": "da'wa",
                "portuguese": "Dente"
              },
              {
                "xavante": "daba",
                "portuguese": "Costas"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "dadza",
                "portuguese": "Coxa"
              },
              {
                "xavante": "dapaihi",
                "portuguese": "Braço"
              },
              {
                "xavante": "dahö",
                "portuguese": "Pele"
              },
              {
                "xavante": "dawapru",
                "portuguese": "Sangue"
              }
            ]
          }
        ]
      },
      {
        "id": "e3_l2",
        "title": "Gente e Família",
        "subtitle": "Xavante → Português",
        "xpReward": 10,
        "questions": [
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "aibö",
                "portuguese": "Homem"
              },
              {
                "xavante": "pi'õ",
                "portuguese": "Mulher"
              },
              {
                "xavante": "ai'uté",
                "portuguese": "Criança"
              },
              {
                "xavante": "adzarudu",
                "portuguese": "Moça"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "ba'õno",
                "portuguese": "Menina"
              },
              {
                "xavante": "'watébrémi",
                "portuguese": "Menino"
              },
              {
                "xavante": "a'uwẽ",
                "portuguese": "Gente, pessoa"
              },
              {
                "xavante": "damama",
                "portuguese": "Pai"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "dana",
                "portuguese": "Mãe"
              },
              {
                "xavante": "danhihudu",
                "portuguese": "Neto"
              },
              {
                "xavante": "dadub'rada",
                "portuguese": "Irmão mais velho"
              },
              {
                "xavante": "damro",
                "portuguese": "Esposo, esposa"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "da'ra",
                "portuguese": "Filho, filha"
              },
              {
                "xavante": "ai'utépré",
                "portuguese": "Bebê"
              },
              {
                "xavante": "wapté",
                "portuguese": "Jovem não iniciado"
              },
              {
                "xavante": "waradzu",
                "portuguese": "Não-indígena"
              }
            ]
          }
        ]
      },
      {
        "id": "e3_l3",
        "title": "A Natureza",
        "subtitle": "Xavante → Português",
        "xpReward": 10,
        "questions": [
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "ti'a",
                "portuguese": "Chão, terra"
              },
              {
                "xavante": "höiwa",
                "portuguese": "Céu"
              },
              {
                "xavante": "marã",
                "portuguese": "Mata"
              },
              {
                "xavante": "dzara",
                "portuguese": "Córrego"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "tsupara",
                "portuguese": "Areia"
              },
              {
                "xavante": "dzé'a",
                "portuguese": "Barro"
              },
              {
                "xavante": "rowa'u",
                "portuguese": "Vento"
              },
              {
                "xavante": "ö",
                "portuguese": "Água"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "öwawẽ",
                "portuguese": "Rio grande"
              },
              {
                "xavante": "mara",
                "portuguese": "Noite"
              },
              {
                "xavante": "rowa'a",
                "portuguese": "Dia"
              },
              {
                "xavante": "wahu",
                "portuguese": "Ano"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "hö",
                "portuguese": "Frio"
              },
              {
                "xavante": "rowa'ro",
                "portuguese": "Calor"
              },
              {
                "xavante": "ötsipe",
                "portuguese": "Ilha"
              },
              {
                "xavante": "u",
                "portuguese": "Lago"
              }
            ]
          }
        ]
      },
      {
        "id": "e3_l4",
        "title": "A Casa e as Coisas",
        "subtitle": "Xavante → Português",
        "xpReward": 10,
        "questions": [
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "'ridawa",
                "portuguese": "Porta"
              },
              {
                "xavante": "'ridzadadzöri",
                "portuguese": "Janela"
              },
              {
                "xavante": "dzadzahö",
                "portuguese": "Roupa"
              },
              {
                "xavante": "dapara'udza",
                "portuguese": "Sapato"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "tsi'õno",
                "portuguese": "Cesto xavante"
              },
              {
                "xavante": "pidza",
                "portuguese": "Panela"
              },
              {
                "xavante": "hötsidzé",
                "portuguese": "Copo"
              },
              {
                "xavante": "wededza",
                "portuguese": "Mesa"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "datsimatsitsidzé",
                "portuguese": "Cadeira"
              },
              {
                "xavante": "waptö",
                "portuguese": "Cama, esteira"
              },
              {
                "xavante": "uibro",
                "portuguese": "Borduna"
              },
              {
                "xavante": "wairo",
                "portuguese": "Cocar"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "dzö",
                "portuguese": "Chocalho"
              },
              {
                "xavante": "mi",
                "portuguese": "Lenha"
              },
              {
                "xavante": "unhamare",
                "portuguese": "Fósforo"
              },
              {
                "xavante": "romnhoré nhihödö",
                "portuguese": "Livro"
              }
            ]
          }
        ]
      },
      {
        "id": "e3_l5",
        "title": "Comida e Plantas",
        "subtitle": "Xavante → Português",
        "xpReward": 10,
        "questions": [
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "upa",
                "portuguese": "Mandioca"
              },
              {
                "xavante": "mo'õni",
                "portuguese": "Cará"
              },
              {
                "xavante": "wab'ru'rã",
                "portuguese": "Batata"
              },
              {
                "xavante": "abare",
                "portuguese": "Piqui"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "a'õ",
                "portuguese": "Jatobá"
              },
              {
                "xavante": "uiwede",
                "portuguese": "Buriti"
              },
              {
                "xavante": "abadzi",
                "portuguese": "Algodão"
              },
              {
                "xavante": "budze",
                "portuguese": "Cana"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "adze",
                "portuguese": "Açúcar"
              },
              {
                "xavante": "datsaiwarĩrĩdzé",
                "portuguese": "Sal"
              },
              {
                "xavante": "romhöiwa'u",
                "portuguese": "Leite"
              },
              {
                "xavante": "tsada'ré",
                "portuguese": "Bolo de milho"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "nodzö",
                "portuguese": "Milho xavante"
              },
              {
                "xavante": "wedenhamadzadzu",
                "portuguese": "Café"
              },
              {
                "xavante": "tsé",
                "portuguese": "Macaúba"
              },
              {
                "xavante": "mra",
                "portuguese": "Comida"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit_e4",
    "number": 4,
    "title": "Ouvir e Ler",
    "description": "Escute a palavra em Xavante e toque na palavra escrita.",
    "color": "#00838F",
    "accentColor": "#4DD0E1",
    "icon": "👂",
    "levels": [
      {
        "id": "e4_l1",
        "title": "Fazer 1",
        "subtitle": "Som Xavante → Xavante escrito",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "romhuri",
            "options": [
              "uipra",
              "romhuri",
              "wamro",
              "wapari"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "wapari",
            "options": [
              "wapari",
              "wamro",
              "uipra",
              "tsãmri"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsãmri",
            "options": [
              "rowaihu",
              "tsãmri",
              "daribi",
              "wapari"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "nharĩ",
            "options": [
              "uipra",
              "romhuri",
              "daribi",
              "nharĩ"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "praba",
            "options": [
              "tsãmri",
              "praba",
              "wapari",
              "uipra"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "daribi",
            "options": [
              "praba",
              "wamro",
              "romhuri",
              "daribi"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "wamro",
            "options": [
              "daribi",
              "uptsõ",
              "nharĩ",
              "wamro"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "uptsõ",
            "options": [
              "romhuri",
              "uptsõ",
              "praba",
              "uipra"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "uipra",
            "options": [
              "nharĩ",
              "wamro",
              "uipra",
              "daribi"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "rowaihu",
            "options": [
              "rowaihu",
              "wamro",
              "nharĩ",
              "praba"
            ],
            "correctIndex": 0
          }
        ]
      },
      {
        "id": "e4_l2",
        "title": "Fazer 2",
        "subtitle": "Som Xavante → Xavante escrito",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "romnhoré",
            "options": [
              "waihu'u",
              "romnhoré",
              "rotsa'rada",
              "wapto"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "waihu'u",
            "options": [
              "wapto",
              "tsimani",
              "romnhoré",
              "waihu'u"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "rotsawẽrẽ",
            "options": [
              "tsimani",
              "wapto",
              "waihu'u",
              "rotsawẽrẽ"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "rotsa'rada",
            "options": [
              "tsõmri",
              "waptẽrẽ",
              "rotsa'rada",
              "roptata"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsõmri",
            "options": [
              "rotsa'rada",
              "rotsawẽrẽ",
              "tsõmri",
              "wapto"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "upari",
            "options": [
              "upari",
              "wapto",
              "romnhoré",
              "waptẽrẽ"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "waptẽrẽ",
            "options": [
              "waptẽrẽ",
              "tsimani",
              "roptata",
              "rotsa'rada"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "wapto",
            "options": [
              "wapto",
              "rotsa'rada",
              "rotsawẽrẽ",
              "waihu'u"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsimani",
            "options": [
              "rotsawẽrẽ",
              "tsimani",
              "upari",
              "rotsa'rada"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "roptata",
            "options": [
              "rotsa'rada",
              "upari",
              "roptata",
              "tsõmri"
            ],
            "correctIndex": 2
          }
        ]
      },
      {
        "id": "e4_l3",
        "title": "Fazer 3",
        "subtitle": "Som Xavante → Xavante escrito",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "rob're",
            "options": [
              "tsitsi",
              "rob're",
              "wadzöri",
              "ui'éré"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "wadzöri",
            "options": [
              "rob're",
              "tsidö",
              "wadzöri",
              "udzuri"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsipi",
            "options": [
              "wadzöri",
              "tsidö",
              "rob're",
              "tsipi"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsõ'ẽ",
            "options": [
              "udzuri",
              "tsõdzi",
              "rob're",
              "tsõ'ẽ"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "ui'éré",
            "options": [
              "udzuri",
              "tsidö",
              "tsipi",
              "ui'éré"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "udzuri",
            "options": [
              "tsu",
              "udzuri",
              "tsidö",
              "tsipi"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsidö",
            "options": [
              "tsõdzi",
              "tsidö",
              "wadzöri",
              "rob're"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsõdzi",
            "options": [
              "tsu",
              "ui'éré",
              "tsõdzi",
              "tsidö"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsitsi",
            "options": [
              "tsitsi",
              "wadzöri",
              "tsidö",
              "tsõdzi"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsu",
            "options": [
              "tsitsi",
              "tsu",
              "tsidö",
              "wadzöri"
            ],
            "correctIndex": 1
          }
        ]
      },
      {
        "id": "e4_l4",
        "title": "Como é?",
        "subtitle": "Som Xavante → Xavante escrito",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsa'ẽne",
            "options": [
              "tse",
              "tsa'ẽne",
              "'rudu",
              "tsapo"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsapo",
            "options": [
              "tsapo",
              "pire",
              "'rudu",
              "wapu"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "pire",
            "options": [
              "wapti",
              "'ré",
              "tsapo",
              "pire"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "wapu",
            "options": [
              "'rudu",
              "tede",
              "pire",
              "wapu"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tede",
            "options": [
              "'rudu",
              "tsapo",
              "tsa'ẽne",
              "tede"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "'ré",
            "options": [
              "tsapo",
              "pire",
              "'ré",
              "wapu"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "wapti",
            "options": [
              "tsa'ẽne",
              "pire",
              "wapti",
              "tsapo"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "pa",
            "options": [
              "pire",
              "pa",
              "tsa'ẽne",
              "tede"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "'rudu",
            "options": [
              "'ré",
              "wapu",
              "'rudu",
              "tse"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tse",
            "options": [
              "tsa'ẽne",
              "tsapo",
              "tse",
              "'ré"
            ],
            "correctIndex": 2
          }
        ]
      },
      {
        "id": "e4_l5",
        "title": "Cores e Números",
        "subtitle": "Som Xavante → Xavante escrito",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "pré",
            "options": [
              "'rãdö",
              "tsi'umdatõ",
              "pré",
              "mitsi"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "'rãdö",
            "options": [
              "'rãdö",
              "pré",
              "maparane",
              "mitsi"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "rã",
            "options": [
              "rã",
              "udzé",
              "maparane",
              "ĩmrotõ"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "udzé",
            "options": [
              "rã",
              "tsi'umdatõ",
              "dzadzu",
              "udzé"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "pré'a",
            "options": [
              "pré",
              "ĩmrotõ",
              "rã",
              "pré'a"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "dzadzu",
            "options": [
              "pré",
              "tsi'umdatõ",
              "ĩmrotõ",
              "dzadzu"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "mitsi",
            "options": [
              "ĩmrotõ",
              "rã",
              "mitsi",
              "maparane"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "maparane",
            "options": [
              "ĩmrotõ",
              "tsi'umdatõ",
              "maparane",
              "pré"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "tsi'umdatõ",
            "options": [
              "pré",
              "mitsi",
              "pré'a",
              "tsi'umdatõ"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "ĩmrotõ",
            "options": [
              "ĩmrotõ",
              "mitsi",
              "rã",
              "udzé"
            ],
            "correctIndex": 0
          }
        ]
      }
    ]
  },
  {
    "id": "unit_e5",
    "number": 5,
    "title": "Ouvir e Entender",
    "description": "Escute a palavra em Xavante e toque no que ela quer dizer em português.",
    "color": "#EF6C00",
    "accentColor": "#FFB74D",
    "icon": "💬",
    "levels": [
      {
        "id": "e5_l1",
        "title": "Bichos do Mato",
        "subtitle": "Som Xavante → Português",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "uhödö",
            "options": [
              "Cascavel",
              "Paca",
              "Anta",
              "Cotia"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "ubdö",
            "options": [
              "Onça parda",
              "Paca",
              "Queixada",
              "Capivara"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "aihö",
            "options": [
              "Paca",
              "Veado campeiro",
              "Cotia",
              "Queixada"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "atsada",
            "options": [
              "Onça parda",
              "Quati",
              "Cotia",
              "Sucuri"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "uhö",
            "options": [
              "Onça parda",
              "Quati",
              "Sucuri",
              "Queixada"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "dzöhuru",
            "options": [
              "Capivara",
              "Cascavel",
              "Cotia",
              "Paca"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "'rawa",
            "options": [
              "Cascavel",
              "Anta",
              "Cotia",
              "Paca"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "wa'õ",
            "options": [
              "Sucuri",
              "Anta",
              "Quati",
              "Capivara"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "wanha'u",
            "options": [
              "Queixada",
              "Veado campeiro",
              "Quati",
              "Sucuri"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "tsidzö",
            "options": [
              "Cascavel",
              "Quati",
              "Capivara",
              "Paca"
            ],
            "correctIndex": 0
          }
        ]
      },
      {
        "id": "e5_l2",
        "title": "Aves",
        "subtitle": "Som Xavante → Português",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "'rada",
            "options": [
              "Arara vermelha",
              "Garça",
              "Bem-te-vi",
              "Perdiz"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "tsõté",
            "options": [
              "Arara vermelha",
              "Gavião",
              "Arara amarela",
              "Beija-flor"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "tsi'u",
            "options": [
              "Arara amarela",
              "Gavião",
              "Perdiz",
              "Arara vermelha"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "tsipahudu",
            "options": [
              "Seriema",
              "Urubu",
              "Arara vermelha",
              "Beija-flor"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "wi'i",
            "options": [
              "Seriema",
              "Perdiz",
              "Bem-te-vi",
              "Periquito"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "wa'ridi",
            "options": [
              "Urubu",
              "Arara amarela",
              "Seriema",
              "Periquito"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "tsiba",
            "options": [
              "Seriema",
              "Gavião",
              "Garça",
              "Periquito"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "arãrã",
            "options": [
              "Arara amarela",
              "Beija-flor",
              "Arara vermelha",
              "Periquito"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "'rẽre",
            "options": [
              "Gavião",
              "Perdiz",
              "Seriema",
              "Periquito"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "tsitéhã",
            "options": [
              "Arara amarela",
              "Garça",
              "Seriema",
              "Bem-te-vi"
            ],
            "correctIndex": 3
          }
        ]
      },
      {
        "id": "e5_l3",
        "title": "Bichos da Água e Pequenos",
        "subtitle": "Som Xavante → Português",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "nhowi",
            "options": [
              "Ariranha",
              "Mutuca",
              "Pacu",
              "Cigarra"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "i",
            "options": [
              "Piranha",
              "Cupim",
              "Cigarra",
              "Marimbondo"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "pidu",
            "options": [
              "Ariranha",
              "Pacu",
              "Boto",
              "Mutuca"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "wamnhanare",
            "options": [
              "Carrapato",
              "Marimbondo",
              "Traíra",
              "Cigarra"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "'wa'wa",
            "options": [
              "Cigarra",
              "Traíra",
              "Piranha",
              "Marimbondo"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "pedzapodo",
            "options": [
              "Pacu",
              "Boto",
              "Traíra",
              "Piranha"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "dzu'u'é",
            "options": [
              "Ariranha",
              "Traíra",
              "Cigarra",
              "Cupim"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "pedzai'y",
            "options": [
              "Traíra",
              "Boto",
              "Ariranha",
              "Carrapato"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "ti'i",
            "options": [
              "Marimbondo",
              "Pacu",
              "Ariranha",
              "Boto"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "tirowa",
            "options": [
              "Mutuca",
              "Marimbondo",
              "Carrapato",
              "Piranha"
            ],
            "correctIndex": 2
          }
        ]
      },
      {
        "id": "e5_l4",
        "title": "O Tempo",
        "subtitle": "Som Xavante → Português",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "ãhãna",
            "options": [
              "Depressa",
              "De noite",
              "Hoje",
              "Ontem"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "ahömhö",
            "options": [
              "Ontem",
              "De noite",
              "Amanhã",
              "Depressa"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "awẽ",
            "options": [
              "Depressa",
              "Amanhã",
              "De noite",
              "Cedo"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "mararé",
            "options": [
              "Cedo",
              "Hoje",
              "Meio-dia",
              "Depressa"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "barana",
            "options": [
              "Meio-dia",
              "Depressa",
              "De noite",
              "Amanhã"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "abdzuma",
            "options": [
              "Ontem",
              "Amanhã",
              "Meio-dia",
              "Hoje"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "höiwahö",
            "options": [
              "Hoje",
              "Depois",
              "Tarde",
              "De verdade"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "apötsi",
            "options": [
              "Depois",
              "De verdade",
              "Hoje",
              "Amanhã"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "nare",
            "options": [
              "Tarde",
              "De verdade",
              "Amanhã",
              "Meio-dia"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "tsa'ẽtẽ",
            "options": [
              "Depressa",
              "Hoje",
              "Amanhã",
              "Depois"
            ],
            "correctIndex": 0
          }
        ]
      },
      {
        "id": "e5_l5",
        "title": "Lugares",
        "subtitle": "Som Xavante → Português",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "warã",
            "options": [
              "Escola",
              "Caminho",
              "Brejo",
              "Centro da aldeia"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "buru",
            "options": [
              "Brejo",
              "Caminho",
              "Roça",
              "Banheiro"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "bödödi",
            "options": [
              "Roça",
              "Caminho",
              "Centro da aldeia",
              "Brejo"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "romnhorédzé",
            "options": [
              "Escola",
              "Brejo",
              "Clareira",
              "Caminho"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "dawededzé",
            "options": [
              "Brejo",
              "Escola",
              "Caminho",
              "Hospital"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "'ri'ahö",
            "options": [
              "Roça",
              "Clareira",
              "Brejo",
              "Cidade"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "tsitob're",
            "options": [
              "Escola",
              "Banheiro",
              "Hospital",
              "Roça"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "robtö",
            "options": [
              "Banheiro",
              "Brejo",
              "Roça",
              "Colina"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "rowarĩrĩ",
            "options": [
              "Colina",
              "Clareira",
              "Escola",
              "Caminho"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "tsadarã",
            "options": [
              "Brejo",
              "Colina",
              "Banheiro",
              "Hospital"
            ],
            "correctIndex": 0
          }
        ]
      }
    ]
  },
  {
    "id": "unit_5",
    "number": 6,
    "title": "Fazer e Contar",
    "description": "Comer, beber, escutar e contar.",
    "color": "#00897B",
    "accentColor": "#4DB6AC",
    "icon": "🔢",
    "levels": [
      {
        "id": "u5_l1",
        "title": "Coisas que a Gente Faz",
        "subtitle": "Tsa, Öri e Wapari",
        "xpReward": 30,
        "questions": [
          {
            "type": "choice",
            "prompt": "Como fala \"Comer\" em Xavante?",
            "options": [
              "Tsa",
              "Öri",
              "Damõri",
              "Hã"
            ],
            "correctIndex": 0,
            "phonetic": "[tsa]"
          },
          {
            "type": "choice",
            "prompt": "E como fala \"Beber água\"?",
            "options": [
              "Öri",
              "Tsa",
              "Wapari",
              "Aina"
            ],
            "correctIndex": 0,
            "phonetic": "[ə̃-ri]"
          },
          {
            "type": "choice",
            "prompt": "O que quer dizer \"Wapari\"?",
            "options": [
              "Ouvir / Escutar",
              "Correr",
              "Dormir",
              "Pintar"
            ],
            "correctIndex": 0,
            "phonetic": "[wa-pa-ri]",
            "culturalTip": "Escutar os mais velhos é muito importante para o povo Xavante."
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Tsa",
                "portuguese": "Comer"
              },
              {
                "xavante": "Öri",
                "portuguese": "Beber"
              },
              {
                "xavante": "Wapari",
                "portuguese": "Ouvir"
              },
              {
                "xavante": "Aina",
                "portuguese": "Ver / Olhar"
              }
            ]
          }
        ]
      },
      {
        "id": "u5_l2",
        "title": "Contando no Cerrado",
        "subtitle": "Misi, Maptutu e Si'ubdató",
        "xpReward": 30,
        "questions": [
          {
            "type": "choice",
            "prompt": "Como fala \"Um (1)\"?",
            "options": [
              "Misi",
              "Maptutu",
              "Si'ubdató",
              "Ahö"
            ],
            "correctIndex": 0,
            "phonetic": "[mi-si]"
          },
          {
            "type": "choice",
            "prompt": "Como fala \"Dois (2)\"?",
            "options": [
              "Maptutu",
              "Misi",
              "Ahö",
              "Bö"
            ],
            "correctIndex": 0,
            "phonetic": "[map-tu-tu]"
          },
          {
            "type": "choice",
            "prompt": "E como fala \"Três (3)\"?",
            "options": [
              "Si'ubdató",
              "Maptutu",
              "Misi",
              "Aibö"
            ],
            "correctIndex": 0,
            "phonetic": "[si-ʔub-da-tõ]"
          },
          {
            "type": "choice",
            "prompt": "Quando tem muita gente ou muito bicho junto, a gente fala:",
            "options": [
              "Ahö",
              "Misi",
              "Ri",
              "Ö"
            ],
            "correctIndex": 0,
            "phonetic": "[a-hə̃]"
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Misi",
                "portuguese": "Um (1)"
              },
              {
                "xavante": "Maptutu",
                "portuguese": "Dois (2)"
              },
              {
                "xavante": "Si'ubdató",
                "portuguese": "Três (3)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit_4",
    "number": 7,
    "title": "Animais do Cerrado",
    "description": "A onça, o gavião, o peixe e outros bichos.",
    "color": "#C2185B",
    "accentColor": "#F48FB1",
    "icon": "🐆",
    "levels": [
      {
        "id": "u4_l1",
        "title": "Bichos da Aldeia",
        "subtitle": "Tsere e Romhö",
        "xpReward": 25,
        "questions": [
          {
            "type": "choice",
            "prompt": "O que é \"Tsere\"?",
            "options": [
              "Gavião / Pássaro",
              "Onça-pintada",
              "Tamanduá",
              "Jacaré"
            ],
            "correctIndex": 0,
            "phonetic": "[tse-re]",
            "culturalTip": "O gavião enxerga longe e voa rápido."
          },
          {
            "type": "choice",
            "prompt": "Como fala \"Onça\" em Xavante?",
            "options": [
              "Romhö",
              "Wahi",
              "Höri",
              "Aba"
            ],
            "correctIndex": 0,
            "phonetic": "[rõm-hə̃]",
            "culturalTip": "A onça é a nossa guia neste app! Ela é forte e respeitada."
          },
          {
            "type": "match",
            "prompt": "Junte cada bicho com o nome em português:",
            "pairs": [
              {
                "xavante": "Tsere",
                "portuguese": "Pássaro / Gavião"
              },
              {
                "xavante": "Romhö",
                "portuguese": "Onça"
              },
              {
                "xavante": "Wahi",
                "portuguese": "Cobra"
              },
              {
                "xavante": "Höri",
                "portuguese": "Peixe"
              }
            ]
          },
          {
            "type": "choice",
            "prompt": "O que é \"Höri\"?",
            "options": [
              "Peixe",
              "Anta",
              "Cobra",
              "Arara"
            ],
            "correctIndex": 0,
            "phonetic": "[hə̃-ri]"
          }
        ]
      },
      {
        "id": "u4_l2",
        "title": "Bichos do Mato",
        "subtitle": "Wahi, Po're e Aba",
        "xpReward": 25,
        "questions": [
          {
            "type": "choice",
            "prompt": "Como fala \"Cobra\" em Xavante?",
            "options": [
              "Wahi",
              "Tsere",
              "Ri",
              "Hã"
            ],
            "correctIndex": 0,
            "phonetic": "[wa-hi]"
          },
          {
            "type": "choice",
            "prompt": "Como fala \"Anta\"?",
            "options": [
              "Po're",
              "Aba",
              "Romhö",
              "Aibö"
            ],
            "correctIndex": 0,
            "phonetic": "[põ-ʔre]"
          },
          {
            "type": "choice",
            "prompt": "E como fala \"Veado\"?",
            "options": [
              "Aba",
              "Pi'õ",
              "E rowẽdi",
              "Wahu"
            ],
            "correctIndex": 0,
            "phonetic": "[a-ba]"
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Wahi",
                "portuguese": "Cobra"
              },
              {
                "xavante": "Po're",
                "portuguese": "Anta"
              },
              {
                "xavante": "Aba",
                "portuguese": "Veado"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit_3",
    "number": 8,
    "title": "O Cerrado e a Terra",
    "description": "Palavras da terra, do rio e do mato.",
    "color": "#2E7D32",
    "accentColor": "#81C784",
    "icon": "🌿",
    "levels": [
      {
        "id": "u3_l1",
        "title": "Elementos da Natureza",
        "subtitle": "Hã, Bö e Ö",
        "xpReward": 20,
        "questions": [
          {
            "type": "choice",
            "prompt": "O que quer dizer \"Hã\"?",
            "options": [
              "Terra / Chão",
              "Fogo",
              "Céu",
              "Peixe"
            ],
            "correctIndex": 0,
            "phonetic": "[hã]"
          },
          {
            "type": "choice",
            "prompt": "Como fala \"Cerrado / Mato\" em Xavante?",
            "options": [
              "Bö",
              "Ö",
              "Ri",
              "Damõri"
            ],
            "correctIndex": 0,
            "phonetic": "[bə̃]"
          },
          {
            "type": "choice",
            "prompt": "Como fala \"Água\"?",
            "options": [
              "Ö",
              "Po'o",
              "Wahi",
              "Aibö"
            ],
            "correctIndex": 0,
            "phonetic": "[ə̃]"
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Hã",
                "portuguese": "Terra"
              },
              {
                "xavante": "Bö",
                "portuguese": "Cerrado"
              },
              {
                "xavante": "Ö",
                "portuguese": "Água"
              },
              {
                "xavante": "Po'o",
                "portuguese": "Fogo"
              }
            ]
          }
        ]
      },
      {
        "id": "u3_l2",
        "title": "O Rio e o Céu",
        "subtitle": "Öwawe, Wahu e A'amo",
        "xpReward": 25,
        "questions": [
          {
            "type": "choice",
            "prompt": "\"Öwawe\" quer dizer Rio Grande. Que rio é esse?",
            "options": [
              "Rio das Mortes",
              "Rio Amazonas",
              "Rio Tietê",
              "Rio São Francisco"
            ],
            "correctIndex": 0,
            "phonetic": "[ə̃-wa-we]",
            "culturalTip": "O Rio das Mortes (Öwawe) passa nas terras Xavante."
          },
          {
            "type": "choice",
            "prompt": "Como fala \"Sol\" em Xavante?",
            "options": [
              "Wahu",
              "A'amo",
              "Ri",
              "Höri"
            ],
            "correctIndex": 0,
            "phonetic": "[wa-hu]"
          },
          {
            "type": "choice",
            "prompt": "Como fala \"Lua\"?",
            "options": [
              "A'amo",
              "Wahu",
              "Hã",
              "Tsa"
            ],
            "correctIndex": 0,
            "phonetic": "[a-ʔa-mõ]"
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Öwawe",
                "portuguese": "Rio das Mortes"
              },
              {
                "xavante": "Wahu",
                "portuguese": "Sol"
              },
              {
                "xavante": "A'amo",
                "portuguese": "Lua"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit_2",
    "number": 9,
    "title": "Gente, Família e Aldeia",
    "description": "Pessoas da aldeia: pai, mãe, crianças e velhos.",
    "color": "#E65100",
    "accentColor": "#FFB74D",
    "icon": "👥",
    "levels": [
      {
        "id": "u2_l1",
        "title": "Pessoas da Aldeia",
        "subtitle": "Aibö, Pi'õ e A'uwẽ",
        "xpReward": 20,
        "questions": [
          {
            "type": "choice",
            "prompt": "O que quer dizer \"Aibö\"?",
            "options": [
              "Homem",
              "Peixe",
              "Fogo",
              "Lua"
            ],
            "correctIndex": 0,
            "phonetic": "[aj-bə̃]"
          },
          {
            "type": "choice",
            "prompt": "Como fala \"Mulher\" em Xavante?",
            "options": [
              "Pi'õ",
              "Aba",
              "Bö",
              "Wahu"
            ],
            "correctIndex": 0,
            "phonetic": "[pi-ʔõ]"
          },
          {
            "type": "choice",
            "prompt": "\"A'uwẽ\" quer dizer:",
            "options": [
              "Povo verdadeiro / Gente",
              "Água do rio",
              "Gavião veloz",
              "Noite escura"
            ],
            "correctIndex": 0,
            "phonetic": "[a-ʔu-wẽ]",
            "culturalTip": "A'uwẽ Uptabi é o nome do povo Xavante, que vive no Mato Grosso."
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Aibö",
                "portuguese": "Homem"
              },
              {
                "xavante": "Pi'õ",
                "portuguese": "Mulher"
              },
              {
                "xavante": "Ba'õtõ",
                "portuguese": "Criança"
              },
              {
                "xavante": "A'uwẽ",
                "portuguese": "Povo / Gente"
              }
            ]
          }
        ]
      },
      {
        "id": "u2_l2",
        "title": "A Família",
        "subtitle": "I-mama, I-no e Ba'õtõ",
        "xpReward": 25,
        "questions": [
          {
            "type": "choice",
            "prompt": "Como fala \"Meu pai\" em Xavante?",
            "options": [
              "I-mama",
              "I-no",
              "Waradzu",
              "Po're"
            ],
            "correctIndex": 0,
            "phonetic": "[i-ma-ma]"
          },
          {
            "type": "choice",
            "prompt": "E como fala \"Minha mãe\"?",
            "options": [
              "I-no",
              "I-mama",
              "Tsere",
              "Ri"
            ],
            "correctIndex": 0,
            "phonetic": "[i-nõ]"
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "I-mama",
                "portuguese": "Meu pai"
              },
              {
                "xavante": "I-no",
                "portuguese": "Minha mãe"
              },
              {
                "xavante": "Waradzu",
                "portuguese": "Não-indígena"
              },
              {
                "xavante": "Aibö",
                "portuguese": "Homem"
              }
            ]
          },
          {
            "type": "choice",
            "prompt": "Como os Xavante chamam quem não é indígena?",
            "options": [
              "Waradzu",
              "A'uwẽ",
              "Ba'õtõ",
              "Höri"
            ],
            "correctIndex": 0,
            "phonetic": "[wa-ra-dzu]",
            "culturalTip": "\"Waradzu\" é o branco, quem não é indígena."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_1",
    "number": 10,
    "title": "Primeiras Palavras: Oi e Tchau",
    "description": "Aprenda a dizer oi, obrigado e tchau na aldeia.",
    "color": "#8D5524",
    "accentColor": "#FF7043",
    "icon": "🤝",
    "levels": [
      {
        "id": "u1_l1",
        "title": "Como vai você?",
        "subtitle": "E rowẽdi e Rowẽ uptabidi",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Como fala \"Tudo bem?\" em Xavante?",
            "options": [
              "E rowẽdi",
              "Hã",
              "Romhö",
              "Aibö"
            ],
            "correctIndex": 0,
            "phonetic": "[tõ ba]",
            "culturalTip": "Na aldeia, a gente fala \"E rowẽdi\" quando encontra alguém."
          },
          {
            "type": "choice",
            "prompt": "O que quer dizer \"Rowẽ uptabidi\"?",
            "options": [
              "Boa noite",
              "Muito bem! / Tudo ótimo!",
              "Vá embora",
              "Obrigado"
            ],
            "correctIndex": 1,
            "phonetic": "[tõ up-ta-bi]",
            "culturalTip": "\"Uptabi\" quer dizer verdadeiro, bom, certo."
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "E rowẽdi",
                "portuguese": "Tudo bem?"
              },
              {
                "xavante": "Rowẽ uptabidi",
                "portuguese": "Muito bem!"
              },
              {
                "xavante": "Damõri",
                "portuguese": "Vamos / Ir"
              },
              {
                "xavante": "Heparĩ",
                "portuguese": "Obrigado"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "E rowẽdi",
                "portuguese": "Tudo bem?"
              },
              {
                "xavante": "Rowẽ uptabidi",
                "portuguese": "Muito bem! / Tudo ótimo!"
              },
              {
                "xavante": "Damõri",
                "portuguese": "Vamos / Ir"
              },
              {
                "xavante": "Heparĩ",
                "portuguese": "Obrigado"
              }
            ]
          },
          {
            "type": "phonetic",
            "prompt": "Escute a palavra:",
            "word": "Heparĩ",
            "phonetic": "[he-pa-rĩ]",
            "meaning": "Obrigado / Gratidão",
            "options": [
              "Heparĩ",
              "Damõri",
              "Aibö"
            ],
            "correctIndex": 0,
            "culturalTip": "Heparĩ é como se agradece."
          }
        ]
      },
      {
        "id": "u1_l2",
        "title": "Despedidas e Gratidão",
        "subtitle": "Heparĩ e Morĩ wa'aba",
        "xpReward": 20,
        "questions": [
          {
            "type": "choice",
            "prompt": "Como fala \"Obrigado\" em Xavante?",
            "options": [
              "Heparĩ",
              "Po'o",
              "Wahi",
              "Bö"
            ],
            "correctIndex": 0,
            "phonetic": "[he-pa-rĩ]"
          },
          {
            "type": "choice",
            "prompt": "O que você fala para quem vai viajar: \"Vão em paz!\"?",
            "options": [
              "Morĩ wa'aba",
              "E rowẽdi",
              "Tsa",
              "Höri"
            ],
            "correctIndex": 0,
            "phonetic": "[mõ-rĩ wa-a-ba]"
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Heparĩ",
                "portuguese": "Obrigado"
              },
              {
                "xavante": "Morĩ wa'aba",
                "portuguese": "Vão em paz"
              },
              {
                "xavante": "E rowẽdi",
                "portuguese": "Como vai?"
              },
              {
                "xavante": "Rowẽ uptabidi",
                "portuguese": "Tudo ótimo"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Heparĩ",
                "portuguese": "Obrigado"
              },
              {
                "xavante": "Morĩ wa'aba",
                "portuguese": "Vão em paz"
              },
              {
                "xavante": "E rowẽdi",
                "portuguese": "Como vai?"
              },
              {
                "xavante": "Rowẽ uptabidi",
                "portuguese": "Tudo ótimo"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Marawẽ",
                "portuguese": "Boa noite"
              },
              {
                "xavante": "Aimõri",
                "portuguese": "Já ir embora"
              },
              {
                "xavante": "Damõri",
                "portuguese": "Vamos / Ir"
              },
              {
                "xavante": "Heparĩ",
                "portuguese": "Obrigado"
              }
            ]
          }
        ]
      }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: 'first_lesson',
    title: 'Primeira Palavra',
    desc: 'Termine sua primeira lição.',
    icon: '🌱',
    xpBonus: 50,
    check: (state) => Object.keys(state.completedLevels).length >= 1
  },
  {
    id: 'streak_3',
    title: 'Fogo do Cerrado',
    desc: 'Estude 3 dias seguidos.',
    icon: '🔥',
    xpBonus: 100,
    check: (state) => state.streak >= 3
  },
  {
    id: 'master_unit_1',
    title: 'Amigo da Aldeia',
    desc: 'Termine todas as lições da Parte 1.',
    icon: '🤝',
    xpBonus: 80,
    check: (state) => state.completedLevels['u1_l1'] && state.completedLevels['u1_l2']
  },
  {
    id: 'dictionary_explorer',
    title: 'Explorador da Língua',
    desc: 'Abra o dicionário e veja 5 palavras.',
    icon: '📚',
    xpBonus: 60,
    check: (state) => (state.dictionaryExploredCount || 0) >= 5
  },
  {
    id: 'warrior_level',
    title: 'Guerreiro A\'uwẽ',
    desc: 'Junte mais de 200 pontos.',
    icon: '🦅',
    xpBonus: 150,
    check: (state) => state.xp >= 200
  }
];
