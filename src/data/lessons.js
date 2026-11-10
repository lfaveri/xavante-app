// lessons.js - Trilha de Lições Gamificada Estilo Duolingo
// Cada unidade possui níveis com tipos variados de exercícios interativos

export const UNITS = [
  {
    id: 'unit_0',
    number: 0,
    title: 'Acostumando',
    description: 'Primeiro contato com o app. Toque na figura e na palavra que combina.',
    color: '#2E7D32',
    accentColor: '#66BB6A',
    icon: '🧩',
    levels: [
      {
        id: 'u0_l1',
        title: 'Acostumando',
        subtitle: 'Figuras e palavras',
        xpReward: 10,
        questions: [
          {
            type: 'match',
            prompt: 'Toque na figura e depois na palavra certa:',
            pairs: [
              { xavante: 'Tsibi', portuguese: 'Aranha', image: '/assets/aranha.png' },
              { xavante: 'Bödo', portuguese: 'Sol', image: '/assets/sol.png' },
              { xavante: 'Du', portuguese: 'Grama / Capim', image: '/assets/grama.png' },
              { xavante: 'Mã', portuguese: 'Ema', image: '/assets/ema.png' }
            ]
          },
          {
            type: 'match',
            prompt: 'Toque na figura e depois na palavra certa:',
            pairs: [
              { xavante: "A'odo", portuguese: "Bocaiúva", image: "/assets/bocaiuva.png" },
              { xavante: "Dapo're", portuguese: "Ouvido", image: "/assets/ouvido.png" },
              { xavante: 'Apaire', portuguese: 'Lagartixa', image: '/assets/lagartixa.png' },
              { xavante: 'Uba', portuguese: 'Ponte', image: '/assets/ponte.png' }
            ]
          },
          {
            type: 'match',
            prompt: 'Toque na figura e depois na palavra certa:',
            pairs: [
              { xavante: 'Waptsã', portuguese: 'Cachorro', image: '/assets/cachorro.png' },
              { xavante: 'Powawe', portuguese: 'Vaca', image: '/assets/vaca.png' },
              { xavante: "Aihoi'iré", portuguese: "Jacaré", image: "/assets/jacare.png" },
              { xavante: 'Dapara', portuguese: 'Pé', image: '/assets/pe.png' }
            ]
          },
          {
            type: 'match',
            prompt: 'Toque na figura e depois na palavra certa:',
            pairs: [
              { xavante: 'Dató / Datõmõ', portuguese: 'Olho', image: '/assets/olho.png' },
              { xavante: 'Uhobö', portuguese: 'Porco', image: '/assets/porco.png' },
              { xavante: "Piró'óre", portuguese: "Borboleta", image: "/assets/borboleta.png" },
              { xavante: 'Idzoúhu', portuguese: 'Abelha', image: '/assets/abelha.png' }
            ]
          },
          {
            type: 'match',
            prompt: 'Toque na figura e depois na palavra certa:',
            pairs: [
              { xavante: "Ma'u", portuguese: "Pato", image: "/assets/pato.png" },
              { xavante: 'Pádi', portuguese: 'Tamanduá', image: '/assets/tamandua.png' },
              { xavante: 'Wãrãhobo', portuguese: 'Tatu', image: '/assets/tatu.png' },
              { xavante: 'Tsiwi', portuguese: 'Gato', image: '/assets/gato.png' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'unit_1',
    number: 1,
    title: 'Primeiras Palavras: Oi e Tchau',
    description: 'Aprenda a dizer oi, obrigado e tchau na aldeia.',
    color: '#8D5524', // Marrom terra
    accentColor: '#FF7043',
    icon: '🤝',
    levels: [
      {
        id: 'u1_l1',
        title: 'Como vai você?',
        subtitle: 'Tô ba? e Tô uptabi',
        xpReward: 15,
        questions: [
          {
            type: 'choice',
            prompt: 'Como fala "Tudo bem?" em Xavante?',
            options: ['Tô ba?', 'Hã', 'Romhö', 'Aibö'],
            correctIndex: 0,
            phonetic: '[tõ ba]',
            culturalTip: 'Na aldeia, a gente fala "Tô ba?" quando encontra alguém.'
          },
          {
            type: 'choice',
            prompt: 'O que quer dizer "Tô uptabi"?',
            options: ['Boa noite', 'Muito bem! / Tudo ótimo!', 'Vá embora', 'Obrigado'],
            correctIndex: 1,
            phonetic: '[tõ up-ta-bi]',
            culturalTip: '"Uptabi" quer dizer verdadeiro, bom, certo.'
          },
          {
            type: 'match',
            prompt: 'Junte cada palavra com o que ela quer dizer:',
            pairs: [
              { xavante: 'Tô ba?', portuguese: 'Tudo bem?' },
              { xavante: 'Tô uptabi', portuguese: 'Muito bem!' },
              { xavante: 'Mo', portuguese: 'Vamos / Ir' },
              { xavante: 'Datsa\'a', portuguese: 'Obrigado' }
            ]
          },
          {
            type: 'sentence',
            prompt: 'Coloque as palavras na ordem certa:',
            targetTranslation: 'Muito bem, meu pai!',
            options: ['Tô', 'uptabi,', 'i-mama!', 'Hã', 'tsere'],
            correctOrder: ['Tô', 'uptabi,', 'i-mama!']
          },
          {
            type: 'phonetic',
            prompt: 'Escute a palavra. O sinal (\') é uma pausa rápida na voz:',
            word: 'Datsa\'a',
            phonetic: '[da-tsa-ʔa]',
            meaning: 'Obrigado / Gratidão',
            options: ['Datsa\'a', 'Mo', 'Aibö'],
            correctIndex: 0,
            culturalTip: 'O sinal (\') quer dizer: pare a voz um pouquinho.'
          }
        ]
      },
      {
        id: 'u1_l2',
        title: 'Despedidas e Gratidão',
        subtitle: 'Datsa\'a e Morĩ wa\'aba',
        xpReward: 20,
        questions: [
          {
            type: 'choice',
            prompt: 'Como fala "Obrigado" em Xavante?',
            options: ['Datsa\'a', 'Po\'o', 'Wahi', 'Bö'],
            correctIndex: 0,
            phonetic: '[da-tsa-ʔa]'
          },
          {
            type: 'choice',
            prompt: 'O que você fala para quem vai viajar: "Vão em paz!"?',
            options: ['Morĩ wa\'aba', 'Tô ba?', 'Tsa', 'Höri'],
            correctIndex: 0,
            phonetic: '[mõ-rĩ wa-a-ba]'
          },
          {
            type: 'sentence',
            prompt: 'Coloque as palavras na ordem certa:',
            targetTranslation: 'Vamos em frente!',
            options: ['Mo', 'hã', 'wa!', 'Öwawe', 'Pi\'õ'],
            correctOrder: ['Mo', 'hã', 'wa!']
          },
          {
            type: 'match',
            prompt: 'Junte cada palavra com o que ela quer dizer:',
            pairs: [
              { xavante: 'Datsa\'a', portuguese: 'Obrigado' },
              { xavante: 'Morĩ wa\'aba', portuguese: 'Vão em paz' },
              { xavante: 'Tô ba?', portuguese: 'Como vai?' },
              { xavante: 'Tô uptabi', portuguese: 'Tudo ótimo' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'unit_2',
    number: 2,
    title: 'Gente, Família e Aldeia',
    description: 'Pessoas da aldeia: pai, mãe, crianças e velhos.',
    color: '#E65100', // Âmbar Intenso
    accentColor: '#FFB74D',
    icon: '👥',
    levels: [
      {
        id: 'u2_l1',
        title: 'Pessoas da Aldeia',
        subtitle: 'Aibö, Pi\'õ e A\'uwẽ',
        xpReward: 20,
        questions: [
          {
            type: 'choice',
            prompt: 'O que quer dizer "Aibö"?',
            options: ['Homem', 'Peixe', 'Fogo', 'Lua'],
            correctIndex: 0,
            phonetic: '[aj-bə̃]'
          },
          {
            type: 'choice',
            prompt: 'Como fala "Mulher" em Xavante?',
            options: ['Pi\'õ', 'Aba', 'Bö', 'Wahu'],
            correctIndex: 0,
            phonetic: '[pi-ʔõ]'
          },
          {
            type: 'choice',
            prompt: '"A\'uwẽ" quer dizer:',
            options: ['Povo verdadeiro / Gente', 'Água do rio', 'Gavião veloz', 'Noite escura'],
            correctIndex: 0,
            phonetic: '[a-ʔu-wẽ]',
            culturalTip: 'A\'uwẽ Uptabi é o nome do povo Xavante, que vive no Mato Grosso.'
          },
          {
            type: 'match',
            prompt: 'Junte cada palavra com o que ela quer dizer:',
            pairs: [
              { xavante: 'Aibö', portuguese: 'Homem' },
              { xavante: 'Pi\'õ', portuguese: 'Mulher' },
              { xavante: 'Ba\'õtõ', portuguese: 'Criança' },
              { xavante: 'A\'uwẽ', portuguese: 'Povo / Gente' }
            ]
          }
        ]
      },
      {
        id: 'u2_l2',
        title: 'A Família',
        subtitle: 'I-mama, I-no e Ba\'õtõ',
        xpReward: 25,
        questions: [
          {
            type: 'choice',
            prompt: 'Como fala "Meu pai" em Xavante?',
            options: ['I-mama', 'I-no', 'Waradzu', 'Po\'re'],
            correctIndex: 0,
            phonetic: '[i-ma-ma]'
          },
          {
            type: 'choice',
            prompt: 'E como fala "Minha mãe"?',
            options: ['I-no', 'I-mama', 'Tsere', 'Ri'],
            correctIndex: 0,
            phonetic: '[i-nõ]'
          },
          {
            type: 'sentence',
            prompt: 'Coloque as palavras na ordem certa:',
            targetTranslation: 'Meu pai é um homem',
            options: ['I-mama', 'hã', 'aibö', 'uptabi', 'ö'],
            correctOrder: ['I-mama', 'hã', 'aibö']
          },
          {
            type: 'choice',
            prompt: 'Como os Xavante chamam quem não é indígena?',
            options: ['Waradzu', 'A\'uwẽ', 'Ba\'õtõ', 'Höri'],
            correctIndex: 0,
            phonetic: '[wa-ra-dzu]',
            culturalTip: '"Waradzu" é o branco, quem não é indígena.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit_3',
    number: 3,
    title: 'O Cerrado e a Terra',
    description: 'Palavras da terra, do rio e do mato.',
    color: '#2E7D32', // Verde Cerrado
    accentColor: '#81C784',
    icon: '🌿',
    levels: [
      {
        id: 'u3_l1',
        title: 'Elementos da Natureza',
        subtitle: 'Hã, Bö e Ö',
        xpReward: 20,
        questions: [
          {
            type: 'choice',
            prompt: 'O que quer dizer "Hã"?',
            options: ['Terra / Chão', 'Fogo', 'Céu', 'Peixe'],
            correctIndex: 0,
            phonetic: '[hã]'
          },
          {
            type: 'choice',
            prompt: 'Como fala "Cerrado / Mato" em Xavante?',
            options: ['Bö', 'Ö', 'Ri', 'Mo'],
            correctIndex: 0,
            phonetic: '[bə̃]'
          },
          {
            type: 'choice',
            prompt: 'Como fala "Água"?',
            options: ['Ö', 'Po\'o', 'Wahi', 'Aibö'],
            correctIndex: 0,
            phonetic: '[ə̃]'
          },
          {
            type: 'match',
            prompt: 'Junte cada palavra com o que ela quer dizer:',
            pairs: [
              { xavante: 'Hã', portuguese: 'Terra' },
              { xavante: 'Bö', portuguese: 'Cerrado' },
              { xavante: 'Ö', portuguese: 'Água' },
              { xavante: 'Po\'o', portuguese: 'Fogo' }
            ]
          }
        ]
      },
      {
        id: 'u3_l2',
        title: 'O Rio e o Céu',
        subtitle: 'Öwawe, Wahu e A\'amo',
        xpReward: 25,
        questions: [
          {
            type: 'choice',
            prompt: '"Öwawe" quer dizer Rio Grande. Que rio é esse?',
            options: ['Rio das Mortes', 'Rio Amazonas', 'Rio Tietê', 'Rio São Francisco'],
            correctIndex: 0,
            phonetic: '[ə̃-wa-we]',
            culturalTip: 'O Rio das Mortes (Öwawe) passa nas terras Xavante.'
          },
          {
            type: 'choice',
            prompt: 'Como fala "Sol" em Xavante?',
            options: ['Wahu', 'A\'amo', 'Ri', 'Höri'],
            correctIndex: 0,
            phonetic: '[wa-hu]'
          },
          {
            type: 'choice',
            prompt: 'Como fala "Lua"?',
            options: ['A\'amo', 'Wahu', 'Hã', 'Tsa'],
            correctIndex: 0,
            phonetic: '[a-ʔa-mõ]'
          },
          {
            type: 'sentence',
            prompt: 'Coloque as palavras na ordem certa:',
            targetTranslation: 'Vamos para o cerrado',
            options: ['Mo', 'hã', 'bö', 'u!', 'Po\'o'],
            correctOrder: ['Mo', 'hã', 'bö', 'u!']
          }
        ]
      }
    ]
  },
  {
    id: 'unit_4',
    number: 4,
    title: 'Animais do Cerrado',
    description: 'A onça, o gavião, o peixe e outros bichos.',
    color: '#C2185B', // Magenta Rosa Urucum
    accentColor: '#F48FB1',
    icon: '🐆',
    levels: [
      {
        id: 'u4_l1',
        title: 'Bichos da Aldeia',
        subtitle: 'Tsere e Romhö',
        xpReward: 25,
        questions: [
          {
            type: 'choice',
            prompt: 'O que é "Tsere"?',
            options: ['Gavião / Pássaro', 'Onça-pintada', 'Tamanduá', 'Jacaré'],
            correctIndex: 0,
            phonetic: '[tse-re]',
            culturalTip: 'O gavião enxerga longe e voa rápido.'
          },
          {
            type: 'choice',
            prompt: 'Como fala "Onça" em Xavante?',
            options: ['Romhö', 'Wahi', 'Höri', 'Aba'],
            correctIndex: 0,
            phonetic: '[rõm-hə̃]',
            culturalTip: 'A onça é a nossa guia neste app! Ela é forte e respeitada.'
          },
          {
            type: 'match',
            prompt: 'Junte cada bicho com o nome em português:',
            pairs: [
              { xavante: 'Tsere', portuguese: 'Pássaro / Gavião' },
              { xavante: 'Romhö', portuguese: 'Onça' },
              { xavante: 'Wahi', portuguese: 'Cobra' },
              { xavante: 'Höri', portuguese: 'Peixe' }
            ]
          },
          {
            type: 'choice',
            prompt: 'O que é "Höri"?',
            options: ['Peixe', 'Anta', 'Cobra', 'Arara'],
            correctIndex: 0,
            phonetic: '[hə̃-ri]'
          }
        ]
      },
      {
        id: 'u4_l2',
        title: 'Bichos do Mato',
        subtitle: 'Wahi, Po\'re e Aba',
        xpReward: 25,
        questions: [
          {
            type: 'choice',
            prompt: 'Como fala "Cobra" em Xavante?',
            options: ['Wahi', 'Tsere', 'Ri', 'Hã'],
            correctIndex: 0,
            phonetic: '[wa-hi]'
          },
          {
            type: 'choice',
            prompt: 'Como fala "Anta"?',
            options: ['Po\'re', 'Aba', 'Romhö', 'Aibö'],
            correctIndex: 0,
            phonetic: '[põ-ʔre]'
          },
          {
            type: 'choice',
            prompt: 'E como fala "Veado"?',
            options: ['Aba', 'Pi\'õ', 'Tô ba?', 'Wahu'],
            correctIndex: 0,
            phonetic: '[a-ba]'
          },
          {
            type: 'sentence',
            prompt: 'Coloque as palavras na ordem certa:',
            targetTranslation: 'Veja o pássaro',
            options: ['Tsere', 'aina!', 'Romhö', 'te'],
            correctOrder: ['Tsere', 'aina!']
          }
        ]
      }
    ]
  },
  {
    id: 'unit_5',
    number: 5,
    title: 'Fazer e Contar',
    description: 'Comer, beber, escutar e contar.',
    color: '#00897B', // Verde Azulado
    accentColor: '#4DB6AC',
    icon: '🔢',
    levels: [
      {
        id: 'u5_l1',
        title: 'Coisas que a Gente Faz',
        subtitle: 'Tsa, Öri e Wapari',
        xpReward: 30,
        questions: [
          {
            type: 'choice',
            prompt: 'Como fala "Comer" em Xavante?',
            options: ['Tsa', 'Öri', 'Mo', 'Hã'],
            correctIndex: 0,
            phonetic: '[tsa]'
          },
          {
            type: 'choice',
            prompt: 'E como fala "Beber água"?',
            options: ['Öri', 'Tsa', 'Wapari', 'Aina'],
            correctIndex: 0,
            phonetic: '[ə̃-ri]'
          },
          {
            type: 'choice',
            prompt: 'O que quer dizer "Wapari"?',
            options: ['Ouvir / Escutar', 'Correr', 'Dormir', 'Pintar'],
            correctIndex: 0,
            phonetic: '[wa-pa-ri]',
            culturalTip: 'Escutar os mais velhos é muito importante para o povo Xavante.'
          },
          {
            type: 'match',
            prompt: 'Junte cada palavra com o que ela quer dizer:',
            pairs: [
              { xavante: 'Tsa', portuguese: 'Comer' },
              { xavante: 'Öri', portuguese: 'Beber' },
              { xavante: 'Wapari', portuguese: 'Ouvir' },
              { xavante: 'Aina', portuguese: 'Ver / Olhar' }
            ]
          }
        ]
      },
      {
        id: 'u5_l2',
        title: 'Contando no Cerrado',
        subtitle: 'Misi, Maptutu e Si\'ubdató',
        xpReward: 30,
        questions: [
          {
            type: 'choice',
            prompt: 'Como fala "Um (1)"?',
            options: ['Misi', 'Maptutu', 'Si\'ubdató', 'Ahö'],
            correctIndex: 0,
            phonetic: '[mi-si]'
          },
          {
            type: 'choice',
            prompt: 'Como fala "Dois (2)"?',
            options: ['Maptutu', 'Misi', 'Ahö', 'Bö'],
            correctIndex: 0,
            phonetic: '[map-tu-tu]'
          },
          {
            type: 'choice',
            prompt: 'E como fala "Três (3)"?',
            options: ['Si\'ubdató', 'Maptutu', 'Misi', 'Aibö'],
            correctIndex: 0,
            phonetic: '[si-ʔub-da-tõ]'
          },
          {
            type: 'choice',
            prompt: 'Quando tem muita gente ou muito bicho junto, a gente fala:',
            options: ['Ahö', 'Misi', 'Ri', 'Ö'],
            correctIndex: 0,
            phonetic: '[a-hə̃]'
          },
          {
            type: 'sentence',
            prompt: 'Coloque as palavras na ordem certa:',
            targetTranslation: 'Dois homens',
            options: ['Aibö', 'maptutu', 'misi', 'pi\'õ'],
            correctOrder: ['Aibö', 'maptutu']
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
