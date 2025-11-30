// ===================================================
// Unit 6 Data File
// Corresponds to Homework Sheet P.28-29
// ===================================================

if (!window.grammarDatabase) window.grammarDatabase = {};

window.grammarDatabase["unit6"] = {
    title: "Unit 6: Be Verb (Homework)",
    sections: [
        // --- Section A: Short Negative Forms ---
        {
            id: "u6_part_a",
            title: "A. Negative Forms",
            type: "choice",
            instructions: "Complete with short negative forms ('m not / isn't / aren't)",
            questions: [
                { q: "My parents are angry. <br>My parents ___ angry.", options: ["isn't", "aren't"], a: "aren't" },
                { q: "He is my friend. <br>He ___ my friend.", options: ["isn't", "aren't"], a: "isn't" },
                { q: "Tom and Jerry are doctors. <br>Tom and Jerry ___ doctors.", options: ["isn't", "aren't"], a: "aren't" },
                { q: "The book is heavy. <br>The book ___ heavy.", options: ["isn't", "aren't"], a: "isn't" }
            ]
        },
        
        // --- Section B: Correct the words ---
        {
            id: "u6_part_b",
            title: "B. Fix the Mistake",
            type: "choice",
            instructions: "Choose the correct Be verb",
            questions: [
                { q: "I <u style='color:red'>is</u> not happy. <br>I ___ not happy.", options: ["am", "is", "are"], a: "am" },
                { q: "Mike <u style='color:red'>are</u> not your brother. <br>Mike ___ not your brother.", options: ["am", "is", "are"], a: "is" },
                { q: "You <u style='color:red'>am</u> not a prince. <br>You ___ not a prince.", options: ["am", "is", "are"], a: "are" },
                { q: "We <u style='color:red'>is</u> not hungry. <br>We ___ not hungry.", options: ["am", "is", "are"], a: "are" },
                { q: "It <u style='color:red'>are</u> not my gift. <br>It ___ not my gift.", options: ["am", "is", "are"], a: "is" }
            ]
        },

        // --- Section C: Change into questions ---
        {
            id: "u6_part_c",
            title: "C. Make Questions",
            type: "choice",
            instructions: "Choose the correct question form",
            questions: [
                { 
                    q: "You are beautiful. <br>(Change to Question)", 
                    options: ["You are beautiful?", "Are you beautiful?", "Am you beautiful?"], 
                    a: "Are you beautiful?" 
                },
                { 
                    q: "They are pilots. <br>(Change to Question)", 
                    options: ["Are they pilots?", "Is they pilots?", "They are pilots?"], 
                    a: "Are they pilots?" 
                },
                { 
                    q: "She is tired. <br>(Change to Question)", 
                    options: ["Are she tired?", "Is she tired?", "She is tired?"], 
                    a: "Is she tired?" 
                },
                { 
                    q: "He is hardworking. <br>(Change to Question)", 
                    options: ["Is he hardworking?", "Are he hardworking?", "He is hardworking?"], 
                    a: "Is he hardworking?" 
                },
                { 
                    q: "It is sunny. <br>(Change to Question)", 
                    options: ["Are it sunny?", "Is it sunny?", "It is sunny?"], 
                    a: "Is it sunny?" 
                }
            ]
        },

        // --- Section D: Complete the answers ---
        {
            id: "u6_part_d",
            title: "D. Yes/No Answers",
            type: "choice",
            instructions: "Choose the correct answer",
            questions: [
                { 
                    q: "Is your mother a nurse? <br>(Yes)", 
                    options: ["Yes, she is.", "Yes, he is.", "Yes, she are."], 
                    a: "Yes, she is." 
                },
                { 
                    q: "Are they your friends? <br>(Yes)", 
                    options: ["Yes, they is.", "Yes, they are.", "Yes, we are."], 
                    a: "Yes, they are." 
                },
                { 
                    q: "Are you a student? <br>(Yes)", 
                    options: ["Yes, I are.", "Yes, you are.", "Yes, I am."], 
                    a: "Yes, I am." 
                },
                { 
                    q: "Is your bag heavy? <br>(No)", 
                    options: ["No, it isn't.", "No, it aren't.", "No, he isn't."], 
                    a: "No, it isn't." 
                },
                { 
                    q: "Is he your father? <br>(No)", 
                    options: ["No, she isn't.", "No, he isn't.", "No, he aren't."], 
                    a: "No, he isn't." 
                }
            ]
        }
    ]
};