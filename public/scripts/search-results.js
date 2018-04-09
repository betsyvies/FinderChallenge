function searchResults(data) {
    console.log(data);
    const containerItems = document.getElementById('containerItems');
  
    data.map(items => {
        console.log(items.length)
        const containerItem = document.createElement('div')
        containerItem.setAttribute('key', `${items.id}`);
        const title = document.createTextNode(`${items.title}`);

        const containerImg = document.createElement('img')
        containerImg.setAttribute('src', `${items.image}`)

        const containerText = document.createElement('p')
        const teaser= document.createTextNode(`${items.teaser}`);

        containerText.appendChild(teaser);
        containerItem.appendChild(title);

        containerItem.appendChild(containerImg);
        containerItem.appendChild(containerText );
        containerItems.appendChild(containerItem);
    });
}
