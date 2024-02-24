
let text='<!--START FORMULA PART-->'
let start=text.match("<!--START FORMULA PART");
let end='<title>'
let stringFilter=""
let skinName=""
/* To fetch and convert HTML to HTML String */

export const resolveCall = async (skinCD) => {
const skinPath = 'https://configservicestoragetest.blob.core.windows.net/livecareerrepository/';
const url = `${skinPath}${skinCD}.htm`;
window.RDL=window.RDL||{};
let data =window.RDL.files&& window.RDL.files[skinName];
if(data){
stringFilter=data;
}
else {
	data = await fetch(url);
	if(data.status!=200){
		//alert(`${url} does not exist`)
		console.log("url does not exist")
	}
	else{
	stringFilter=await data.text();
	}
}
 
 return {css:extractword(stringFilter,start,end),html:getHtml(stringFilter,skinCD),getDataFromHTMLString:stringFilter} 

};

/* To get CSS*/
function extractword(finalResponse, start, end){
	  var startindex = finalResponse.indexOf(start);
	  var endindex = finalResponse.indexOf(end, startindex);
	  if (startindex !=-1 && endindex !=-1 &&  endindex  > startindex ){
	    return finalResponse.substring(startindex , endindex )
  }
}
/* To get HTML*/
function getHtml(html,skinCd){
	let div = document.createElement("div")
	div.className='hidden2'
	div.style.visibility='hidden'
	div.innerHTML=html
	document.body.appendChild(div);
	let htmlData=document.getElementsByClassName(`skn-${skinCd.toLowerCase()}`);	
	if(htmlData){
		return htmlData[0].innerHTML;
	}
	else{
		console.log('Unable to retrieve HTML Data')
	}
}


