document.getElementById('simpan').addEventListener('click', function() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const presensiTeori = document.getElementById('presensi-teori').value;
    const tugasTeori = document.getElementById('tugas-teori').value;
    const utsTeori = document.getElementById('uts-teori').value;
    const uasTeori = document.getElementById('uas-teori').value;
    const presensiPraktek = document.getElementById('presensi-praktek').value;
    const tugasPraktek = document.getElementById('tugas-praktek').value;
    const utsPraktek = document.getElementById('uts-praktek').value;
    const uasPraktek = document.getElementById('uas-praktek').value;

    if (!nim || !nama || !presensiTeori || !tugasTeori || !utsTeori || !uasTeori || !presensiPraktek || !tugasPraktek || !utsPraktek || !uasPraktek) {
        alert("Harap isi semua kolom.");
        return;
    }

    if (!/^\d+%?$/.test(presensiTeori) || !/^\d+%?$/.test(presensiPraktek)) {
        alert("Presensi harus dalam bentuk persen (%).");
        return;
    }

    const presensiTeoriValue = parseFloat(presensiTeori.replace('%', '')) || 0;
    const tugasTeoriValue = parseFloat(tugasTeori) || 0;
    const utsTeoriValue = parseFloat(utsTeori) || 0;
    const uasTeoriValue = parseFloat(uasTeori) || 0;
    const presensiPraktekValue = parseFloat(presensiPraktek.replace('%', '')) || 0;
    const tugasPraktekValue = parseFloat(tugasPraktek) || 0;
    const utsPraktekValue = parseFloat(utsPraktek) || 0;
    const uasPraktekValue = parseFloat(uasPraktek) || 0;

    const nilaiAkhir = ((presensiTeoriValue + tugasTeoriValue + utsTeoriValue + uasTeoriValue) / 4 + (presensiPraktekValue + tugasPraktekValue + utsPraktekValue + uasPraktekValue) / 4) / 2;
    let grade = '';
    
    if (nilaiAkhir >= 80) {
        grade = 'A';
    } else if (nilaiAkhir >= 70) {
        grade = 'B';
    } else if (nilaiAkhir >= 60) {
        grade = 'C';
    } else if (nilaiAkhir >= 50) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    const table = document.getElementById('nilai-body');
    const row = table.insertRow();
    row.insertCell(0).innerText = table.rows.length;
    row.insertCell(1).innerText = nim;
    row.insertCell(2).innerText = nama;
    row.insertCell(3).innerText = ((presensiTeoriValue + presensiPraktekValue) / 2).toFixed(2) + '%';
    row.insertCell(4).innerText = ((tugasTeoriValue + tugasPraktekValue) / 2).toFixed(2);
    row.insertCell(5).innerText = ((utsTeoriValue + utsPraktekValue) / 2).toFixed(2);
    row.insertCell(6).innerText = ((uasTeoriValue + uasPraktekValue) / 2).toFixed(2);
    row.insertCell(7).innerText = nilaiAkhir.toFixed(2);
    row.insertCell(8).innerText = grade;

    document.getElementById('nim').value = '';
    document.getElementById('nama').value = '';
    document.getElementById('presensi-teori').value = '';
    document.getElementById('tugas-teori').value = '';
    document.getElementById('uts-teori').value = '';
    document.getElementById('uas-teori').value = '';
    document.getElementById('presensi-praktek').value = '';
    document.getElementById('tugas-praktek').value = '';
    document.getElementById('uts-praktek').value = '';
    document.getElementById('uas-praktek').value = '';
});

document.getElementById('batal').addEventListener('click', function() {
    document.getElementById('nim').value = '';
    document.getElementById('nama').value = '';
    document.getElementById('presensi-teori').value = '';
    document.getElementById('tugas-teori').value = '';
    document.getElementById('uts-teori').value = '';
    document.getElementById('uas-teori').value = '';
    document.getElementById('presensi-praktek').value = '';
    document.getElementById('tugas-praktek').value = '';
    document.getElementById('uts-praktek').value = '';
    document.getElementById('uas-praktek').value = '';
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('nilai-body').innerHTML = '';
});
