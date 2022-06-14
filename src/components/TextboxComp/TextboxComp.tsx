import type { NextPage } from "next";
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

interface CompProps {
    id: string;
    value: string;
    onChange: (e:any)=>void;
    placeholder?:string;
    width?: Number;
    cols: any;
    rows: any;
}

const InputComp: React.FC<CompProps> = ({
    id,
    value,
    onChange,
    placeholder,
    width,
    cols,
    rows,
}) =>{

    const [focused, setfocused] = useState(false);

    useEffect(() => {
    }, [])

    return (
        <TextareaDiv onFocus={()=>setfocused(true)} onBlur={()=>setfocused(false)} >
            {(focused||value!="")&&<Label htmlFor={id}>{placeholder}</Label>}
            <Textarea placeholder={focused?"":placeholder} value={value} onChange={onChange} id={id} cols={cols} rows={rows}/>
        </TextareaDiv>
    )
}

const TextareaDiv = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: column;
    background-color: #eee;
    border-bottom: 1px solid black;
    padding: 0;
    justify-content: center;
    opacity: 0.8;
    padding: 10px;
    &:hover{
        opacity: 1;
    }
`
const Textarea = styled.textarea`
    padding: 0 10px;
    margin: 0px;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
`
const Label = styled.label`
    padding: 5px;
    font-size: 10px;
    font-weight: 700;
    color: #e1a6a6;
    height: 25px;
    margin: 0;
`

export default InputComp
