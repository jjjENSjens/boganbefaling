let client_id = '7ba9f5b9-27f5-4a1d-b7b2-5e99d6dfcded';
let client_secret = 'eff60d198bc125831bdcb356264e96abde7de0515742c446b9ac77a0e1156953';

async function recommendations(user, id) {

  await dbcOpenPlatform.connect(client_id, client_secret);

  let result = await fetch('stat/' + user + '.data.lst');
  result = await result.text();

  let lines = result.split('\n').reverse().slice(1)

  let i = 1;
  for(let line of lines) {
    line = line.replace(/"/g, '').trim().split(' ');
    let bog_id = line[1]
    console.log(bog_id);

    let meta = await dbcOpenPlatform.work({
      pids: [bog_id], 
      fields: ['title', 'creator', 'coverUrlThumbnail', 'description', 'abstract', 'workType']});
    meta = meta[0];

    let elem = document.getElementById(id);

    if((meta.workType||[])[0] === 'book') {
      elem.innerHTML += `

      <div class="resultat" style="display:inline-block;width:49%;marginLeft:300;marginRight:300;">
         ${i}
         <img style="float:left;" width=200
         src=${(meta.coverUrlThumbnail||[])[0] || 'img/noun_962017_4C4C4C.png'}>
         <b>${(meta.title||[])[0]} </b>
		 <br>
         <i>${(meta.creator||[]).join(' &amp; ')}</i></i>
		 <p>${(meta.abstract||[])[0]}</p>
		
		 <button onclick="myFunction()">Mere info</button>
		
		 
       </div> 
	   
	    <script>
		function myFunction() {
		document.getElementById("demo").innerHTML = "Hello World";
		}
</script>
	   
	   
    `;
	
      i = i + 1;
    }
    if(i > 10) {
      break
    }
	
	
	

  }
}
