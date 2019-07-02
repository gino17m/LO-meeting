const express = require('express');
const app = express();

app.use(express.static('client/build'));
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.listen(process.env.PORT || 8080);
