import { useState } from 'react'
import './App.css'
import { Hero } from './components/hero'
import { GettingStarted } from './components/gettingStarted'
import { Otp } from './components/otp'


function App() {
  // const [count, setCount] = useState(0)

  // return <div className=' bg-blue-700 py-16 min-h-screen'>
  //     <Hero />
  //     {/* <GettingStarted /> */}
  //     <Otp otpLength={6} />
  //   </div>


  const [step, setStep] = useState(1)
  const [yearOfBirth, setYearOfBirth] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  
  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      // Move focus to the previous input and clear its value
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleYearSubmit = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    setStep(3)
  }

  const handleOtpSubmit = (e) => {
    e.preventDefault()
    // Handle OTP verification here
  }

  return (
    <div className="min-h-screen bg-[#002855] flex flex-col items-center justify-center p-4">
      <div className="mb-8">
      
      </div>

      <div className="w-full max-w-sm">
        {step === 1 && (
          <form onSubmit={handleYearSubmit} className="space-y-4">
            <div className="text-center">
              <h2 className="text-white text-xl font-semibold">Verify Your Age</h2>
              <p className="text-gray-400 text-sm mt-2">Please confirm the year you were born.</p>
            </div>
            <input
              type="text"
              maxLength={4}
              placeholder="YYYY"
              value={yearOfBirth}
              onChange={(e) => setYearOfBirth(e.target.value.replace(/\D/g, ''))}
              className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              disabled={yearOfBirth.length !== 4}
              className="w-full bg-teal-500 text-white rounded py-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-600 transition-colors"
            >
              Next Step
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="text-center">
              <h2 className="text-white text-xl font-semibold">Let's Get Started</h2>
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              disabled={!email.includes('@')}
              className="w-full bg-teal-500 text-white rounded py-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-600 transition-colors"
            >
              Continue
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div className="text-center">
              <h2 className="text-white text-xl font-semibold">Check Your Email For A Code</h2>
              <p className="text-gray-400 text-sm mt-2">Please enter the 6-digit code we sent to your email.</p>
            </div>
            <div className="flex gap-2 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-10 h-12 bg-white/10 border border-white/20 rounded text-center text-white text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  aria-label={`OTP digit ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="submit"
              disabled={otp.some(digit => digit === '')}
              className="w-full bg-teal-500 text-white rounded py-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-600 transition-colors"
            >
              Verify
            </button>
          </form>
        )}
      </div>
    </div>
  )



}

export default App
