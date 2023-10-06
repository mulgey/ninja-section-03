import React from "react";
import styles from "./EventList.module.css"

export default function EventList({etkinlikler, programIptal}) {
  return (
    <div>
        {etkinlikler.map((etkinlik, index) => (
        // Burada DIV yerine "fragmant" tercih etmiştik (React.Fragment)
        // Sonrasında moduleCSS uygulaması yüzünden vazgeçerek tekrar DIV yapmaya karar verdik
          <div className={styles.card} key={etkinlik.kod}>
              <h2>{index + 1} - {etkinlik.başlık}</h2>
              {/* Aşağıdaki onClick yapısı, otomatik çalışmasını engelleyen yapıda olup sıklıkla tercih edilirmiş */}
              <button onClick={() => programIptal(etkinlik.kod)}>İptal Et</button>
          </div>
        ))}
    </div>
  )
}
