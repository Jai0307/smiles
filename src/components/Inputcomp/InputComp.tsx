import type { NextPage } from "next";
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

interface CompProps {
    id: string;
    value: string;
    onChange: (e:any)=>void;
    placeholder?:string;
    type?: string;
    width?: Number;
    disabled?: any;
    maxLength?: any;
}

const InputComp: React.FC<CompProps> = ({
    id,
    value,
    onChange,
    placeholder,
    type,
    width,
    disabled,
    maxLength,
}) =>{

    const [focused, setfocused] = useState(false);

    useEffect(() => {
    }, [])

    return (
        <InputDiv onFocus={()=>setfocused(true)} onBlur={()=>setfocused(false)} style={{width:width?`${width}px`:"250px"}}>
            {(focused||value!="")&&<Label htmlFor={id}>{placeholder}</Label>}
            <Input placeholder={focused?"":placeholder} value={value} onChange={onChange} id={id} type={type?type:"text"} disabled={disabled?disabled:false} maxLength={maxLength?maxLength:""} />
        </InputDiv>
    )
}

const InputDiv = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: column;
    background-color: #eee;
    border-bottom: 1px solid black;
    padding: 0;
    height: 50px;
    justify-content: center;
    opacity: 0.8;
    min-width: 250px;
    &:hover{
        opacity: 1;
    }
`
const Input = styled.input`
    padding: 0 10px;
    margin: 0px;
    border: none;
    outline: none;
    background-color: transparent;
    height: 35px;
    width: 100%;
`
const Label = styled.label`
    padding: 5px;
    font-size: 10px;
    font-weight: 700;
    color: #9b111e;
    height: 25px;
    margin: 0;
`

export default InputComp
