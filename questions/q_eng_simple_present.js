// 100 Fragen zum Simple Present - 5. Klasse Englisch
// type: "mc" = Multiple Choice, "text" = Texteingabe
// Bei Texteingabe sind in "correct" alle akzeptierten Schreibweisen (Kleinbuchstaben)

const questions = [
  // ===== TEIL 1: MULTIPLE CHOICE (Fragen 1-60) =====

  // --- Verbkonjugation he/she/it + -s/-es/-ies (1-15) ---
  { id: 1,  type: "mc", q: "He ___ football every day.", options: ["play", "plays", "playing"], correct: "plays", explain: "Bei he/she/it hängen wir im Simple Present ein -s an das Verb an." },
  { id: 2,  type: "mc", q: "The cat ___ milk every morning.", options: ["drink", "drinks", "drinking"], correct: "drinks", explain: "The cat = it → drinks" },
  { id: 3,  type: "mc", q: "My sister ___ her teeth twice a day.", options: ["brush", "brushes", "brushs"], correct: "brushes", explain: "Verben auf -sh bekommen -es: brush → brushes" },
  { id: 4,  type: "mc", q: "Tom ___ to the gym on Tuesdays.", options: ["go", "goes", "gos"], correct: "goes", explain: "go → goes (3. Person Singular bekommt -es)" },
  { id: 5,  type: "mc", q: "She ___ her homework after dinner.", options: ["do", "does", "dos"], correct: "does", explain: "do → does (3. Person Singular)" },
  { id: 6,  type: "mc", q: "The baby ___ a lot.", options: ["cry", "cries", "crys"], correct: "cries", explain: "Verben auf Konsonant + y → y wird zu ies: cry → cries" },
  { id: 7,  type: "mc", q: "He ___ a sandwich for lunch.", options: ["eat", "eats", "eates"], correct: "eats", explain: "he + Verb + s → eats" },
  { id: 8,  type: "mc", q: "My dad ___ the newspaper every morning.", options: ["read", "reads", "readds"], correct: "reads", explain: "my dad = he → reads" },
  { id: 9,  type: "mc", q: "Anna ___ English very well.", options: ["speak", "speaks", "speakes"], correct: "speaks", explain: "Anna = she → speaks" },
  { id: 10, type: "mc", q: "The teacher ___ on the blackboard.", options: ["write", "writes", "writting"], correct: "writes", explain: "the teacher = he/she → writes" },
  { id: 11, type: "mc", q: "My friend ___ in a big house.", options: ["live", "lives", "livees"], correct: "lives", explain: "my friend = he/she → lives" },
  { id: 12, type: "mc", q: "The bird ___ in the sky.", options: ["fly", "flies", "flys"], correct: "flies", explain: "Konsonant + y → ies: fly → flies" },
  { id: 13, type: "mc", q: "Mary ___ the dishes after dinner.", options: ["wash", "washes", "washs"], correct: "washes", explain: "Verben auf -sh bekommen -es: wash → washes" },
  { id: 14, type: "mc", q: "He ___ his bike to school.", options: ["ride", "rides", "riding"], correct: "rides", explain: "he + Verb + s → rides" },
  { id: 15, type: "mc", q: "She ___ a beautiful song.", options: ["sing", "sings", "singes"], correct: "sings", explain: "she + Verb + s → sings" },

  // --- Verneinung don't / doesn't (16-25) ---
  { id: 16, type: "mc", q: "I ___ like spinach.", options: ["don't", "doesn't", "am not"], correct: "don't", explain: "Bei I/you/we/they verneint man mit don't." },
  { id: 17, type: "mc", q: "He ___ play the piano.", options: ["don't", "doesn't", "isn't"], correct: "doesn't", explain: "Bei he/she/it verneint man mit doesn't (das -s steckt schon in doesn't)." },
  { id: 18, type: "mc", q: "We ___ have a car.", options: ["don't", "doesn't", "aren't"], correct: "don't", explain: "we → don't" },
  { id: 19, type: "mc", q: "My brother ___ eat fish.", options: ["don't", "doesn't", "isn't"], correct: "doesn't", explain: "my brother = he → doesn't" },
  { id: 20, type: "mc", q: "The dog ___ bark at night.", options: ["don't", "doesn't", "isn't"], correct: "doesn't", explain: "the dog = it → doesn't" },
  { id: 21, type: "mc", q: "They ___ live in Berlin.", options: ["don't", "doesn't", "aren't"], correct: "don't", explain: "they → don't" },
  { id: 22, type: "mc", q: "She ___ speak German.", options: ["don't", "doesn't", "isn't"], correct: "doesn't", explain: "she → doesn't" },
  { id: 23, type: "mc", q: "You ___ need a ticket.", options: ["don't", "doesn't", "aren't"], correct: "don't", explain: "you → don't" },
  { id: 24, type: "mc", q: "It ___ rain in summer.", options: ["don't", "doesn't", "isn't"], correct: "doesn't", explain: "it → doesn't" },
  { id: 25, type: "mc", q: "My parents ___ work on Sundays.", options: ["don't", "doesn't", "aren't"], correct: "don't", explain: "my parents = they → don't" },

  // --- Fragen Do/Does (26-35) ---
  { id: 26, type: "mc", q: "___ you like ice cream?", options: ["Do", "Does", "Are"], correct: "Do", explain: "Bei you steht am Anfang der Frage Do." },
  { id: 27, type: "mc", q: "___ she speak French?", options: ["Do", "Does", "Is"], correct: "Does", explain: "Bei she/he/it: Does." },
  { id: 28, type: "mc", q: "___ they play tennis?", options: ["Do", "Does", "Are"], correct: "Do", explain: "they → Do" },
  { id: 29, type: "mc", q: "___ your father work in a bank?", options: ["Do", "Does", "Is"], correct: "Does", explain: "your father = he → Does" },
  { id: 30, type: "mc", q: "___ we have time?", options: ["Do", "Does", "Are"], correct: "Do", explain: "we → Do" },
  { id: 31, type: "mc", q: "___ the cat sleep on the sofa?", options: ["Do", "Does", "Is"], correct: "Does", explain: "the cat = it → Does" },
  { id: 32, type: "mc", q: "___ Lisa and Tom go to the same school?", options: ["Do", "Does", "Are"], correct: "Do", explain: "Lisa and Tom = they → Do" },
  { id: 33, type: "mc", q: "___ it snow in winter?", options: ["Do", "Does", "Is"], correct: "Does", explain: "it → Does" },
  { id: 34, type: "mc", q: "___ I need a pen?", options: ["Do", "Does", "Am"], correct: "Do", explain: "I → Do" },
  { id: 35, type: "mc", q: "___ your sister like chocolate?", options: ["Do", "Does", "Is"], correct: "Does", explain: "your sister = she → Does" },

  // --- to be: am/is/are (36-43) ---
  { id: 36, type: "mc", q: "I ___ a student.", options: ["am", "is", "are"], correct: "am", explain: "I → am" },
  { id: 37, type: "mc", q: "He ___ from Spain.", options: ["am", "is", "are"], correct: "is", explain: "he/she/it → is" },
  { id: 38, type: "mc", q: "We ___ in class 5b.", options: ["am", "is", "are"], correct: "are", explain: "we/you/they → are" },
  { id: 39, type: "mc", q: "The book ___ on the table.", options: ["am", "is", "are"], correct: "is", explain: "the book = it → is" },
  { id: 40, type: "mc", q: "Tom and Mike ___ my friends.", options: ["am", "is", "are"], correct: "are", explain: "Tom and Mike = they → are" },
  { id: 41, type: "mc", q: "My mother ___ a doctor.", options: ["am", "is", "are"], correct: "is", explain: "my mother = she → is" },
  { id: 42, type: "mc", q: "You ___ very nice.", options: ["am", "is", "are"], correct: "are", explain: "you → are" },
  { id: 43, type: "mc", q: "The flowers ___ beautiful.", options: ["am", "is", "are"], correct: "are", explain: "the flowers = they → are" },

  // --- have/has (44-48) ---
  { id: 44, type: "mc", q: "He ___ a new computer.", options: ["have", "has", "haves"], correct: "has", explain: "have hat eine unregelmäßige 3. Person: he/she/it → has" },
  { id: 45, type: "mc", q: "They ___ two cats.", options: ["have", "has", "having"], correct: "have", explain: "they → have" },
  { id: 46, type: "mc", q: "My grandma ___ a big garden.", options: ["have", "has", "haves"], correct: "has", explain: "my grandma = she → has" },
  { id: 47, type: "mc", q: "I ___ a question.", options: ["have", "has", "having"], correct: "have", explain: "I → have" },
  { id: 48, type: "mc", q: "The school ___ a large library.", options: ["have", "has", "having"], correct: "has", explain: "the school = it → has" },

  // --- Signalwörter und Adverbien (49-53) ---
  { id: 49, type: "mc", q: "Welcher Satz ist richtig?", options: ["She always reads books.", "She reads always books.", "Always she reads books."], correct: "She always reads books.", explain: "Adverbien wie always stehen VOR dem Vollverb." },
  { id: 50, type: "mc", q: "Welcher Satz ist richtig?", options: ["He goes never to the cinema.", "He never goes to the cinema.", "Never he goes to the cinema."], correct: "He never goes to the cinema.", explain: "never steht vor dem Vollverb: subject + never + verb" },
  { id: 51, type: "mc", q: "Welches Wort ist ein Signalwort für Simple Present?", options: ["yesterday", "usually", "last week"], correct: "usually", explain: "usually (= normalerweise) zeigt regelmäßige Handlungen an → Simple Present. yesterday und last week sind Simple Past." },
  { id: 52, type: "mc", q: "Welches Wort ist KEIN Signalwort für Simple Present?", options: ["every day", "often", "now"], correct: "now", explain: "now (= jetzt, gerade) ist ein Signalwort für Present Progressive, nicht Simple Present." },
  { id: 53, type: "mc", q: "Welcher Satz ist richtig?", options: ["We usually have lunch at 12.", "We have usually lunch at 12.", "Usually have we lunch at 12."], correct: "We usually have lunch at 12.", explain: "Subject + Adverb + Verb: We + usually + have" },

  // --- Kurzantworten (54-57) ---
  { id: 54, type: "mc", q: "\"Do you like apples?\" – \"Yes, ___.\"", options: ["I do", "I am", "I like"], correct: "I do", explain: "Auf Fragen mit do/does antwortet man mit do/does (nicht mit dem Vollverb)." },
  { id: 55, type: "mc", q: "\"Does he play tennis?\" – \"No, ___.\"", options: ["he don't", "he doesn't", "he isn't"], correct: "he doesn't", explain: "Frage mit Does → Kurzantwort mit doesn't" },
  { id: 56, type: "mc", q: "\"Are they at home?\" – \"Yes, ___.\"", options: ["they do", "they have", "they are"], correct: "they are", explain: "Frage mit Are → Antwort mit are" },
  { id: 57, type: "mc", q: "\"Does Anna speak English?\" – \"Yes, ___.\"", options: ["she do", "she does", "she is"], correct: "she does", explain: "Anna = she → she does" },

  // --- Gemischte Satzanalyse (58-60) ---
  { id: 58, type: "mc", q: "Welcher Satz ist richtig?", options: ["My brother play football.", "My brother plays football.", "My brother playing football."], correct: "My brother plays football.", explain: "my brother = he → plays (mit -s)" },
  { id: 59, type: "mc", q: "Welcher Satz ist richtig?", options: ["Do she like pizza?", "Does she likes pizza?", "Does she like pizza?"], correct: "Does she like pizza?", explain: "Nach Does steht das Verb ohne -s (das -s steckt schon in Does)." },
  { id: 60, type: "mc", q: "Welcher Satz ist richtig?", options: ["He don't have a dog.", "He doesn't has a dog.", "He doesn't have a dog."], correct: "He doesn't have a dog.", explain: "Nach doesn't kommt das Verb in der Grundform (ohne -s)." },


  // ===== TEIL 2: TEXTEINGABE (Fragen 61-100) =====

  // --- Verbkonjugation in Klammern (61-80) ---
  { id: 61, type: "text", q: "She ___ a book every evening.", verb: "read", correct: ["reads"], explain: "she → reads" },
  { id: 62, type: "text", q: "The boys ___ in the park.", verb: "play", correct: ["play"], explain: "the boys = they → play (keine Endung)" },
  { id: 63, type: "text", q: "My father ___ to work.", verb: "drive", correct: ["drives"], explain: "my father = he → drives" },
  { id: 64, type: "text", q: "We ___ in Munich.", verb: "live", correct: ["live"], explain: "we → live" },
  { id: 65, type: "text", q: "He ___ TV every day.", verb: "watch", correct: ["watches"], explain: "Verben auf -ch bekommen -es: watch → watches" },
  { id: 66, type: "text", q: "The dog ___ meat.", verb: "eat", correct: ["eats"], explain: "the dog = it → eats" },
  { id: 67, type: "text", q: "I ___ to school by bus.", verb: "go", correct: ["go"], explain: "I → go" },
  { id: 68, type: "text", q: "Mary ___ a brother.", verb: "have", correct: ["has"], explain: "have ist unregelmäßig: she → has" },
  { id: 69, type: "text", q: "They ___ English at school.", verb: "study", correct: ["study"], explain: "they → study" },
  { id: 70, type: "text", q: "My mum ___ dinner.", verb: "cook", correct: ["cooks"], explain: "my mum = she → cooks" },
  { id: 71, type: "text", q: "The baby ___ every night.", verb: "cry", correct: ["cries"], explain: "Konsonant + y → ies: cry → cries" },
  { id: 72, type: "text", q: "We ___ our homework.", verb: "do", correct: ["do"], explain: "we → do" },
  { id: 73, type: "text", q: "He ___ the ball.", verb: "catch", correct: ["catches"], explain: "Verben auf -ch bekommen -es: catch → catches" },
  { id: 74, type: "text", q: "The teacher ___ us math.", verb: "teach", correct: ["teaches"], explain: "Verben auf -ch → -es: teach → teaches" },
  { id: 75, type: "text", q: "She ___ her best.", verb: "try", correct: ["tries"], explain: "Konsonant + y → ies: try → tries" },
  { id: 76, type: "text", q: "My grandpa ___ in the garden.", verb: "work", correct: ["works"], explain: "my grandpa = he → works" },
  { id: 77, type: "text", q: "Birds ___ in the morning.", verb: "sing", correct: ["sing"], explain: "birds = they → sing" },
  { id: 78, type: "text", q: "The shop ___ at 9 o'clock.", verb: "open", correct: ["opens"], explain: "the shop = it → opens" },
  { id: 79, type: "text", q: "Lisa ___ to London every year.", verb: "fly", correct: ["flies"], explain: "Konsonant + y → ies: fly → flies" },
  { id: 80, type: "text", q: "The students ___ a test.", verb: "write", correct: ["write"], explain: "the students = they → write" },

  // --- do/does/don't/doesn't (81-90) ---
  { id: 81, type: "text", q: "___ he like chocolate?", hint: "Frage mit Do oder Does?", correct: ["does"], explain: "he → Does" },
  { id: 82, type: "text", q: "___ they live here?", hint: "Frage mit Do oder Does?", correct: ["do"], explain: "they → Do" },
  { id: 83, type: "text", q: "___ your sister speak Italian?", hint: "Frage mit Do oder Does?", correct: ["does"], explain: "your sister = she → Does" },
  { id: 84, type: "text", q: "___ you have a pet?", hint: "Frage mit Do oder Does?", correct: ["do"], explain: "you → Do" },
  { id: 85, type: "text", q: "___ the cat drink milk?", hint: "Frage mit Do oder Does?", correct: ["does"], explain: "the cat = it → Does" },
  { id: 86, type: "text", q: "He ___ not play tennis.", hint: "Schreibe die Kurzform (z.B. don't oder doesn't)", correct: ["doesn't", "does not"], explain: "he → doesn't" },
  { id: 87, type: "text", q: "We ___ not have a car.", hint: "Kurzform (don't / doesn't)", correct: ["don't", "do not"], explain: "we → don't" },
  { id: 88, type: "text", q: "My brother ___ not like vegetables.", hint: "Kurzform", correct: ["doesn't", "does not"], explain: "my brother = he → doesn't" },
  { id: 89, type: "text", q: "I ___ not understand.", hint: "Kurzform", correct: ["don't", "do not"], explain: "I → don't" },
  { id: 90, type: "text", q: "The shop ___ not open on Sundays.", hint: "Kurzform", correct: ["doesn't", "does not"], explain: "the shop = it → doesn't" },

  // --- am/is/are (91-95) ---
  { id: 91, type: "text", q: "I ___ ten years old.", hint: "am / is / are?", correct: ["am"], explain: "I → am" },
  { id: 92, type: "text", q: "My friends ___ at home.", hint: "am / is / are?", correct: ["are"], explain: "my friends = they → are" },
  { id: 93, type: "text", q: "The cat ___ on the sofa.", hint: "am / is / are?", correct: ["is"], explain: "the cat = it → is" },
  { id: 94, type: "text", q: "We ___ in the same class.", hint: "am / is / are?", correct: ["are"], explain: "we → are" },
  { id: 95, type: "text", q: "He ___ very tall.", hint: "am / is / are?", correct: ["is"], explain: "he → is" },

  // --- have/has (96-100) ---
  { id: 96, type: "text", q: "They ___ a beautiful house.", hint: "have / has?", correct: ["have"], explain: "they → have" },
  { id: 97, type: "text", q: "My uncle ___ three children.", hint: "have / has?", correct: ["has"], explain: "my uncle = he → has" },
  { id: 98, type: "text", q: "I ___ many friends.", hint: "have / has?", correct: ["have"], explain: "I → have" },
  { id: 99, type: "text", q: "The car ___ four wheels.", hint: "have / has?", correct: ["has"], explain: "the car = it → has" },
  { id: 100, type: "text", q: "We ___ English on Monday.", hint: "have / has?", correct: ["have"], explain: "we → have" },


  // ===== TEIL 3: EXTRA SCHWER 🌶️ (Fragen 101-120) =====

  // --- Subjekt-Verb-Kongruenz (101-105) ---
  { id: 101, type: "mc", hard: true, q: "Everybody ___ at the party tonight.", options: ["am", "is", "are"], correct: "is", explain: "Wörter wie everybody, somebody, nobody, everyone sind grammatisch SINGULAR – auch wenn es nach mehreren Personen klingt. → is" },
  { id: 102, type: "mc", hard: true, q: "The news ___ very interesting today.", options: ["are", "is", "have"], correct: "is", explain: "\"News\" sieht aus wie Plural, ist aber ein unzählbares Singular-Wort. Genauso: information, advice, furniture. → is" },
  { id: 103, type: "mc", hard: true, q: "Mathematics ___ my favourite subject.", options: ["is", "are", "am"], correct: "is", explain: "Fächernamen auf -ics (mathematics, physics, economics, politics) sind Singular – das -s täuscht!" },
  { id: 104, type: "mc", hard: true, q: "The police ___ looking for the thief.", options: ["is", "are", "does"], correct: "are", explain: "\"Police\" wird im Englischen IMMER wie ein Plural behandelt – auch wenn es nur ein Polizist ist." },
  { id: 105, type: "mc", hard: true, q: "Twenty euros ___ a lot of money for me.", options: ["is", "are", "am"], correct: "is", explain: "Geldbeträge, Entfernungen und Zeitangaben gelten als EINE Einheit → Singular: is" },

  // --- Schwierige 3rd Person Singular Spelling (106-110) ---
  { id: 106, type: "text", hard: true, q: "Anna ___ medicine in Berlin.", verb: "study", correct: ["studies"], explain: "Konsonant + y → ies: study → studies" },
  { id: 107, type: "text", hard: true, q: "He ___ for the tickets.", verb: "pay", correct: ["pays"], explain: "ACHTUNG: Vokal + y → einfach -s anhängen: pay → pays (NICHT \"paies\"!) Das gilt auch für: buy → buys, say → says, play → plays" },
  { id: 108, type: "text", hard: true, q: "Tom ___ his bike himself.", verb: "fix", correct: ["fixes"], explain: "Verben auf -x bekommen -es: fix → fixes (wie wash → washes, kiss → kisses)" },
  { id: 109, type: "text", hard: true, q: "She ___ to the bus stop every morning.", verb: "hurry", correct: ["hurries"], explain: "Konsonant + y → ies: hurry → hurries" },
  { id: 110, type: "text", hard: true, q: "My uncle ___ the early train.", verb: "catch", correct: ["catches"], explain: "Verben auf -ch bekommen -es: catch → catches" },

  // --- Wortstellung und Fragen (111-114) ---
  { id: 111, type: "mc", hard: true, q: "Welcher Satz ist KORREKT?", options: ["Where lives your sister?", "Where your sister lives?", "Where does your sister live?"], correct: "Where does your sister live?", explain: "W-Frage im Simple Present: W-Wort + do/does + Subjekt + Verb (Grundform!). Das Verb steht IMMER in der Grundform, nicht mit -s." },
  { id: 112, type: "mc", hard: true, q: "Welcher Satz ist KORREKT?", options: ["Why he doesn't come?", "Why doesn't he come?", "Why he don't comes?"], correct: "Why doesn't he come?", explain: "Auch verneinte W-Fragen brauchen die Hilfsverb-Stellung: W-Wort + doesn't/don't + Subjekt + Verb-Grundform." },
  { id: 113, type: "mc", hard: true, q: "Position des Adverbs: Welcher Satz ist KORREKT?", options: ["She always is late.", "She is always late.", "Always she is late."], correct: "She is always late.", explain: "WICHTIG: Bei \"to be\" steht das Häufigkeits-Adverb HINTER dem Verb (is always). Bei Vollverben aber DAVOR (always comes)!" },
  { id: 114, type: "text", hard: true, q: "How ___ you spell your name?", hint: "Hilfsverb (do/does)?", correct: ["do"], explain: "Auch in W-Fragen gilt: you → do, NICHT does. Lass dich vom Fragewort nicht verwirren!" },

  // --- Stativverben und Fortgeschrittenes (115-117) ---
  { id: 115, type: "mc", hard: true, q: "Welcher Satz ist KORREKT?", options: ["I am knowing the answer.", "I am know the answer.", "I know the answer."], correct: "I know the answer.", explain: "Verben wie know, like, love, want, understand, believe sind STATIV-VERBEN – sie werden NICHT in der ing-Form benutzt, auch nicht für \"gerade jetzt\"." },
  { id: 116, type: "text", hard: true, q: "Neither Tom nor his brother ___ fish.", verb: "like", correct: ["likes"], explain: "Bei \"neither … nor …\" richtet sich das Verb nach dem ZWEITEN (näheren) Subjekt: his brother = he → likes" },
  { id: 117, type: "text", hard: true, q: "There ___ two books on the table.", hint: "is / are?", correct: ["are"], explain: "\"There is\" bei Singular, \"there are\" bei Plural. Zwei Bücher → are" },

  // --- Häufige Fehler (118-120) ---
  { id: 118, type: "mc", hard: true, q: "\"Nobody ___ here today.\"", options: ["am", "is", "are"], correct: "is", explain: "Nobody, somebody, everybody, anybody – alle Singular, auch wenn sie sich nach mehreren Personen anhören!" },
  { id: 119, type: "mc", hard: true, q: "Welcher Satz ist KORREKT?", options: ["She doesn't never lies.", "She never lies.", "She doesn't never lie."], correct: "She never lies.", explain: "Im Englischen gibt es KEINE doppelte Verneinung. \"never\" allein ist schon negativ – kein zusätzliches doesn't. Genauso bei: nothing, nobody, nowhere." },
  { id: 120, type: "mc", hard: true, q: "Welcher Satz hat KEINEN Fehler?", options: ["Does he goes to school by bus?", "Does he go to school by bus?", "Do he goes to school by bus?"], correct: "Does he go to school by bus?", explain: "Nach Does steht das Verb IMMER in der Grundform, ohne -s. Das -s steckt schon in \"Does\"." }
];
