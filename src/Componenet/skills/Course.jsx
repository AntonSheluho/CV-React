import React, { useEffect, useRef } from 'react';

export default function Course({children, ...props}) {
  const ref = useRef()

  function showCertificate() {
    ref.current.classList.toggle('bigList');
  }

  useEffect(() => {
    const remuveBigImg = () => ref.current.classList.remove('bigList');
    document.addEventListener('scroll', remuveBigImg);
    return function remEvent() {
      document.removeEventListener('scroll', remuveBigImg);
    }
  }, [ref]);

  return (
    <li className="skills__type">{children}
        <div>
            <img className="skills__img" src={props.logo} alt="img"/>
            <img className="skills__img" src={props.images} alt="img"/>
            <img ref={ref} onClick={showCertificate} id="certificate" className="skills__img" src={props.sertificate} alt="img"/>
        </div>
    </li>
  )
}
