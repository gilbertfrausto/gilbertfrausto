export const PROJECTS_DATA = {
    costume: {
      name: 'Costume',
      description: 'Costume is a playful IP with a ton of progress and a couple different prototypes, manga and many other concepts.',
      tags: ['Web3', '2D Platformer', 'Unity', 'NFT', 'MMO', 'POLYGON '],
      projects:{
        costume_cards:  {
          name: 'Cosutme Cards',
          stack: 'Vue, Pinia, Web3, Solidity, Polygon, NFT',
          description: 'Costume Cards was a Web 3 battle card game on the polygon network. Where a player can battle another player and the winner would capture one of the opponent NFT cards.',
        },
        platformer_prototype: {
          name: 'Costume Prototype',
          stack: 'Unity, C#, Frame by frame animation',
          description: `Costume Prototype was a 2D platformer game where the player can explore the world and collect power-ups, solve some simiple puzzles and defeat enemies. 
              and battle some enemies. The game was made in C# with the Unity game engine.`
        },
        costume_mmo: {
          name: 'Costume MMO'
        },
        costume_manga: {
          name: 'Costume Manga'
        },
      },
      socials: {
          ig: 'https://www.instagram.com/costumestudios/',
          opensea: 'https://opensea.io/collection/costumebattlecards',
          discord: 'https://discord.gg/costumestudios',
          twitter: 'https://x.com/costumestudios',
          website: 'https://costumestudios.io',
          youtube: 'https://youtu.be/FYHheQ8sKLE',
      },
      images: [
        {
            src: 'src/assets/images/projects/costume/pose.png',
            alt: 'Costume Power up'
        },
        {
            src: 'src/assets/images/projects/costume/colour.jpg',
            alt: 'Costume Colour'
        },
        {
            src: 'src/assets/images/projects/costume/action.jpg',
            alt: 'Costume Action'
        },
        {
            src: 'src/assets/images/projects/costume/mmo.jpeg',
            alt: 'MMO'
        },
        {
            src: 'https://www.youtube.com/embed/FYHheQ8sKLE',
            video: true,
            alt: 'YB'
        }
      ]
    },
    bb: {
      name: 'Battle Blocks',
      description: 'Battle Blocks was web card battle game',
      tags: ['NFT', 'Web3', '2D'],
      projects: {
        battle_blocks: {
          name: 'Battle Blocks',
          stack: 'Vue, Vuex, Web3, Solidity, Nebulas, Golang, NFT',
          description: `Battle Blocks was a web card battle game where players can battle each other using their NFT cards. You would select three cards to battle someone else, with the lose forfeiting one of their cards. Players could create battles, auctions for rare cards, or just collect and trade on the marketplace.`,
        }
      },
      images: [
        {
          src: 'src/assets/images/projects/bb/card_template.jpg',
          alt: 'Battle Blocks Image 1'
        },
        {
          src: 'src/assets/images/projects/bb/ender_card.png',
          alt: 'Battle Blocks Image 2'
        }
      ],
      socials: {
        // ig: 'https://www.instagram.com/battleblocks/',
        // opensea: 'https://opensea.io/collection/battle-blocks',
        // discord: 'https://discord.gg/battleblocks',
        // twitter: 'https://x.com/battleblocks',
        website: 'https://battleblocks-ae0b7.web.app/#/'
      }
    },
    google: {
      name: 'Google',
      description: 'Google is a multinational technology company that specializes in Internet-related services and products.',
      tags: ['Glue', 'MDC Web Components','Google marketing'],
      images: [],
      socials: {
        website: 'https://about.google/brand-resource-center/',
      },
      projects: {
        glue: {
          name: 'Glue',
          stack: 'Web Components, CAF, kokoro, Lit Element, Typescript, Bash, Percy, Google3',
          description: `Glue was an internal component library exclusively used by Google Marketing. It was used to build marketing sites by by Google and its vendors. We worked closely with the MDC Web components team to intgreate their work into the library.`,
        },
        presubmit: {
          name: 'Presubmit & Continuous Integration',
          stack: 'Node.js, Mocha, Express, Chai, Sinon, Unit Test',
          description: 'Before the Glue library was taken to the internal infrastructure(google3), we had to build a presubmit and continuous integration system that would run tests(visual regress & unit testing) on the components before they were submitted to the codebase. Previously this was done with Bash, however there was a number of issues with this solution. I rewrote this using Node.js, Mocha, Express, Chai and Sinon. This allowed for multi-threading(multi-process) and unit-testing.',
        }
      }
    },
    pz: {
      name: 'Pris0nerz',
      description: `a dynamic NFT project, where your choices matter, and where it's never too late to change! What you do and who you become rests solely on your shoulders, so your decisions outweigh the randomness of your initial mint. Will you choose the safe route and obey the Warden's Wolves? Or will you rebel, plan your escape and make your way to some secluded island with little miss piggy? Depending on what you choose, your NFT will access exclusive $contraband, which you may choose to morph yourself with or smuggle to other Prisonerz.`,
      tags: ['Web3', 'Vue', 'Polygon', 'NFT', '2D'],
      projects: {
        nft_game: {
          name: 'NFT Game',
          description: 'Pris0nerz is a dynamic NFT project, where your choices matter, and where it\'s never too late to change! What you do and who you become rests solely on your shoulders, so your decisions outweigh the randomness of your initial mint. Will you choose the safe route and obey the Warden\'s Wolves? Or will you rebel, plan your escape and make your way to some secluded island with little miss piggy? Depending on what you choose, your NFT will access exclusive $contraband, which you may choose to morph yourself with or smuggle to other Prisonerz.',
          stack: 'Vue, Pinia, Web3, Solidity, Polygon, NFT',
        }
      },
      socials: {
          ig: 'https://www.instagram.com/prizonersgame/',
          discord: 'https://discord.gg/GeUCW6QFf9',
          twitter: 'https://twitter.com/pris0nerz',
          website: 'https://prisonerz-dev.web.app/'
      },
      images: [
        {
          src: 'src/assets/images/projects/pz/wolf_back.png',
          alt: 'Pris0nerz Image 1'
        },
        {
          src: 'src/assets/images/projects/pz/wolf.png',
          alt: 'Pris0nerz Image 2'
        },
        {
          src: 'src/assets/images/projects/pz/wallet.png',
          alt: 'Pris0nerz Image 3'
        },
        {
          src: 'src/assets/images/projects/pz/el_lobo.png',
          alt: 'Pris0nerz Image 4'
        },
        {
          src: 'https://www.youtube.com/embed/cOz1FjBBsTs',
          video: true,
          alt: 'Pris0nerz Trailer'
        }
      ]
    },
    moodys: {
      name: 'Moody\'s',
      description: 'Moody\'s is a global integrated risk assessment firm that empowers organizations to',
      tags: ['B2B', 'Risk Assesment', 'Banking', 'Finance'],
      projects: {
        riskcalc: {
          name: 'RiskCalc',
          description: `RiskCalc is a Moody\'s product that provides credit risk assessment for private companies. It uses a variety of data sources to provide a comprehensive view of a company\'s credit risk.
          This product was going into its third iteration, and I was brought in to help with the design and development of the new version. The legacy app was built in flash using flex, so legacy API's were still using XML. Some complex data visualizations 
          were for timeseries and heat map calculations.`,
          stack: 'Angular, Angular Material, Typescript, C#, C++, D3, Highcharts',
        }
      },
      images: [],
      socials: {
        website: 'https://www.moodys.com',
        riskcalc: 'https://riskcalcplus.moodysanalytics.com'
      }
    },
    forest_road: {
      name: 'The Forest Road Company',
      tags: ['Web3', 'Ether', 'NFT', 'Marketplace'],
      description: 'Notables was a forest road company that speacialized in building NFT marketplaces and drops for various clients and IPs. Some including DAZN, Shaq, Ben Baller. Notables was later aquired by Candle Media.',
      images: [
        {
          src: 'src/assets/images/projects/forest-road/notables.jpeg',
          alt: 'DAZN NFT Marketplace'
        },
        {
          src: 'src/assets/images/projects/forest-road/dazn.png',
          alt: 'DAZN NFT Marketplace'
        },
        {
          src: 'src/assets/images/projects/forest-road/shaq.png',
          alt: 'Shaq NFT Marketplace'
        },
        {
          src: 'src/assets/images/projects/forest-road/ben_baller.png',
          alt: 'Ben Baller NFT Marketplace'
        }
      ],
      projects: {
        notables: {
          name: 'Notables',
          description: 'Notables was a forest road company that speacialized in building NFT marketplaces and drops for various clients and IPs. Some including DAZN, Shaq, Ben Baller. Notables was later aquired by Candle Media.',
          stack: 'React, Next.js, Typescript, Tailwind CSS, Solidity, Ether.js, Python, AWS',
        },
        ben_baller: {
          name: 'Ben Baller',
          description: 'Ben Baller is a celebrity jeweler and rapper who has a large following on social media. He has a number of NFT drops and marketplaces that he has worked on.',
          stack: 'React, Next.js, Typescript, Solidity, Ether.js, Python, AWS',
          socials: {
            opensea: 'https://opensea.io/collection/ben-baller-blockchains',
          }
        },
        shaq_gives_back: {
          name: 'Shaq Gives Back',
          description: 'Shaq Gives back is a charity NFT project that was created to help raise money for various charities. The project was created by Shaquille O\'Neal and his team.',
          stack: 'React, Next.js, Typescript, Solidity, Ether.js, Python, AWS',
          socials: {
            opensea: 'https://opensea.io/collection/shaq-gives-back',
          }
        }
      },
      socials: {
        website: 'https://www.forestroad.co',
        twitter: 'https://x.com/NotablesCo',
        // discord: 'https://discord.gg/forestroadco'
      }

    }
}

// TODO add constants to the project data
export const PROJECTS = {
  COSTUME: 'Costume',
  PZ: 'Pris0nerz',
  GOOGLE: 'Google',
  BB: 'BattleBlocks',
  FOREST_ROAD: 'Forest Road',
  MOODYS: 'Moodys',
  BLANK: 'Blank'
};

export const ALL_PROJECT_TILES = {
  projects: [
    {
      name: PROJECTS.COSTUME,
      img: 'src/assets/images/projects/costume.jpg',
      project_index: 1
    },
    {
      name: PROJECTS.PZ,
      img: 'src/assets/images/projects/pz.png',
      project_index: 2
    },
    {
      name: PROJECTS.BLANK
    }
  ],
  projects_row_2: [
    {
      name: PROJECTS.BLANK
    },
    {
      name: PROJECTS.GOOGLE,
      img: 'src/assets/images/projects/google.jpg',
      project_index: 3
    },
    {
      name: PROJECTS.FOREST_ROAD,
      img: 'src/assets/images/projects/forest_road.png',
      project_index: 4
    },
  ],
  projects_row_3: [
    {
      name: PROJECTS.BLANK
    },
    {
      name: PROJECTS.BLANK
    },
    {
      name: PROJECTS.MOODYS,
      img: 'src/assets/images/projects/moody.jpg',
      project_index: 3
    },
    // PROJECT NEEDS MORE ASSETSs
    // {
    //   name: PROJECTS.BB,
    //   img: 'src/assets/images/projects/bb.png',
    //   project_index: 4
    // },
  ]
}

export const ABOUT_DATA = {
  description: `I am a software engineer with a passion for building web applications and games. I have experience in a variety of technologies and languages.`,
  ai: `AI tools and integrations`,
  langs_and_framewoks: 'Languages and frameworks',
  ai_tools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'DeepAI',
    'OpenAI API',
    'Hugging Face Transformers'
  ],
  skills: [
    'C#',
    'JavaScript',
    'Java',
    'Angular',
    'Vue.js',
    'React',
    'Unity',
    'Web3',
    'Solidity',
    'Python',
    'AWS',
    'Tailwind CSS',
  ],
}

export const CONTACT_DATA = {
  contact: 'Contact',
  description: 'Feel free to reach out to me via email or social media.',
  email: 'mailto:gilbertfrausto@gmail.com',
  phone: '(510) 560-0903',
  github: 'https://github.com/gilbertfrausto',
  linkedin: 'https://www.linkedin.com/in/gilbert-frausto/',
  twitter: 'https://x.com/gilbertfrausto3',
}
