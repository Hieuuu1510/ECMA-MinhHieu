function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script"); // <script>
        script.src = src; // <script src="https://javascript.info/callbacks"></script
        script.onload = () => resolve(10);
        script.onerror = () => reject(new Error("Load script failed"));
        document.head.append(script); // <head><script src="https://javascript.info/callbacks"></script</head>
    });
}

loadScript("https://javascript.info/callbacks")
    .then((data) => console.log(data))
    // .then((data2) => console.log(data2))
    .catch((error) => console.log(error));

// GET datlt34.com/api/projects -> mảng dữ liệu
// GET datlt34.com/api/projects/1 -> 1 phần tử tìm được
// PUT datlt34.com/api/projects/1 ( object ) -> 1 phần tử đã được cập nhật
// DELETE  datlt34.com/api/projects/1 -> 1 phần tử vừa xóa
// POST datlt34.com/api/projects ( object ) -> 1 phần tử vừa thêm
