
import logoImg from '../assets/logo-1.png'

export  function HeroSkeleton({title, subTitle, children }) {
    
    return <section className="hero-section py-16 min-h-screen">
    <div className="container">
        <div className="flex justify-center flex-col align-middle text-center">
            <div className="logo-container flex justify-center">
                <img src={logoImg} alt="" />
            </div>
            <div className="text-base">
                { title ? <h1 className="text-xl my-8 text-white">{title}</h1> : null}
            {subTitle ? <p className="text-grey-400 text-sm mb-14">{subTitle}</p> : null}
            </div>
            <div className="max-w-xs mx-auto w-full">
                { children }
            </div>
        </div>
    </div>
</section>
}