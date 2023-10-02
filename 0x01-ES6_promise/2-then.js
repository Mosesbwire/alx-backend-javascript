
export default function handleResponseFromAPI(promise){
    const msg = "Got a response from the API"
    promise.then(()=> {
        
        return {
            status: 200,
            body: 'Success'
        }
    }).catch(err => new Error()).
    finally(console.log(msg))
}