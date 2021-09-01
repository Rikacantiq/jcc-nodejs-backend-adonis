// No.1
console.log("----- SOAL NO. 1 -----");
console.log("LOOPING PERTAMA");
i = 0;
while (i < 20) {
    i += 2;
    console.log(i + " - I love coding");
}

console.log("LOOPING KEDUA");
while (i > 0) {
    console.log(i + " - I will become backend developer");
    i -= 2;
}

// No. 2
console.log("----- SOAL NO. 2 -----");
for (var i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 2 !== 0) {
        console.log(i + " - I Love Coding");
    } else if (i % 2 == 0) {
        console.log(i + " - Berkualitas");
    } else if (i % 2 != 0) {
        console.log(i + " - Santai");
    }
}

// No. 3
console.log("----- SOAL NO. 3 -----");
var panjang = 8;
var lebar = 4;


for (var i = 0; i < lebar; i++) {
    var out = ""
    for (var j = 0; j < panjang; j++) {
        out += "#";
    }
    console.log(out);
}

// No. 4
console.log("----- SOAL NO. 4 -----");
var tangga = 7
var out = ""

for (var i = 0; i < tangga; i++) {
    out += "#"
    console.log(out);
}

// No. 5
console.log("----- SOAL NO. 5 -----");
var catur = 8;

for (var i = 0; i < catur; i++) {
    var out = "";
    if (i % 2 == 0) {
        k = 0;
    } else {
        k = 1;
    }
    for (var j = k; j < catur; j++) {
        if (j % 2 == 0) {
            out += " ";
        } else {
            out += "#";
        }
    }
    console.log(out);
}