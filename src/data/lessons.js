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
            "image": "assets/ema.png",
            "options": [
              "Wãrãhöbö",
              "Padi",
              "Mã",
              "Dapara"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/tatu.png",
            "options": [
              "Wãrãhöbö",
              "Idzo'úhu",
              "Uba",
              "Powawe"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/lagartixa.png",
            "options": [
              "Auhöiré",
              "Apaire",
              "Tsibi",
              "Padi"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/cachorro.png",
            "options": [
              "Bödo",
              "A'odo",
              "Ma'u",
              "Waptsã"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/porco.png",
            "options": [
              "Idzo'úhu",
              "Dató / Datõmõ",
              "Apaire",
              "Uhobö"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/gato.png",
            "options": [
              "Tsiwi",
              "Uhobö",
              "Dapo're",
              "Idzo'úhu"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/aranha.png",
            "options": [
              "Auhöiré",
              "Tsibi",
              "Powawe",
              "Idzo'úhu"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/ouvido.png",
            "options": [
              "Dapo're",
              "Idzo'úhu",
              "Mã",
              "Bödo"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/olho.png",
            "options": [
              "Uhobö",
              "Piró'óre",
              "Dató / Datõmõ",
              "Mã"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/tamandua.png",
            "options": [
              "Dapo're",
              "Padi",
              "Auhöiré",
              "Du"
            ],
            "correctIndex": 1
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
            "image": "assets/sol.png",
            "options": [
              "Ma'u",
              "Dató / Datõmõ",
              "Auhöiré",
              "Bödo"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/grama.png",
            "options": [
              "Du",
              "Auhöiré",
              "A'odo",
              "Uhobö"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/bocaiuva.png",
            "options": [
              "Bödo",
              "Powawe",
              "A'odo",
              "Uhobö"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/ponte.png",
            "options": [
              "Ma'u",
              "Piró'óre",
              "Uba",
              "A'odo"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/vaca.png",
            "options": [
              "Powawe",
              "Apaire",
              "Auhöiré",
              "Bödo"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/jacare.png",
            "options": [
              "Dapo're",
              "Uba",
              "Auhöiré",
              "Dapara"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/pe.png",
            "options": [
              "Uhobö",
              "Apaire",
              "Dapara",
              "Ma'u"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/borboleta.png",
            "options": [
              "Apaire",
              "Tsibi",
              "Piró'óre",
              "Bödo"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/abelha.png",
            "options": [
              "Idzo'úhu",
              "Uba",
              "Waptsã",
              "Tsiwi"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Que palavra é esta figura?",
            "image": "assets/pato.png",
            "options": [
              "Auhöiré",
              "Ma'u",
              "Wãrãhöbö",
              "Dapo're"
            ],
            "correctIndex": 1
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
        "title": "Xavante e Português 1",
        "subtitle": "Xavante → Português",
        "xpReward": 10,
        "questions": [
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Apaire",
                "portuguese": "Lagartixa"
              },
              {
                "xavante": "Padi",
                "portuguese": "Tamanduá"
              },
              {
                "xavante": "Tsiwi",
                "portuguese": "Gato"
              },
              {
                "xavante": "Tsibi",
                "portuguese": "Aranha"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Uhobö",
                "portuguese": "Porco"
              },
              {
                "xavante": "Padi",
                "portuguese": "Tamanduá"
              },
              {
                "xavante": "Mã",
                "portuguese": "Ema"
              },
              {
                "xavante": "Tsibi",
                "portuguese": "Aranha"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Apaire",
                "portuguese": "Lagartixa"
              },
              {
                "xavante": "Wãrãhöbö",
                "portuguese": "Tatu"
              },
              {
                "xavante": "Waptsã",
                "portuguese": "Cachorro"
              },
              {
                "xavante": "Dapo're",
                "portuguese": "Ouvido"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Tsibi",
                "portuguese": "Aranha"
              },
              {
                "xavante": "Dapo're",
                "portuguese": "Ouvido"
              },
              {
                "xavante": "Dató / Datõmõ",
                "portuguese": "Olho"
              },
              {
                "xavante": "Padi",
                "portuguese": "Tamanduá"
              }
            ]
          }
        ]
      },
      {
        "id": "e3_l2",
        "title": "Xavante e Português 2",
        "subtitle": "Xavante → Português",
        "xpReward": 10,
        "questions": [
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "A'odo",
                "portuguese": "Bocaiúva"
              },
              {
                "xavante": "Powawe",
                "portuguese": "Vaca"
              },
              {
                "xavante": "Auhöiré",
                "portuguese": "Jacaré"
              },
              {
                "xavante": "Piró'óre",
                "portuguese": "Borboleta"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Idzo'úhu",
                "portuguese": "Abelha"
              },
              {
                "xavante": "Uba",
                "portuguese": "Ponte"
              },
              {
                "xavante": "A'odo",
                "portuguese": "Bocaiúva"
              },
              {
                "xavante": "Du",
                "portuguese": "Grama / Capim"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Idzo'úhu",
                "portuguese": "Abelha"
              },
              {
                "xavante": "Ma'u",
                "portuguese": "Pato"
              },
              {
                "xavante": "Powawe",
                "portuguese": "Vaca"
              },
              {
                "xavante": "Dapara",
                "portuguese": "Pé"
              }
            ]
          },
          {
            "type": "match",
            "prompt": "Junte cada palavra com o que ela quer dizer:",
            "pairs": [
              {
                "xavante": "Dapara",
                "portuguese": "Pé"
              },
              {
                "xavante": "Piró'óre",
                "portuguese": "Borboleta"
              },
              {
                "xavante": "Idzo'úhu",
                "portuguese": "Abelha"
              },
              {
                "xavante": "Ma'u",
                "portuguese": "Pato"
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
        "title": "Ouvir e Ler 1",
        "subtitle": "Som Xavante → Xavante escrito",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Mã",
            "options": [
              "Ma'u",
              "Piró'óre",
              "Uba",
              "Mã"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Wãrãhöbö",
            "options": [
              "Mã",
              "Ma'u",
              "Wãrãhöbö",
              "Idzo'úhu"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Apaire",
            "options": [
              "Apaire",
              "Uba",
              "Tsiwi",
              "Dapo're"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Waptsã",
            "options": [
              "Tsiwi",
              "Waptsã",
              "Idzo'úhu",
              "Dapara"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Uhobö",
            "options": [
              "Uba",
              "Powawe",
              "Dapo're",
              "Uhobö"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Tsiwi",
            "options": [
              "Tsiwi",
              "Dapo're",
              "A'odo",
              "Du"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Tsibi",
            "options": [
              "Tsiwi",
              "Piró'óre",
              "Ma'u",
              "Tsibi"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Dapo're",
            "options": [
              "Dapo're",
              "Mã",
              "Powawe",
              "Bödo"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Dató / Datõmõ",
            "options": [
              "Dapara",
              "Ma'u",
              "Uba",
              "Dató / Datõmõ"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Padi",
            "options": [
              "Tsibi",
              "Padi",
              "Uhobö",
              "Dapara"
            ],
            "correctIndex": 1
          }
        ]
      },
      {
        "id": "e4_l2",
        "title": "Ouvir e Ler 2",
        "subtitle": "Som Xavante → Xavante escrito",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Bödo",
            "options": [
              "Dapo're",
              "Bödo",
              "Dató / Datõmõ",
              "Uba"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Du",
            "options": [
              "Uhobö",
              "Bödo",
              "Du",
              "Padi"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "A'odo",
            "options": [
              "Wãrãhöbö",
              "Mã",
              "A'odo",
              "Auhöiré"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Uba",
            "options": [
              "Waptsã",
              "Uba",
              "Dapara",
              "Piró'óre"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Powawe",
            "options": [
              "Mã",
              "Uba",
              "Wãrãhöbö",
              "Powawe"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Auhöiré",
            "options": [
              "Tsiwi",
              "Bödo",
              "Auhöiré",
              "Piró'óre"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Dapara",
            "options": [
              "Mã",
              "Apaire",
              "A'odo",
              "Dapara"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Piró'óre",
            "options": [
              "Dapara",
              "Powawe",
              "Bödo",
              "Piró'óre"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Idzo'úhu",
            "options": [
              "Idzo'úhu",
              "Dapo're",
              "Bödo",
              "Padi"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute e toque na palavra que você ouviu:",
            "audio": "Ma'u",
            "options": [
              "Piró'óre",
              "Dapo're",
              "Ma'u",
              "Du"
            ],
            "correctIndex": 2
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
        "title": "Ouvir e Entender 1",
        "subtitle": "Som Xavante → Português",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Mã",
            "options": [
              "Lagartixa",
              "Grama / Capim",
              "Pé",
              "Ema"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Wãrãhöbö",
            "options": [
              "Lagartixa",
              "Tatu",
              "Grama / Capim",
              "Tamanduá"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Apaire",
            "options": [
              "Olho",
              "Cachorro",
              "Lagartixa",
              "Pé"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Waptsã",
            "options": [
              "Lagartixa",
              "Olho",
              "Cachorro",
              "Ponte"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Uhobö",
            "options": [
              "Jacaré",
              "Ouvido",
              "Grama / Capim",
              "Porco"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Tsiwi",
            "options": [
              "Lagartixa",
              "Gato",
              "Tamanduá",
              "Ponte"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Tsibi",
            "options": [
              "Vaca",
              "Bocaiúva",
              "Gato",
              "Aranha"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Dapo're",
            "options": [
              "Tamanduá",
              "Ouvido",
              "Porco",
              "Cachorro"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Dató / Datõmõ",
            "options": [
              "Ponte",
              "Jacaré",
              "Olho",
              "Tatu"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Padi",
            "options": [
              "Vaca",
              "Tamanduá",
              "Borboleta",
              "Gato"
            ],
            "correctIndex": 1
          }
        ]
      },
      {
        "id": "e5_l2",
        "title": "Ouvir e Entender 2",
        "subtitle": "Som Xavante → Português",
        "xpReward": 15,
        "questions": [
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Bödo",
            "options": [
              "Sol",
              "Jacaré",
              "Pé",
              "Ouvido"
            ],
            "correctIndex": 0
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Du",
            "options": [
              "Ema",
              "Lagartixa",
              "Grama / Capim",
              "Ouvido"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "A'odo",
            "options": [
              "Sol",
              "Tamanduá",
              "Porco",
              "Bocaiúva"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Uba",
            "options": [
              "Grama / Capim",
              "Pé",
              "Ponte",
              "Cachorro"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Powawe",
            "options": [
              "Gato",
              "Vaca",
              "Porco",
              "Cachorro"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Auhöiré",
            "options": [
              "Abelha",
              "Ouvido",
              "Aranha",
              "Jacaré"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Dapara",
            "options": [
              "Olho",
              "Vaca",
              "Tatu",
              "Pé"
            ],
            "correctIndex": 3
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Piró'óre",
            "options": [
              "Vaca",
              "Aranha",
              "Borboleta",
              "Ouvido"
            ],
            "correctIndex": 2
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Idzo'úhu",
            "options": [
              "Lagartixa",
              "Abelha",
              "Gato",
              "Pato"
            ],
            "correctIndex": 1
          },
          {
            "type": "choice",
            "prompt": "Escute. O que quer dizer em português?",
            "audio": "Ma'u",
            "options": [
              "Gato",
              "Lagartixa",
              "Olho",
              "Pato"
            ],
            "correctIndex": 3
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
