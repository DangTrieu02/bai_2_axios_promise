const axios = require('axios');

const urls = ['https://github.com', 'https://google.com'];


let content = (url) => {
    return axios.get(url)
        .then(response => response.data)
        .catch(error => {
            console.error(`Lỗi khi tải nội dung từ ${url}:`, error.message);
            return '';
        });
}

let findLength = (urls) => {
    const promises = urls.map(url => content(url));

    Promise.all(promises)
        .then(contents => {
            const totalLength = contents.reduce((total, content) => total + content.length, 0);
            console.log('Tổng số ký tự của nội dung tải về:', totalLength);
        })
        .catch(error => {
            console.error('Đã xảy ra lỗi:', error.message);
        });
}

findLength(urls);
