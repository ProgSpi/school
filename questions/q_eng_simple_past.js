// 120 Fragen zum Simple Past - 5./6. Klasse Englisch
// type: "mc" = Multiple Choice, "text" = Texteingabe
// Bei Texteingabe sind in "correct" alle akzeptierten Schreibweisen (Kleinbuchstaben)
// hard: true = Extra-Schwer-Teil (101-120)

const questionsPast = [
  // ===== TEIL 1: MULTIPLE CHOICE (Fragen 1-60) =====

  // --- Regelmäßige Verben + -ed (1-12) ---
  { id: 1,  type: "mc", q: "Yesterday I ___ a new song.", options: ["learn", "learned", "learning"], correct: "learned", explain: "Regelmäßiges Verb: learn + ed. Signalwort: yesterday." },
  { id: 2,  type: "mc", q: "She ___ her room last weekend.", options: ["cleaned", "cleans", "clean"], correct: "cleaned", explain: "clean → cleaned. Signalwort: last weekend." },
  { id: 3,  type: "mc", q: "We ___ to loud music last night.", options: ["listen", "listens", "listened"], correct: "listened", explain: "listen → listened. Im Simple Past ist die Form für ALLE Personen gleich." },
  { id: 4,  type: "mc", q: "They ___ football in the park.", options: ["played", "playd", "plays"], correct: "played", explain: "Vokal + y → einfach -ed anhängen: play → played" },
  { id: 5,  type: "mc", q: "Tom ___ the dishes after dinner.", options: ["wash", "washes", "washed"], correct: "washed", explain: "wash → washed (auch he/she/it: im Simple Past nur eine Form!)" },
  { id: 6,  type: "mc", q: "The film ___ at 8 o'clock.", options: ["start", "started", "startted"], correct: "started", explain: "start endet auf -t und braucht trotzdem nur -ed: started" },
  { id: 7,  type: "mc", q: "We ___ in London for a week.", options: ["stay", "stayed", "staied"], correct: "stayed", explain: "Vokal (a) + y → stayed (nicht staied!)" },
  { id: 8,  type: "mc", q: "He ___ his bike yesterday.", options: ["fixed", "fixt", "fixxed"], correct: "fixed", explain: "fix → fixed (einfach -ed an)" },
  { id: 9,  type: "mc", q: "I ___ my grandma last Sunday.", options: ["visit", "visited", "visitted"], correct: "visited", explain: "visit → visited (zwei Silben, Betonung vorne → NICHT verdoppeln)" },
  { id: 10, type: "mc", q: "The dog ___ all night.", options: ["barked", "barks", "barkd"], correct: "barked", explain: "bark → barked" },
  { id: 11, type: "mc", q: "We ___ the answer quickly.", options: ["guess", "guessed", "guest"], correct: "guessed", explain: "guess → guessed (auch wenn es sich anhört wie 'gest')" },
  { id: 12, type: "mc", q: "She ___ very hard for the test.", options: ["studied", "studyed", "studies"], correct: "studied", explain: "Konsonant + y → ied: study → studied" },

  // --- Unregelmäßige Verben (13-25) ---
  { id: 13, type: "mc", q: "I ___ to Paris last summer.", options: ["go", "goed", "went"], correct: "went", explain: "go ist unregelmäßig: go → went" },
  { id: 14, type: "mc", q: "She ___ a beautiful dress yesterday.", options: ["wear", "weared", "wore"], correct: "wore", explain: "wear → wore (unregelmäßig)" },
  { id: 15, type: "mc", q: "He ___ a new car last month.", options: ["buyed", "bought", "boughted"], correct: "bought", explain: "buy → bought (NICHT 'buyed')" },
  { id: 16, type: "mc", q: "We ___ pizza for dinner.", options: ["eated", "eat", "ate"], correct: "ate", explain: "eat → ate" },
  { id: 17, type: "mc", q: "The boy ___ on the floor.", options: ["fall", "falled", "fell"], correct: "fell", explain: "fall → fell" },
  { id: 18, type: "mc", q: "I ___ my keys this morning.", options: ["losed", "lost", "lose"], correct: "lost", explain: "lose → lost" },
  { id: 19, type: "mc", q: "She ___ a long letter.", options: ["wrote", "writed", "written"], correct: "wrote", explain: "write → wrote (written ist die 3. Form, hier brauchen wir die 2.)" },
  { id: 20, type: "mc", q: "They ___ in the lake.", options: ["swim", "swimmed", "swam"], correct: "swam", explain: "swim → swam" },
  { id: 21, type: "mc", q: "He ___ me a funny story.", options: ["telled", "told", "tell"], correct: "told", explain: "tell → told" },
  { id: 22, type: "mc", q: "We ___ a great film yesterday.", options: ["saw", "seed", "seen"], correct: "saw", explain: "see → saw (seen ist die 3. Form)" },
  { id: 23, type: "mc", q: "I ___ my homework before dinner.", options: ["doed", "done", "did"], correct: "did", explain: "do → did (done ist die 3. Form)" },
  { id: 24, type: "mc", q: "She ___ a glass of milk.", options: ["drinked", "drank", "drunk"], correct: "drank", explain: "drink → drank (drunk = 3. Form)" },
  { id: 25, type: "mc", q: "The bird ___ away.", options: ["flew", "flied", "flyed"], correct: "flew", explain: "fly → flew (unregelmäßig, NICHT 'flied')" },

  // --- Verneinung mit didn't (26-35) ---
  { id: 26, type: "mc", q: "I ___ go to school yesterday.", options: ["don't", "didn't", "doesn't"], correct: "didn't", explain: "Verneinung im Simple Past: didn't für ALLE Personen" },
  { id: 27, type: "mc", q: "She didn't ___ the answer.", options: ["knew", "knows", "know"], correct: "know", explain: "Nach didn't kommt IMMER die Grundform – nie die Vergangenheitsform!" },
  { id: 28, type: "mc", q: "We ___ have any homework.", options: ["didn't", "weren't", "hadn't"], correct: "didn't", explain: "Verneinung von have im Simple Past: didn't have" },
  { id: 29, type: "mc", q: "He didn't ___ the bus.", options: ["caught", "catch", "catches"], correct: "catch", explain: "Nach didn't → Grundform: catch (nicht caught)" },
  { id: 30, type: "mc", q: "They ___ understand the question.", options: ["didn't", "don't", "doesn't"], correct: "didn't", explain: "Past-Verneinung: didn't" },
  { id: 31, type: "mc", q: "I didn't ___ breakfast this morning.", options: ["had", "have", "has"], correct: "have", explain: "Nach didn't → Grundform" },
  { id: 32, type: "mc", q: "The cat didn't ___ the milk.", options: ["drinks", "drank", "drink"], correct: "drink", explain: "Nach didn't → Grundform: drink" },
  { id: 33, type: "mc", q: "We didn't ___ the film.", options: ["liked", "like", "likes"], correct: "like", explain: "Nach didn't → Grundform: like" },
  { id: 34, type: "mc", q: "She ___ to the party.", options: ["didn't came", "didn't come", "doesn't come"], correct: "didn't come", explain: "didn't + Grundform: didn't come (NICHT 'didn't came')" },
  { id: 35, type: "mc", q: "I ___ my book at home.", options: ["didn't found", "didn't find", "don't find"], correct: "didn't find", explain: "didn't + Grundform: didn't find" },

  // --- Fragen mit Did (36-43) ---
  { id: 36, type: "mc", q: "___ you watch TV yesterday?", options: ["Do", "Did", "Does"], correct: "Did", explain: "Frage im Simple Past: Did + Subjekt + Grundform" },
  { id: 37, type: "mc", q: "Did she ___ her homework?", options: ["did", "do", "does"], correct: "do", explain: "Nach Did → Grundform: do" },
  { id: 38, type: "mc", q: "___ the dog bark all night?", options: ["Does", "Was", "Did"], correct: "Did", explain: "Frage Simple Past: Did + Subjekt + Grundform" },
  { id: 39, type: "mc", q: "Did they ___ pizza for dinner?", options: ["ate", "eaten", "eat"], correct: "eat", explain: "Nach Did → Grundform: eat" },
  { id: 40, type: "mc", q: "Where ___ you go last weekend?", options: ["did", "do", "were"], correct: "did", explain: "W-Frage Simple Past: W-Wort + did + Subjekt + Grundform" },
  { id: 41, type: "mc", q: "What ___ you eat for breakfast?", options: ["was", "did", "does"], correct: "did", explain: "W-Frage Simple Past: did" },
  { id: 42, type: "mc", q: "Did your friend ___ the answer?", options: ["knew", "know", "knows"], correct: "know", explain: "Nach Did → Grundform" },
  { id: 43, type: "mc", q: "Why ___ she leave so early?", options: ["did", "does", "do"], correct: "did", explain: "W-Frage Past: did" },

  // --- was / were (44-51) ---
  { id: 44, type: "mc", q: "I ___ at home yesterday.", options: ["were", "was", "am"], correct: "was", explain: "I, he, she, it → was" },
  { id: 45, type: "mc", q: "You ___ very nice to me.", options: ["was", "were", "are"], correct: "were", explain: "you, we, they → were" },
  { id: 46, type: "mc", q: "We ___ at the cinema last night.", options: ["was", "were", "are"], correct: "were", explain: "we → were" },
  { id: 47, type: "mc", q: "She ___ very tired after the trip.", options: ["was", "were", "is"], correct: "was", explain: "she → was" },
  { id: 48, type: "mc", q: "They ___ happy with the present.", options: ["was", "were", "are"], correct: "were", explain: "they → were" },
  { id: 49, type: "mc", q: "It ___ a beautiful day.", options: ["was", "were", "is"], correct: "was", explain: "it → was" },
  { id: 50, type: "mc", q: "The children ___ in the garden.", options: ["was", "were", "are"], correct: "were", explain: "children = they → were" },
  { id: 51, type: "mc", q: "My dog ___ very hungry.", options: ["were", "was", "is"], correct: "was", explain: "my dog = it → was" },

  // --- had (52-55) ---
  { id: 52, type: "mc", q: "I ___ a great holiday last year.", options: ["had", "haved", "have"], correct: "had", explain: "have im Simple Past → had (für alle Personen)" },
  { id: 53, type: "mc", q: "She ___ a headache yesterday.", options: ["haved", "had", "has"], correct: "had", explain: "she + had" },
  { id: 54, type: "mc", q: "We ___ a lot of fun at the party.", options: ["had", "haved", "have"], correct: "had", explain: "we + had" },
  { id: 55, type: "mc", q: "They ___ a big dog when they were young.", options: ["have", "haved", "had"], correct: "had", explain: "they + had" },

  // --- Signalwörter und Adverbien (56-60) ---
  { id: 56, type: "mc", q: "Welches Signalwort gehört zum Simple Past?", options: ["every day", "yesterday", "now"], correct: "yesterday", explain: "Klassische Past-Signalwörter: yesterday, last…, ago, in 1990, when" },
  { id: 57, type: "mc", q: "Welches Signalwort gehört NICHT zum Simple Past?", options: ["last week", "two days ago", "usually"], correct: "usually", explain: "usually = Present-Signalwort (regelmäßige Handlung)" },
  { id: 58, type: "mc", q: "Welches Signalwort zeigt Simple Past an?", options: ["often", "sometimes", "in 2010"], correct: "in 2010", explain: "Konkrete Jahreszahl in der Vergangenheit = Simple Past" },
  { id: 59, type: "mc", q: "Welcher Satz steht im Simple Past?", options: ["She plays tennis.", "She played tennis yesterday.", "She is playing tennis."], correct: "She played tennis yesterday.", explain: "Vergangenheitsform + Signalwort yesterday" },
  { id: 60, type: "mc", q: "Was bedeutet 'three weeks ago'?", options: ["in drei Wochen", "vor drei Wochen", "seit drei Wochen"], correct: "vor drei Wochen", explain: "ago = vor (Vergangenheit). Steht immer am Satzende." },

  // ===== TEIL 2: TEXTEINGABE (Fragen 61-100) =====

  // --- Regelmäßige Verben in Past (61-75) ---
  { id: 61, type: "text", q: "Yesterday she ___ tennis.", verb: "play", correct: ["played"], explain: "play → played (Vokal + y → einfach -ed)" },
  { id: 62, type: "text", q: "We ___ a great movie last night.", verb: "watch", correct: ["watched"], explain: "watch → watched" },
  { id: 63, type: "text", q: "He ___ the dishes after dinner.", verb: "wash", correct: ["washed"], explain: "wash → washed" },
  { id: 64, type: "text", q: "I ___ in London last summer.", verb: "live", correct: ["lived"], explain: "Verben auf -e: nur -d anhängen: live → lived" },
  { id: 65, type: "text", q: "The bus ___ in front of the school.", verb: "stop", correct: ["stopped"], explain: "Kurzer Vokal + Konsonant → Konsonant verdoppeln: stop → stopped" },
  { id: 66, type: "text", q: "She ___ medicine at university.", verb: "study", correct: ["studied"], explain: "Konsonant + y → ied: study → studied" },
  { id: 67, type: "text", q: "We ___ to the beach by car.", verb: "travel", correct: ["travelled", "traveled"], explain: "travel → travelled (BE) oder traveled (AE) – beides ist richtig!" },
  { id: 68, type: "text", q: "He ___ the door quietly.", verb: "close", correct: ["closed"], explain: "Endung -e: nur -d anhängen: close → closed" },
  { id: 69, type: "text", q: "The baby ___ all night.", verb: "cry", correct: ["cried"], explain: "Konsonant + y → ied: cry → cried" },
  { id: 70, type: "text", q: "They ___ a beautiful song.", verb: "dance", correct: ["danced"], explain: "Endung -e: nur -d anhängen: dance → danced" },
  { id: 71, type: "text", q: "I ___ my homework yesterday evening.", verb: "finish", correct: ["finished"], explain: "finish → finished" },
  { id: 72, type: "text", q: "We ___ pictures in the museum.", verb: "look", correct: ["looked"], explain: "look → looked" },
  { id: 73, type: "text", q: "She ___ the cake for two hours.", verb: "bake", correct: ["baked"], explain: "Endung -e: nur -d anhängen: bake → baked" },
  { id: 74, type: "text", q: "The teacher ___ a difficult question.", verb: "ask", correct: ["asked"], explain: "ask → asked" },
  { id: 75, type: "text", q: "He ___ a new shirt yesterday.", verb: "want", correct: ["wanted"], explain: "Verben auf -t/-d bekommen -ed: want → wanted (sprich: 'wanted')" },

  // --- Unregelmäßige Verben (76-90) ---
  { id: 76, type: "text", q: "She ___ to school by bike.", verb: "go", correct: ["went"], explain: "go → went" },
  { id: 77, type: "text", q: "We ___ pizza for dinner.", verb: "eat", correct: ["ate"], explain: "eat → ate" },
  { id: 78, type: "text", q: "Tom ___ a new phone last week.", verb: "buy", correct: ["bought"], explain: "buy → bought (NICHT 'buyed')" },
  { id: 79, type: "text", q: "I ___ a long letter to my friend.", verb: "write", correct: ["wrote"], explain: "write → wrote" },
  { id: 80, type: "text", q: "They ___ in the lake all afternoon.", verb: "swim", correct: ["swam"], explain: "swim → swam" },
  { id: 81, type: "text", q: "He ___ me the truth.", verb: "tell", correct: ["told"], explain: "tell → told" },
  { id: 82, type: "text", q: "We ___ a beautiful rainbow.", verb: "see", correct: ["saw"], explain: "see → saw" },
  { id: 83, type: "text", q: "She ___ the answer immediately.", verb: "know", correct: ["knew"], explain: "know → knew" },
  { id: 84, type: "text", q: "The children ___ home late.", verb: "come", correct: ["came"], explain: "come → came" },
  { id: 85, type: "text", q: "I ___ a delicious cake.", verb: "make", correct: ["made"], explain: "make → made" },
  { id: 86, type: "text", q: "He ___ his new bike to school.", verb: "take", correct: ["took"], explain: "take → took" },
  { id: 87, type: "text", q: "She ___ a present from her parents.", verb: "get", correct: ["got"], explain: "get → got" },
  { id: 88, type: "text", q: "We ___ the bus at 7 o'clock.", verb: "catch", correct: ["caught"], explain: "catch → caught" },
  { id: 89, type: "text", q: "The boy ___ the ball over the fence.", verb: "throw", correct: ["threw"], explain: "throw → threw" },
  { id: 90, type: "text", q: "I ___ my keys in the bag.", verb: "find", correct: ["found"], explain: "find → found" },

  // --- did / didn't (91-95) ---
  { id: 91, type: "text", q: "___ you sleep well last night?", hint: "Hilfsverb für Simple Past", correct: ["did"], explain: "Frage im Simple Past: Did + Subjekt + Grundform" },
  { id: 92, type: "text", q: "She ___ go to school yesterday.", hint: "Verneinung Simple Past", correct: ["didn't", "did not"], explain: "Verneinung: didn't (= did not) für alle Personen" },
  { id: 93, type: "text", q: "Where ___ he live as a child?", hint: "Hilfsverb für W-Frage", correct: ["did"], explain: "W-Frage Past: did" },
  { id: 94, type: "text", q: "We ___ understand the joke.", hint: "Verneinung Simple Past", correct: ["didn't", "did not"], explain: "didn't für alle Personen" },
  { id: 95, type: "text", q: "___ they win the game?", hint: "Hilfsverb für Simple Past", correct: ["did"], explain: "Frage: Did + they + Grundform" },

  // --- was / were (96-100) ---
  { id: 96, type: "text", q: "I ___ very tired yesterday.", hint: "was / were?", correct: ["was"], explain: "I → was" },
  { id: 97, type: "text", q: "They ___ at the cinema last night.", hint: "was / were?", correct: ["were"], explain: "they → were" },
  { id: 98, type: "text", q: "It ___ a sunny day.", hint: "was / were?", correct: ["was"], explain: "it → was" },
  { id: 99, type: "text", q: "We ___ in Spain last summer.", hint: "was / were?", correct: ["were"], explain: "we → were" },
  { id: 100, type: "text", q: "She ___ my best friend in school.", hint: "was / were?", correct: ["was"], explain: "she → was" },


  // ===== TEIL 3: EXTRA SCHWER 🌶️ (Fragen 101-120) =====

  // --- Verben die gleich bleiben (101-104) ---
  { id: 101, type: "text", hard: true, q: "He ___ his finger with the knife.", verb: "cut", correct: ["cut"], explain: "ACHTUNG: cut bleibt cut! Verben wie cut, hit, put, let, set, hurt, cost, shut ändern sich NICHT." },
  { id: 102, type: "text", hard: true, q: "She ___ the book in two hours.", verb: "read", correct: ["read"], explain: "read bleibt 'read' geschrieben – wird aber wie 'red' ausgesprochen! Erkennbar nur am Kontext (yesterday, ago…)." },
  { id: 103, type: "mc", hard: true, q: "Welcher Satz ist KORREKT?", options: ["He putted the book on the shelf.", "He put the book on the shelf yesterday.", "He puts the book on the shelf yesterday."], correct: "He put the book on the shelf yesterday.", explain: "put → put (gleiche Form). 'putted' gibt es nicht!" },
  { id: 104, type: "text", hard: true, q: "The film ___ five euros.", verb: "cost", correct: ["cost"], explain: "cost bleibt cost! Niemals 'costed'." },

  // --- Schwierige Schreibweisen Regelmäßiger Verben (105-108) ---
  { id: 105, type: "text", hard: true, q: "We ___ our holiday very carefully.", verb: "plan", correct: ["planned"], explain: "Kurzer Vokal + Einzelkonsonant → Konsonant verdoppeln: plan → planned (wie stop → stopped)" },
  { id: 106, type: "text", hard: true, q: "He ___ tea to coffee.", verb: "prefer", correct: ["preferred"], explain: "preFER – die Betonung liegt hinten, deshalb wird das r verdoppelt: preferred. Bei 'OFfer' (Betonung vorne) NICHT: offered!" },
  { id: 107, type: "text", hard: true, q: "She ___ at his bad joke.", verb: "laugh", correct: ["laughed"], explain: "laugh → laughed (sprich 'lahft', aber geschrieben mit gh!)" },
  { id: 108, type: "text", hard: true, q: "The boys ___ each other into the pool.", verb: "push", correct: ["pushed"], explain: "push → pushed (Endung -sh, aber im Past einfach -ed)" },

  // --- Schwierige Unregelmäßige Verben (109-113) ---
  { id: 109, type: "text", hard: true, q: "My grandma ___ me how to bake.", verb: "teach", correct: ["taught"], explain: "teach → taught (wie catch → caught, bring → brought, think → thought – alle mit -aught/-ought!)" },
  { id: 110, type: "text", hard: true, q: "I ___ about you all night.", verb: "think", correct: ["thought"], explain: "think → thought" },
  { id: 111, type: "text", hard: true, q: "She ___ her broken leg in hospital.", verb: "have", correct: ["had"], explain: "have → had (auch in zusammengesetzten Bedeutungen 'sich etwas behandeln lassen')" },
  { id: 112, type: "text", hard: true, q: "He ___ on the chair for an hour.", verb: "sit", correct: ["sat"], explain: "sit → sat (NICHT 'sitted')" },
  { id: 113, type: "text", hard: true, q: "We ___ goodbye and left.", verb: "say", correct: ["said"], explain: "say → said (Aussprache 'sed', nicht 'säid'!)" },

  // --- Wortstellung und Fragen (114-116) ---
  { id: 114, type: "mc", hard: true, q: "Welcher Satz ist KORREKT?", options: ["Where you did go yesterday?", "Where did you go yesterday?", "Where did you went yesterday?"], correct: "Where did you go yesterday?", explain: "W-Frage Past: W-Wort + did + Subjekt + Grundform (NIE die Past-Form nach did!)" },
  { id: 115, type: "mc", hard: true, q: "Welcher Satz ist KORREKT?", options: ["Why didn't she came?", "Why didn't she come?", "Why she didn't come?"], correct: "Why didn't she come?", explain: "didn't + Grundform: come (NICHT came!). Und Hilfsverb-Stellung in W-Fragen." },
  { id: 116, type: "mc", hard: true, q: "Welcher Satz ist KORREKT?", options: ["When did your parents got married?", "When got your parents married?", "When did your parents get married?"], correct: "When did your parents get married?", explain: "Nach 'did' IMMER Grundform: get (nicht got)" },

  // --- used to / Stativverben (117-118) ---
  { id: 117, type: "mc", hard: true, q: "When I was a child, I ___ chocolate every day.", options: ["used to eat", "used to ate", "use to eat"], correct: "used to eat", explain: "'used to' + Grundform = etwas, das früher regelmäßig passierte, heute aber nicht mehr. NIE 'use to' oder 'used to ate'!" },
  { id: 118, type: "text", hard: true, q: "She ___ the answer, but she didn't say anything.", verb: "know", correct: ["knew"], explain: "Stativverben wie know, like, love, want haben auch im Past keine ing-Form: know → knew" },

  // --- Häufige Fehler (119-120) ---
  { id: 119, type: "mc", hard: true, q: "Welcher Satz ist KORREKT?", options: ["She didn't said anything.", "She didn't say nothing.", "She didn't say anything."], correct: "She didn't say anything.", explain: "ZWEI Fehlerfallen: 1) nach didn't → Grundform 'say' (nicht 'said'). 2) Keine doppelte Verneinung – 'didn't … anything', NICHT 'didn't … nothing'." },
  { id: 120, type: "mc", hard: true, q: "Welcher Satz hat KEINEN Fehler?", options: ["Did he goes to the party?", "Did he go to the party?", "Did he went to the party?"], correct: "Did he go to the party?", explain: "Nach 'Did' steht das Verb IMMER in der Grundform. Weder -s, noch -ed, noch unregelmäßige Past-Form!" }
];
