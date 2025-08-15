import { SiDiscord, SiInstagram, SiOpensea, MdOutlinedAlternateEmail, GvWorld, AkLinkedInV1Fill, SiYoutube, ThGithub, FaBandsXTwitter, FaBandsNpm } from '@kalimahapps/vue-icons';
import costumePose from '@/assets/images/projects/costume/pose.png';
import costumeColour from '@/assets/images/projects/costume/colour.jpg';
import costumeAction from '@/assets/images/projects/costume/action.jpg';
import costumeMmo from '@/assets/images/projects/costume/mmo.jpeg';

import bbCardTemplate from '@/assets/images/projects/bb/card_template.jpg';
import bbEnderCard from '@/assets/images/projects/bb/ender_card.png';

import pzWolfBack from '@/assets/images/projects/pz/wolf_back.png';
import pzWolf from '@/assets/images/projects/pz/wolf.png';
import pzWallet from '@/assets/images/projects/pz/wallet.png';
import pzElLobo from '@/assets/images/projects/pz/el_lobo.png';

import frNotables from '@/assets/images/projects/forest-road/notables.jpeg';
import frDazn from '@/assets/images/projects/forest-road/dazn.png';
import frShaq from '@/assets/images/projects/forest-road/shaq.png';
import frBenBaller from '@/assets/images/projects/forest-road/ben_baller.png';

import costumeTile from '@/assets/images/projects/costume.jpg';
import pzTile from '@/assets/images/projects/pz.png';
import googleTile from '@/assets/images/projects/google.jpg';
import forestRoadTile from '@/assets/images/projects/forest_road.png';
import moodysTile from '@/assets/images/projects/moody.jpg';
import ibtTile from '@/assets/images/projects/IBTTILE.png';

//! Might not need this and just use static storage like drive
// import resumeUrl from '@/assets/pdf/Gilbert_Frausto_2025.pdf';
// TODO add constants to the project data
export const PROJECTS = {
  COSTUME: 'Costume',
  PZ: 'Pris0nerz',
  GOOGLE: 'Google',
  BB: 'BattleBlocks',
  FOREST_ROAD: 'The Forest Road Company',
  MOODYS: `Moody's`,
  IBT: 'Inbetween Time',
  PS: 'Py-Script',
  NPM: 'NPM',
  BLANK: 'Blank'
};

export const PROJECTS_DATA = {
    costume: {
      name: PROJECTS.COSTUME,
      description: 'Costume is a playful IP with a ton of progress and a couple different prototypes including Unity and Web3.',
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
          description: `Costume Prototype was a 2D platformer game where the player can explore the world and collect power-ups, solve some simiple puzzles and defeat enemies. The battle system 
          included use of power-ups and combos. The game was made in C# with the Unity game engine.`
        },
        costume_mmo: {
          name: 'Costume MMO'
        },
        costume_manga: {
          name: 'Costume Manga'
        },
      },
      socials: [
        {
          name: 'IG',
          link: 'https://www.instagram.com/costumestudios/',
          icon: SiInstagram,
        },
        {
          name: 'Discord',
          link: 'https://discord.gg/costumestudios',
          icon: SiDiscord,
        },
        {
          name: 'Opensea',
          link: 'https://opensea.io/collection/costumebattlecards',
          icon: SiOpensea,
        },
        {
          name: 'X',
          link: 'https://x.com/costumestudios',
          icon: FaBandsXTwitter,
        },
        {
          name: 'Youtube',
          link: 'https://youtu.be/FYHheQ8sKLE?si=mG1EnKHujMG43gw6',
          icon: SiYoutube,
          exclude: true
        },
        {
          name: 'Website',
          link: 'https://costumestudios.io/',
          icon: SiYoutube,
          exclude: true
        },
      ],
      images: [
        {
            src: costumePose,
            alt: 'Costume Power up'
        },
        {
            src: costumeColour,
            alt: 'Costume Colour'
        },
        {
            src: costumeAction,
            alt: 'Costume Action'
        },
        {
            src: costumeMmo,
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
      name: PROJECTS.BB,
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
          src: bbCardTemplate,
          alt: 'Battle Blocks Image 1'
        },
        {
          src: bbEnderCard,
          alt: 'Battle Blocks Image 2'
        }
      ],
      socials: {
        website: 'https://battleblocks-ae0b7.web.app/#/'
      }
    },
    google: {
      name: PROJECTS.GOOGLE,
      description: 'Google is a multinational technology company that specializes in Internet-related services and products.',
      tags: ['Glue', 'MDC Web Components','Google marketing'],
      images: [],
      socials: [
        {
          name: 'Website',
          link: 'https://about.google/brand-resource-center/',
          icon: GvWorld,
        },
      ],
      projects: {
        glue: {
          name: 'Glue',
          stack: 'Web Components, CAF, kokoro, Lit Element, Typescript, Bash, Percy, Google3',
          description: `Glue was an internal component library exclusively used by Google Marketing. It was used to build marketing sites by Google and its vendors. We worked closely with the MDC Web components team to integrate their work into the library.`,
        },
        presubmit: {
          name: 'Presubmit & Continuous Integration',
          stack: 'Node.js, Mocha, Express, Chai, Sinon, Unit Test',
          description: 'Before the Glue library was taken to the internal infrastructure(google3), we had to build a presubmit and continuous integration system that would run tests(visual regression & unit testing) on the components before they were submitted to the codebase. Previously this was done with Bash, however there was a number of issues with this solution. I rewrote this using Node.js, Mocha, Express, Chai and Sinon. This allowed for multi-threading(multi-process) and unit-testing.',
        }
      }
    },
    pz: {
      name: PROJECTS.PZ,
      description: `a dynamic NFT project, where your choices matter, and where it's never too late to change! What you do and who you become rests solely on your shoulders, so your decisions outweigh the randomness of your initial mint. Will you choose the safe route and obey the Warden's Wolves? Or will you rebel, plan your escape and make your way to some secluded island with little miss piggy? Depending on what you choose, your NFT will access exclusive $contraband, which you may choose to morph yourself with or smuggle to other Prisonerz.`,
      tags: ['Web3', 'Vue', 'Polygon', 'NFT', '2D'],
      projects: {
        nft_game: {
          name: 'NFT Game',
          description: 'Pris0nerz is a dynamic NFT project, where your choices matter, and where it\'s never too late to change! What you do and who you become rests solely on your shoulders, so your decisions outweigh the randomness of your initial mint. Will you choose the safe route and obey the Warden\'s Wolves? Or will you rebel, plan your escape and make your way to some secluded island with little miss piggy? Depending on what you choose, your NFT will access exclusive $contraband, which you may choose to morph yourself with or smuggle to other Prisonerz.',
          stack: 'Vue, Pinia, Web3, Solidity, Polygon, NFT',
        }
      },
      socials: [
        {
          name: 'IG',
          link: 'https://www.instagram.com/prizonersgame/',
          icon: SiInstagram,
        },
        {
          name: 'Discord',
          link: 'https://discord.gg/GeUCW6QFf9',
          icon: SiDiscord,
        },
        {
          name: 'X',
          link: 'https://twitter.com/pris0nerz',
          icon: FaBandsXTwitter,
        },
        {
          name: 'Website',
          link: 'https://prisonerz-dev.web.app/',
          icon: GvWorld,
          exclude: true
        },
      ],
      images: [
        {
          src: pzWolfBack,
          alt: 'Pris0nerz Image 1'
        },
        {
          src: pzWolf,
          alt: 'Pris0nerz Image 2'
        },
        {
          src: pzWallet,
          alt: 'Pris0nerz Image 3'
        },
        {
          src: pzElLobo,
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
      name: PROJECTS.MOODYS,
      description: 'Moody\'s is a global integrated risk assessment firm that empowers organizations to',
      tags: ['B2B', 'Risk Assesment', 'Banking', 'Finance'],
      projects: {
        riskcalc: {
          name: 'RiskCalc',
          description: `RiskCalc is a Moody\'s product that provides credit risk assessment for private companies. It uses a variety of data sources to provide a comprehensive view of a company\'s credit risk.
          This product was going into its third iteration, and I was brought in to help with the design and development of the new version. The legacy app was built in flash using flex, so legacy API's were still using XML. Some complex data visualizations 
          users would use the application for included, timeseries and heat map calculations.`,
          stack: 'Angular, Angular Material, Typescript, C#, C++, D3, Highcharts',
        }
      },
      images: [],
      socials: [
        {
          name: 'Website',
          link: 'https://www.moodys.com',
          icon: GvWorld,
          exclude: false
        },
        {
          name: 'RiskCalc',
          link: 'https://riskcalcplus.moodysanalytics.com',
          icon: GvWorld,
          exclude: true
        },
      ]
    },
    forest_road: {
      name: PROJECTS.FOREST_ROAD,
      tags: ['Web3', 'Ether', 'NFT', 'Marketplace', 'OpenSea'],
      description: 'Notables was a forest road company that speacialized in building NFT marketplaces and drops for various clients and IPs. Some including DAZN, Shaq, Ben Baller. Notables was later aquired by Candle Media.',
      images: [
        {
          src: frNotables,
          alt: 'DAZN NFT Marketplace'
        },
        {
          src: frDazn,
          alt: 'DAZN NFT Marketplace'
        },
        {
          src: frShaq,
          alt: 'Shaq NFT Marketplace'
        },
        {
          src: frBenBaller,
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
      socials: [
        {
          name: 'X',
          link: 'https://x.com/NotablesCo',
          icon: FaBandsXTwitter,
          exclude: false
        },
        {
          name: 'Website',
          link: 'https://www.forestroad.co',
          icon: FaBandsXTwitter,
          exclude: true
        },
      ],
    },
    inbetweenTime: {
      name: PROJECTS.NPM,
      tags: ['animations', 'npm', 'coroutine', 'DOP', 'Classless OOP'],
      description: ``,
      projects: {
        npm: {
          name: PROJECTS.IBT,
          description: `Inbetween time is a iteration library to help developers who need coroutine functionality. In the case of programmatically needing to stop an 
            animation loop, say... somehting running at 60fps. But there is always a time where you need this function to resume where it left off, that's where inbetween-time comes into play.
            To take things a level deeper, I decided to switch from classes OOP or JS Module pattern, to a modern Data-Oriented programming (DOP) pattern. This focuses of pure functions and immutability.`,
          stack: 'Vanillia JS, Firebase, BUN',
        },
        ps: {
          name: PROJECTS.PS,
          description: 'A lightweight and versatile library for running your favorite native Python methods in modern JavaScript and TypeScript applications. I also thought this would help a lot of young Python devs to quickly get productive in JavaScript.',
          stack: 'Vanillia JS, BUN',
        }
      },
      socials: [
        {
          name: 'npm',
          link: 'https://www.npmjs.com/package/@gilbertfrausto/inbetween-time',
          icon: FaBandsNpm,
          exclude: true
        },
        {
          name: 'npm',
          link: 'https://www.npmjs.com/package/@gilbertfrausto/py-script',
          icon: FaBandsNpm,
          exclude: true
        },
        {
          name: 'Github',
          link: 'https://github.com/gilbertfrausto/inbetween-time',
          icon: ThGithub
        }
      ]
    }
}

// TODO ADD TO PROJECT DATA
export const ALL_PROJECT_TILES = {
  projects: [
    {
      name: PROJECTS.GOOGLE,
      img: googleTile,
      project_index: 1
    },
    {
      name: PROJECTS.FOREST_ROAD,
      img: forestRoadTile,
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
      name: PROJECTS.COSTUME,
      img: costumeTile,
      project_index: 3
    },
    {
      name: PROJECTS.PZ,
      img: pzTile,
      project_index: 4
    }
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
      img: moodysTile,
      project_index: 5
    },
    {
      name: PROJECTS.NPM,
      img: ibtTile,
      project_index: 6
    }
  ]
};

export const ABOUT_DATA = {
  description: `I am a software engineer with a passion for building web applications and games. I have experience in a variety of technologies and languages.`,
  ai: `AI tools and LLM Iintegrations`,
  langs_and_framewoks: 'Languages and frameworks',
  ai_tools: [
    'Ollama',
    'Gemma',
    'Claude',
    'Gemini',
    'ChatGPT',
    'OpenAI',
    'OpenRouter',
    'DeepSeek',
    'Hugging Face'
  ],
  skills: [
    'C#',
    'JavaScript',
    'Java',
    'Python',
    'Angular',
    'Vue.js',
    'React',
    'Tailwind CSS',
    'Web3',
    'Solidity',
    'AWS',
    'Google Cloud',
    'Unity', 
  ],
  resume_url: 'https://drive.google.com/file/d/1xdbeckFUdIf9SNOmj0sujwTAJ3PY2y09/view?usp=drive_link'
};

export const CONTACT_DATA = {
  contact: 'Contact',
  description: 'Feel free to reach out to me via email or social media.',
  email: 'mailto:gilbertfrausto@gmail.com',
  phone: '(510) 560-0903',
  github: 'https://github.com/gilbertfrausto',
  linkedin: 'https://www.linkedin.com/in/gilbert-frausto/',
  twitter: 'https://x.com/gilbertfrausto3',
  website: 'https://gilbert-frausto.web.app/',
  gravatar: 'https://gilbertfrausto.life/',
  footer: 'gilbert-frausto.web.app',
  npm: 'https://www.npmjs.com/~gilbertfrausto'
};

export const CONTACT = [
  {
    name: 'Email',
    link: CONTACT_DATA.email,
    icon: MdOutlinedAlternateEmail
  },
  {
    name: 'LinkedIn',
    link: CONTACT_DATA.linkedin,
    icon: AkLinkedInV1Fill
  },
  {
    name: 'GitHub',
    link: CONTACT_DATA.github,
    icon: ThGithub
  },
  {
    name: 'Twitter',
    link: CONTACT_DATA.twitter,
    icon: FaBandsXTwitter
  },
  {
    name: 'Npm',
    link: CONTACT_DATA.npm,
    icon: FaBandsNpm
  }
];

export const VIDEO_PLATFORM = 'Youtube';
export const ALL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const HOME_DATA = [
  {
    text: 'Welcome, ',
    colored: false
  },
  {
    text: `I'm Gilbert Frausto a `,
    colored: false
  },
  {
    text: 'Front-End ',
    colored: true
  },
  {
    text: 'Developer and ',
    colored: false
  },
  {
    text: ' UI Architect',
    colored: true
  },

]