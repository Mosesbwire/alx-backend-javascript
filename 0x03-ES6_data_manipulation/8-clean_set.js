
export default function cleanSet(set, startString){
    let str = ""
    const start = startString.length;
    const size = set.size - 1;
    let index = 1;

    if (startString === "") return str;
    
    for (const el of set){
        if (typeof el === "string" && el.startsWith(startString)){
            str += el.substring(start, el.length);
            
            if (index !== size){
                str += "-";
            };
            
        }
        index ++;

    }
    return str;
}