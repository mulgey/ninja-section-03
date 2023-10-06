import React from 'react'

export default function test({ children, kapatmaTusu }) {
  return (
    <div>
        {children}
        <button onClick={kapatmaTusu}>Kapatalum şuni daaa</button>
    </div>
  )
}