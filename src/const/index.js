export const PROJECTS_DATA = {
    costume: {
        name: 'Costume',
        description: 'Costume is a playful IP with a ton of progress and a couple different prototypes, manga and many other concepts.',
        tags: ['Web3', '2D Platformer', 'Unity', 'NFT', 'MMO', 'POLYGON '],
        projects:{
            costume_cards:  {
                name: 'Cosutme Cards',
                stack: 'Web3, Solidity, Polygon, NFT',
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
            opensea: 'https://opensea.io/collection/costume-studios',
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
        description: 'Battle Battles wa web card battle game',
        tags: [],
        socials: {
            ig: 'https://www.instagram.com/battleblocks/',
            opensea: 'https://opensea.io/collection/battle-blocks',
            discord: 'https://discord.gg/battleblocks',
            twitter: 'https://x.com/battleblocks',
            website: 'https://battleblocks.io'
        }
    },
    google: {
        name: 'Google',
        description: 'Google is a multinational technology company that specializes in Internet-related services and products.',
        tags: ['Glue', 'Web Components', 'CAF', 'Google marketing'],
        images: [],
        socials: {
          website: 'https://about.google/brand-resource-center/',
        }
    },
    pz: {
        name: 'Pris0nerz',
        description: `a dynamic NFT project, where your choices matter, and where it's never too late to change! What you do and who you become rests solely on your shoulders, so your decisions outweigh the randomness of your initial mint. Will you choose the safe route and obey the Warden's Wolves? Or will you rebel, plan your escape and make your way to some secluded island with little miss piggy? Depending on what you choose, your NFT will access exclusive $contraband, which you may choose to morph yourself with or smuggle to other Prisonerz.`,
        tags: ['Web3', 'Vue', 'Polygon', 'NFT', '2D'],
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
    }
}

// TODO add constants to the project data
export const PROJECTS = {
  COSTUME: 'Costume',
  PZ: 'Pris0nerz',
  GOOGLE: 'Google',
  BB: 'BattleBlocks',
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
      name: PROJECTS.BB,
      img: 'src/assets/images/projects/bb.png',
      project_index: 4
    },

  ]
}
