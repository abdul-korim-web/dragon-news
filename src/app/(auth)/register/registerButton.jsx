"use client"
import { Button } from '@heroui/react';
import React from 'react';
import { useFormStatus } from 'react-dom';

const RegisterButton = () => {
      const {pending} = useFormStatus()
    return (
        <div>
             <Button type="submit" className={`w-full rounded-sm bg-[#403F3F] ${pending ? "cursor-not-allowed" :""} `}>Register</Button>
        </div>
    );
}

export default RegisterButton;
