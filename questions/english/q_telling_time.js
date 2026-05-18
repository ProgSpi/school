// 120 Fragen zur Uhrzeit auf Englisch – 5./6. Klasse
// type: "mc" = Multiple Choice, "text" = Texteingabe
// hard: true = Extra-Schwer (Fragen 51–60 und 111–120)

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

  { id: 9, type: "mc", q: "It is 12:00 in the middle of the day. What is the correct expression?",
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
    hint: "Langform (z. B. half past three)",
    correct: ["it's half past seven", "half past seven"],
    explain: "7:30 in der Langform: half past seven." },

  { id: 37, type: "text", q: "Es ist 9:15 Uhr. Schreibe die Uhrzeit auf Englisch.",
    hint: "Langform (z. B. quarter past three)",
    correct: ["it's quarter past nine", "quarter past nine", "it's a quarter past nine", "a quarter past nine"],
    explain: "9:15 in der Langform: quarter past nine." },

  { id: 38, type: "text", q: "Es ist 3:45 Uhr. Schreibe die Uhrzeit auf Englisch.",
    hint: "Langform (z. B. quarter to ten)",
    correct: ["it's quarter to four", "quarter to four", "it's a quarter to four", "a quarter to four"],
    explain: "3:45 in der Langform: quarter to four." },

  { id: 39, type: "text", q: "Es ist 6:00 Uhr. Schreibe die Uhrzeit auf Englisch.",
    hint: "Volle Stunde (z. B. three o'clock)",
    correct: ["it's six o'clock", "six o'clock"],
    explain: "Volle Stunden: six o'clock." },

  { id: 40, type: "text", q: "Es ist 2:30 Uhr nachmittags. Schreibe die Uhrzeit mit am/pm.",
    hint: "Kurzform mit pm (z. B. 4:15 pm)",
    correct: ["2:30 pm", "it's 2:30 pm"],
    explain: "Nachmittags = pm. Digital geschrieben: 2:30 pm." },

  { id: 41, type: "text", q: "Es ist 10:45 Uhr. Schreibe die Uhrzeit auf Englisch.",
    hint: "Kurzform (z. B. ten thirty)",
    correct: ["it's ten forty-five", "ten forty-five", "it's ten forty five", "ten forty five"],
    explain: "10:45 in der Kurzform: ten forty-five." },

  { id: 42, type: "text", q: "Es ist 8:00 Uhr morgens. Schreibe die Uhrzeit mit am/pm.",
    hint: "Kurzform mit am (z. B. 7:30 am)",
    correct: ["8:00 am", "8 am", "it's 8:00 am", "it's 8 am"],
    explain: "Morgens = am. Digital geschrieben: 8:00 am." },

  { id: 43, type: "text", q: "Es ist 11:30 Uhr. Schreibe die Uhrzeit auf Englisch.",
    hint: "Kurzform (z. B. seven thirty)",
    correct: ["it's eleven thirty", "eleven thirty"],
    explain: "11:30 in der Kurzform: eleven thirty." },

  { id: 44, type: "text", q: "Es ist 5:15 Uhr. Schreibe die Uhrzeit auf Englisch.",
    hint: "Langform (z. B. quarter past three)",
    correct: ["it's quarter past five", "quarter past five", "it's a quarter past five", "a quarter past five"],
    explain: "5:15 in der Langform: quarter past five." },

  { id: 45, type: "text", q: "Es ist 12:00 Uhr mittags. Schreibe die Uhrzeit auf Englisch.",
    hint: "Begriff für Mittag (noon / midday / twelve o'clock)",
    correct: ["it's noon", "noon", "it's twelve o'clock", "twelve o'clock", "it's midday", "midday"],
    explain: "Mittag = noon = midday = twelve o'clock." },

  { id: 46, type: "text", q: "Es ist 4:30 Uhr. Schreibe die Uhrzeit auf Englisch.",
    hint: "Langform (z. B. half past three)",
    correct: ["it's half past four", "half past four"],
    explain: "4:30 in der Langform: half past four." },

  { id: 47, type: "text", q: "Es ist 1:15 Uhr nachmittags. Schreibe auf Englisch mit am/pm.",
    hint: "Kurzform mit pm (z. B. 4:30 pm)",
    correct: ["1:15 pm", "it's 1:15 pm"],
    explain: "Nachmittags = pm. Digital geschrieben: 1:15 pm." },

  { id: 48, type: "text", q: "Es ist 7:45 Uhr. Schreibe die Uhrzeit auf Englisch.",
    hint: "Langform (z. B. quarter to four)",
    correct: ["it's quarter to eight", "quarter to eight", "it's a quarter to eight", "a quarter to eight"],
    explain: "7:45 in der Langform: quarter to eight." },

  { id: 49, type: "text", q: "Es ist 0:00 Uhr (Mitternacht). Schreibe auf Englisch.",
    hint: "Begriff für Mitternacht (midnight / 12:00 am)",
    correct: ["it's midnight", "midnight", "12:00 am", "it's 12:00 am"],
    explain: "Mitternacht = midnight = 12:00 am." },

  { id: 50, type: "text", q: "Es ist 3:00 Uhr nachmittags. Schreibe mit am/pm.",
    hint: "Kurzform mit pm (z. B. 4:30 pm)",
    correct: ["3:00 pm", "3 pm", "it's 3:00 pm", "it's 3 pm"],
    explain: "Nachmittags = pm. Digital geschrieben: 3:00 pm." },

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

  // ===== TEIL 6: MC – Minuten (5/10/20/25) past/to (61–75) =====

  { id: 61, type: "mc", q: "It is 4:05. How do you say this?",
    options: ["It's five past four.", "It's five to four.", "It's four and five."],
    correct: "It's five past four.",
    explain: "5 Minuten nach 4 = five past four." },

  { id: 62, type: "mc", q: "It is 8:10. How do you say this?",
    options: ["It's ten past eight.", "It's ten to eight.", "It's eight and ten."],
    correct: "It's ten past eight.",
    explain: "10 Minuten nach 8 = ten past eight." },

  { id: 63, type: "mc", q: "It is 2:20. How do you say this?",
    options: ["It's twenty past two.", "It's twenty to two.", "It's two twenty past."],
    correct: "It's twenty past two.",
    explain: "20 Minuten nach 2 = twenty past two." },

  { id: 64, type: "mc", q: "It is 6:25. How do you say this?",
    options: ["It's twenty-five past six.", "It's twenty-five to six.", "It's six and twenty-five."],
    correct: "It's twenty-five past six.",
    explain: "25 Minuten nach 6 = twenty-five past six." },

  { id: 65, type: "mc", q: "It is 9:35. How do you say this?",
    options: ["It's twenty-five to ten.", "It's thirty-five past nine.", "It's twenty-five past nine."],
    correct: "It's twenty-five to ten.",
    explain: "9:35 = 25 Minuten VOR 10 = twenty-five to ten." },

  { id: 66, type: "mc", q: "It is 11:40. How do you say this?",
    options: ["It's twenty to twelve.", "It's forty past eleven.", "It's twenty past eleven."],
    correct: "It's twenty to twelve.",
    explain: "11:40 = 20 Minuten VOR 12 = twenty to twelve." },

  { id: 67, type: "mc", q: "It is 1:50. How do you say this?",
    options: ["It's ten to two.", "It's fifty past one.", "It's ten past two."],
    correct: "It's ten to two.",
    explain: "1:50 = 10 Minuten VOR 2 = ten to two." },

  { id: 68, type: "mc", q: "It is 5:55. How do you say this?",
    options: ["It's five to six.", "It's fifty-five past five.", "It's five past six."],
    correct: "It's five to six.",
    explain: "5:55 = 5 Minuten VOR 6 = five to six." },

  { id: 69, type: "mc", q: "What does 'twenty past six' mean?",
    options: ["6:20", "5:40", "6:40"],
    correct: "6:20",
    explain: "Twenty past six = 20 Minuten nach 6 = 6:20." },

  { id: 70, type: "mc", q: "What does 'ten to nine' mean?",
    options: ["8:50", "9:10", "8:10"],
    correct: "8:50",
    explain: "Ten to nine = 10 Minuten VOR 9 = 8:50." },

  { id: 71, type: "mc", q: "What does 'twenty-five to four' mean?",
    options: ["3:35", "4:25", "3:25"],
    correct: "3:35",
    explain: "Twenty-five to four = 25 Minuten VOR 4 = 3:35." },

  { id: 72, type: "mc", q: "What does 'five past ten' mean?",
    options: ["10:05", "9:55", "10:50"],
    correct: "10:05",
    explain: "Five past ten = 5 Minuten nach 10 = 10:05." },

  { id: 73, type: "mc", q: "It is 3:10. Which sentence is correct?",
    options: ["It's ten past three.", "It's three past ten.", "It's ten o'clock three."],
    correct: "It's ten past three.",
    explain: "Reihenfolge: Minuten + past/to + Stunde." },

  { id: 74, type: "mc", q: "It is 7:40. Which sentence is correct?",
    options: ["It's twenty to eight.", "It's twenty past seven.", "It's forty seven."],
    correct: "It's twenty to eight.",
    explain: "7:40 = 20 Minuten VOR 8 = twenty to eight." },

  { id: 75, type: "mc", q: "It is 12:05. How do you say this?",
    options: ["It's five past twelve.", "It's five to twelve.", "It's twelve five."],
    correct: "It's five past twelve.",
    explain: "5 Minuten nach 12 = five past twelve." },

  // ===== TEIL 7: MC – Tagesablauf & Schule (76–90) =====

  { id: 76, type: "mc", q: "What time do you usually have breakfast? ___ 7 am.",
    options: ["At", "In", "On"],
    correct: "At",
    explain: "Konkrete Uhrzeit: At 7 am." },

  { id: 77, type: "mc", q: "I go to bed ___ 9 pm ___ school days.",
    options: ["at / on", "in / at", "on / in"],
    correct: "at / on",
    explain: "Uhrzeit → at, Tagesangaben (Tage) → on." },

  { id: 78, type: "mc", q: "The English lesson starts at quarter past nine. What time is it?",
    options: ["9:15", "9:45", "8:45"],
    correct: "9:15",
    explain: "Quarter past nine = 15 Minuten nach 9 = 9:15." },

  { id: 79, type: "mc", q: "The lunch break is from 12:15 to 1:00. How long is the break?",
    options: ["45 minutes", "1 hour", "30 minutes"],
    correct: "45 minutes",
    explain: "Von 12:15 bis 13:00 sind es 45 Minuten." },

  { id: 80, type: "mc", q: "School ends at half past three. What time is it?",
    options: ["3:30", "2:30", "3:00"],
    correct: "3:30",
    explain: "Half past three = 30 Minuten nach 3 = 3:30." },

  { id: 81, type: "mc", q: "My alarm rings ___ 6:45 ___ the morning.",
    options: ["at / in", "in / at", "on / in"],
    correct: "at / in",
    explain: "Uhrzeit → at 6:45, Tagesabschnitt → in the morning." },

  { id: 82, type: "mc", q: "What time does the bus leave? ___ ten to eight.",
    options: ["At", "In", "On"],
    correct: "At",
    explain: "Uhrzeitangabe: At ten to eight (= 7:50)." },

  { id: 83, type: "mc", q: "I usually do my homework ___ the afternoon.",
    options: ["in", "at", "on"],
    correct: "in",
    explain: "Tagesabschnitte: in the morning / afternoon / evening." },

  { id: 84, type: "mc", q: "My piano lesson is ___ Wednesday ___ 5 pm.",
    options: ["on / at", "in / on", "at / on"],
    correct: "on / at",
    explain: "Wochentag → on Wednesday, Uhrzeit → at 5 pm." },

  { id: 85, type: "mc", q: "What time is it when the small hand points to 4 and the big hand to 12?",
    options: ["4:00 (four o'clock)", "12:04", "4:30"],
    correct: "4:00 (four o'clock)",
    explain: "Kleiner Zeiger (Stunde) auf 4, großer Zeiger (Minute) auf 12 = 4:00." },

  { id: 86, type: "mc", q: "When the big hand points to 6, the time is...",
    options: ["half past (the hour)", "quarter past", "o'clock"],
    correct: "half past (the hour)",
    explain: "Der Minutenzeiger auf der 6 zeigt 30 Minuten = half past." },

  { id: 87, type: "mc", q: "When the big hand points to 3, the time is...",
    options: ["quarter past (the hour)", "quarter to", "half past"],
    correct: "quarter past (the hour)",
    explain: "Der Minutenzeiger auf der 3 zeigt 15 Minuten = quarter past." },

  { id: 88, type: "mc", q: "When the big hand points to 9, the time is...",
    options: ["quarter to (the next hour)", "quarter past", "half past"],
    correct: "quarter to (the next hour)",
    explain: "Der Minutenzeiger auf der 9 zeigt 45 Minuten = quarter to (nächste Stunde)." },

  { id: 89, type: "mc", q: "I go to school ___ Monday ___ Friday.",
    options: ["from / to", "in / at", "at / on"],
    correct: "from / to",
    explain: "Zeitraum von... bis...: from Monday to Friday." },

  { id: 90, type: "mc", q: "The shop is open ___ 8 am ___ 6 pm.",
    options: ["from / to", "at / in", "on / at"],
    correct: "from / to",
    explain: "Öffnungszeit als Zeitraum: from 8 am to 6 pm." },

  // ===== TEIL 8: TEXT – mehr Uhrzeiten (91–110) =====

  { id: 91, type: "text", q: "Es ist 4:05 Uhr. Schreibe auf Englisch.",
    hint: "Langform (z. B. ten past two)",
    correct: ["it's five past four", "five past four"],
    explain: "4:05 in der Langform: five past four." },

  { id: 92, type: "text", q: "Es ist 8:20 Uhr. Schreibe auf Englisch.",
    hint: "Langform (z. B. ten past four)",
    correct: ["it's twenty past eight", "twenty past eight"],
    explain: "8:20 in der Langform: twenty past eight." },

  { id: 93, type: "text", q: "Es ist 11:40 Uhr. Schreibe auf Englisch.",
    hint: "Langform (z. B. twenty to seven)",
    correct: ["it's twenty to twelve", "twenty to twelve"],
    explain: "11:40 in der Langform: twenty to twelve." },

  { id: 94, type: "text", q: "Es ist 2:25 Uhr. Schreibe auf Englisch.",
    hint: "Kurzform (z. B. seven thirty)",
    correct: ["it's two twenty-five", "two twenty-five", "it's two twenty five", "two twenty five"],
    explain: "2:25 in der Kurzform: two twenty-five." },

  { id: 95, type: "text", q: "Es ist 6:35 Uhr. Schreibe auf Englisch.",
    hint: "Langform (z. B. ten to five)",
    correct: ["it's twenty-five to seven", "twenty-five to seven", "it's twenty five to seven", "twenty five to seven"],
    explain: "6:35 in der Langform: twenty-five to seven." },

  { id: 96, type: "text", q: "Es ist 10:50 Uhr. Schreibe auf Englisch.",
    hint: "Kurzform (z. B. four fifteen)",
    correct: ["it's ten fifty", "ten fifty"],
    explain: "10:50 in der Kurzform: ten fifty." },

  { id: 97, type: "text", q: "Es ist 9:10 Uhr. Schreibe auf Englisch.",
    hint: "Langform (z. B. ten past two)",
    correct: ["it's ten past nine", "ten past nine"],
    explain: "9:10 in der Langform: ten past nine." },

  { id: 98, type: "text", q: "Wie fragst du auf Englisch nach der Uhrzeit?",
    hint: "Standardfrage – mit oder ohne Apostroph",
    correct: ["what time is it", "what time is it?", "what's the time", "what's the time?", "what is the time", "what is the time?"],
    explain: "Standardfragen: What time is it? oder What's the time?" },

  { id: 99, type: "text", q: "Ergänze: 'School starts ___ 8 o'clock.'",
    hint: "Präposition (ein Wort)",
    correct: ["at"],
    explain: "Konkrete Uhrzeit immer mit 'at'." },

  { id: 100, type: "text", q: "Ergänze: 'My birthday is ___ Saturday.'",
    hint: "Präposition (ein Wort)",
    correct: ["on"],
    explain: "Wochentage immer mit 'on'." },

  { id: 101, type: "text", q: "Ergänze: 'We have dinner ___ the evening.'",
    hint: "Präposition (ein Wort)",
    correct: ["in"],
    explain: "Tagesabschnitte (morning/afternoon/evening) immer mit 'in'." },

  { id: 102, type: "text", q: "Es ist 5:00 Uhr nachmittags. Schreibe mit am/pm.",
    hint: "Kurzform mit pm (z. B. 4:30 pm)",
    correct: ["5:00 pm", "5 pm", "it's 5 pm", "it's 5:00 pm"],
    explain: "Nachmittag = pm. Digital geschrieben: 5:00 pm." },

  { id: 103, type: "text", q: "Es ist 9:00 Uhr morgens. Schreibe mit am/pm.",
    hint: "Kurzform mit am (z. B. 7:30 am)",
    correct: ["9:00 am", "9 am", "it's 9 am", "it's 9:00 am"],
    explain: "Morgens = am. Digital geschrieben: 9:00 am." },

  { id: 104, type: "text", q: "Es ist 1:00 Uhr nachts. Schreibe mit am/pm.",
    hint: "Kurzform mit am (z. B. 7:30 am)",
    correct: ["1:00 am", "1 am", "it's 1 am", "it's 1:00 am"],
    explain: "Nachts (nach Mitternacht) = am. Digital geschrieben: 1:00 am." },

  { id: 105, type: "text", q: "Es ist 8:00 Uhr. Schreibe auf Englisch.",
    hint: "Volle Stunde (z. B. three o'clock)",
    correct: ["it's eight o'clock", "eight o'clock"],
    explain: "Volle Stunde: eight o'clock." },

  { id: 106, type: "text", q: "Es ist 12:30 Uhr mittags. Schreibe auf Englisch.",
    hint: "Langform (z. B. half past three)",
    correct: ["it's half past twelve", "half past twelve"],
    explain: "12:30 in der Langform: half past twelve." },

  { id: 107, type: "text", q: "Wie sagst du 'Es ist Viertel vor sechs.' auf Englisch?",
    hint: "Langform (z. B. quarter to four)",
    correct: ["it's quarter to six", "quarter to six", "it's a quarter to six", "a quarter to six"],
    explain: "Viertel vor sechs = quarter to six (5:45)." },

  { id: 108, type: "text", q: "Wie sagst du 'Es ist Viertel nach drei.' auf Englisch?",
    hint: "Langform (z. B. quarter past four)",
    correct: ["it's quarter past three", "quarter past three", "it's a quarter past three", "a quarter past three"],
    explain: "Viertel nach drei = quarter past three (3:15)." },

  { id: 109, type: "text", q: "Wie sagst du 'Es ist halb acht.' auf Englisch? (Achtung: andere Logik!)",
    hint: "Langform (z. B. half past three) – eine Stunde früher denken!",
    correct: ["it's half past seven", "half past seven"],
    explain: "Deutsch 'halb acht' = 7:30 = half past SEVEN (eine Stunde früher denken!)." },

  { id: 110, type: "text", q: "Wie sagst du 'Es ist halb zehn.' auf Englisch?",
    hint: "Langform (z. B. half past three) – eine Stunde früher denken!",
    correct: ["it's half past nine", "half past nine"],
    explain: "Deutsch 'halb zehn' = 9:30 = half past NINE." },

  // ===== TEIL 9: EXTRA SCHWER (111–120) =====

  { id: 111, type: "mc",
    q: "It is 16:20. How do you say this in spoken English (12-hour format)?",
    options: ["It's twenty past four in the afternoon.", "It's twenty to four in the afternoon.", "It's four twenty am."],
    correct: "It's twenty past four in the afternoon.",
    explain: "16:20 = 4:20 pm = twenty past four in the afternoon.",
    hard: true },

  { id: 112, type: "mc",
    q: "A class starts at 8:15 and lasts 45 minutes. When does it end?",
    options: ["9:00", "8:45", "9:15"],
    correct: "9:00",
    explain: "8:15 + 45 Minuten = 9:00.",
    hard: true },

  { id: 113, type: "mc",
    q: "A train leaves London at 14:50 and arrives in Manchester at 17:05. How long is the journey?",
    options: ["2 hours 15 minutes", "3 hours 15 minutes", "2 hours 55 minutes"],
    correct: "2 hours 15 minutes",
    explain: "14:50 → 17:05: zuerst bis 17:00 = 2h 10min, plus 5min = 2h 15min.",
    hard: true },

  { id: 114, type: "mc",
    q: "It is 11:55 pm. In 10 minutes, what time will it be?",
    options: ["12:05 am (next day)", "12:05 pm", "00:05 pm"],
    correct: "12:05 am (next day)",
    explain: "23:55 + 10 Min = 00:05 = 12:05 am am nächsten Tag.",
    hard: true },

  { id: 115, type: "mc",
    q: "In British English, what does 'half eight' usually mean?",
    options: ["8:30", "7:30", "8:00"],
    correct: "8:30",
    explain: "Im britischen Englisch: 'half eight' = half past eight = 8:30 (nicht wie im Deutschen).",
    hard: true },

  { id: 116, type: "mc",
    q: "A meeting starts at 9:30 am and ends at 1:15 pm. How long is the meeting?",
    options: ["3 hours 45 minutes", "4 hours 15 minutes", "3 hours 15 minutes"],
    correct: "3 hours 45 minutes",
    explain: "Von 9:30 bis 13:15: 3 Stunden bis 12:30, plus 45 Minuten bis 13:15 = 3h 45min.",
    hard: true },

  { id: 117, type: "mc",
    q: "What is the formal/official way to write 11:45 pm?",
    options: ["23:45", "11:45 pm", "23:45 pm"],
    correct: "23:45",
    explain: "Im offiziellen 24-Stunden-Format: 23:45 (ohne am/pm).",
    hard: true },

  { id: 118, type: "mc",
    q: "Choose the correct sentence:",
    options: ["The film starts at 7:30 pm on Friday.", "The film starts on 7:30 pm in Friday.", "The film starts in 7:30 pm at Friday."],
    correct: "The film starts at 7:30 pm on Friday.",
    explain: "Uhrzeit → at 7:30 pm, Wochentag → on Friday.",
    hard: true },

  { id: 119, type: "mc",
    q: "It is now 7:40 am. School starts in 35 minutes. What time does school start?",
    options: ["8:15 am", "8:05 am", "8:25 am"],
    correct: "8:15 am",
    explain: "7:40 + 35 Min: bis 8:00 = 20 Min, plus 15 Min = 8:15.",
    hard: true },

  { id: 120, type: "mc",
    q: "Which sentence is correct for saying 09:00 in spoken British English?",
    options: ["It's nine o'clock in the morning.", "It's nine in the clock am.", "It's at nine o'clock morning."],
    correct: "It's nine o'clock in the morning.",
    explain: "It's nine o'clock in the morning – Standardformulierung.",
    hard: true },
];
