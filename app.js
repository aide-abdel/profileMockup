const openEducation = document.getElementById("openEducation");
const closeButton = document.getElementById("closeButton");
const darkBackground = document.getElementById("darkBackground");
const openSkills = document.getElementById("openSkills");
const closeSkills = document.getElementById('closeSkills')

openEducation.addEventListener('click',()=>{
    const educationContainer = document.getElementById("educationContainer")
    openEducationFunc(educationContainer)
});

function openEducationFunc(educationContainer){
    if (educationContainer == null) return
    educationContainer.classList.add('active')
    darkBackground.classList.add('active')
}

closeButton.addEventListener('click',()=>{
    educationContainer.classList.remove('active')
    darkBackground.classList.remove('active');
})

openSkills.addEventListener('click',()=>{
    const skillsContainer = document.getElementById("skillsContainer")
    openSkillsFunct(skillsContainer)
})

function openSkillsFunct(skillsContainer){
    if (skillsContainer == null) return
    skillsContainer.classList.add('active')
    darkBackground.classList.add('active')
    const css = document.getElementById('css')
    css.style.animation = "animCSS 3s linear forwards"

    const html = document.getElementById('html')
    html.style.animation = "animHTML 2s linear forwards"

    const js = document.getElementById('js')
    js.style.animation = "animJS 4s linear forwards"
}
closeSkills.addEventListener('click',()=>{
    skillsContainer.classList.remove('active')
    darkBackground.classList.remove('active');
    const css = document.getElementById('css')
    css.style.animation = "0"

    const html = document.getElementById('html')
    html.style.animation = "0"

    const js = document.getElementById('js')
    js.style.animation = "0"

})