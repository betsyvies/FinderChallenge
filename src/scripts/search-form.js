function searchForm(data) {
    // console.log(data);
    const searchForm = document.getElementById('searchForm');
    const searchText = document.getElementById('searchText');
    const submitButton = document.getElementById('submitButton');
    const containerItems = document.getElementById('containerItems');

    var item = data.map(function(i) { return i.title });
    new Awesomplete(searchText, { 
        list: item,
        minChars: 3,
        maxItems: 7,
    });

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        text = searchText.value;

        if (text.length > 2) {
            const awesompleteList = document.getElementById('awesomplete_list_1');
            const numChildNodes = awesompleteList.childNodes.length
            
            newArr = []
            for (var i = 0; i < numChildNodes; i++) {
                text = awesompleteList.childNodes[i].textContent;
                newArr.push(text);
             }
            
            containerItems.innerHTML = '';
            data.map(items => {
                newArr.map(text => {
                    if (text === items.title) {
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
                   }
                })
            });
        }
    });

    searchText.addEventListener('keyup', function(e) {
        if ( searchText.value.length > 2) {
            submitButton.classList.remove('disabled')
        } else {
            submitButton.classList.add('disabled')
        }
    });
}
