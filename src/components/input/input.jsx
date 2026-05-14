import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Version from '../../../package.json';
import './dependencies/style/style.css'
import React from 'react';
import { Validateinput } from './validation';

function DyvixInput({
  type = 'text',
  background,
  animation = '!/',
  className = '',
  color
}) {

  const inputRef = React.useRef(null);
  const [configs, SetConfig] = React.useState({});
  const instanceId = React.useId();
  
    React.useEffect(() => {
    async function GetFields() {
      const data = await Validateinput (
        animation,
        "",
        type,
        SetConfig,
        instanceId
      );
    }

    GetFields();
    return () => {
      const key = `DYVIX_${Version['version']}_Modal_theme_${instanceId}`;
      const ele = document.getElementById(key);
      if (ele) ele.remove();
    };
  }, [type, animation]);

  const currentAnimation = animation ? configs['animation'] : null;
  const currentType = type ? configs['type'] : null;
  const currentClass = className ? `${className} ${currentType?.class}` : currentType?.class;

  useGSAP(() => {
    if (!inputRef.current || !currentAnimation) return;

    gsap.fromTo(inputRef.current, currentAnimation.from, {
      ...currentAnimation.to,
      duration: currentAnimation['default-duration'],
      ease: currentAnimation.ease
    });
  }, [currentAnimation]);

  return (
    <div className='dyvix-input-wrapper' ref={inputRef}>
      <input className={`dyvix-input ${currentClass}`} type='search'></input>
    </div>
  )
}

export default DyvixInput