async function displayProjects() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects');
        const data = await response.json();
        console.log(data);

        data.forEach(obj => {
            const projName = obj.name;
            const divElementName = document.createElement('div');

            const projDescription = obj.description;
            const divElementDescription = document.createElement('div');

            const projContent = obj.content;
            const divElementContent = document.createElement('div');

            const projImage = obj.image;
            const divElementImage = document.createElement('img');

            const projCompleted = obj.completed_on;
            const divElementCompleted = document.createElement('div');

            divElementName.innerHTML = projName;
            divElementDescription.innerHTML = projDescription;
            divElementContent.innerHTML = projContent;
            divElementImage.setAttribute('src', projImage);
            divElementImage.setAttribute('width', 400);
            divElementCompleted.innerHTML = projCompleted;

            document.body.appendChild(divElementName);
            document.body.appendChild(divElementDescription);
            document.body.appendChild(divElementContent);
            document.body.appendChild(divElementImage);
            document.body.appendChild(divElementCompleted);
        });
    } catch (err) {
        console.log('Something went wrong. Error: ', e);
    }

}

window.onload = (event) => {
    displayProjects();
};