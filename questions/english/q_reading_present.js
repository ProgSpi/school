const questionsReadingPresent = [
  {
    id: 1,
    title: "A Typical School Day",
    story: `<p>Every morning, Tom [0] at 6:30. He [1] to the bathroom first and [2] his teeth. Then he [3] dressed and [4] breakfast with his family. His mother usually [5] sandwiches for him.</p>
<p>Tom [6] the bus to school. The bus [7] at 7:15 and [8] at school at 7:35. At school, Tom [9] his friends near the entrance. His best friend [10] close to the school, so he [11] every day.</p>
<p>The first lesson [12] at 8:00. Tom [13] English very much, but he [14] maths. At lunchtime, the students [15] in the cafeteria.</p>
<p>After school, Tom [16] football with his friends in the park. He [17] home at about 5 o'clock and [18] his homework before dinner. In the evening, the family [19] TV together.</p>`,
    blanks: [
      { options: ["wakes up", "wake up", "woke up"],              correct: "wakes up",       explain: "3rd person singular Simple Present: wakes up" },
      { options: ["goes", "go", "went"],                           correct: "goes",            explain: "3rd person singular: he goes" },
      { options: ["brushes", "brush", "brushed"],                  correct: "brushes",         explain: "3rd person singular: he brushes" },
      { options: ["gets", "get", "got"],                           correct: "gets",            explain: "3rd person singular: he gets dressed" },
      { options: ["has", "have", "had"],                           correct: "has",             explain: "3rd person singular: he has" },
      { options: ["makes", "make", "made"],                        correct: "makes",           explain: "3rd person singular: she makes" },
      { options: ["takes", "take", "took"],                        correct: "takes",           explain: "3rd person singular: he takes" },
      { options: ["leaves", "leave", "left"],                      correct: "leaves",          explain: "3rd person singular: the bus leaves" },
      { options: ["arrives", "arrive", "arrived"],                 correct: "arrives",         explain: "3rd person singular: the bus arrives" },
      { options: ["meets", "meet", "met"],                         correct: "meets",           explain: "3rd person singular: he meets" },
      { options: ["lives", "live", "lived"],                       correct: "lives",           explain: "3rd person singular: his friend lives" },
      { options: ["walks", "walk", "walked"],                      correct: "walks",           explain: "3rd person singular: he walks" },
      { options: ["starts", "start", "started"],                   correct: "starts",          explain: "3rd person singular: the lesson starts" },
      { options: ["likes", "like", "liked"],                       correct: "likes",           explain: "3rd person singular: he likes" },
      { options: ["doesn't like", "don't like", "didn't like"],    correct: "doesn't like",    explain: "Negation 3rd person: doesn't like" },
      { options: ["eat", "eats", "ate"],                           correct: "eat",             explain: "Plural subject (the students): eat" },
      { options: ["plays", "play", "played"],                      correct: "plays",           explain: "3rd person singular: he plays" },
      { options: ["comes", "come", "came"],                        correct: "comes",           explain: "3rd person singular: he comes" },
      { options: ["does", "do", "did"],                            correct: "does",            explain: "3rd person singular: he does" },
      { options: ["watches", "watch", "watched"],                  correct: "watches",         explain: "3rd person singular: the family watches" }
    ]
  },
  {
    id: 2,
    title: "At the Supermarket",
    story: `<p>Every Saturday, the Miller family [0] to the supermarket. Mrs Miller [1] a shopping list before they leave. Her husband [2] the car while she [3] the list.</p>
<p>At the supermarket, Mr Miller [4] a trolley. Mrs Miller [5] the shelves carefully and [6] fresh fruit and vegetables. She always [7] local products when she can.</p>
<p>Their daughter Lisa [8] the cereals aisle and [9] her favourite cornflakes. She [10] to choose the biggest box, but her mum [11] not always agree.</p>
<p>At the checkout, Mr Miller [12] the items onto the belt. The cashier [13] everything and [14] the total. Mrs Miller [15] by card. They [16] their bags together.</p>
<p>On the way home, Lisa [17] about what they can cook for dinner. Her father [18] pasta and her mother [19] a salad to go with it.</p>`,
    blanks: [
      { options: ["goes", "go", "went"],                       correct: "goes",          explain: "3rd person singular: the family goes" },
      { options: ["writes", "write", "wrote"],                  correct: "writes",        explain: "3rd person singular: she writes" },
      { options: ["drives", "drive", "drove"],                  correct: "drives",        explain: "3rd person singular: he drives" },
      { options: ["checks", "check", "checked"],                correct: "checks",        explain: "3rd person singular: she checks" },
      { options: ["takes", "take", "took"],                     correct: "takes",         explain: "3rd person singular: he takes" },
      { options: ["looks at", "look at", "looked at"],          correct: "looks at",      explain: "3rd person singular: she looks at" },
      { options: ["chooses", "choose", "chose"],                correct: "chooses",       explain: "3rd person singular: she chooses" },
      { options: ["prefers", "prefer", "preferred"],            correct: "prefers",       explain: "3rd person singular: she prefers" },
      { options: ["finds", "find", "found"],                    correct: "finds",         explain: "3rd person singular: she finds" },
      { options: ["picks", "pick", "picked"],                   correct: "picks",         explain: "3rd person singular: she picks" },
      { options: ["tries", "try", "tried"],                     correct: "tries",         explain: "3rd person singular: she tries" },
      { options: ["does", "do", "did"],                         correct: "does",          explain: "3rd person singular in negation: does not" },
      { options: ["puts", "place", "placed"],                   correct: "puts",          explain: "3rd person singular: he puts" },
      { options: ["scans", "scan", "scanned"],                  correct: "scans",         explain: "3rd person singular: the cashier scans" },
      { options: ["tells", "tell", "told"],                     correct: "tells",         explain: "3rd person singular: the cashier tells" },
      { options: ["pays", "pay", "paid"],                       correct: "pays",          explain: "3rd person singular: she pays" },
      { options: ["pack", "packs", "packed"],                   correct: "pack",          explain: "Plural subject (they): pack" },
      { options: ["thinks", "think", "thought"],                correct: "thinks",        explain: "3rd person singular: she thinks" },
      { options: ["suggests", "suggest", "suggested"],          correct: "suggests",      explain: "3rd person singular: he suggests" },
      { options: ["makes", "make", "made"],                     correct: "makes",         explain: "3rd person singular: she makes" }
    ]
  },
  {
    id: 3,
    title: "Animal Facts",
    story: `<p>Animals [0] in many different habitats around the world. The elephant is the largest land animal. It [1] up to 6,000 kilograms and [2] about 70 years.</p>
<p>Dolphins [3] in the ocean, but they [4] air to breathe – just like humans. A dolphin [5] to the surface every few minutes. It [6] sounds to communicate with other dolphins.</p>
<p>The cheetah is the fastest land animal. It [7] up to 110 kilometres per hour. However, it [8] this speed for only a short time because it [9] very tired quickly.</p>
<p>Many birds [10] south in autumn because winters in northern countries [11] very cold. The Arctic tern [12] the longest migration of any animal – it [13] from the Arctic to the Antarctic every year.</p>
<p>Bees [14] an important role in nature. A bee [15] from flower to flower and [16] pollen. Without bees, many plants [17] not grow properly. A honeybee [18] about 1,500 flowers to make just one teaspoon of honey. The queen bee [19] up to 2,000 eggs per day.</p>`,
    blanks: [
      { options: ["live", "lives", "lived"],                   correct: "live",          explain: "Plural subject (animals): live" },
      { options: ["weighs", "weigh", "weighed"],               correct: "weighs",        explain: "3rd person singular: it weighs" },
      { options: ["lives", "live", "lived"],                   correct: "lives",         explain: "3rd person singular: it lives (= lives for)" },
      { options: ["live", "lives", "lived"],                   correct: "live",          explain: "Plural subject (dolphins): live" },
      { options: ["need", "needs", "needed"],                  correct: "need",          explain: "Plural subject (they): need" },
      { options: ["swims", "swim", "swam"],                    correct: "swims",         explain: "3rd person singular: a dolphin swims" },
      { options: ["uses", "use", "used"],                      correct: "uses",          explain: "3rd person singular: it uses" },
      { options: ["runs", "run", "ran"],                       correct: "runs",          explain: "3rd person singular: the cheetah runs" },
      { options: ["can hold", "holds", "kept"],                correct: "can hold",      explain: "Modal verb: can + infinitive" },
      { options: ["gets", "get", "got"],                       correct: "gets",          explain: "3rd person singular: it gets" },
      { options: ["fly", "flies", "flew"],                     correct: "fly",           explain: "Plural subject (many birds): fly" },
      { options: ["are", "is", "were"],                        correct: "are",           explain: "Plural subject (winters): are" },
      { options: ["has", "have", "had"],                       correct: "has",           explain: "3rd person singular: the tern has" },
      { options: ["travels", "travel", "travelled"],           correct: "travels",       explain: "3rd person singular: it travels" },
      { options: ["play", "plays", "played"],                  correct: "play",          explain: "Plural subject (bees): play" },
      { options: ["flies", "fly", "flew"],                     correct: "flies",         explain: "3rd person singular: a bee flies" },
      { options: ["collects", "collect", "collected"],         correct: "collects",      explain: "3rd person singular: it collects" },
      { options: ["would", "do", "does"],                      correct: "would",         explain: "Conditional: would not grow" },
      { options: ["visits", "visit", "visited"],               correct: "visits",        explain: "3rd person singular: a honeybee visits" },
      { options: ["lays", "lay", "laid"],                      correct: "lays",          explain: "3rd person singular: the queen bee lays" }
    ]
  },
  {
    id: 4,
    title: "A Weekend at Home",
    story: `<p>On Saturday mornings, the Brown family usually [0] in bed until 9 o'clock. Nobody [1] an alarm – the weekend is for relaxing. Mr Brown [2] first and [3] coffee for everyone.</p>
<p>After breakfast, Mrs Brown [4] the kitchen while Mr Brown [5] the garden. Their son Jake [6] football in the backyard. Their daughter Emma [7] in her room and [8] to music.</p>
<p>At noon, the whole family [9] lunch together. Mrs Brown often [10] pizza or pasta. Jake always [11] more than his sister because he [12] a big appetite. Emma [13] salad – she [14] vegetables.</p>
<p>In the afternoon, Mr Brown [15] a walk in the park. He [16] his neighbours there and [17] with them for a while. Mrs Brown [18] a book on the sofa.</p>
<p>In the evening, the family [19] a board game together.</p>`,
    blanks: [
      { options: ["stays", "stay", "stayed"],                  correct: "stays",         explain: "3rd person singular: the family stays" },
      { options: ["sets", "set", "setting"],                   correct: "sets",          explain: "3rd person singular: nobody sets" },
      { options: ["gets up", "get up", "got up"],              correct: "gets up",       explain: "3rd person singular: Mr Brown gets up" },
      { options: ["makes", "make", "made"],                    correct: "makes",         explain: "3rd person singular: he makes" },
      { options: ["cleans", "clean", "cleaned"],               correct: "cleans",        explain: "3rd person singular: Mrs Brown cleans" },
      { options: ["tidies", "tidy", "tidied"],                 correct: "tidies",        explain: "3rd person singular: Mr Brown tidies" },
      { options: ["plays", "play", "played"],                  correct: "plays",         explain: "3rd person singular: Jake plays" },
      { options: ["stays", "stay", "stayed"],                  correct: "stays",         explain: "3rd person singular: Emma stays" },
      { options: ["listens", "listen", "listened"],            correct: "listens",       explain: "3rd person singular: she listens" },
      { options: ["has", "have", "had"],                       correct: "has",           explain: "3rd person singular: the family has" },
      { options: ["cooks", "cook", "cooked"],                  correct: "cooks",         explain: "3rd person singular: Mrs Brown cooks" },
      { options: ["eats", "eat", "ate"],                       correct: "eats",          explain: "3rd person singular: Jake eats" },
      { options: ["has", "have", "had"],                       correct: "has",           explain: "3rd person singular: he has (an appetite)" },
      { options: ["prefers", "prefer", "preferred"],           correct: "prefers",       explain: "3rd person singular: Emma prefers" },
      { options: ["loves", "love", "loved"],                   correct: "loves",         explain: "3rd person singular: she loves" },
      { options: ["takes", "take", "took"],                    correct: "takes",         explain: "3rd person singular: Mr Brown takes" },
      { options: ["meets", "meet", "met"],                     correct: "meets",         explain: "3rd person singular: he meets" },
      { options: ["chats", "chat", "chatted"],                 correct: "chats",         explain: "3rd person singular: he chats" },
      { options: ["reads", "read", "reading"],                 correct: "reads",         explain: "3rd person singular: Mrs Brown reads" },
      { options: ["plays", "play", "played"],                  correct: "plays",         explain: "3rd person singular: the family plays" }
    ]
  }
];
