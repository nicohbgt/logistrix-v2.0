function tambahPengiriman() {
  const id = document.getElementById("idBarang").value.trim();
  const nama = document.getElementById("namaBarang").value.trim();
  const lokasi = document.getElementById("stokBarang").value.trim();
  const status = document.getElementById("lokasiBarang").value.trim();

  if (!id || !nama || !lokasi || !status) {
    alert("Harap isi semua kolom data.");
    return;
  }

  const rows = document.querySelectorAll("table tbody tr");
  let replaced = false;

    for (let row of rows) {
        const cells = row.querySelectorAll("td");
        if (cells.length === 1 && cells[0].getAttribute("colspan") === "4") {
        row.innerHTML = `<td>${id}</td><td>${nama}</td><td>${lokasi}</td><td>${status}</td>`;
        replaced = true;
        break;
        }
    }

    if (!replaced) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${id}</td><td>${nama}</td><td>${lokasi}</td><td>${status}</td>`;
        document.querySelector("table tbody").appendChild(newRow);
    }

    document.getElementById("idBarang").value = "";
    document.getElementById("namaBarang").value = "";
    document.getElementById("stokBarang").value = "";
    document.getElementById("lokasiBarang").value = "";

    alert("Data berhasil ditambahkan.");
}

function hapusTerakhir() {
  const rows = Array.from(document.querySelectorAll("table tbody tr"));

  for (let i = rows.length - 1; i >= 0; i--) {
    const cells = rows[i].querySelectorAll("td");

    if (cells.length === 4) {
      const id = cells[0].innerText;
      const confirmDelete = confirm(`Yakin ingin menghapus barang dengan ID_Barang: ${id}?`);

      if (confirmDelete) {
        rows[i].innerHTML = `<td colspan="4"></td>`; 
      }

      break; 
    }
  }
}

function exportTableToCSV() {
  const rows = Array.from(document.querySelectorAll("table tr"));
  const csv = [];

  rows.forEach(row => {
    const cols = Array.from(row.querySelectorAll("th, td"));
    const rowData = cols.map(cell => cell.innerText.trim());
    if (rowData.join("") !== "") csv.push(rowData.join(","));
  });

  const csvContent = csv.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", "data_barang.csv");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
