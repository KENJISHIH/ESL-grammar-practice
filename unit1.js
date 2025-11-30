// ===================================================
// Unit 1 Data File
// ===================================================

if (!window.grammarDatabase) window.grammarDatabase = {};

window.grammarDatabase["unit1"] = {
    title: "Unit 1: Nouns",
    sections: [
        {
            id: "u1_cat",
            title: "1. Categorize",
            type: "sorting",
            instructions: "Person, Place, Animal, or Thing?",
            buckets: ["Person", "Place", "Animal", "Thing"],
            questions: [
                { q: "Teacher", a: "Person" },
                { q: "London", a: "Place" },
                { q: "Rabbit", a: "Animal" },
                { q: "Ball", a: "Thing" },
                { q: "Mr. Smith", a: "Person" },
                { q: "School", a: "Place" },
                { q: "Tiger", a: "Animal" },
                { q: "Pencil", a: "Thing" }
            ]
        },
        {
            id: "u1_proper",
            title: "2. Common vs Proper",
            type: "choice",
            instructions: "Choose the Correct Noun (Big Letter?)",
            questions: [
                { q: "My teacher is ___.", options: ["mr. smith", "Mr. Smith"], a: "Mr. Smith" },
                { q: "I live in ___.", options: ["london", "London"], a: "London" },
                { q: "This is a ___.", options: ["Cat", "cat"], a: "cat" },
                { q: "Today is ___.", options: ["sunday", "Sunday"], a: "Sunday" }
            ]
        }
    ]
};