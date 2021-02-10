    // var documents = [];
    let jsondata = "";
    let apiUrl = "/data.json"

    async function getJson(url) {
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }

    async function main() {
        // getJson(apiUrl)
        //     .then(data => console.log(data));
        let documents = await getJson(apiUrl)
        // console.log(documents);

        let idx = lunr(function () {
          this.field('id')
          this.field('title', { boost: 10 })
          this.field('author')
          this.field('content')
          this.field('summary')
          this.field('url')
          Object.entries(documents).forEach(function (document) {
            console.log(document[0])
            console.log(document[1]['title'])
            // console.log(value)
            this.add( {
              "id": document[0],
              "title": document[1]['title'],
              'author': document[1]['author'],
              'content': document[1]['content'],
              'summary': document[1]['summary']
            })
          }, this)
        });
        console.log(idx)
        let searchParams = new URLSearchParams(window.location.search)
        console.log(searchParams.get('query'))
        let param = searchParams.get('query')
        var results = idx.search(param);
        console.log(results)

        for (result of results) {
        console.log(result)
              var doc = documents[result.ref]; // get document via the lunr id
              $( "#search_results" ).append('<li><a href="'+doc.url+'">'+doc.title+'</a><br/>'+doc.summary+'</li>');
            }
        // console.log(param)


    }

    main();




  // // watch input
  // var $resultsContainer;
  //
  // $(function(){
  //
  //   // console.log(idx)
  //   // console.log(idx.search(param))
  //   var $resultsContainer = $('#search_results');
  //     $resultsContainer.empty();
  //     if(param.length < 2) return;
  //     var results = idx.search(param);
  //     // console.log(results)
  //     for (result of results) {
  //       var doc = documents[result.ref]; // get document via the lunr id
  //       $resultsContainer.append('<li><a href="'+doc.url+'">'+doc.title+'</a></li>');
  //     }
  // })
