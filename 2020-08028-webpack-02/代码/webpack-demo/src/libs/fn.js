function fn() {
    console.log('kkb');

    let xhr = new XMLHttpRequest();

    // xhr.open('get', 'http://localhost:9999/getUser', true);
    xhr.open('get', '/api/getUser', true);

    xhr.onload = function() {
        console.log(xhr.responseText);
    }

    xhr.send();
}

export {
    fn
}
export default 100;