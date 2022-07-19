var muridA = 150;
var muridB = 160;
var muridC = 155;
var nomor1, nomor2, nomor3;

// Murid A urutan 1
if (muridA > muridB && muridA > muridC) {
  nomor1 = 'murid A';
  if (muridB < muridC) {
    nomor2 = 'murid C';
    nomor3 = 'murid B';
  } else {
    nomor2 = 'murid B';
    nomor3 = 'murid C';
  }
}

// Murid A urutan 2
else if (muridA > muridB && muridA < muridC) {
  nomor1 = 'murid C';
  nomor2 = 'murid A';
  nomor3 = 'murid B';
} else if (muridA < muridB && muridA > muridC) {
  nomor1 = 'murid B';
  nomor2 = 'murid A';
  nomor3 = 'murid C';
}

// Murid A urutan 3
else if (muridA < muridB && muridA < muridC) {
  nomor3 = 'murid A';
  if (muridB < muridC) {
    nomor1 = 'murid C';
    nomor2 = 'murid B';
  } else {
    nomor1 = 'murid B';
    nomor2 = 'murid C';
  }
}

// Jika ada salah satu yang sama
else if (muridA === muridB) {
  if (muridB < muridC) {
    nomor1 = 'murid C';
    nomor2 = 'murid A';
    nomor3 = 'murid B';
  } else if (muridB > muridC) {
    nomor1 = 'murid A';
    nomor2 = 'murid B';
    nomor3 = 'murid C';
  }
} else if (muridA === muridC) {
  if (muridB < muridC) {
    nomor1 = 'murid A';
    nomor2 = 'murid C';
    nomor3 = 'murid B';
  } else if (muridB > muridC) {
    nomor1 = 'murid B';
    nomor2 = 'murid A';
    nomor3 = 'murid C';
  }
}
console.log('URUTAN DARI TERTINGGI KE TERENDAH :', nomor1, ',', nomor2, ',', nomor3)