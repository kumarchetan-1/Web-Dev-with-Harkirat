import { useRef, useState } from 'react'
import { Button } from './button'
import { Input } from './input'
import { HeroSkeleton } from './heroSkeleton'
import { Otp } from './otp'
import { z } from 'zod'

const emailSchema = z.string().email()

export function Hero({ disabled }) {
    const [submitDisabled, setSubmitDisabled] = useState(true)
    const [birthYear, setBirthYear] = useState('')
    const [error, setError] = useState('')
    const [title, setTitle] = useState('Verify Your Age')
    const [subtitle, setSubTitle] = useState('Please confirm your birth year. This data will not be stored.')
    const [step, setStep] = useState(0)
    const [email, setEmail] = useState('')

    const isEmailValid = ()=>{
        try {
            emailSchema.parse(email)
            return true
        } catch (error) {
            return false
        }
    }

    function validateBirthYear(value) {
        if (!/^\d{4}$/.test(value)) {
            setError('Please enter a 4-digit birth year')
            setSubmitDisabled(true);
            return false;
        }
        const currentYear = new Date().getFullYear()
        const age = currentYear - value
        if (age < 18) {
            setError('You must be 18 or older to proceed.')
            setSubmitDisabled(true)
            return false;
        } else {
            setError('');
            setSubmitDisabled(false);
            return true;
        }
    }

    function handleInputChange(e) {
        const value = e.target.value
        if (value.length > 4) return;
        setBirthYear(value)
        if (value.trim()) {
            validateBirthYear(value)
        } else {
            setError('')
            setSubmitDisabled(true)
        }
    }

    function handleYearSubmit() {
        if (validateBirthYear(birthYear)) {
            setTitle("Let's Get Started")
            setSubTitle(null)
            setStep(c=> c+1 )
        }
    }

    function handleEmailSubmit() {
        setTitle("Check Your Email For A Code")
            setSubTitle(`Please enter the verification code sent to your email id ${email}` )
            if (isEmailValid) {
                setStep(c=> c+1 )
            }
    }


    return < HeroSkeleton title={title} subTitle={subtitle} >
        {step === 0 && <div className="step-1">
            <Input
                onChange={handleInputChange}
                val={birthYear}
                maxLength={4}
                type={"number"}
                placeholder={"Your Birth Year"}
            />
            {error && <p className="error text-red-500 mb-10">{error}</p>}
            <Button disabled={submitDisabled} onclick={handleYearSubmit} >  Continue </Button>
        </div> }
       { step === 1 && <div className="step-2">
            <Input val={email} onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder={"Email Id"} />
            <Button onclick={handleEmailSubmit} disabled={!isEmailValid()} > Continue </Button>
        </div> }

       { step === 2 && <div className="step-3">
        <Otp otpLength={6} />
        </div> }
    </HeroSkeleton>
}