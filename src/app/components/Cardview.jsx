import { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export const Cardview = (props) => {
  const handleCopy = (text) => {
    console.log(text);
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    toast.success(`Copied ${text}`, {
      icon: '👏',
      style: {
        borderRadius: '50px',
        background: '#333',
        color: '#fff',
      },
    });
  };
  return (
    <>
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
          <div className="background" style={{ 'background-color': props.bgcolor }}></div>
          <div className="d-flex flex-column">
            <p className="mb-0 text-body-tertiary" style={{ 'font-size': '0.75rem' }}>
              Hexa Code
            </p>
            <p className="mb-0 copyValue" title="copy" onClick={() => handleCopy(props.color)}>
              {props.color}
            </p>
          </div>
          <div className="d-flex flex-column">
            <p className="mb-0 text-body-tertiary" style={{ 'font-size': '0.75rem' }}>
              Text Class
            </p>
            <p className="mb-0 copyValue" title="copy" onClick={() => handleCopy(`text-${props.name}`)}>
              {props.name}
            </p>
          </div>
          <div className="d-flex flex-column">
            <p className="mb-0 text-body-tertiary" style={{ 'font-size': '0.75rem' }}>
              Bg Class
            </p>
            <p className="mb-0 copyValue" title="copy" onClick={() => handleCopy(`bg-${props.name}`)}>
              {props.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
