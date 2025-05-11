
function anagram(a, b) {
    if (a.length !== b.length) {
        console.log("NOT Anagram !!!");
        return;
    }

    const map_a = new Map();

    // Build the frequency map for string 'a'
    for (let i of a) {
        map_a.set(i, (map_a.get(i) || 0) + 1);
    }

    // Decrease the frequency map based on string 'b'
    for (let i of b) {
        if (map_a.has(i)) {
            map_a.set(i, map_a.get(i) - 1);
        } else {
            console.log("NOT Anagram !!!");
            return;
        }
    }

    // After processing both strings, check if all frequencies are zero
    for (let count of map_a.values()) {
        if (count !== 0) {
            console.log("NOT Anagram !!!");
            return;
        }
    }

    console.log("Anagram");
}

anagram("banan", "aannb");