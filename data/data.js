const characters = [
  {
    id: 1,
    name: "Mu de Aries",
    imageMain: require("../assets/images/main/Aries.png"),
    imageDetails: require("../assets/images/details/Mu.png"),
    imageArmor: require("../assets/images/armors/aries.webp"),
    country: "Tíbet, Jamir",
    teacher: "Shion de Aries",
    techniques: ["Murido", "Orokyo Ryuseiken", "Kyuukyoku no Cosmo"],
    personality: "Calmo y equilibrado",
    description:
      "Mu durante su niñez fue entrenado por Shion, el Papa del Santuario debido a que eran de la misma tierra natal, Jamir, y a la edad de 7 años Mu se convierte en Santo Dorado. También toma los conocimientos de herrería de las Cloths de su maestro. Es así que se le ve portando su armadura a tan temprana edad al igual que otros niños como la guardia de Santos Dorados (siendo los mayores Aioros de Sagitario y Saga de Gemini).Mu como el herrero ermitaño de Jamir.Tras el asesinato de su maestro, Mu abandonó el santuario pues sabia que el patriarca era un impostor. Aparentemente se contactó primero con el maestro Dohko, pues siendo tan joven no contó nada a sus compañeros caballeros dorados y se mantuvo escondido bajo las ordenes de Dohko (tomando en cuenta que Libra era el único fiel a su antiguo maestro de Aries).",
    armorDescription:
      "El Cloth de Aries (牡羊座の聖衣, ariesu no kurosu) es el manto sagrado de oro o armadura, portada por el Santo de Aries en sus distintas versiones. Aparece tanto en el manga original, en la serie animada de televisión, en Saint Seiya: Episode G, en Saint Seiya: The Lost Canvas y Saint Seiya: Next Dimension, además de algunas películas.Es un manto que denota dar mucha protección, pues está distribuida de tal manera que mantiene cubierto casi todo el cuerpo del Santo Ariano. Lo más distintivo de ésta son los cuernos dorados del carnero que sobresalen desde la espalda hasta los hombros, aunque no parecen tener más utilidad, si no parte estética del manto, pudiesen funcionar para evitar ataques de fuerza donde un enemigo lo quiera aplastar contra su propio cuerpo. Cuenta con un yelmo que cubre todo el área craneal del Santo, sus características más singulares son sus alerones laterales que aluden al vellocino de oro que surcaba los cielos, y una afilada cimera, muy similar a los yelmos greco-romanos que emula un penacho. En la versión anime tiene una sirconia azul incrustada al centro de la cresta frontal.",
  },
  {
    id: 2,
    name: "Aldebaran de Tauro",
    imageMain: require("../assets/images/main/Tauro.png"),
    imageDetails: require("../assets/images/details/Aldebaran.png"),
    imageArmor: require("../assets/images/armors/tauro.webp"),
    country: "Brasil",
    teacher: "Desconocido",
    techniques: ["Gran Cuerno"],

    personality: "Amable y compasivo",
    description:
      "A la edad de 7 años, Aldebarán ya se había convertido en Santo de Oro, portando su armadura a tan temprana edad al igual que otros 'infantes' Santos de Oro. Cabe resaltar que su tamaño y masa corporal ya eran considerables para ese entonces. Al no saber de la impostura del patriarca, Aldebarán creció creyendo seguir al legítimo Patriarca bajo legitimas órdenes de Athena.",
    armorDescription:
      "Cloth de Tauro (牡牛座の聖衣「タウラスのクロス」, oushiza no seigan [taurasu no kurosu]) Es una armadura dorada que es usada por los Santos de Tauro: Aldebaran de Taurus, Ox de Taurus, Hasgard de Tauro, Teneo de Tauro y Harbinger de Taurus, Ain de Taurus y Francisca de Taurus aunque también se sabe la existencia de otro usuario. Y la cual hace su debút en la saga de las 12 Casas de Saint Seiya portada por Aldebaran de Taurus.A primera vista, la estructura externa de esta armadura recuerda a un tanque blindado o a un gran rinoceronte, en hombreras y codales sobresalen imponentes y gruesas puntas, el yelmo integral luce los dos cuernos curvos clásicos del toro, en una posición ideal para que el caballero embista con ellos a su enemigo.",
  },

  {
    id: 3,
    name: "Saga de Géminis",
    imageMain: require("../assets/images/main/Geminis.png"),
    imageDetails: require("../assets/images/details/Saga.png"),
    imageArmor: require("../assets/images/armors/gemini.webp"),
    country: "Grecia",
    teacher: "Shion de Aries",
    techniques: ["Galaxian Explosion", "Another Dimension"],

    personality: "Trastornado",
    description:
      "Saga (サガ, Saga) fue el Gold Saint de Géminis y principal antagonista desde la Saga de los Santos Negros hasta la Batalla de los doce templos, justamente por ser el usurpador del Papa del Santuario, con el fin de dominar el mundo y acabar con Saori y sus Santos al manipular al Ejército de Athena. Saga es considerado el santo de oro más poderoso de su generación. Además, antes de corromperse, Saga era considerado como un dios, por ser un Santo justo y bondadoso con todos los cercanos al Santuario, siendo admirado y respetado por propios y extraños, sin embargo sus proezas solo han sido vistas frente a santos de bronce que fueron capaces de superar o igualar a otros Santos de Oro. (manga clásico)",
    armorDescription:
      "La Cloth de Gemini (ジェミニのクロス, Jemini no Kurosu) representados por los Santos de Géminis y su mito asociado, los Dioskuroi, Cástor y Pólux, hijos gemelos de Leda y hermanos de Helena de Troya y Clitemnestra. Asombrosamente, la Cloth de oro de Géminis no sufrió casi ningún cambio destacable en su paso a anime. Según el momento, se las puede ver con una única pieza o en dos, superpuestas una sobre la otra.",
  },
  {
    id: 4,
    name: "Máscara mortal de Cáncer",
    imageMain: require("../assets/images/main/Cancer.png"),
    imageDetails: require("../assets/images/details/Death-mask.png"),
    imageArmor: require("../assets/images/armors/cancer.webp"),
    country: "Italia",
    teacher: "Shion de Aries",
    techniques: ["Sekishiki Meikai Ha", "Antares", "Hades Bloody Needle"],
    weapon: "Ninguna",
    personality: "Sadista",
    description:
      "Deathmask (デスマスク, Desumasuku), comúnmente llamado Máscara de Muerte, Máscara de la Muerte o Máscara Mortal en los doblajes para países de habla hispana, fue el Saint de Cáncer que protegía el Templo del Gran Cangrejo. Sirvió al malvado Papa Saga hasta que Shiryū lo mató, pero regresó del mundo de los muertos como Specter, en esa ocasión falla en la misión de asesinar a Athena y acaba nuevamente en el mundo de los muertos, por las manos de Rhadamanthys de Wyvern. A pesar de eso, participa en el derrumbe del Muro de los Lamentos junto con los otros Gold Saints.",
    armorDescription:
      "El Cloth de Cáncer (キャンサーのクロス - La Armadura de Cáncer) es bastante singular, es hermosa y muy delicado, posee un estilo particular afilado, de líneas simples pero con increíbles terminaciones filosas. Sus extremos puntiagudos le dan un aspecto distintivo. Entre todas las armaduras de Oro es la más fina y la más coloreada a la vez (en el dibujo animado al menos), es de las más “amarillas” de entre las doce (así como la de Aries), sus formas son estiradas y angulosas, con muchos motivos coloreados. Da la apariencia de ser liviana, protege prácticamente todo el cuerpo y parece ser tremendamente fácil de llevar en combate. Llama mucho la atención a primera vista por sus formas claramente agresivas, con hombreras, brazos, cintura, piernas y talones puntiagudos, las piezas imitan perfectamente la fisonomía del caparazón del crustáceo. La Cloth luce espléndidos motivos o marcas azules en el busto (ningún otro ropaje dorado posee algún otro color), completamente liso, dispone de 2 rubíes (piedras rojas) incrustados en el metal, uno a nivel del cuello y otro en el centro de la 'careta' o 'tiara', que aunque no parece muy útil para proteger la cabeza al Santo es estilista, recrea las extremidades del cangrejo y deja libre el cabello del personaje.",
  },
  {
    id: 5,
    name: "Aioria de Leo",
    imageMain: require("../assets/images/main/Leo.png"),
    imageDetails: require("../assets/images/details/Aiolia.png"),
    imageArmor: require("../assets/images/armors/leo.webp"),

    country: "Grecia",
    teacher: "Aioros de Sagitario",
    techniques: ["Plasma Relámpago"],

    personality: "Justo y honorable",
    description:
      "Aiolia (アイオリア, Aioria) fue el Santo de Oro de Leo en la generación del Siglo XX hasta la Guerra contra Hades en 1990. Aiolia es un personaje del manga y anime Saint Seiya conocido como Los Caballeros del Zodiaco y protagonista de los Spin-offs Episode.G y Soul of Gold. Es el hermano menor de Aiolos, a pesar de su personalidad algo explosiva, tiene un corazón puro que identifica rápidamente la justicia, es por eso que fue uno de los primeros santos en reconocer la autoridad de Athena. Como su hermano Aiolos fue tachado como traidor, Aiolia sentía una obligación de limpiar el nombre de la familia jurando fidelidad al Papa e incluso participando voluntariamente en el exterminio de los Bronze Saints 'rebeldes'.",
    armorDescription:
      "La Armadura de Leo (レオのクロス - Leo no Cloth). Es una armadura sencilla pero muy bella. Cuando Aiolia aparece por primera vez vestido con ella, no sabíamos a ciencia cierta que signo representaba, pues sostenía el casco en la mano. El yelmo-diadema es el elemento característico y distintivo del signo zodiacal, como en muchas otras armaduras doradas, ya que imita las crines del león, este ropaje lleva incrustados como ornamentación extra dos enormes esmeraldas romboides en el metal, una en la frente y otra en la cintura. Las formas y relieves decorativos del ropaje son clásicos y abundantes, el pecho y la cintura de la armadura recuerdan sobremanera las de los centuriones romanos. Las ornamentaciones se extienden un poco hacia abajo en favor de la subida, hasta el ombligo, de una especie de diadema. Las rodillas conocen la misma suerte y pierden su doble ornamentación, así como los tobillos y los pies.",
  },
  {
    id: 6,
    name: "Shaka de Virgo",
    imageMain: require("../assets/images/main/Virgo.png"),
    imageDetails: require("../assets/images/details/Shaka.png"),
    imageArmor: require("../assets/images/armors/virgo.webp"),

    country: "India",
    teacher: "Buda",
    techniques: ["Tenbu Hoiryuu", "Tenma Kokufuu", "Shoukan Shourin"],

    personality: "Sabio y pacífico",
    description:
      "Shaka (シャカ, Shaka) es el Santo de Oro de Virgo en la obra Saint Seiya y protege la Casa de la Virgen en el Santuario. Es considerado por sus aliados como la reencarnación de Buda, pero realmente Buda es su mentor. Posee un poder de observación que le permite conocer la verdad escondida entre las apariencias. Shaka es un personaje que destaca por su serenidad y sabiduría, comprendiendo la fisiología del hombre y el mundo a la perfección. Muestra actitudes de arrogancia, superioridad, y sobre todo, de fanfarronería y soberbia en sus combates contra seres que considere inferiores a él, como Santos de Bronce o Specters de baja categoría. A pesar de su tranquilidad, Shaka es un hombre que llega a molestarse con facilidad y actuar con crueldad como se mostró en su encuentro con Ikki; además de que carece totalmente de piedad.",
    armorDescription:
      "La Cloth de Virgo (バルゴのクロス, Barugo no Kurosu) es la armadura del Santo de Virgo que representa la figura de una mujer rezando. La armadura de Virgo es muy bella y estilista, como muchas otras desprende un gran respeto. El casco es en cierto modo parecido al de Aries, con varios ornamentos en la parte delantera y tosco en la trasera, luce dos alas a los lados y en el centro un enorme rubí, incrustado en el metal, y una especie de antenas parecidas a las de un insecto. Lo verdaderamente original del ropaje es el enorme busto triangular que recubre los hombros y el pecho, la forma del cuello recuerda al de un traje de etiqueta.",
  },
  {
    id: 7,
    name: "Dohko de Libra",
    imageMain: require("../assets/images/main/Libra.png"),
    imageDetails: require("../assets/images/details/Dohko.png"),
    imageArmor: require("../assets/images/armors/gemini.webp"),
    nationality: "Chino",
    country: "China",
    teacher: "Roshi de Dragón",
    techniques: ["Tenbu Horin", "Rozan Kou Ryu Ha", "Rozan Shou Ryu Ha"],
    weapon: "Ninguna",
    personality: "Sereno y sabio",
    description:
      "Mu durante su niñez fue entrenado por Shion, el Papa del Santuario debido a que eran de la misma tierra natal, Jamir, y a la edad de 7 años Mu se convierte en Santo Dorado. También toma los conocimientos de herrería de las Cloths de su maestro. Es así que se le ve portando su armadura a tan temprana edad al igual que otros niños como la guardia de Santos Dorados (siendo los mayores Aioros de Sagitario y Saga de Gemini).Mu como el herrero ermitaño de Jamir.Tras el asesinato de su maestro, Mu abandonó el santuario pues sabia que el patriarca era un impostor. Aparentemente se contactó primero con el maestro Dohko, pues siendo tan joven no contó nada a sus compañeros caballeros dorados y se mantuvo escondido bajo las ordenes de Dohko (tomando en cuenta que Libra era el único fiel a su antiguo maestro de Aries).",
  },
  {
    id: 8,
    name: "Milo de Escorpio",
    imageMain: require("../assets/images/main/Escorpio.png"),
    imageDetails: require("../assets/images/details/Milo.png"),
    imageArmor: require("../assets/images/armors/gemini.webp"),
    nationality: "Brasileño",
    country: "Brasil",
    teacher: "Aioria de Leo",
    techniques: ["Antares", "Scarlet Needle"],
    weapon: "Dagas Escarlatas",
    personality: "Ambiguo y sádico",
    description:
      "Mu durante su niñez fue entrenado por Shion, el Papa del Santuario debido a que eran de la misma tierra natal, Jamir, y a la edad de 7 años Mu se convierte en Santo Dorado. También toma los conocimientos de herrería de las Cloths de su maestro. Es así que se le ve portando su armadura a tan temprana edad al igual que otros niños como la guardia de Santos Dorados (siendo los mayores Aioros de Sagitario y Saga de Gemini).Mu como el herrero ermitaño de Jamir.Tras el asesinato de su maestro, Mu abandonó el santuario pues sabia que el patriarca era un impostor. Aparentemente se contactó primero con el maestro Dohko, pues siendo tan joven no contó nada a sus compañeros caballeros dorados y se mantuvo escondido bajo las ordenes de Dohko (tomando en cuenta que Libra era el único fiel a su antiguo maestro de Aries).",
  },
  {
    id: 9,
    name: "Aioros de Sagitario",
    imageMain: require("../assets/images/main/Sagitarius.png"),
    imageDetails: require("../assets/images/details/Aiolos.png"),
    imageArmor: require("../assets/images/armors/gemini.webp"),
    nationality: "Griego",
    country: "Grecia",
    teacher: "Saga de Géminis",
    techniques: ["Galaxian Explosion", "Ultimate Galaxian"],
    weapon: "Sagittarius Bow",
    personality: "Leal y honorable",
    description:
      "Mu durante su niñez fue entrenado por Shion, el Papa del Santuario debido a que eran de la misma tierra natal, Jamir, y a la edad de 7 años Mu se convierte en Santo Dorado. También toma los conocimientos de herrería de las Cloths de su maestro. Es así que se le ve portando su armadura a tan temprana edad al igual que otros niños como la guardia de Santos Dorados (siendo los mayores Aioros de Sagitario y Saga de Gemini).Mu como el herrero ermitaño de Jamir.Tras el asesinato de su maestro, Mu abandonó el santuario pues sabia que el patriarca era un impostor. Aparentemente se contactó primero con el maestro Dohko, pues siendo tan joven no contó nada a sus compañeros caballeros dorados y se mantuvo escondido bajo las ordenes de Dohko (tomando en cuenta que Libra era el único fiel a su antiguo maestro de Aries).",
  },
  {
    id: 10,
    name: "Shura de Capricornio",
    imageMain: require("../assets/images/main/Capricorn.png"),
    imageDetails: require("../assets/images/details/Shura.png"),
    imageArmor: require("../assets/images/armors/gemini.webp"),
    nationality: "Japonés",
    country: "Japón",
    teacher: "Dohko de Libra",
    techniques: ["Excalibur", "Rozan Kou Ryu Ha", "Rozan Shou Ryu Ha"],
    weapon: "Excalibur",
    personality: "Firme y leal",
    description:
      "Mu durante su niñez fue entrenado por Shion, el Papa del Santuario debido a que eran de la misma tierra natal, Jamir, y a la edad de 7 años Mu se convierte en Santo Dorado. También toma los conocimientos de herrería de las Cloths de su maestro. Es así que se le ve portando su armadura a tan temprana edad al igual que otros niños como la guardia de Santos Dorados (siendo los mayores Aioros de Sagitario y Saga de Gemini).Mu como el herrero ermitaño de Jamir.Tras el asesinato de su maestro, Mu abandonó el santuario pues sabia que el patriarca era un impostor. Aparentemente se contactó primero con el maestro Dohko, pues siendo tan joven no contó nada a sus compañeros caballeros dorados y se mantuvo escondido bajo las ordenes de Dohko (tomando en cuenta que Libra era el único fiel a su antiguo maestro de Aries).",
  },
  {
    id: 11,
    name: "Camus de Acuario",
    imageMain: require("../assets/images/main/Aquarius.png"),
    imageDetails: require("../assets/images/details/Camus.png"),
    imageArmor: require("../assets/images/armors/gemini.webp"),
    nationality: "Francés",
    country: "Francia",
    teacher: "Aquarius Dégel",
    techniques: ["Diamond Dust", "Freezing Coffin"],
    weapon: "Ninguna",
    personality: "Sereno y estoico",
    description:
      "Mu durante su niñez fue entrenado por Shion, el Papa del Santuario debido a que eran de la misma tierra natal, Jamir, y a la edad de 7 años Mu se convierte en Santo Dorado. También toma los conocimientos de herrería de las Cloths de su maestro. Es así que se le ve portando su armadura a tan temprana edad al igual que otros niños como la guardia de Santos Dorados (siendo los mayores Aioros de Sagitario y Saga de Gemini).Mu como el herrero ermitaño de Jamir.Tras el asesinato de su maestro, Mu abandonó el santuario pues sabia que el patriarca era un impostor. Aparentemente se contactó primero con el maestro Dohko, pues siendo tan joven no contó nada a sus compañeros caballeros dorados y se mantuvo escondido bajo las ordenes de Dohko (tomando en cuenta que Libra era el único fiel a su antiguo maestro de Aries).",
  },
  {
    id: 12,
    name: "Afrodita de Piscis",
    imageMain: require("../assets/images/main/Pisces.png"),
    imageDetails: require("../assets/images/details/Aphrodite.png"),
    imageArmor: require("../assets/images/armors/gemini.webp"),
    nationality: "Italiano",
    country: "Italia",
    teacher: "Nadie",
    techniques: ["Rosa Pirueta", "Royal Demon Rose"],
    weapon: "Rosa Sangrienta",
    personality: "Narcisista y arrogante",
    description:
      "Mu durante su niñez fue entrenado por Shion, el Papa del Santuario debido a que eran de la misma tierra natal, Jamir, y a la edad de 7 años Mu se convierte en Santo Dorado. También toma los conocimientos de herrería de las Cloths de su maestro. Es así que se le ve portando su armadura a tan temprana edad al igual que otros niños como la guardia de Santos Dorados (siendo los mayores Aioros de Sagitario y Saga de Gemini).Mu como el herrero ermitaño de Jamir.Tras el asesinato de su maestro, Mu abandonó el santuario pues sabia que el patriarca era un impostor. Aparentemente se contactó primero con el maestro Dohko, pues siendo tan joven no contó nada a sus compañeros caballeros dorados y se mantuvo escondido bajo las ordenes de Dohko (tomando en cuenta que Libra era el único fiel a su antiguo maestro de Aries).",
  },
];

export default characters;
