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
      fields: ['title', 'creator', 'coverUrlThumbnail', 'description', 'abstract']});
    meta = meta[0];

    let elem = document.getElementById(id);
    console.log(meta);
    elem.innerHTML += `

      <div>
         ${i}
         <img src=${(meta.coverUrlThumbnail||[])[0]}>
         <b>${(meta.title||[])[0]}</b>
         <i>${(meta.creator||[]).join(' &amp; ')}</i>
       </div>

    `;
    i = i + 1;

  }
}
