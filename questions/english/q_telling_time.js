// 60 Fragen zur Uhrzeit auf Englisch – 5./6. Klasse
// type: "mc" = Multiple Choice, "text" = Texteingabe
// hard: true = Extra-Schwer (Fragen 51–60)

const questionsTellingTime = [

  // ===== TEIL 1: MC – Uhrzeit ablesen (1–15) =====

  { id: 1, type: "mc", q: "It is 3:00. What do you say in English?",
    options: ["It's three o'clock.", "It's three clock.", "It's at three."],
    correct: "It's three o'clock.",
    explain: "Für volle Stunden: It's [Zahl] o'clock." },

  { id: 2, type: "mc", q: "It is 6:30. What do you say?",
    options: ["It's half past six.", "It's six and half.", "It's thirty past six."],
    correct: "It's half past six.",
    explain: "30 Minuten nach der Stunde = half past [Stunde]." },

  { id: 3, type: "mc", q: "It is 9:15. What do you say?",
    options: ["It's quarter past nine.", "It's nine and fifteen.", "It's a quarter nine."],
    correct: "It's quarter past nine.",
    explain: "15 Minuten nach der Stunde = quarter past [Stunde]." },

  { id: 4, type: "mc", q: "It is 7:45. What do you say?",
    options: ["It's quarter to eight.", "It's quarter past seven.", "It's seven forty-five."],
    correct: "It's quarter to eight.",
    explain: "15 Minuten VOR der nächsten Stunde = quarter to [nächste Stunde]." },

  { id: 5, type: "mc", q: "It is 2:00. How do you say this?",
    options: ["It's two o'clock.", "It's two clock.", "At two."],
    correct: "It's two o'clock.",
    explain: "Volle Stunde: It's two o'clock." },

  { id: 6, type: "mc", q: "It is 11:30. How do you say this?",
    options: ["It's half past eleven.", "It's eleven thirty.", "Both are correct."],
    correct: "Both are correct.",
    explain: "Beide Formen sind korrekt: half past eleven = eleven thirty." },

  { id: 7, type: "mc", q: "It is 4:45. What is the correct English expression?",
    options: ["It's quarter to five.", "It's quarter past four.", "It's forty-five past four."],
    correct: "It's quarter to five.",
    explain: "45 Minuten einer Stunde = 15 Minuten VOR der nächsten: quarter to five." },

  { id: 8, type: "mc", q: "It is 8:15. What do you say?",
    options: ["It's quarter past eight.", "It's quarter to eight.", "It's eight fifteen."],
    correct: "It's quarter past eight.",
    explain: "15 Minuten nach 8 = quarter past eight. Auch 'eight fifteen' wäre korrekt." },

  { id: 9, type: "mc", q: "It is 12:00 at midday. What is the correct expression?",
    options: ["It's twelve o'clock / noon.", "It's midnight.", "It's zero o'clock."],
    correct: "It's twelve o'clock / noon.",
    explain: "Mittagszeit = twelve o'clock oder noon. Midnight ist 00:00." },

  { id: 10, type: "mc", q: "It is 1:30. What do you say?",
    options: ["It's half past one.", "It's half to two.", "It's one and a half."],
    correct: "It's half past one.",
    explain: "30 Minuten nach 1 = half past one." },

  { id: 11, type: "mc", q: "It is 5:45. How do you say this?",
    options: ["It's quarter to six.", "It's quarter past five.", "It's five forty-five."],
    correct: "It's quarter to six.",
    explain: "45 nach 5 = 15 Minuten vor 6 = quarter to six." },

  { id: 12, type: "mc", q: "It is 10:15. What is the correct expression?",
    options: ["It's quarter past ten.", "It's a quarter to ten.", "It's fifteen past ten."],
    correct: "It's quarter past ten.",
    explain: "15 nach 10 = quarter past ten." },

  { id: 13, type: "mc", q: "What does 'half past three' mean?",
    options: ["3:30", "3:15", "3:45"],
    correct: "3:30",
    explain: "Half past three = 30 Minuten nach 3 = 3:30." },

  { id: 14, type: "mc", q: "What does 'quarter to seven' mean?",
    options: ["6:45", "7:15", "7:45"],
    correct: "6:45",
    explain: "Quarter to seven = 15 Minuten VOR 7 = 6:45." },

  { id: 15, type: "mc", q: "What does 'quarter past two' mean?",
    options: ["2:15", "2:45", "1:45"],
    correct: "2:15",
    explain: "Quarter past two = 15 Minuten nach 2 = 2:15." },

  // ===== TEIL 2: MC – Fragen zur Uhrzeit (16–25) =====

  { id: 16, type: "mc", q: "How do you ask for the time in English?",
    options: ["What time is it?", "How is the clock?", "Which time has it?"],
    correct: "What time is it?",
    explain: "Die korrekte Frage nach der Uhrzeit: What time is it?" },

  { id: 17, type: "mc", q: "Your friend asks: 'What time is it?' It is 4:00. What do you answer?",
    options: ["It's four o'clock.", "It's four clock.", "The time is at four."],
    correct: "It's four o'clock.",
    explain: "Antwort auf 'What time is it?': It's [Uhrzeit]." },

  { id: 18, type: "mc", q: "Which sentence is correct to ask for the time?",
    options: ["Could you tell me the time, please?", "Can you say me the time?", "Tell me time, please."],
    correct: "Could you tell me the time, please?",
    explain: "Höfliche Frage: Could you tell me the time, please?" },

  { id: 19, type: "mc", q: "School starts ___ 8 o'clock.",
    options: ["at", "in", "on"],
    correct: "at",
    explain: "Für genaue Uhrzeiten benutzt man 'at': at 8 o'clock." },

  { id: 20, type: "mc", q: "The film is ___ the evening.",
    options: ["in", "at", "on"],
    correct: "in",
    explain: "Für Tagesabschnitte (morning, afternoon, evening) benutzt man 'in'." },

  { id: 21, type: "mc", q: "My birthday is ___ Monday.",
    options: ["on", "at", "in"],
    correct: "on",
    explain: "Für Wochentage benutzt man 'on': on Monday." },

  { id: 22, type: "mc", q: "The shop opens ___ 9 am and closes ___ 6 pm.",
    options: ["at / at", "in / in", "on / on"],
    correct: "at / at",
    explain: "Für Uhrzeiten immer 'at': at 9 am, at 6 pm." },

  { id: 23, type: "mc", q: "We have lunch ___ noon.",
    options: ["at", "in", "on"],
    correct: "at",
    explain: "Noon (Mittag) ist ein fester Zeitpunkt: at noon." },

  { id: 24, type: "mc", q: "What time does school start? ___ 8:00.",
    options: ["At", "In", "On"],
    correct: "At",
    explain: "Uhrzeiten als Antwort auf 'What time?': At 8:00." },

  { id: 25, type: "mc", q: "I always wake up ___ the morning.",
    options: ["in", "at", "on"],
    correct: "in",
    explain: "Tagesabschnitte: in the morning, in the afternoon, in the evening." },

  // ===== TEIL 3: MC – AM/PM und 12h/24h (26–35) =====

  { id: 26, type: "mc", q: "It is 8 o'clock in the morning. How do you write this with am/pm?",
    options: ["8:00 am", "8:00 pm", "8:00 noon"],
    correct: "8:00 am",
    explain: "AM = ante meridiem = vor Mittag (00:00–11:59)." },

  { id: 27, type: "mc", q: "It is 3 o'clock in the afternoon. How do you write this?",
    options: ["3:00 pm", "3:00 am", "15:00 am"],
    correct: "3:00 pm",
    explain: "PM = post meridiem = nach Mittag (12:00–23:59)." },

  { id: 28, type: "mc", q: "What time is 20:00 in the 12-hour format?",
    options: ["8:00 pm", "8:00 am", "20:00 pm"],
    correct: "8:00 pm",
    explain: "20:00 − 12 = 8:00. Es ist nach Mittag, also 8:00 pm." },

  { id: 29, type: "mc", q: "What time is 7:00 am in the 24-hour format?",
    options: ["07:00", "19:00", "17:00"],
    correct: "07:00",
    explain: "7:00 am = 07:00 im 24-Stunden-Format (vor Mittag, keine Änderung)." },

  { id: 30, type: "mc", q: "It is midnight. How do you say this?",
    options: ["It's midnight / 12:00 am.", "It's noon / 12:00 pm.", "It's 24:00 pm."],
    correct: "It's midnight / 12:00 am.",
    explain: "Mitternacht = midnight = 12:00 am. Mittag = noon = 12:00 pm." },

  { id: 31, type: "mc", q: "What time is 14:30 in the 12-hour format?",
    options: ["2:30 pm", "2:30 am", "14:30 pm"],
    correct: "2:30 pm",
    explain: "14:30 − 12 = 2:30. Nach Mittag = pm." },

  { id: 32, type: "mc", q: "What does 'pm' stand for?",
    options: ["post meridiem (after midday)", "pre morning", "past midnight"],
    correct: "post meridiem (after midday)",
    explain: "PM kommt aus dem Lateinischen: post meridiem = nach Mittag." },

  { id: 33, type: "mc", q: "What time is 11:00 pm in the 24-hour format?",
    options: ["23:00", "11:00", "01:00"],
    correct: "23:00",
    explain: "11:00 pm + 12 = 23:00 im 24-Stunden-Format." },

  { id: 34, type: "mc", q: "The train arrives at 6:15 am. What is that in the 24-hour format?",
    options: ["06:15", "18:15", "00:15"],
    correct: "06:15",
    explain: "6:15 am ist morgens: 06:15 im 24-Stunden-Format." },

  { id: 35, type: "mc", q: "It is 12:00 pm. What time is it?",
    options: ["Noon (midday)", "Midnight", "12:00 at night"],
    correct: "Noon (midday)",
    explain: "12:00 pm = noon (Mittag). 12:00 am = midnight (Mitternacht)." },

  // ===== TEIL 4: TEXT – Uhrzeiten schreiben (36–50) =====

  { id: 36, type: "text", q: "Es ist 7:30 Uhr. Schreibe die Uhrzeit auf Englisch.",
    correct: ["it's half past seven", "half past seven", "it's seven thirty", "seven thirty"],
    explain: "7:30 = half past seven oder seven thirty." },

  { id: 37, type: "text", q: "Es ist 9:15 Uhr. Schreibe die Uhrzeit auf Englisch.",
    correct: ["it's quarter past nine", "quarter past nine", "it's nine fifteen", "nine fifteen"],
    explain: "9:15 = quarter past nine oder nine fifteen." },

  { id: 38, type: "text", q: "Es ist 3:45 Uhr. Schreibe die Uhrzeit auf Englisch.",
    correct: ["it's quarter to four", "quarter to four", "it's three forty-five", "three forty-five"],
    explain: "3:45 = quarter to four oder three forty-five." },

  { id: 39, type: "text", q: "Es ist 6:00 Uhr. Schreibe die Uhrzeit auf Englisch.",
    correct: ["it's six o'clock", "six o'clock", "it's six", "six"],
    explain: "6:00 = six o'clock (oder einfach 'six')." },

  { id: 40, type: "text", q: "Es ist 2:30 Uhr nachmittags. Schreibe die Uhrzeit mit am/pm.",
    correct: ["2:30 pm", "it's 2:30 pm", "half past two pm"],
    explain: "Nachmittags = pm: 2:30 pm." },

  { id: 41, type: "text", q: "Es ist 10:45 Uhr. Schreibe die Uhrzeit auf Englisch.",
    correct: ["it's quarter to eleven", "quarter to eleven", "it's ten forty-five", "ten forty-five"],
    explain: "10:45 = quarter to eleven oder ten forty-five." },

  { id: 42, type: "text", q: "Es ist 8:00 Uhr morgens. Schreibe die Uhrzeit mit am/pm.",
    correct: ["8:00 am", "8 am", "it's 8:00 am", "eight o'clock am"],
    explain: "Morgens = am: 8:00 am." },

  { id: 43, type: "text", q: "Es ist 11:30 Uhr. Schreibe die Uhrzeit auf Englisch.",
    correct: ["it's half past eleven", "half past eleven", "it's eleven thirty", "eleven thirty"],
    explain: "11:30 = half past eleven oder eleven thirty." },

  { id: 44, type: "text", q: "Es ist 5:15 Uhr. Schreibe die Uhrzeit auf Englisch.",
    correct: ["it's quarter past five", "quarter past five", "it's five fifteen", "five fifteen"],
    explain: "5:15 = quarter past five oder five fifteen." },

  { id: 45, type: "text", q: "Es ist 12:00 Uhr mittags. Schreibe die Uhrzeit auf Englisch.",
    correct: ["it's noon", "noon", "it's twelve o'clock", "twelve o'clock", "it's midday", "midday"],
    explain: "Mittag = noon oder twelve o'clock (pm)." },

  { id: 46, type: "text", q: "Es ist 4:30 Uhr. Schreibe die Uhrzeit auf Englisch.",
    correct: ["it's half past four", "half past four", "it's four thirty", "four thirty"],
    explain: "4:30 = half past four oder four thirty." },

  { id: 47, type: "text", q: "Es ist 1:15 Uhr nachmittags. Schreibe auf Englisch mit am/pm.",
    correct: ["1:15 pm", "it's 1:15 pm", "quarter past one pm"],
    explain: "Nachmittags = pm: 1:15 pm." },

  { id: 48, type: "text", q: "Es ist 7:45 Uhr. Schreibe die Uhrzeit auf Englisch.",
    correct: ["it's quarter to eight", "quarter to eight", "it's seven forty-five", "seven forty-five"],
    explain: "7:45 = quarter to eight oder seven forty-five." },

  { id: 49, type: "text", q: "Es ist 0:00 Uhr (Mitternacht). Schreibe auf Englisch.",
    correct: ["it's midnight", "midnight", "it's twelve o'clock am", "twelve o'clock am", "12:00 am"],
    explain: "Mitternacht = midnight = 12:00 am." },

  { id: 50, type: "text", q: "Es ist 3:00 Uhr nachmittags. Schreibe mit am/pm.",
    correct: ["3:00 pm", "3 pm", "it's 3:00 pm", "three o'clock pm"],
    explain: "Nachmittags = pm: 3:00 pm." },

  // ===== TEIL 5: EXTRA SCHWER (51–60) =====

  { id: 51, type: "mc",
    q: "The train departs at 14:45. How do you say this in the 12-hour format?",
    options: ["It leaves at quarter to three pm.", "It leaves at quarter past two pm.", "It leaves at two forty-five am."],
    correct: "It leaves at quarter to three pm.",
    explain: "14:45 = 2:45 pm. 2:45 = 15 Minuten vor 3 = quarter to three pm.",
    hard: true },

  { id: 52, type: "mc",
    q: "A film starts at 19:30. How do you say this?",
    options: ["The film starts at half past seven in the evening.", "The film starts at half past seven in the morning.", "The film starts at seven thirty am."],
    correct: "The film starts at half past seven in the evening.",
    explain: "19:30 = 7:30 pm = half past seven in the evening.",
    hard: true },

  { id: 53, type: "mc",
    q: "Which sentence uses the correct preposition? 'The meeting is ___ Friday ___ 10 am.'",
    options: ["on / at", "in / at", "at / on"],
    correct: "on / at",
    explain: "Wochentag → on Friday. Uhrzeit → at 10 am.",
    hard: true },

  { id: 54, type: "mc",
    q: "How do you say 23:15 in spoken English (12-hour format)?",
    options: ["It's quarter past eleven at night.", "It's quarter to midnight.", "It's eleven fifteen pm."],
    correct: "It's quarter past eleven at night.",
    explain: "23:15 = 11:15 pm = quarter past eleven at night / pm.",
    hard: true },

  { id: 55, type: "mc",
    q: "Someone says: 'See you at half nine!' What time do they mean?",
    options: ["9:30", "8:30", "9:15"],
    correct: "9:30",
    explain: "Im britischen Englisch: 'half nine' = half past nine = 9:30.",
    hard: true },

  { id: 56, type: "mc",
    q: "The shop opens at 09:00 and closes at 17:30. How long is it open?",
    options: ["8 hours 30 minutes", "8 hours", "9 hours"],
    correct: "8 hours 30 minutes",
    explain: "Von 9:00 bis 17:30 sind es 8 Stunden und 30 Minuten.",
    hard: true },

  { id: 57, type: "mc",
    q: "Which is the formal/written way to express 3:45 pm?",
    options: ["15:45", "3:45", "03:45 pm"],
    correct: "15:45",
    explain: "Im formellen/schriftlichen 24h-Format: 15:45 (kein am/pm nötig).",
    hard: true },

  { id: 58, type: "mc",
    q: "It is now 8:50 am. School starts at 9:00 am. How many minutes until school starts?",
    options: ["10 minutes", "50 minutes", "8 minutes"],
    correct: "10 minutes",
    explain: "Von 8:50 bis 9:00 = 10 Minuten.",
    hard: true },

  { id: 59, type: "mc",
    q: "How do you say 00:30 in English?",
    options: ["It's half past midnight.", "It's half past twelve am.", "Both are correct."],
    correct: "Both are correct.",
    explain: "00:30 = half past midnight = half past twelve am. Beide Ausdrücke sind korrekt.",
    hard: true },

  { id: 60, type: "mc",
    q: "A bus leaves at 7:55 am. How do you say this with 'to'?",
    options: ["It's five to eight in the morning.", "It's five past seven in the morning.", "It's seven fifty-five pm."],
    correct: "It's five to eight in the morning.",
    explain: "7:55 = 5 Minuten VOR 8 = five to eight. Morgens = in the morning (am).",
    hard: true },
];
