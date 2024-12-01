import { useState } from 'react'

import { Button } from './button'
import { Input } from './input'
import { HeroSkeleton } from './heroSkeleton'


export function GettingStarted({ disabled }) {
    const [submitDisabled, setSubmitDiabled] = useState(true)

    return <HeroSkeleton title={"Let's Get Started"}>
        <Input handleInputChange={(e) => setSubmitDiabled(e.target.value.trim() === "")} type={"email"} placeholder={"Email Id"} />
        <Button disabled={submitDisabled} > Continue </Button>
    </HeroSkeleton>
}