const questionsReadingPast = [
  {
    id: 1,
    title: "A Summer Holiday",
    story: `<p>Last summer, the Taylor family [0] to Spain for two weeks. They [1] very early in the morning and [2] to the airport by taxi. The flight [3] three hours.</p>
<p>When they [4] at the hotel, they [5] tired but happy. The hotel [6] right on the beach. The children [7] immediately to the pool and [8] in the water for hours.</p>
<p>Every day, the family [9] breakfast on the terrace. After breakfast, they [10] to the beach, where the children [11] sandcastles. Mr Taylor [12] under a sun umbrella and [13] a book. Mrs Taylor [14] in the sea every morning.</p>
<p>One day, they [15] a trip to an old town nearby. They [16] beautiful buildings and [17] delicious local food. Lisa [18] a small souvenir for her best friend. Tom [19] lots of photos with his new camera.</p>`,
    blanks: [
      { options: ["went", "go", "goes"],                       correct: "went",          explain: "Simple Past of 'go': went" },
      { options: ["got up", "get up", "gets up"],              correct: "got up",        explain: "Simple Past of 'get up': got up" },
      { options: ["drove", "drive", "drives"],                 correct: "drove",         explain: "Simple Past of 'drive': drove" },
      { options: ["took", "take", "takes"],                    correct: "took",          explain: "Simple Past of 'take': took" },
      { options: ["arrived", "arrive", "arrives"],             correct: "arrived",       explain: "Simple Past of 'arrive': arrived" },
      { options: ["were", "are", "is"],                        correct: "were",          explain: "Simple Past of 'be' (plural): were" },
      { options: ["was", "is", "were"],                        correct: "was",           explain: "Simple Past of 'be' (singular): was" },
      { options: ["ran", "run", "runs"],                       correct: "ran",           explain: "Simple Past of 'run': ran" },
      { options: ["swam", "swim", "swims"],                    correct: "swam",          explain: "Simple Past of 'swim': swam" },
      { options: ["had", "have", "has"],                       correct: "had",           explain: "Simple Past of 'have': had" },
      { options: ["went", "go", "goes"],                       correct: "went",          explain: "Simple Past of 'go': went" },
      { options: ["built", "build", "builds"],                 correct: "built",         explain: "Simple Past of 'build': built" },
      { options: ["sat", "sit", "sits"],                       correct: "sat",           explain: "Simple Past of 'sit': sat" },
      { options: ["read", "reads", "reading"],                 correct: "read",          explain: "Simple Past of 'read': read (pronounced 'red')" },
      { options: ["swam", "swim", "swims"],                    correct: "swam",          explain: "Simple Past of 'swim': swam" },
      { options: ["made", "make", "makes"],                    correct: "made",          explain: "Simple Past of 'make': made (hier: made a trip)" },
      { options: ["saw", "see", "sees"],                       correct: "saw",           explain: "Simple Past of 'see': saw" },
      { options: ["ate", "eat", "eats"],                       correct: "ate",           explain: "Simple Past of 'eat': ate" },
      { options: ["bought", "buy", "buys"],                    correct: "bought",        explain: "Simple Past of 'buy': bought" },
      { options: ["took", "take", "takes"],                    correct: "took",          explain: "Simple Past of 'take': took (photos)" }
    ]
  },
  {
    id: 2,
    title: "The School Trip",
    story: `<p>Last Friday, class 5b [0] on a school trip to the science museum. The students [1] very excited when they [2] at school that morning. Their teacher, Mr Green, [3] the tickets online the week before.</p>
<p>The class [4] a coach to the museum. The journey [5] about 45 minutes. When they [6], a guide [7] them at the entrance and [8] them around the exhibitions.</p>
<p>The students [9] many interesting things. They [10] how electricity [11] and [12] buttons and levers to make machines move. Tom [13] a small robot and [14] it dance.</p>
<p>At lunchtime, the class [15] their sandwiches in the museum café. After lunch, they [16] more time to explore. Emma [17] a book about space in the museum shop and [18] it with her pocket money.</p>
<p>In the afternoon, the coach [19] them back to school. It was the best school trip ever.</p>`,
    blanks: [
      { options: ["went", "go", "goes"],                       correct: "went",          explain: "Simple Past of 'go': went" },
      { options: ["were", "are", "was"],                       correct: "were",          explain: "Simple Past of 'be' (plural): were" },
      { options: ["arrived", "arrive", "arrives"],             correct: "arrived",       explain: "Simple Past of 'arrive': arrived" },
      { options: ["bought", "buy", "buys"],                    correct: "bought",        explain: "Simple Past of 'buy': bought" },
      { options: ["took", "take", "takes"],                    correct: "took",          explain: "Simple Past of 'take': took" },
      { options: ["took", "take", "takes"],                    correct: "took",          explain: "Simple Past of 'take': took (the journey took)" },
      { options: ["arrived", "arrive", "arrives"],             correct: "arrived",       explain: "Simple Past: arrived" },
      { options: ["met", "meet", "meets"],                     correct: "met",           explain: "Simple Past of 'meet': met" },
      { options: ["showed", "show", "shows"],                  correct: "showed",        explain: "Simple Past of 'show': showed" },
      { options: ["saw", "see", "sees"],                       correct: "saw",           explain: "Simple Past of 'see': saw" },
      { options: ["learned", "learn", "learns"],               correct: "learned",       explain: "Simple Past of 'learn': learned" },
      { options: ["worked", "work", "works"],                  correct: "worked",        explain: "Simple Past of 'work': worked" },
      { options: ["pressed", "press", "presses"],              correct: "pressed",       explain: "Simple Past of 'press': pressed" },
      { options: ["built", "build", "builds"],                 correct: "built",         explain: "Simple Past of 'build': built" },
      { options: ["made", "make", "makes"],                    correct: "made",          explain: "Simple Past of 'make': made" },
      { options: ["ate", "eat", "eats"],                       correct: "ate",           explain: "Simple Past of 'eat': ate" },
      { options: ["had", "have", "has"],                       correct: "had",           explain: "Simple Past of 'have': had" },
      { options: ["found", "find", "finds"],                   correct: "found",         explain: "Simple Past of 'find': found" },
      { options: ["bought", "buy", "buys"],                    correct: "bought",        explain: "Simple Past of 'buy': bought" },
      { options: ["drove", "drive", "drives"],                 correct: "drove",         explain: "Simple Past of 'drive': drove" }
    ]
  },
  {
    id: 3,
    title: "The Football Match",
    story: `<p>Last Saturday, Jake [0] a football match with his team. He [1] up at 8 o'clock and [2] a big breakfast. His father [3] him to the sports ground.</p>
<p>The match [4] at 10 o'clock. Both teams [5] hard from the beginning. Jake [6] in the midfield and [7] many good passes. In the 20th minute, his teammate [8] the first goal and everyone [9].</p>
<p>At half-time, the score [10] 1-0. The coach [11] the players instructions and [12] them to work on their defence. In the second half, the other team [13] a penalty and [14] it. The match [15] 1-1.</p>
<p>In the last minute, Jake [16] the ball near the goal. He [17] quickly and [18] – the ball went into the net! His team [19] the match 2-1.</p>`,
    blanks: [
      { options: ["played", "play", "plays"],                  correct: "played",        explain: "Simple Past of 'play': played" },
      { options: ["got up", "get up", "gets up"],              correct: "got up",        explain: "Simple Past of 'get up': got up" },
      { options: ["ate", "eat", "eats"],                       correct: "ate",           explain: "Simple Past of 'eat': ate" },
      { options: ["drove", "drive", "drives"],                 correct: "drove",         explain: "Simple Past of 'drive': drove" },
      { options: ["started", "start", "starts"],               correct: "started",       explain: "Simple Past of 'start': started" },
      { options: ["fought", "fight", "fights"],                correct: "fought",        explain: "Simple Past of 'fight': fought" },
      { options: ["played", "play", "plays"],                  correct: "played",        explain: "Simple Past of 'play': played" },
      { options: ["made", "make", "makes"],                    correct: "made",          explain: "Simple Past of 'make': made" },
      { options: ["scored", "score", "scores"],                correct: "scored",        explain: "Simple Past of 'score': scored" },
      { options: ["cheered", "cheer", "cheers"],               correct: "cheered",       explain: "Simple Past of 'cheer': cheered" },
      { options: ["was", "is", "were"],                        correct: "was",           explain: "Simple Past of 'be' (singular): was" },
      { options: ["gave", "give", "gives"],                    correct: "gave",          explain: "Simple Past of 'give': gave" },
      { options: ["told", "tell", "tells"],                    correct: "told",          explain: "Simple Past of 'tell': told" },
      { options: ["got", "get", "gets"],                       correct: "got",           explain: "Simple Past of 'get': got" },
      { options: ["scored", "score", "scores"],                correct: "scored",        explain: "Simple Past of 'score': scored" },
      { options: ["ended", "end", "ends"],                     correct: "ended",         explain: "Simple Past of 'end': ended" },
      { options: ["got", "get", "gets"],                       correct: "got",           explain: "Simple Past of 'get': got" },
      { options: ["shot", "shoot", "shoots"],                  correct: "shot",          explain: "Simple Past of 'shoot': shot" },
      { options: ["kicked", "kick", "kicks"],                  correct: "kicked",        explain: "Simple Past of 'kick': kicked" },
      { options: ["won", "win", "wins"],                       correct: "won",           explain: "Simple Past of 'win': won" }
    ]
  },
  {
    id: 4,
    title: "The Birthday Party",
    story: `<p>Last week, Emma [0] her 11th birthday. Her parents [1] a surprise party for her. They [2] her friends and [3] them to come at 4 o'clock.</p>
<p>Emma's mother [4] a big chocolate cake. Her father [5] colourful decorations around the house. Emma [6] nothing about the party – she [7] really surprised when she [8] home from school.</p>
<p>Ten friends [9] to the party. They [10] games in the garden and [11] a lot. Emma [12] many presents: books, a new backpack and some craft materials.</p>
<p>The children [13] the cake and [14] lemonade. Emma [15] out the candles and [16] a wish. Her best friend [17] a funny speech and everyone [18].</p>
<p>The party [19] until 7 o'clock. Everyone had a wonderful time and went home happy.</p>`,
    blanks: [
      { options: ["celebrated", "celebrate", "celebrates"],    correct: "celebrated",    explain: "Simple Past of 'celebrate': celebrated" },
      { options: ["organised", "organise", "organises"],       correct: "organised",     explain: "Simple Past of 'organise': organised" },
      { options: ["called", "call", "calls"],                  correct: "called",        explain: "Simple Past of 'call': called" },
      { options: ["invited", "invite", "invites"],             correct: "invited",       explain: "Simple Past of 'invite': invited" },
      { options: ["baked", "bake", "bakes"],                   correct: "baked",         explain: "Simple Past of 'bake': baked" },
      { options: ["hung", "hang", "hangs"],                    correct: "hung",          explain: "Simple Past of 'hang': hung" },
      { options: ["knew", "know", "knows"],                    correct: "knew",          explain: "Simple Past of 'know': knew" },
      { options: ["was", "is", "were"],                        correct: "was",           explain: "Simple Past of 'be': was" },
      { options: ["came", "come", "comes"],                    correct: "came",          explain: "Simple Past of 'come': came" },
      { options: ["came", "come", "comes"],                    correct: "came",          explain: "Simple Past of 'come': came" },
      { options: ["played", "play", "plays"],                  correct: "played",        explain: "Simple Past of 'play': played" },
      { options: ["laughed", "laugh", "laughs"],               correct: "laughed",       explain: "Simple Past of 'laugh': laughed" },
      { options: ["got", "get", "gets"],                       correct: "got",           explain: "Simple Past of 'get': got" },
      { options: ["ate", "eat", "eats"],                       correct: "ate",           explain: "Simple Past of 'eat': ate" },
      { options: ["drank", "drink", "drinks"],                 correct: "drank",         explain: "Simple Past of 'drink': drank" },
      { options: ["blew", "blow", "blows"],                    correct: "blew",          explain: "Simple Past of 'blow': blew" },
      { options: ["made", "make", "makes"],                    correct: "made",          explain: "Simple Past of 'make': made (a wish)" },
      { options: ["gave", "give", "gives"],                    correct: "gave",          explain: "Simple Past of 'give': gave" },
      { options: ["clapped", "clap", "claps"],                 correct: "clapped",       explain: "Simple Past of 'clap': clapped" },
      { options: ["lasted", "last", "lasts"],                  correct: "lasted",        explain: "Simple Past of 'last': lasted" }
    ]
  }
];
