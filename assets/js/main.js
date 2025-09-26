function updateProfileInfo(profileData) {
   const photo = document.getElementById('profile.photo')
   photo.src = profileData.photo
   photo.alt = profileData.name

   const name = document.getElementById('profile.name')
   name.innerText = profileData.name

   const job = document.getElementById('profile.job')
   job.innerText = profileData.job

   const location = document.getElementById('profile.location')
   location.innerText = profileData.location

   const phone = document.getElementById('profile.phone')
   phone.innerText = profileData.phone

   const email = document.getElementById('profile.email')
   email.innerText = profileData.email
}

function updateHardSkills(profileData) {
   const hardSkills = document.getElementById('profile.skills.hardSkills')
   hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img class="skills-icon" src="${skill.logo}" alt="${skill.name}"></li>`).join('')
}

function updateSoftSkills(profileData) {
   const softSkills = document.getElementById('profile.skills.softSkills')
   softSkills.innerHTML = profileData.skills.softSkills.map(skills => `<li>${skills}</li>`).join('')
}

function updateLanguages(profileData) {
   const languages = document.getElementById('profile.idioma')
   languages.innerHTML = profileData.languages.map(languages => `<li><img class="icon" src="/assets/icon/check-double-line.svg" alt=""> ${languages}</li>`).join('')
}

function updatePortfolio (profileData) {
   const portfolio = document.getElementById('profile.portfolio')
   portfolio.innerHTML = profileData.portfolio.map(portfolio => `
      <li><h4 class="github-icon">${portfolio.name}</h4><a href="${portfolio.url}"><p>${portfolio.url}</p></a></li>`).join('');
}

function updateProfessionalExperience(profileData) {
   const xp = document.getElementById('profile.xp')
   xp.innerHTML = profileData.professionalExperience.map(professionalExperience => `               
      <li>
         <h4>${professionalExperience.name}</h4>
         <img src="/assets/icon/calendar.svg" alt="icone de calendario" class="calendar-icon"><span class="data">${professionalExperience.period}</span>
         <p>${professionalExperience.description}</p>
      </li>`).join('');
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()