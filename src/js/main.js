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

localStorage.text ? quill.setText(localStorage.text) : false;
save.addEventListener("click", () => (localStorage.text = quill.getText()));

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