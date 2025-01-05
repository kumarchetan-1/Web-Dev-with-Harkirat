

export default function ({params}: {
  params: { contents: string }
}) {
    
    return <div>
      {JSON.stringify(params.contents)}
    </div>
}