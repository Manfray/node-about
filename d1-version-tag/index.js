let fs = require('fs');
const pathToWorkspace = './d1-version-tag/'

let appVersion

var date = new Date();
const formatDateStr = date.toLocaleString('en-GB'); //获取日期与时间

fs.readFile(pathToWorkspace + 'package.json','utf8', (err, data) => {
	if(err) {
		console.log(err);
		return false;
	} else {
    console.log('==================================')
		console.log('读取package.json版本号');
		appVersion = JSON.parse(data).version || '-'
		fs.readFile(pathToWorkspace + 'index.html','utf8', (err, data) => {
			if(err) {
				console.log(err);
				return false;
			} else {
				console.log('读取index.html');
				let targetFileString = data
				const startIndex = targetFileString.indexOf('<meta charset="utf-8">') + 22
				targetFileString = targetFileString.slice(0, startIndex) + `<!--app-version: ${appVersion}; last-build-time: ${formatDateStr}-->` + targetFileString.slice(startIndex)
					fs.writeFile(pathToWorkspace + 'index-new.html', targetFileString, (err) => {
							if(err) {
							console.log(err);
							return false;
							} else {
							console.log('版本标签写入成功！');
              console.log('==================================')
							}
					})
			}
		})
	}
})
