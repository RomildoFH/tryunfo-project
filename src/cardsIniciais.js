const numberRandomGenerate = () => {
  const maxValue = 90;
  const numberRandom = Math.floor(Math.random() * maxValue);
  return numberRandom;
};

const initialCards = [
  // {
  //   cardName: 'Crono',
  //   cardDescription: `Um jovém aventureiro, com grandes habilidades de batalha,
  //   seu estilo é combate físico e usa magia do tipo luz`,
  //   cardAttr1: numberRandomGenerate(),
  //   cardAttr2: numberRandomGenerate(),
  //   cardAttr3: numberRandomGenerate(),
  //   cardImage: 'http://ambrosia.com.br/wp-content/uploads/2010/06/Crono_CTDS-220x275.png',
  //   cardRare: 'normal',
  //   cardTrunfo: false,
  // },
  {
    cardName: 'Lucca',
    cardDescription: `Lucca é uma garota super inteligente e melhor amiga de Crono,
     com suas habilidades ela cria diversas invensões,
      inclusive uma chave que abre portais para viagem no tempo.`,
    cardAttr1: numberRandomGenerate(),
    cardAttr2: numberRandomGenerate(),
    cardAttr3: numberRandomGenerate(),
    cardImage: 'https://cdn.wikimg.net/en/chronowiki/images/6/6a/Lucca2.png',
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Marle',
    cardDescription: `Marle, ou Princesa Nadia,
     tem um espírito aventureiro e não gosta da vida protegida que tem na realeza.
      Ela parte é sugada por um portal,
      dando inicio sua jornada com Crono e seus amigos.`,
    cardAttr1: numberRandomGenerate(),
    cardAttr2: numberRandomGenerate(),
    cardAttr3: numberRandomGenerate(),
    cardImage: 'http://vacanerd.com.br/wp-content/uploads/2014/02/Marle_CTDS-220x275.png',
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Frog',
    cardDescription: `Frog é um Cavaleiro de Guardia que foi amaldiçoado por Magus,
     ele dedica sua vida em proteger o reino e se vingar da morte de seu melhor amigo.`,
    cardAttr1: numberRandomGenerate(),
    cardAttr2: numberRandomGenerate(),
    cardAttr3: numberRandomGenerate(),
    cardImage: 'http://ambrosia.com.br/wp-content/uploads/2010/06/Frog_CTDS-220x275.png',
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Robo',
    cardDescription: `Robo é um residente do futuro apocalíptico,
     Ele luta com seus braços robóticos junto com algumas tecnologias de cura.`,
    cardAttr1: numberRandomGenerate(),
    cardAttr2: numberRandomGenerate(),
    cardAttr3: numberRandomGenerate(),
    cardImage: 'https://www.chimichangas.com.br/wp-content/uploads/2020/03/1.png',
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Ayla',
    cardDescription: `Uma das primeiras mulheres pré-históricas,
     Ayla se tornou a líder da Ioka Tribe.
      Seu povo vive em guerra constante contra os Reptites,
      uma raça de répteis superinteligentes e evoluída.`,
    cardAttr1: numberRandomGenerate(),
    cardAttr2: numberRandomGenerate(),
    cardAttr3: numberRandomGenerate(),
    cardImage: 'http://shrines.rpgclassics.com/snes/ct/images/ayla22.gif',
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Magus',
    cardDescription: `Magus é um mago
     negro que trava uma guerra contra o reino de Guardia em 600 A.D.
     Magus antes Janus, foi príncipe de Zeal em 12000 B.C.,
      mas acabou sendo dominado pelo sentimento de vingança após um encontro com Lavos.`,
    cardAttr1: numberRandomGenerate(),
    cardAttr2: numberRandomGenerate(),
    cardAttr3: numberRandomGenerate(),
    cardImage: 'http://4.bp.blogspot.com/-uaLMnOok1Jk/UgMqXa9r30I/AAAAAAAABH8/e8sFxz5vm-s/s1600/200px-Magus2.png',
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Chancellor',
    cardDescription: `Assistente do rei,
     foi sequestrado por Yakra enquanto lutava pelo controle do reino.`,
    cardAttr1: numberRandomGenerate(),
    cardAttr2: numberRandomGenerate(),
    cardAttr3: numberRandomGenerate(),
    cardImage: 'https://www.giantbomb.com/a/uploads/square_small/0/4495/555082-ct_chancellor.jpg',
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Yakra',
    cardDescription: `Uma besta que um dia assombrou o oeste da floresta de Guardia,
     Yakra é parte do exército dos místicos
      e responsável pelo sequestro da Rainha Leene e corrupção da Catedral.`,
    cardAttr1: numberRandomGenerate(),
    cardAttr2: numberRandomGenerate(),
    cardAttr3: numberRandomGenerate(),
    cardImage: 'https://cdn.wikimg.net/en/strategywiki/images/d/da/CT_monster_Yakra.png',
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Lavos',
    cardDescription: `Antagonista da história,
     Lavos é um ser extraterrestre
      que fica escondido no núcleo do planeta após cair na Terra.
      Ele drena a energia do planeta e causa estragos em sua superfície.`,
    cardAttr1: numberRandomGenerate(),
    cardAttr2: numberRandomGenerate(),
    cardAttr3: numberRandomGenerate(),
    cardImage: 'https://cdn.wikimg.net/en/strategywiki/images/6/6c/Chrono_Trigger_Lavos_inner.png',
    cardRare: 'normal',
    cardTrunfo: false,
  },
];

export default initialCards;
