// function showLog(total) {
//     for (let i = 0; i < total; i++) {
//         console.log(i);
//     }
// }

// addEventListener("message", function (event) {
//     const total = event.data;
//     showLog(total);
//     postMessage("Done");
// }); 




// Menerima pesan dari main thread
self.addEventListener("message", function (event) {
  const n = event.data;
  console.log(`Worker menerima pesan: ${n}`);

  // Contoh pekerjaan berat: menghitung jumlah dari 1..n
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  // Kirim hasil kembali ke main thread
  postMessage(`Hasil penjumlahan 1..${n} = ${sum}`);
});
