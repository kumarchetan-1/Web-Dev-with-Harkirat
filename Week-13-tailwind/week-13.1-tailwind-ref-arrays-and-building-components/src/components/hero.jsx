import { useRef, useState } from 'react'
import { Button } from './button'
import { Input } from './input'
import { HeroSkeleton } from './heroSkeleton'


export function Hero({ disabled }) {
    const [submitDisabled, setSubmitDisabled] = useState(true)
    const [birthYear, setBirthYear] = useState('')
    const [error, setError] = useState('')
    const [title, setTitle] = useState('Verify Your Age')
    const [subtitle, setSubTitle] = useState('Please confirm your birth year. This data will not be stored.')
    const ref1 = useRef()

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

    function handleSubmit() {
        if (validateBirthYear(birthYear)) {
            setTitle("Let's Get Started")
            setSubTitle(null)
        }
    }


    return < HeroSkeleton title={title} subTitle={subtitle} >
        <div className="step-1">
            <Input
                onChange={handleInputChange}
                reference={ref1}
                val={birthYear}
                maxLength={4}
                type={"number"}
                placeholder={"Your Birth Year"}
            />
            {error && <p className="error text-red-500 mb-10">{error}</p>}
            <Button disabled={submitDisabled} onclick={handleSubmit} >  Continue </Button>
        </div>
        <div className="step-2">
            <Input handleInputChange={(e) => setSubmitDiabled(e.target.value.trim() === "")} type={"email"} placeholder={"Email Id"} />
            <Button disabled={submitDisabled} > Continue </Button>
        </div>
    </HeroSkeleton>
}