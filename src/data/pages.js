// Budapest Photo Album - Pages Configuration
// Each page contains polaroids with images, captions, and positioning

export const pages = [
  // Page 1 - Introduction (Left)
  {
    decoration: '✈️',
    decorationPosition: { top: '10%', right: '25%', fontSize: '3rem' },
    text: 'Ein Wochenendtrip in einem Monat...\n\n Wo  die Reise wohl hingeht?',
    textPosition: { top: '35%', left: '15%', fontSize: '2rem', textAlign: 'center' }
  },

  // Page 2 - Introduction (Right)
  {
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
    text: 'Nach der Landung aber erstmal einen Cappuccino, ohne den geht hier gar nichts!',
    textPosition: { bottom: '5%', left: '15%', fontSize: '1.8rem', transform: 'rotate(3deg)' }
    
  },

  // Page 3 - Photo Collection 1 (Left)
  {
    polaroids: [
      {
        image: '/assets/2.png',
        caption: 'Löwenbrücke',
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
    polaroids: [
      {
        image: '/assets/4.png',
        caption: 'Damit die Eltern Ruhe geben',
        rotation: 2,
        size: 'large',
        tapeVariant: 3,
        position: { top: '20%', left: '15%' }
      }
    ],
    text: '"Bubchen, lebst du noch? Ich höre ja gar nichts von euch."',
    textPosition: { bottom: '20%', left: '15%', fontSize: '1.4rem', transform: 'rotate(2deg)' }
  },

  // Page 5 - Photo Collection 2 (Left)
  {
    polaroids: [
      {
        image: '/assets/14.png',
        caption: '"Fleming ich will nur bummeln"',
        rotation: -4,
        size: 'large',
        tapeVariant: 1,
        position: { top: '1%', left: '10%' }
      },{
        image: '/assets/15.png',
        caption: '4h später',
        rotation: 10,
        size: 'large',
        tapeVariant: 2,
        position: { bottom: '2%', right: '5%' }
      },
    ]
  },

  // Page 6 - Photo Collection 2 (Right)
  {
    polaroids: [
      
      {
        image: '/assets/3_2.png',
        caption: 'Auf den Schock erstmal etwas essen!',
        rotation: -3,
        size: 'large',
        tapeVariant: 3,
        position: { bottom: '25%', left: '10%' }
      }
    ],
    text: 'Was das wohl sein könnte? Hmm...',
    textPosition: { bottom: '10%', left: '20%', fontSize: '1.4rem', transform: 'rotate(-3deg)' }
  },

  // Page 7 - Photo Collection 3 (Left)
  {
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
    text: '...Danach wurden doch noch zwei Bäckereien überfallen',
    textPosition: { bottom: '20%', left: '12%', fontSize: '1.4rem', transform: 'rotate(3deg)' }
    
  },

  // Page 8 - Photo Collection 3 (Right)
  {
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
    polaroids: [
      {
        image: '/assets/19.png',
        caption: 'Dooooch, ich vertrag noch einen, miau!',
        rotation: -2,
        size: 'large',
        tapeVariant: 1,
        position: { top: '12%', left: '12%' }
      }
    ],
    text: 'Was dann geschieht, wissen wir beide nur zu gut...',
    textPosition: { bottom: '30%', right: '5%', fontSize: '1.4rem', transform: 'rotate(-3deg)' }
  },

  // Page 10 - Empty/Decorative (Right)
  {
    decoration: '',
    decorationPosition: { top: '25%', left: '35%', fontSize: '4rem' },
    text: 'Falls du es noch bis jetzt noch nicht erkannt hast:\n\n Es geht nach Budapest!',
    textPosition: { top: '20%', left: '15%', fontSize: '1.6rem', textAlign: 'center' },
    tapedImages: [
      {
        image: '/assets/tram ticket.png',
        rotation: -3,
        width: '280px',
        tapeVariant: 2,
        position: { bottom: '25%', left: '0%' }
      }
    ]
  },


]
