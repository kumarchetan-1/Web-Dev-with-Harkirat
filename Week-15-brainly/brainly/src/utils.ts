
export function randomSlug(num:number) {
    const radnomChars = "adsfghjklmnopqwertyuimnbvcxz1234567890"
    const length = radnomChars.length;
    let shareSlug = ""
    for(let i=0; i<num; i++){
     shareSlug += radnomChars[Math.random()*length]
    }

    return shareSlug
}