// ===================================================
// ESL Grammar Question Bank (Unit 1 - Unit 7)
// ===================================================

const grammarDatabase = {
    "unit1": {
        title: "Unit 1: Nouns (名詞)",
        sections: [
            {
                id: "u1_cat",
                title: "1. Categorize (分類)",
                type: "sorting",
                instructions: "Person, Place, Animal, or Thing?",
                buckets: ["Person", "Place", "Animal", "Thing"],
                questions: [
                    { q: "Teacher", a: "Person" },
                    { q: "Museum", a: "Place" },
                    { q: "Hamster", a: "Animal" },
                    { q: "Balloon", a: "Thing" },
                    { q: "Magician", a: "Person" },
                    { q: "Library", a: "Place" },
                    { q: "Zebra", a: "Animal" },
                    { q: "Wallet", a: "Thing" }
                ]
            },
            {
                id: "u1_proper",
                title: "2. Common vs Proper",
                type: "choice",
                instructions: "Choose the correct word (Watch capital letters!)",
                questions: [
                    { q: "My teacher is ___.", options: ["mr. smith", "Mr. Smith"], a: "Mr. Smith" },
                    { q: "I live in ___.", options: ["paris", "Paris"], a: "Paris" },
                    { q: "Harry is my ___.", options: ["dog", "Dog"], a: "dog" },
                    { q: "Today is ___.", options: ["sunday", "Sunday"], a: "Sunday" },
                    { q: "___ is a beautiful city.", options: ["Madrid", "madrid"], a: "Madrid" }
                ]
            }
        ]
    },
    "unit2": {
        title: "Unit 2: Articles (a/an/the)",
        sections: [
            {
                id: "u2_aan",
                title: "1. a or an?",
                type: "choice",
                instructions: "Select 'a' or 'an'",
                questions: [
                    { q: "___ igloo", options: ["a", "an"], a: "an" },
                    { q: "___ candle", options: ["a", "an"], a: "a" },
                    { q: "___ umbrella", options: ["a", "an"], a: "an" },
                    { q: "___ scientist", options: ["a", "an"], a: "a" },
                    { q: "___ octopus", options: ["a", "an"], a: "an" },
                    { q: "___ coat", options: ["a", "an"], a: "a" }
                ]
            },
            {
                id: "u2_sentence",
                title: "2. Complete the sentence",
                type: "choice",
                instructions: "Which is correct?",
                questions: [
                    { q: "I see ___.", options: ["a elephant", "an elephant"], a: "an elephant" },
                    { q: "She has ___.", options: ["a iguana", "an iguana"], a: "an iguana" },
                    { q: "The ___ is yellow.", options: ["moon", "Moon"], a: "moon" },
                    { q: "___ sky is blue.", options: ["A", "The"], a: "The" }
                ]
            }
        ]
    },
    "unit3": {
        title: "Unit 3: Plurals (複數)",
        sections: [
            {
                id: "u3_form",
                title: "1. Make it Plural",
                type: "choice",
                instructions: "Choose the correct plural form",
                questions: [
                    { q: "One tree, two ___", options: ["trees", "treeses"], a: "trees" },
                    { q: "One box, three ___", options: ["boxs", "boxes"], a: "boxes" },
                    { q: "One cherry, four ___", options: ["cherrys", "cherries"], a: "cherries" },
                    { q: "One leaf, many ___", options: ["leafs", "leaves"], a: "leaves" },
                    { q: "One dish, two ___", options: ["dishs", "dishes"], a: "dishes" },
                    { q: "One knife, three ___", options: ["knifes", "knives"], a: "knives" }
                ]
            }
        ]
    },
    "unit4": {
        title: "Unit 4: Count & Non-count",
        sections: [
            {
                id: "u4_sort",
                title: "1. Can you count it?",
                type: "sorting",
                instructions: "Count (can count 1,2,3) or Non-count?",
                buckets: ["Count", "Non-count"],
                questions: [
                    { q: "Apple", a: "Count" },
                    { q: "Water", a: "Non-count" },
                    { q: "Sandwich", a: "Count" },
                    { q: "Bread", a: "Non-count" },
                    { q: "Song", a: "Count" },
                    { q: "Music", a: "Non-count" },
                    { q: "Dollar", a: "Count" },
                    { q: "Money", a: "Non-count" }
                ]
            },
            {
                id: "u4_some",
                title: "2. a/an vs some",
                type: "choice",
                instructions: "Fill in the blank",
                questions: [
                    { q: "I want ___ soup.", options: ["a", "some"], a: "some" },
                    { q: "He has ___ orange.", options: ["an", "some"], a: "an" },
                    { q: "We need ___ water.", options: ["a", "some"], a: "some" },
                    { q: "Do you have ___ idea?", options: ["an", "some"], a: "an" }
                ]
            }
        ]
    },
    "unit5": {
        title: "Unit 5: Subject Pronouns",
        sections: [
            {
                id: "u5_replace",
                title: "1. Replace the Noun",
                type: "choice",
                instructions: "Choose the correct pronoun (He/She/It/They/We)",
                questions: [
                    { q: "Mary is a singer. ___ is a singer.", options: ["He", "She"], a: "She" },
                    { q: "The pot is heavy. ___ is heavy.", options: ["It", "He"], a: "It" },
                    { q: "Ken and Bill are actors. ___ are actors.", options: ["We", "They"], a: "They" },
                    { q: "You and I are rich. ___ are rich.", options: ["We", "They"], a: "We" },
                    { q: "The giraffes are tall. ___ are tall.", options: ["They", "It"], a: "They" }
                ]
            },
            {
                id: "u5_be",
                title: "2. am / is / are",
                type: "choice",
                instructions: "Choose the correct Be verb",
                questions: [
                    { q: "I ___ sleepy.", options: ["am", "is", "are"], a: "am" },
                    { q: "They ___ my teachers.", options: ["is", "are"], a: "are" },
                    { q: "He ___ fat.", options: ["is", "are"], a: "is" },
                    { q: "You ___ very smart.", options: ["am", "are"], a: "are" }
                ]
            }
        ]
    },
    "unit6": {
        title: "Unit 6: Be Verb (Negative)",
        sections: [
            {
                id: "u6_neg",
                title: "1. Negative Form",
                type: "choice",
                instructions: "Choose the correct negative form",
                questions: [
                    { q: "I am Canadian. I ___ French.", options: ["'m not", "isn't"], a: "'m not" },
                    { q: "You are smart. You ___ stupid.", options: ["isn't", "aren't"], a: "aren't" },
                    { q: "He is handsome. He ___ ugly.", options: ["isn't", "aren't"], a: "isn't" },
                    { q: "We are police officers. We ___ firefighters.", options: ["aren't", "'m not"], a: "aren't" }
                ]
            },
            {
                id: "u6_q",
                title: "2. Question Order",
                type: "choice",
                instructions: "Which question is correct?",
                questions: [
                    { q: "She is American.", options: ["Is she American?", "She is American?"], a: "Is she American?" },
                    { q: "They are cooks.", options: ["Are they cooks?", "Am they cooks?"], a: "Are they cooks?" },
                    { q: "You are diligent.", options: ["Are you diligent?", "Is you diligent?"], a: "Are you diligent?" }
                ]
            }
        ]
    },
    "unit7": {
        title: "Unit 7: Wh- Questions",
        sections: [
            {
                id: "u7_wh",
                title: "1. Who vs What",
                type: "choice",
                instructions: "Choose Who (people) or What (things/animals)",
                questions: [
                    { q: "___ is the old woman?", options: ["Who", "What"], a: "Who" },
                    { q: "___ is that small animal?", options: ["Who", "What"], a: "What" },
                    { q: "___ are they? (They are my cousins)", options: ["Who", "What"], a: "Who" },
                    { q: "___ are they? (They are lizards)", options: ["Who", "What"], a: "What" }
                ]
            },
            {
                id: "u7_match",
                title: "2. Match Answer",
                type: "choice",
                instructions: "Choose the best answer",
                questions: [
                    { q: "Who is that man?", options: ["He is the chef.", "It is a bike."], a: "He is the chef." },
                    { q: "What is it?", options: ["She is Holly.", "It is a pumpkin."], a: "It is a pumpkin." },
                    { q: "Who are those girls?", options: ["They are my sisters.", "It is a post office."], a: "They are my sisters." }
                ]
            }
        ]
    }
};