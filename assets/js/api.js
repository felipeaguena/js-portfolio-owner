async function fetchProfileData() {
   const url = `https://raw.githubusercontent.com/felipeaguena/js-portfolio-owner/refs/heads/main/data/profile.json`;
   const response = await fetch(url)
   const fetchProfileData = await response.json()
   return fetchProfileData
}