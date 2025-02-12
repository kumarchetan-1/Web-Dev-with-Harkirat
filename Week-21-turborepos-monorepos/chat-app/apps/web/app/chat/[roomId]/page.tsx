import TextInput from "@repo/ui/input";

export default function () {
    
    return <div 
    style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: "100vw"
    }}
    >
        <div> Chat room </div>
        <div> <TextInput size="big" onChange={()=> console.log("Hi")} placeholder="Type your message" /> </div>
    </div>
}