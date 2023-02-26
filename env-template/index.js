/* eslint-disable */
const inquirer = require('inquirer');
const yosay = require('yosay');
const memFs = require('mem-fs');
const editor = require('mem-fs-editor');

const { log } = console;
const pwd = process.cwd();

const preProcess = async () => {
	const store = memFs.create();
	const fs = editor.create(store);

	const questions = [
		{
			type: 'list',
			name: 'type',
			message: 'Please choose environment',
			choices: ['dev', 'prod']
		},
		{
			type: 'confirm',
			name: 'confirm',
			message: 'Are you sure?'
		}
	];
	const answer = await inquirer.prompt(questions);

	if (answer.confirm) {
		let type = answer.type;
    
		const envPath = `${pwd}/env`;
		const androidPath = `${pwd}/android`;
		const androidAppPath = `${pwd}/android/app`;

		// Change env.js
		fs.copy(`${envPath}/constants/env.${type}.js`, `${pwd}/src/constants/env.js`);
		fs.commit(fsCallback);

		// Copy & Replace android google-service.json
		fs.copy(
			`${envPath}/google-services/google-services.${type}.json`,
			`${androidAppPath}/google-services.json`
		);
		fs.commit(fsCallback);

		// Copy & Replace android keystore
		fs.copy(
			`${envPath}/keystores/${type}.keystore`,
			`${androidAppPath}/app.keystore`
		);
		fs.commit(fsCallback);

		// Copy & Replace android key properties
		fs.copy(
			`${envPath}/properties/key.properties.${type}`,
			`${androidPath}/key.properties`
		);
		fs.commit(fsCallback);
		
		// Copy & Replace ios google-service.plist
		fs.copy(
			`${envPath}/google-services/GoogleService-Info.${type}.plist`,
			`${pwd}/ios/GoogleService-Info.plist`
		);
		fs.commit(fsCallback);
	}

	log('\n');
	log(yosay('Thanks for using env builder system :)'));
};

const fsCallback = () => log('success');

const init = () => {
	log(yosay('weekenv. No more weekend for setup env!!'));
	preProcess();
};

init();
