function countWords(str) {
    // แปลงสตริงเป็นอาร์เรย์ของคำโดยใช้ช่องว่างเป็นตัวแบ่ง
    const words = str.trim().split(/\s+/);
    return words.length;
}

console.log(countWords("Hello world!")); 
console.log(countWords("This is a test."));
console.log(countWords("   Leading and trailing spaces   "));