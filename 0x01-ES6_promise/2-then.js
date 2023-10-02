
export default function handleResponseFromAPI(promise){
    const msg = "Got a response from the API"
    promise.then(()=> {
        console.log(msg);
        return {
            status: 200,
            body: 'Success'
        }
    }, ()=>{
        console.log(msg);
        return new Error();
    })
}