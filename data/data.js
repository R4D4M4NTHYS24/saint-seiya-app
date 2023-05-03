const characters = [
  {
    id: 1,
    name: "Mu de Aries",
    imageMain: require("../assets/images/main/Aries.png"),
    imageDetails: require("../assets/images/details/Mu.png"),
    imageArmor: require("../assets/images/armors/aries.png"),
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
    imageArmor: require("../assets/images/armors/tauro.png"),
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
    imageArmor: require("../assets/images/armors/gemini.png"),
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
    imageArmor: require("../assets/images/armors/cancer.png"),
    country: "Italia",
    teacher: "Shion de Aries",
    techniques: ["Sekishiki Meikai Ha", "Hades Bloody Needle"],
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
    imageArmor: require("../assets/images/armors/leo.png"),
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
    imageArmor: require("../assets/images/armors/virgo.png"),
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
    imageArmor: require("../assets/images/armors/libra.png"),
    country: "China",
    teacher: "Roshi de Dragón",
    techniques: ["Tenbu Horin", "Rozan Kou Ryu Ha", "Rozan Shou Ryu Ha"],
    personality: "Sereno y sabio",
    description:
      "Dohko (童虎, Dōko), también conocido como el Viejo Maestro (老師, Rōshi) fue junto a Shion un Bronze Saint [16] de constelación desconocida durante el siglo XVIII que posteriormente seria promovido a Santo de Libra[16], cargo que ostentaría también hasta 1990 (siglo XX). Dohko fue el primer Gold Saint (en el anime) en ser presentado al comienzo de la historia a pesar de que su verdadero rango no se daría a conocer sino hasta mucho tiempo después. Junto con Shion de Aries, fue sobreviviente de tal guerra contra la armada de Hades, posteriormente fue bendecido por Athena con el Misopethamenos, y se dedicó a cuidar la Torre de las 108 Estrellas Oscuras en los Pico de los Cinco Ancianos durante más de 243 años. Es el maestro de Shiryū, además de Okko (en el anime) y de Genbu (en Omega), tras la derrota de Saga, Dohko se convierte en la autoridad máxima del Santuario y desde los cinco picos lidera a los Saints hasta su muerte en el Siglo XX (1990), sacrificándose junto a los demás Santos de Oro para destruir el Muro de los Lamentos.",
    armorDescription:
      "Libra no Cloth (ライブラのクロス - La Armadura de Libra). El diseño de la Armadura de Libra implica una característica poco común entre las Gold Cloth debido a su asimetría pronunciada en las hombreras, posee dos hombreras diferentes, el hombro derecho tiene forma gruesa y curvada, y el hombro izquierdo es fino y recto (se deduce que Dohko debe ser zurdo, pues la parte más protegida es en teoría la que se coloca delante) y la colocación de los escudos es diferente, Kurumada puso un escudo en la espalda del caballero de Libra y otro en su mano, lo cual es sorprendente ya que por el signo que representa uno se espera que la Cloth sea perfectamente simétrica, más que cualquier otra. Puede que Kurumada pretenda mostrar en ese detalle un ligero desequilibrio en Dohko, que es un poco más pronunciado tigre que dragón. El felino se encuentra en el casco de la cloth, que tiene la forma de cabeza de un tigre, en el nombre del personaje y en su tatuaje, mientras que el dragón se sitúa en sus técnicas de combate y ya está asignado a su discípulo Shiryu. Este diseño también puede significar que Dohko, lejos de la neutralidad perfecta, se inclina hacia 'bien'.",
  },
  {
    id: 8,
    name: "Milo de Escorpio",
    imageMain: require("../assets/images/main/Escorpio.png"),
    imageDetails: require("../assets/images/details/Milo.png"),
    imageArmor: require("../assets/images/armors/scorpio.png"),
    country: "Grecia",
    teacher: "Desconocido",
    techniques: ["Antares", "Scarlet Needle"],
    personality: "Ambiguo y sádico",
    description:
      "Milo (ミロ, Miro) fue el Santo de Oro de Scorpius del siglo XX en el anime y manga Saint Seiya. Milo siempre está seguro de sí mismo, es más impulsivo que la mayoría de los otros Santos Dorados. Él es de una naturaleza violenta, apasionada, orgullosa, y jactanciosa lo que parece a simple vista un hombre amargado y mal humorado, se ofende con mucha facilidad, es incontrovertible que se quede quieto cuando algo le preocupa. Milo no pareciera jamás mostrar sus emociones: siempre las disimula detrás de una máscara de inalterabilidad y absoluta calma, pero dentro de sí es una persona muy sentimental; es esta misma calma que lo hace un temible adversario durante el combate. Milo jamás duda y no conoce el titubeo, Muestra su agresividad dependiendo del adversario ya que lo pueden llegar a alterar. Sus pensamientos y sus actos están armonizados perfectamente. Está sincronización es particularmente obvia durante el combate. El combate es uno de los raros momentos en que deja aparecer todas sus pasiones y suele actuar cuando la situación realmente lo requiere.",
    armorDescription:
      "La Cloth de Escorpio (スコーピオンのクロス, Scorpion no Cloth). La armadura es recargada, tiene muchas similitudes con la de Cáncer, formas agresivas y puntiagudas. El yelmo-diadema imita claramente la forma natural del aguijón del escorpión. Lleva incrustado un enorme rubí en el metal de la pechera. El tótem de esta armadura representa a un escorpión con su cola levantada, listo para picar. El cuerpo está formado por las hombreras, el bloque central, que está abierto para que la protección de la espalda forme las patas traseras del arácnido, y la cintura. La máscara se divide con la mitad principal que forma la cabeza, y la cola que forma, de hecho, la cola del animal, con la punta doblada hacia arriba. Mirando cuidadosamente se observa que la protección para la cara rota a fin de que los dedos de los pies apunten hacia afuera, y que la cola se cae después de la segunda placa con forma de diamante. Las patas delanteras son los brazaletes, los protectores de los bíceps, espinilleras y rodilleras, todos encajados unos dentro de otros. Las garras están abiertas y forman las pinzas.",
  },
  {
    id: 9,
    name: "Aioros de Sagitario",
    imageMain: require("../assets/images/main/Sagitarius.png"),
    imageDetails: require("../assets/images/details/Aiolos.png"),
    imageArmor: require("../assets/images/armors/sagitario.png"),
    country: "Grecia",
    teacher: "Desconocido",
    techniques: [
      "Flecha de Oro (Golden Arrow)",
      "Golpe de Talón (Heel Strike)",
      "Sagitta no Ryuseiken ",
    ],

    personality: "Leal y honorable",
    description:
      "Aiolos (アイオロス, Aiorosu) fue el Santo de Sagittarius, fiel protector de la Diosa Athena, a la que sigue con todo su corazón, para defender la paz sobre la Tierra y quien se ponía en primera línea arriesgando su vida en combate. Cuando Aiolos combate para proteger a alguien se vuelve invencible. Incluso después de su muerte, su Cosmos seguiría existiendo en la Tierra. Fue candidato a sucesor de Papa, hasta su heroica muerte debido tras eludir al corrompido Saga de Gemini y sus posteriores y sangrientos enfrentamientos con Shura de Capricorn, Deathmask de Cancer y Aphrodite de Pisces[9]. El salvador de la infanta Athena y hecho mártir al protegerla a costa de su vida. Resucitado más tarde por Athena, para dar su vida junto a los otros once Santos de Oro en la destrucción del Muro de los Lamentos en Giudecca. A pesar de estar muerto, parte de su energía residual continúa en su Cloth de Sagittarius y el Templo de Sagittarius; ayudando en los momentos críticos a los Santos de Bronce, especialmente a Seiya de Pegasus o cuando envía su testamento desde 1990 hasta el siglo XVIII. Se le considera un ideal de cómo debe ser un Santo de Athena, porque protege a la Diosa aun después de su muerte.",
    armorDescription:
      "La Cloth de Sagitario (射手座の鎧 Iteza no yoroi). Esta es única entre las armaduras de oro, en su versión final está equipada con un par de alas (lo que le da un toque de divinidad), montadas en la espalda, que deberían permitir al Santo de Oro volar, algo que no es precisamente un atributo típico de los centauros, mientras que la primera versión diseñada por Masami Kurumada, sin alas, corresponde más bien a las leyendas. El object de este Cloth representa a un centauro alado, con el arco tensado. La disposición de las piezas es similar a la del object V1, el cuerpo humano se compone del pectoral y la cintura, y el del centauro está formado por los protectores de la espalda. La parte más extraña es la corona-diadema, que simplemente descansa en el pectoral, sin llegar a dar la impresión de ser una cabeza humana o animal. Los brazos están hechos de lo que parece la capa interna de los brazaletes y los protectores de los bíceps, la parte cilíndrica lisa sobre la que descansan las diferentes protecciones externas forma las patas delanteras, con las protecciones para el codo se forman las cuencas. Las patas traseras están formadas por las rodilleras y espinilleras.",
  },
  {
    id: 10,
    name: "Shura de Capricornio",
    imageMain: require("../assets/images/main/Capricorn.png"),
    imageDetails: require("../assets/images/details/Shura.png"),
    imageArmor: require("../assets/images/armors/capricornio.png"),

    country: "España",
    teacher: "Aioros de Sagitario",
    techniques: ["Excalibur", "Jumping Stone"],
    weapon: "Excalibur",
    personality: "Firme y leal",
    description:
      "Shura (シュラ, Shura) es el Gold Saint de Capricorn, quien causó las heridas mortales a Aiolos de Sagittarius. Tras su muerte, depositó su alma en Shiryū. Shura es retratado como alguien con un cáracter inflexible y honorable, como el de los samurai. Consideraba a Aiolos y Saga sus superiores, mas fue indignado al declarársele traidor al Saint de Sagittarius. Desde entonces, acató su lealtad hacia el ponífice (Saga) a pesar de conocer sus intenciones.Es tan estricto que conmina, dos veces, a Aiolos a suicidarse para dejar de deshonrar al signo de Sagitario, siendo la segunda dónde el dice que le asistirá en su suicidio, como todo un samurai. Shura es devoto a Saga de Gemini por su ideal de proteger al más fuerte para gobernar el mundo. No obstante, esta manera de pensar fue destruida cuando Shiryū de Dragon se sacrifica por la justicia, acto que restauraría su fé en la humanidad, dando su vida así a cambio de que un guerrero tan noble siga viviendo.En el anime: Conserva un carácter defensor de la justicia, y el orgullo siendo autoproclamado como Saint más fiel a Athena. A pesar de dicho título, se muestra como un guerrero frío y estricto que carece de compasión por los débiles.",
    armorDescription:
      "La Cloth de Capricornio es una de las doce Cloths de Oro. Se dice que los Santos de Capricornio son los más fieles a Athena, por lo cual esta diosa les regaló la espada Excalibur como reconocimiento y agradecimiento a su fidelidad, siendo este su ataque más poderoso. El Cloth de Capricornio es uno de los más complejos y estéticos de los doce. Proporciona una íntegra protección al Santo de Capricornio. Su diseño es meramente medieval y está bellamente ornamentado. La protección de la cabeza originalmente es una careta donde sobresalen dos largos cuernos, mientras que en su homólogo animada es un yelmo completo que evoca a los diseños medievales de Inglaterra con los yelmos greco-romanos.",
  },
  {
    id: 11,
    name: "Camus de Acuario",
    imageMain: require("../assets/images/main/Aquarius.png"),
    imageDetails: require("../assets/images/details/Camus.png"),
    imageArmor: require("../assets/images/armors/acuario.png"),
    country: "Francia",
    teacher: "Aquarius Dégel",
    techniques: ["Diamond Dust", "Freezing Coffin"],
    personality: "Sereno y estoico",
    description:
      "Camus (カミュ, Kamyu). Camus es el más frío de los doce dorados, pero su frialdad no se basa en suprimir sus sentimientos si no en controlarlos. Nunca hemos visto a Camus hacer más que un gesto de esfuerzo, durante la batalla no se exalta, no grita, no se esfuerza, siempre permanece calmado, frío y calculador. Lucha por lo que cree correcto y está dispuesto a todo para defender sus ideales, como lo vimos en la Saga de Hades, en donde estuvo dispuesto a matar a sus compañeros de ser necesario para cumplir con su cometido y en la serie cuando dejó pasar a Seiya y Shun, porque sabía que estaban en lo correcto y si no le permitió el paso a Hyoga es porque no estaba preparado y a costa de su vida lo guió hasta lograr encontrar el cero absoluto y le heredó su ataque más poderoso: La Ejecución Aurora.",
    armorDescription:
      "La Cloth de Aquarius o la Armadura de Acuario (水瓶座「アクエリアス」のクロス, mizugameza ~akueriasu~ no kurosu). Es un ropaje ligero, con un diseño gracioso, sus corazas son muy particulares, pues imitan las formas rectas y poligonales de las copas, haciendo una clara alusión al mito de Ganímedes. El tótem de este cloth representa una figura en busto que riega sosteniendo a la cabeza un cántaro con agua. Al parecer es de forma femenina, aunque la máscara está desprovista de pelo o cualquier otra prueba para confirmarlo. La cabeza está formada por la diadema y por la máscara, que luego se desliza en el interior del peto. Esta última y la cintura forman el cuerpo, la segunda entra y se cierra creando una base oval perfecta para el resto del tótem. Las espinilleras, embonadas con las hombreras, forman los antebrazos, mientras que las musleras son los brazos. El ánfora en última instancia está compuesta por dos brazaletes, boca abajo, que se apoyan unos sobre otros.",
  },
  {
    id: 12,
    name: "Afrodita de Piscis",
    imageMain: require("../assets/images/main/Pisces.png"),
    imageDetails: require("../assets/images/details/Aphrodite.png"),
    imageArmor: require("../assets/images/armors/piscis.png"),
    country: "Suecia",
    teacher: "Desconocido",
    techniques: ["Rosa Piraña", "Royal Demon Rose"],
    personality: "Narcisista y arrogante",
    description:
      "Aphrodite (アフロディーテ, Afurodīte). Aphrodite tiene cabello celeste (rubio en el manga) y ojos color azur; además se dice que es el santo más hermoso, a pesar de que él mismo nunca hace mención de su apariencia física en sí, sino de la belleza misma. Su piel es color damasco y sus labios son de color rosado suave, en el entendido de que es su apariencia natural, pues Aphrodite representa la belleza natural (en el manga sus labios no tienen un color especial). Debajo de su ojo izquierdo, Aphrodite posee un lunar, lo cual se puede considerar como una marca de belleza. En Saint Seiya: Soul of Gold, Aphrodite en su indumentaria de civil utiliza un traje típico de los franceses con estilo bohemio del cual ha sido sede este país durante el siglo XX (adoptado también por manifestantes juveniles y hippies). El principal detalle es el estilo del cuello en su traje rosa con una cravatta color gris oscuro y el uso de los 'vaqueros' como pantalones de color blanco. Utiliza también unos zapatos marrón oscuro con tacones.",
    armorDescription:
      "La Cloth de Piscis conserva los rasgos fundamentales del diseño original de Kurumada, pero por el estilo de The Lost Canvas parece más robusta, al mismo tiempo que reduce los bordes y genera más curvas, especialmente en el área de las hombreras, que se cierran hacia abajo, quitándole un poco el aspecto de pez, pero aumentando la visibilidad del Santo cuando gira la cabeza. En las piernas, brazos y el cinturón también se les ha eliminado los bordes afilados, pero tiene las formas de escamas en los antebrazos y en los muslos, incluso más pronunciados que en Aphrodite de Pisces. No es regular verle puesto su casco.",
  },
];

export default characters;
