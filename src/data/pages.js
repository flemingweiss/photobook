// Budapest Photo Album - Pages Configuration
// Each page contains polaroids with images, captions, and positioning

export const pages = [
  // Page 1 - Introduction (Left)
  {
    title: '',
    decorations: [
    { emoji: '', position: { top: '10%', right: '25%', fontSize: '3rem' } }
    
  ],
   tapedImages: [
      {
        image: '/assets/airplane.png',
        rotation: -1,
        width: '180px',
        tapeVariant: 1,
        position: { bottom: '5%', left: '0%' }
      },
       {
        image: '/assets/coffee.png',
        rotation: 15,
        width: '80px',
        tapeVariant: 1,
        position: { bottom: '15%', left: '75%' }
      },
      {
        image: '/assets/cake.webp',
        rotation: -15,
        width: '180px',
        tapeVariant: 1,
        position: { top: '7%', right: '55%' }
      },
      {
        image: '/assets/train.png',
        rotation: 0,
        width: '180px',
        tapeVariant: 1,
        position: { bottom: '70%', left: '40%' }
      }
    ],
    text: 'Zehn Hinweise, eine Reise...\n\n Erkennst du wohin es geht?',
    textPosition: { top: '35%', left: '15%', fontSize: '2rem', textAlign: 'center' }
  },

  // Page 2 - Introduction (Right)
  {
    title: '',
    polaroids: [
      {
        image: '/assets/1.png',
        caption: '"Das da hab ich auf TikTok gesehen!"',
        rotation: 3,
        size: 'large',
        tapeVariant: 1,
        position: { top: '15%', left: '15%' }
      }
    ],
    text: 'Nach der Landung muss erstmal ganz schnell ein Siebträger Cappuccino getrunken werden.',
    textPosition: { bottom: '5%', left: '15%', fontSize: '1.8rem', transform: 'rotate(3deg)' }

  },

  // Page 3 - Photo Collection 1 (Left)
  {
    title: '',
    polaroids: [
      {
        image: '/assets/2.png',
        caption: 'Die sollte "Löwenbrücke" heißen',
        rotation: -5,
        size: 'medium',
        tapeVariant: 2,
        position: { top: '5%', left: '-1%' }
      },
      {
        image: '/assets/3.png',
        caption: 'Hmmm Paprika',
        rotation: 10,
        size: 'large',
        tapeVariant: 1,
        position: { bottom: '5%', right: '4%' }
      }
    ],
    text: 'Wo wir hier wohl stehen..?',
    textPosition: { top: '10%', left: '70%', fontSize: '1.8rem', transform: 'rotate(-5deg)' }
  },

  // Page 4 - Photo Collection 1 (Right)
  {
    title: '',
    polaroids: [
      {
        image: '/assets/4.png',
        caption: 'Damit die Eltern Ruhe geben',
        rotation: 2,
        size: 'large',
        tapeVariant: 3,
        position: { top: '5%', left: '15%' }
      },
    ],
    tapedImages: [
      {
        image: '/assets/langos.png',
        rotation: -15,
        width: '150px',
        tapeVariant: 1,
        position: { bottom: '5%', left: '-5%' }
      }
    ],
    text: '"Bubchen, lebst du noch? Ich höre ja gar nichts von euch."',
    textPosition: { bottom: '35%', left: '15%', fontSize: '1.4rem', transform: 'rotate(2deg)' }
  },

  // Page 5 - Photo Collection 2 (Left)
  {
    title: '',
    polaroids: [
      {
        image: '/assets/14.png',
        caption: '"Fleming, komm wir kaufen Wassermelone"',
        rotation: -4,
        size: 'large',
        tapeVariant: 1,
        position: { top: '1%', left: '10%' }
      },{
        image: '/assets/market.png',
        caption: '1h, 10kg Obst und 10L Wasser später',
        rotation: 10,
        size: 'large',
        tapeVariant: 2,
        position: { bottom: '2%', right: '5%' }
      },
    ]
  },

  // Page 6 - Photo Collection 2 (Right)
  {
    title: '',
    polaroids: [

      {
        image: '/assets/3_2.png',
        caption: 'Auf den Schock erstmal etwas essen!',
        rotation: -3,
        size: 'large',
        tapeVariant: 3,
        position: { bottom: '55%', left: '10%' }
      },
      {
        image: '/assets/water.png',
        caption: '"Denkst du hier gibts Seemonster?"',
        rotation: 10,
        size: 'medium',
        tapeVariant: 3,
        position: { bottom: '0%', left: '35%' }
      }
    ],
    text: 'Was das wohl sein könnte? Hmm...',
    textPosition: { bottom: '40%', left: '20%', fontSize: '1.4rem', transform: 'rotate(-3deg)' }
  },

  // Page 7 - Photo Collection 3 (Left)
  {
    title: '',
    polaroids: [
      {
        image: '/assets/16.png',
        caption: 'Aber nur ein Stück Kuchen...',
        rotation: 3,
        size: 'large',
        tapeVariant: 1,
        position: { top: '20%', left: '15%' }
      }
    ],
    text: '...Danach wurden doch noch zwei Bäckereien überfallen und etliche Bejgli weggeputzt.',
    textPosition: { bottom: '10%', left: '12%', fontSize: '1.4rem', transform: 'rotate(3deg)' }

  },

  // Page 8 - Photo Collection 3 (Right)
  {
    title: '',
    polaroids: [
      {
        image: '/assets/17.png',
        caption: 'Prost!',
        rotation: -4,
        size: 'medium',
        tapeVariant: 2,
        position: { top: '1%', left: '18%' }
      },
      {
        image: '/assets/18.png',
        caption: 'Och nö, schon wieder Essen?',
        rotation: -10,
        size: 'large',
        tapeVariant: 3,
        position: { bottom: '12%', right: '10%' }
      }
    ],
    text: 'Natürlich veganes Gulasch und Traubensaft',
    textPosition: { bottom: '0%', left: '20%', fontSize: '1.3rem', transform: 'rotate(-10deg)' }
  },

  // Page 9 - Photo Collection 4 (Left)
  {
    title: '',
    polaroids: [
      {
        image: '/assets/19.png',
        caption: 'Dooooch, ich vertrag noch einen, miau!',
        rotation: -2,
        size: 'large',
        tapeVariant: 1,
        position: { top: '2%', left: '12%' }
      }, 
       {
        image: '/assets/muedi.png',
        caption: 'So müdi nach dem ganzen Essen...',
        rotation: 12,
        size: 'large',
        tapeVariant: 2,
        position: { bottom: '2%', left: '12%' }
      }
    ],
    text: '',
    textPosition: { bottom: '30%', right: '5%', fontSize: '1.4rem', transform: 'rotate(-3deg)' }
  },

  // Page 10 - Empty/Decorative (Right)
  {
    title: '',
    decoration: '',
    decorationPosition: { top: '25%', left: '35%', fontSize: '4rem' },
    text: 'Falls du es bis jetzt noch nicht erkannt hast:\n\n Es geht nach Budapest!',
    textPosition: { top: '40%', left: '5%', fontSize: '1.6rem', textAlign: 'center' },
    tapedImages: [
      {
        image: '/assets/tram ticket.png',
        rotation: 15,
        width: '150px',
        tapeVariant: 2,
        position: { top: '0%', left: '50%' }
      }, 
      {
        image: '/assets/bridge.png',
        rotation: 65,
        width: '150px',
        tapeVariant: 0,
        position: { bottom: '15%', left: '60%' }
      }, 
      {
        image: '/assets/gulasch.png',
        rotation: -13,
        width: '100px',
        tapeVariant: 0,
        position: { bottom: '-3%', left: '-5%' }
      },
      {
        image: '/assets/pool.png',
        rotation: -3,
        width: '120px',
        tapeVariant: 0,
        position: { top: '0%', left: '-10%' }
      },
      {
        image: '/assets/budapest.png',
        rotation: 1,
        width: '180px',
        tapeVariant: 0,
        position: { top: '30%', left: '10%' }
      },
      {
        image: '/assets/hungary.png',
        rotation: 1,
        width: '180px',
        tapeVariant: 0,
        position: { top: '62%', left: '10%' }
      },
      {
        image: '/assets/pap.png',
        rotation: 1,
        width: '80px',
        tapeVariant: 0,
        position: { top: '15%', left: '20%' }
      },
      {
        image: '/assets/wine.png',
        rotation: -25,
        width: '60px',
        tapeVariant: 0,
        position: { top: '70%', left: '0%' }
      },
      {
        image: '/assets/wurst.png',
        rotation: 15,
        width: '60px',
        tapeVariant: 0,
        position: { top: '18%', left: '55%' }
      },
      {
        image: '/assets/tram.png',
        rotation: 90,
        width: '180px',
        tapeVariant: 0,
        position: { top: '48%', left: '65%' }
      },
      {
        image: '/assets/idk.png',
        rotation: 35,
        width: '90px',
        tapeVariant: 0,
        position: { top: '85%', left: '55%' }
      },
      {
        image: '/assets/bar.png',
        rotation: 15,
        width: '90px',
        tapeVariant: 0,
        position: { top: '70%', left: '30%' }
      },
    ]
  },


]
