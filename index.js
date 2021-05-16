const hbg = document.querySelector('.hbg');
const closeBtn = document.querySelector('.close');

hbg.addEventListener('click',()=>{
    document.querySelector('.nav').parentNode.classList.add('active');
})
closeBtn.addEventListener('click',()=>{
    document.querySelector('.nav').parentNode.classList.remove('active');
})

const data = [
    {
        image: "images/desktop-image-hero-1.jpg",
        header: "Discover innovative ways to decorate",
        paragraph: 
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        image: "images/desktop-image-hero-2.jpg",
        header: "We are available all across the globe",
        paragraph: 
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        image: "images/desktop-image-hero-3.jpg",
        header: "Manufactured with the best materials",
        paragraph: 
        "WOur modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

let currentPage = 0;
const slide = ()=>{
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const page = document.querySelector('.main-page');
    const header = document.querySelector('.header');
    const paragraph = document.querySelector('.paragraph');

    const updateContent = ()=>{
        page.style.backgroundImage = `url(${data[currentPage].image})`;
        header.innerHTML = data[currentPage].header;
        paragraph.innerHTML = data[currentPage].paragraph;
    };

    next.addEventListener('click',()=>{
        currentPage++;
        if(currentPage > data.length-1){
            currentPage = 0;
        }
        updateContent();
    })
    prev.addEventListener('click',()=>{
        currentPage--;
        if(currentPage < 0){
            currentPage = data.length - 1;
        }
        updateContent();
    })
};

slide();
