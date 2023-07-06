const changeImgSrc = (imgUrl) => {
    const img = document.querySelector("img");
    img.src = imgUrl;
}

const getDogImage = async () => {
    const url = "https://dog.ceo/api/breeds/image/random"; // API URL
    const res = await fetch(url).then((res) => res.json()).then((data) => data); // get 형식으로 값 받아옴

    changeImgSrc(res.message);
}

getDogImage();