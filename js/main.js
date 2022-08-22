const quill = new Quill(".ql-editor", {
	modules: {
		toolbar: false,
	},
});

const notepadField = document.querySelector(".ql-editor");

const buttons = document.querySelector(".buttons");
const save = document.querySelector(".save");
const importF = document.querySelector(".import");
const exportF = document.querySelector(".export");

const filesUpload = document.querySelector(".files__upload");
const filesFile = document.querySelector(".files__file");

const eyeIcon = document.querySelector(".eye-icon");
const eyeIconSlash = document.querySelector(".eye-icon-slash");

let cps = 0;

let audioKey = new Audio(`https://deanherring.github.io/zenpad/Typing Sounds/Bubbles/key_0.wav`);
let audioBackspace = new Audio(`https://deanherring.github.io/zenpad/Typing Sounds/Bubbles/backspace.wav`);
let audioSpacebar = new Audio(`https://deanherring.github.io/zenpad/Typing Sounds/Bubbles/spacebar.wav`);
let audioReturn = new Audio(`https://deanherring.github.io/zenpad/Typing Sounds/Bubbles/return.wav`);

localStorage.text ? quill.setText(localStorage.text) : quill.setText('Okay dude...');
save.addEventListener("click", () => (localStorage.text = quill.getText()));

setInterval(() => {
	cps = 0;
}, 1000);

// typing sound
const playSound = (audio) => {
	cps += 1;

	const sps = cps * audio.duration;

	audio.volume = 0.2;
	audio.currentTime = 0.0;
	sps < 1 ? (audio.playbackRate = 1.0) : (audio.playbackRate = sps);

	audio.play();
};

quill.on("text-change", (delta) => {
	if (delta.ops[1].insert) {
		playSound(audioSpacebar);
	}
	if (delta.ops[1].delete) {
		playSound(audioBackspace);
	}
	if (delta.ops[1].insert === "\n") {
		playSound(audioReturn);
	}
	if (
		delta.ops[1].insert !== " " &&
		!delta.ops[1].delete &&
		delta.ops[1].insert !== "\n"
	) {
		playSound(audioKey);
	}
});

// export
exportF.addEventListener("click", () => {
	let el = document.createElement("a");

	el.href = "data:attachment/text," + encodeURI(quill.getText());
	el.target = "_blank";
	el.download = `${new Date().toLocaleDateString()}.txt`;
	el.click();
});

// import
const uploadText = async () => {
	return new Promise((res) => {
		filesFile.addEventListener("change", () => {
			const files = filesFile.files;

			if (files.length) {
				const reader = new FileReader();

				reader.addEventListener("load", () => res(reader.result));
				reader.readAsText(files[0]);
			}
		});
	});
};

importF.addEventListener("click", () => {
	filesFile.click();

	new Promise((res) => {
		filesFile.addEventListener("change", () => {
			const files = filesFile.files;

			if (files.length) {
				const reader = new FileReader();

				reader.addEventListener("load", () => res(reader.result));
				reader.readAsText(files[0]);
			}
		});
	}).then((text) => quill.setText(text));
});

// eyes
const toggleEye = (eyeOne, eyeTwo) => {
	[eyeOne, buttons].forEach((i) => i.classList.toggle("hidden"));
	eyeTwo.classList.remove("hidden");
};

eyeIcon.addEventListener("click", () => toggleEye(eyeIcon, eyeIconSlash));
eyeIconSlash.addEventListener("click", () => toggleEye(eyeIconSlash, eyeIcon));