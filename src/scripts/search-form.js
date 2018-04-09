function searchForm(data) {
    // console.log(data);
    const searchForm = document.getElementById('searchForm');
    const searchText = document.getElementById('searchText');
    const submitButton = document.getElementById('submitButton')
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

        submitButton.classList.toggle('disabled', text.length < 3)
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
               }
            })
        });
    });
}
