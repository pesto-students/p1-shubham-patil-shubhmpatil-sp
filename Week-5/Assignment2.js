
const vowels = {
    'a':0,
    'e':0,
    'i':0,
    'o':0,
    'u':0
};

const vowelCount = function (string){
    let counterMap =new Map(Object.entries(vowels));
    const lowerString = string.toLowerCase();

    for (const char of lowerString){
        if (counterMap.has(char)) {
            counterMap.set(char,counterMap.get(char)+1)
        }
    }

    return counterMap;
};

console.log( vowelCount("India"))

/*
OUTPUT :

Map(5) { 'a' => 1, 'e' => 0, 'i' => 2, 'o' => 0, 'u' => 0 }
*/