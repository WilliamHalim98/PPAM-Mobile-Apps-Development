const isiIdGedung = async () => {
  let idGedung = window.localStorage.getItem('idGedung');
  console.log(idGedung);
  let idGedungElem = document.getElementById('isiGedung');
  idGedungElem.innerText = idGedung;
};

const isiEstimasiBiayaHari = async () => {
  let biayaHari = window.localStorage.getItem('biayaToday');

  console.log(biayaHari);

  let biayaHariElem = document.getElementById('estimasiBiayaToday');
  biayaHariElem.innerText = biayaHari;
};

const isiEstimasiBiayaMinggu = async () => {
  let biayaMinggu = window.localStorage.getItem('biayaWeek');
  console.log(biayaMinggu);

  let biayaMingguElem = document.getElementById('estimasiBiayaWeek');
  biayaMingguElem.innerText = biayaMinggu;
};

const isiEstimasiBiayaTahun = async () => {
  let biayaTahun = window.localStorage.getItem('biayaYear');
  console.log(biayaTahun);

  let biayaTahunElem = document.getElementById('estimasiBiayaYear');
  biayaTahunElem.innerText = biayaTahun;
};

const getStatistikGedung = async () => {
  let idBuilding = window.localStorage.getItem('idGedung');
  console.log(idBuilding);
  let result = await fetch(`http://52.76.55.94:3000/api/v1/prediction?idgedung=${idBuilding}`,{
  	method: 'GET', // *GET, POST, PUT, DELETE, etc.
     mode: 'cors', // no-cors, *cors, same-origin
     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
     headers: ({
       'Content-Type': 'application/json',
       'authorization': window.localStorage.getItem('token'),
       // 'Content-Type': 'application/x-www-form-urlencoded',
     })
 	});
 	let data = await result.json();
 	console.log(data);
 	let item = data.Message;

 	let jumlahKelasElem = document.getElementById('jumlahKelas');
 	let averageElem = document.getElementById('average');

 	jumlahKelasElem.innerText = item.jumlah_kelas;
 	averageElem.innerText = item.jumlah_lampu_avg;
 	window.localStorage.setItem('biayaToday',item.biaya_today);
 	window.localStorage.setItem('biayaWeek',item.biaya_week);
 	window.localStorage.setItem('biayaYear',item.biaya_year);
 	

 	let coba = await fetch(` http://52.76.55.94:3000/api/v1/prediction`,{
  	method: 'GET', // *GET, POST, PUT, DELETE, etc.
     mode: 'cors', // no-cors, *cors, same-origin
     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
     headers: ({
       'Content-Type': 'application/json',
       'authorization': window.localStorage.getItem('token'),
       // 'Content-Type': 'application/x-www-form-urlencoded',
     })
 	});
 	let curious = await coba.json();
 	console.log(curious);
}
