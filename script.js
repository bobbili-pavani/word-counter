function countWords() {
    let text = document.getElementById("inputText").value;

    // Clean text
    let cleanText = text.replace(/[^\w\s]/gi, "").toLowerCase();
    let words = cleanText.trim().split(/\s+/);

    let wordCount = words.filter(word => word).length;
    let charCountWithSpaces = text.length;
    let charCountWithoutSpaces = text.replace(/\s/g, "").length;

    // Count frequency
    let freq = {};
    let mostCommon = "";
    let maxFreq = 0;

    words.forEach(word => {
        if (word) {
            freq[word] = (freq[word] || 0) + 1;
            if (freq[word] > maxFreq) {
                maxFreq = freq[word];
                mostCommon = word;
            }
        }
    });

    // Display result
    document.getElementById("result").innerHTML = `
        <p>Total words: <strong>${wordCount}</strong></p>
        <p>Characters (with spaces): <strong>${charCountWithSpaces}</strong></p>
        <p>Characters (without spaces): <strong>${charCountWithoutSpaces}</strong></p>
        <p>Most frequent word: <strong>${mostCommon}</strong> (${maxFreq} times)</p>
    `;
}
