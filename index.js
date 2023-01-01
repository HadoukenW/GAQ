const btn = document.querySelector('.right-side__btn')
const heroWrapper = document.querySelector('.hero__wrapper')
const createdEl = document.querySelector('.createdEl')
const body = document.querySelector('body')

window.addEventListener('click', e => {

    if (e.target.matches('.right-side__btn')) {
        e.preventDefault()
        createdEl.classList.add('active')
    }

    

    //clicking outside of the form//

    // if (createdEl.classList.contains('active')) {
    //     body.addEventListener('click', el => {
    //         if (!el.target.classList.contains('form__wrapper')) {
    //             createdEl.classList.remove('active')
    //         }
    //     })
    // }
})

const formClose = document.querySelector('.form__close')

formClose.addEventListener('click', e => {
    createdEl.classList.remove('active')
    
})

const formOptionBtn = document.querySelectorAll('.radio__input')


formOptionBtn.forEach( (item) => {

    // setTimeout(() => {
    //     const formItem = item.closest('.radio__item')
    //     const afterIsh = formItem.querySelector('.fake')

    //     if (item.checked) {
    //         formItem.classList.add('active')
    //         afterIsh.classList.add('active')
    //     }
    // }, 0);


    item.addEventListener('click', e => {
        
        const formItem = item.closest('.radio__item')
        const afterIsh = formItem.querySelector('.fake')
        formItem.classList.toggle('active')
        afterIsh.classList.toggle('active')
        
            
      //options1
      let ln = 0;
      for(let i=0; i< formOptionBtn.length; i++) {
          if(formOptionBtn[i].checked)
              ln++
      }
      
        if (ln > 1) {
           const inputt = item.closest('.radio__item')
           const afterIshh = inputt.querySelector('.fake')

           inputt.classList.remove('active')
           afterIshh.classList.remove('active')
           item.checked = false
        }

        
    })
})

const checkbox2 = document.getElementsByName('option2');

checkbox2.forEach( (item) => {
    item.addEventListener('click', e => {
        const formItem = item.closest('.radio__item2')
        const afterIsh = formItem.querySelector('.fake2')
        formItem.classList.toggle('active')
        afterIsh.classList.toggle('active')

        //options2

        let ln2 = 0;
      for(let i=0; i< checkbox2.length; i++) {
          if(checkbox2[i].checked)
              ln2++
      }
      
        if (ln2 > 3) {
           const inputt = item.closest('.radio__item2')
           const afterIshh = inputt.querySelector('.fake2')

           inputt.classList.remove('active')
           afterIshh.classList.remove('active')
           item.checked = false

           console.log(ln2)

        }
    })
})

const fourthSectionItem = document.querySelectorAll('.form__fourthSection__item')

fourthSectionItem.forEach( (item) => {
    item.addEventListener('click', e => {
        e.preventDefault()

        item.classList.toggle('active')
    })
})

const steps = document.querySelectorAll('.step')
const previousBtn = document.querySelector('.form__previous-btn')
const nextBtn = document.querySelector('.form__next-btn')
const Btns = document.querySelector('.form__btn-wrapper')
const progressLine = document.querySelector('.progress__line')
const progressLineWhiteOne = document.querySelector('.progress__line-whiteOne')
const Circles = document.querySelectorAll('.form__item-circle')
const stepFinish = document.querySelector('.stepFinish')
let counter = 0

nextBtn.addEventListener('click', e => {
    counter++
    
    updateFormSteps() 
})

previousBtn.addEventListener('click', e => {
    counter--
    Circles[counter + 1].classList.remove('active__circle')
    updateFormSteps()
})

function updateFormSteps() {
    steps.forEach( (step) => {
        if (step.classList.contains('active__number')) {
            step.classList.remove('active__number')
        }
        
    })
    
    Circles[counter].classList.add('active__circle')

    steps[counter].classList.add('active__number')
    if (counter == 0) {
        previousBtn.style.display = 'none'
    }

    else {
        previousBtn.style.display = 'block'
    }




    if (counter == steps.length - 1) {

        nextBtn.addEventListener('click', e => {
            stepFinish.style.display = 'block'
            document.querySelector('.progress').style.display = 'none'
            Btns.style.display = 'none'
        })
    } else {
        nextBtn.addEventListener('click', e => {
            nextBtn.innerHTML = 'Next'
            Btns.style.display = 'flex'
            stepFinish.style.display = 'none'
            document.querySelector('.progress').style.display = 'flex'
        })
    }

    const actives = document.querySelectorAll('.active__circle')
    let percent = ((actives.length - 1) / (Circles.length - 1)) * 100 + '%'

    
    progressLineWhiteOne.style.width = percent


}


updateFormSteps()



// const tellForm = document.querySelector('.tell-us__form')
// let container = {}
// tellForm.addEventListener('input', e => {
//    container[e.target.name] = e.target.value
//     localStorage.setItem('LC', JSON.stringify(container))
//    console.log(container)
// })


// if (localStorage.getItem('LC')) {
//     ls = JSON.parse(localStorage.getItem('LC'))
//     for (let key in ls) {
//         tellForm.elements[key].value = ls[key]
//     }
// }

// const FirstSection = document.querySelector('.FirstSection')
// let FirstSectionLC = {}

// FirstSection.addEventListener('input', e => {
//     FirstSectionLC[e.target.name] = e.target.value

//     localStorage.setItem('inputF', JSON.stringify(FirstSectionLC))

//     console.log(FirstSectionLC)
// })

// if (localStorage.getItem('inputF')) {
//     const FirstSectionlc = JSON.parse(localStorage.getItem('inputF'))

//     for (let key in FirstSectionlc) {
        

        
//         if (FirstSection.elements[key].type === 'checkbox' && FirstSectionlc[key] == 'on') {
//             FirstSection.elements[key].checked = true
//         }


//         else {
//             FirstSection.elements[key].value = FirstSectionlc[key]
//         }
//     }
// }


const checkboxFirst = document.querySelector('#checkbox1')
const checkboxSecond = document.querySelector('#checkbox2')
const checkboxThird  = document.querySelector('#checkbox3')
const checkboxFourth  = document.querySelector('#checkbox4')
const checkboxFifth  = document.querySelector('#checkbox5')
const checkboxSixth  = document.querySelector('#checkbox6')

const Products = {
    checkboxFirst: checkboxFirst,
    checkboxSecond: checkboxSecond,
    checkboxThird: checkboxThird,
    checkboxFourth: checkboxFourth,
    checkboxFifth: checkboxFifth,
    checkboxSixth: checkboxSixth
}


checkboxFirst.addEventListener('input', e => {
    

    if (checkboxFirst.checked) {
        Products.checkboxFirst = e.target.value = 'whatever1'
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
        
    }

    else {
        Products.checkboxFirst = ''
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')
    }
})

setInterval(() => {
    if (checkboxFirst.checked) {
        Products.checkboxFirst = 'whatever1'
    }

    else {
        Products.checkboxFirst = ''
    }
}, 1000);

setTimeout(() => {
    if (checkboxFirst.checked) {
        const testClosest = checkboxFirst.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
    }
    else {
        const testClosest = checkboxFirst.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')

    }
}, 0);

checkboxSecond.addEventListener('input', e => {
    

    if (checkboxSecond.checked) {
        Products.checkboxSecond = e.target.value = 'whatever2'
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
    }

    else {
        Products.checkboxSecond = ''
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')
    }
})

setTimeout(() => {
    if (checkboxSecond.checked) {
        const testClosest = checkboxSecond.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
    }
    else {
        const testClosest = checkboxSecond.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')

    }
}, 0);

setInterval(() => {
    if (checkboxSecond.checked) {
        Products.checkboxSecond = 'whatever2'
        
    }

    else {
        Products.checkboxSecond = ''
    }
}, 1000);


checkboxThird.addEventListener('input', e => {
    

    if (checkboxThird.checked) {
        Products.checkboxFirst = e.target.value = 'whatever1'
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
        
    }

    else {
        Products.checkboxThird = ''
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')
    }
})

setInterval(() => {
    if (checkboxThird.checked) {
        Products.checkboxThird = 'whatever3'
    }

    else {
        Products.checkboxThird = ''
    }
}, 1000);

setTimeout(() => {
    if (checkboxThird.checked) {
        const testClosest = checkboxThird.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
    }
    else {
        const testClosest = checkboxThird.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')

    }
}, 0);

checkboxFourth.addEventListener('input', e => {
    

    if (checkboxFourth.checked) {
        Products.checkboxFourth = e.target.value = 'whatever1'
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
        
    }

    else {
        Products.checkboxFourth = ''
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')
    }
})

setInterval(() => {
    if (checkboxFourth.checked) {
        Products.checkboxFourth = 'whatever4'
    }

    else {
        Products.checkboxFourth = ''
    }
}, 1000);

setTimeout(() => {
    if (checkboxFourth.checked) {
        const testClosest = checkboxFourth.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
    }
    else {
        const testClosest = checkboxFourth.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')

    }
}, 0);


checkboxFifth.addEventListener('input', e => {
    

    if (checkboxFifth.checked) {
        Products.checkboxFifth = e.target.value = 'whatever5'
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
        
    }

    else {
        Products.checkboxFifth = ''
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')
    }
})

setInterval(() => {
    if (checkboxFifth.checked) {
        Products.checkboxFifth = 'whatever5'
    }

    else {
        Products.checkboxFifth = ''
    }
}, 1000);

setTimeout(() => {
    if (checkboxFifth.checked) {
        const testClosest = checkboxFifth.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
    }
    else {
        const testClosest = checkboxFifth.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')

    }
}, 0);


checkboxSixth.addEventListener('input', e => {
    

    if (checkboxSixth.checked) {
        Products.checkboxSixth = e.target.value = 'whatever6'
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
        
    }

    else {
        Products.checkboxSixth = ''
        const testClosest = e.target.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')
    }
})

setInterval(() => {
    if (checkboxSixth.checked) {
        Products.checkboxSixth = 'whatever6'
    }

    else {
        Products.checkboxSixth = ''
    }
}, 1000);

setTimeout(() => {
    if (checkboxSixth.checked) {
        const testClosest = checkboxSixth.closest('.radio__item')
        testClosest.style.background = 'white'
        testClosest.style.borderColor = '#EB3D35'
        testClosest.style.borderWidth = '1px'
        testClosest.querySelector('.fake').classList.add('active')
    }
    else {
        const testClosest = checkboxSixth.closest('.radio__item')
        testClosest.style.background = 'unset'
        testClosest.style.borderColor = 'transparent'
        testClosest.style.borderWidth = 'unset'
        testClosest.querySelector('.fake').classList.remove('active')

    }
}, 0);


///
setInterval(() => {
    localStorage.setItem('MyInputs', JSON.stringify(Products))
}, 1000);


if (localStorage.getItem('MyInputs')) {
    const RawInputs = JSON.parse(localStorage.getItem('MyInputs'))
    console.log(RawInputs)
    if (RawInputs.checkboxFirst == 'whatever1') {
        checkboxFirst.checked = true
        RawInputs.checkboxFirst = 'whatever1'
    }

    else {
        checkboxSecond.checked = false
    
    }

    if (RawInputs.checkboxSecond == 'whatever2') {
        checkboxSecond.checked = true
        RawInputs.checkboxSecond = 'whatever2'
    }

    else {
        checkboxSecond.checked = false
        
    }

    if (RawInputs.checkboxThird == 'whatever3') {
        checkboxThird.checked = true
        RawInputs.checkboxThird = 'whatever3'
    }

    else {
        checkboxThird.checked = false
        
    }

    if (RawInputs.checkboxFourth == 'whatever4') {
        checkboxFourth.checked = true
        RawInputs.checkboxFourth = 'whatever4'
    }

    else {
        checkboxFourth.checked = false
        
    }

    if (RawInputs.checkboxFifth == 'whatever5') {
        checkboxFifth.checked = true
        RawInputs.checkboxFifth = 'whatever5'
    }

    else {
        checkboxFifth.checked = false
        
    }
    
    if (RawInputs.checkboxSixth == 'whatever6') {
        checkboxSixth.checked = true
        RawInputs.checkboxSixth = 'whatever6'
    }

    else {
        checkboxSixth.checked = false
        
    }

}

