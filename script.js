let rightElements = document.querySelectorAll('.right-element');
// console.log(rightElements);

rightElements.forEach((element)=>{
    element.addEventListener('mouseenter',()=>{
        gsap.to(element.childNodes[3],{
            opacity :1,
            scale :1,
        })
    })
    element.addEventListener('mouseleave',()=>{
        gsap.to(element.childNodes[3],{
            opacity :0,
            scale :0
        })
    })
    element.addEventListener('mousemove',(dets)=>{
        gsap.to(element.childNodes[3],{
            x : `${dets.x - element.getBoundingClientRect().x-34}px`,
            y : `${dets.y - element.getBoundingClientRect().y-110}px`,
        })
        console.log(dets.y, element.getBoundingClientRect().y);
        
    })
})

