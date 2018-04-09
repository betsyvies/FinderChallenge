function listResults(data) {
    const containerItems = document.getElementById('containerItems');
  
    arrlistResult = []
    for (var i = 0; i < 9; i++) {
        arrlistResult.push(data[i])
    }

    arrlistResult.map(items => {
        const containerItem = document.createElement('div')
        containerItem.setAttribute('key', `${items.id}`);
        containerItem.className = 'pure-u-1-3';

        const containerImg = document.createElement('img')
        containerImg.setAttribute('src', `${items.image}`)

        const containerTitle = document.createElement('h2')
        const title = document.createTextNode(`${items.title}`);

        const containerText = document.createElement('p')
        const teaser= document.createTextNode(`${items.teaser}`);

        containerTitle.appendChild(title)
        containerText.appendChild(teaser);

        containerItem.appendChild(containerImg);
        containerItem.appendChild(containerTitle);
        containerItem.appendChild(containerText );
        containerItems.appendChild(containerItem);
    });
}
