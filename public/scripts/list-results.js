function listResults(data) {
    const containerItems = document.getElementById('containerItems');
  
    arrlistResult = []
    for (var i = 0; i < 9; i++) {
        arrlistResult.push(data[i])
    }

    arrlistResult.map(items => {
        console.log(items)
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
