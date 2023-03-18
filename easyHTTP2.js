/**
 * EasyHTTP Library 
 * Library for making HTTP requests
 * 
 * @version 2.1.0
 * @author Oshomah Abubakar
 * @license MIT
 * 
 */

class EasyHTTP{
    get(url){
        return new Promise((reject,resolve) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    post(url, data){
        return new Promise((reject,resolve) => {
            fetch(url,{
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)})
            .then(res => res.json())
            .then(data = resolve(data))
            .catch(err => reject(err));
        });
    }
}
