import React from "react";
import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
    const inputRef = useRef(null);
  
    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    }, []);
  
    return <input {...props} ref={inputRef} />;
  });

export default function()
{
    function open()
    {
        
    }
}