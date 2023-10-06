import { useState, useRef } from 'react';
import './NewEventForm.css'

import React from 'react'

export default function NewEventForm({closeModal, etkinlikEkleme}) {
  const [başlık, BaşlıkAksiyonu] = useState('');
  const [tarih, TarihAksiyonu] = useState('');
  const [lokasyon, lokasyonAyarla] = useState('Konya');
  // (useRef geçişi)
  // const başlık = useRef();
  // const tarih = useRef();

  const formuTemizle = () => {
    BaşlıkAksiyonu('');
    TarihAksiyonu('');
    lokasyonAyarla('Konya');
    // (useRef geçişi)
    // başlık.current.value = "";
    // tarih.current.value = ""
  }

  const FormuGönder = (olay) => {
    // sayfanın yeniden yüklenmesini (default behaviour) engeller
    olay.preventDefault()

    const etkinlik = {
      başlık: başlık,
      tarih: tarih,
      lokasyon: lokasyon,
      // (useRef geçişi)
      // başlık: başlık.current.value,
      // tarih: tarih.current.value,
      kod: Math.floor(Math.random() * 10000)
    }

    console.log(etkinlik)
    etkinlikEkleme(etkinlik)
    formuTemizle()
    closeModal()
  }
  
  /*
  // Inline fonksiyon kullanmayı tercih ettik
  const BaşlıkDeğişimi = (olay) => {
    BaşlıkAksiyonu(olay.target.value);
  }

  const TarihDeğişimi = (değişim) => {
    TarihAksiyonu(değişim.target.value)
  }
  */
  
  return (
    <form className='new-event-form' onSubmit={FormuGönder}>
        <label>
          <span>Etkinlik başlığı:</span>
          <input 
            type="text"
            onChange={(olay) => {BaşlıkAksiyonu(olay.target.value)}}
            // aşağıdaki kodu ekleyerek etkileşimi "çift taraflı" (controlled input) yaptık, FormuTemizle formülü de işe yarar oldu
            value={başlık}
            // (useRef geçişi)
            // ref={başlık}
          />
        </label>
        <label>
          <span>Etkinlik zamanı:</span>
          <input
            type="date"
            onChange={(değişim) => {TarihAksiyonu(değişim.target.value)}}
            value={tarih}
            // (useRef geçişi)
            // ref={tarih}
          />
        </label>
        <label>
          <span>Etkinlik yeri:</span>
          <select onChange={(olay) => lokasyonAyarla(olay.target.value)}>
            <option value="Konya">Konya</option>
            <option value="Ankara">Ankara</option>
            <option value="İstanbul">İstanbul</option>
          </select>
        </label>
        <button>Gönder</button>
    </form>
  )
}
