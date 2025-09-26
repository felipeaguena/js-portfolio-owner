function updateProfileInfo(profileData) {
   const photo = document.getElementById('profile.photo')
   photo.src = profileData.photo
   photo.alt = profileData.name

   const name = document.getElementById('profile.name')
   name.innerText = profileData.name
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()