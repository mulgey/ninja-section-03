// logo import is required only when you call it from the src folder, if it's in public folder you may delete it
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';
import Test from './components/test';

function App() {
  // TEST
  const [showList, listAction] = useState(true);
  const [testbolumu, testAksiyonu] = useState(true);

  const testGirisimi = () => {
    testAksiyonu(false);
  }

  // TEST BİTİŞ

  // let isim = "Enes";
  // const tanımlamaları başta olmalıdır. Fonksiyonlar aşağıda olur
  // ayrıca hepsi tek komponent içinde olmalıdır
  const [modalGöster, modalAksiyonu] = useState(false);
  const [isim, isimAksiyonu] = useState('Enes');
  // below changes the text color, once the chairman was changed
  const [isPresidentEnergetic, presidentEnergyChange] = useState(true);
  const [etkinlikGöster, gösterimAksiyonu] = useState(true);
  const [etkinlikler, etkinlikAksiyonu] = useState([
    {başlık: "Başkanın konuşması ile açılış", lokasyon: "Konya", tarih: "2022-12-15", kod: 1},
    {başlık: "En son bilimsel gelişmeler", lokasyon: "Ankara", tarih: "2022-12-12", kod: 2},
    {başlık: "Poster ödülleri ve kapanış", lokasyon: "İstanbul", tarih: "2022-12-13", kod:3}
  ]);

  const etkinlikEkleme = (etkinlik) => {
    etkinlikAksiyonu((mevcutEtkinlikler) => {
      return [...mevcutEtkinlikler, etkinlik]
    })
  }

  const modalKapama = () => {
    modalAksiyonu(false);
  }

  const isimDegistir = () => {
    // isim = "Kutay"
    isimAksiyonu('Kutay');
    presidentEnergyChange(false);
    console.log("Abimiz başa geçti")
  }

  const programIptal = (kodYolu) => {
    etkinlikAksiyonu((ensonOlaylar) => {
      return ensonOlaylar.filter((öğe) => {
        return kodYolu !== öğe.kod
      })
    })
    /*
    // Bu versiyonu en iyi optimizasyon için kullanmadık (güncelleme olabilir biz çalışırken vs)
    etkinlikAksiyonu(etkinlikler.filter((öğe) => {
        return kodYolu !== öğe.kod
      }))
    */
    console.log(kodYolu);
  }

  const altbaşlık = "Bütün canavarlar burada ..";

  return (
    // Tek bir DIV altında çalışıyoruz
    <div className="App">
      {/*TEST BAŞLAR*/}

      {showList && (
        <div>
          <p>Test</p>
        </div>
      )}
      <div>
          {showList && (<button onClick={() => listAction(false)}>Testi gizle</button>)}
          <br></br>
          {!showList && (<button onClick={() => listAction(true)}>Testi göster</button>)}
      </div>

      {testbolumu && <Test kapatmaTusu={testGirisimi}>
        {/*children test*/}
        <p>TEST BÖLÜMÜ</p>
      </Test>}

      {!testbolumu && <div>
        <button onClick={() => testAksiyonu(true)}>Açalum şuni daaa</button>
      </div>}

      {/*TEST BİTER*/}

      <Title başlık="Süper Hastane Eczacıları Buluşması" altbaşlık={altbaşlık}/>
      <h1 style={{
        color: isPresidentEnergetic ? "blueviolet" : "orangered"
      }}>Our chariman's name is {isim}</h1>
      <button onClick={isimDegistir}>Change the chairman</button>
      <br></br>
      <br></br>
      {etkinlikGöster && (<div>
        <button className={etkinlikGöster ? 'showHideButton' : 'hideShowButton'} onClick={() => gösterimAksiyonu(false)}>Etkinlikleri gizle</button>
      </div>)}
      <br></br>
      {!etkinlikGöster && (<div>
        <button className={etkinlikGöster ? 'showHideButton' : 'hideShowButton'} onClick={() => gösterimAksiyonu(true)}>Etkinlikleri göster</button>
      </div>)}
      {etkinlikGöster && <EventList etkinlikler={etkinlikler} programIptal={programIptal}/>}
      {modalGöster && <Modal modalKapama={modalKapama}>
        {/* model component searched for the "children" content here */}
        <NewEventForm etkinlikEkleme={etkinlikEkleme} closeModal={modalKapama}/>
      </Modal>}
      <br></br>
      <br></br>
      <button onClick={() => modalAksiyonu(true)} style={{marginBottom: "3rem"}}>Programa katkıda bulunmak ister misiniz?</button>
    </div>
  );
}

export default App;
