// The Test name
const testName = "Lập trình web"

// Duration for the test
const maxDuration = {
    hour: 0,        // max 99
    minute: 0,     // max 99
    second: 32       // max 99
};

// Question packages (answer and choose-list included)
const question = [
    {
        question: "HTML Là gì ?",    //question
        answer: [   //choose-list
            "là ngôn ngữ đánh dấu siêu văn bản",
            "là ngôn ngữ lập trình web",
            "là ngôn ngữ lập trình hướng đối tượng",
            "tất cả đều sai"
        ], 
        correct: 0,     //answer
        choose: ""
    },
    {
        question: "Thẻ <p> trong HTML có tác dụng ...",
        answer: [
            "thẻ chứa đoạn văn bản",
            "không có tác dụng",
            "là thẻ in đậm",
            "là thể in nghiêng"
        ],
        correct: 0,
        choose: ""
    },
    {
        question: "Trong thẻ <a> thuộc tính title có tác dụng gì?",
        answer: [
            "là thuộc tính để chưa url ảnh",
            "không có tác dụng",
            "chỉ hiển thị khi url ảnh bị lỗi",
            "để chú thích hình ảnh"
        ],
        correct: 3,
        choose: ""
    },
    {
        question: "Có bao nhiêu cách chèn CSS vào website ?",
        answer: [
            "4 cách",
            "3 cách",
            "2 cách",
            "1 cách"
        ],
        correct: 1,
        choose: ""
    },
    {
        question: "Thuộc tính postion trong css có tác dụng ?",
        answer: [
            "màu văn bản",
            "hiệu ứng chuyển động",
            "canh lề cho phần tử",
            "Định vị cho phần tử"
        ],
        correct: 3,
        choose: ""
    },
    {
        question: "Có bao nhiêu giá trị trong thuộc tính display ?",
        answer: [
            "1",
            "4",
            "2",
            "3"
        ],
        correct: 1,
        choose: ""
    },
    {
        question: "Trong css phần tử giả after và before thuộc tính nào quan trong nhất ?",
        answer: [
            "display",
            "position",
            "content",
            "background"
        ],
        correct: 2,
        choose: ""
    },
    {
        question: "Đặt javascipt trong html bằng thẻ nào ?",
        answer: [
            "<js>",
            "<script>",
            "<scripting>",
            "<javascript>"
        ],
        correct: 1,
        choose: ""
    },
    {
        question: "Cú pháp chính xác để thay đổi nội dung phần tử HTML bằng Javascript",
        answer: [
            " document.getElementByName('p').innerHTML = 'Hello World!'",
            " #demo.innerHTML = 'Hello World!'",
            " #demo.innerHTML = 'Hello World!'",
            " document.getElementById('demo').innerHTML = 'Hello World!'"
        ],
        correct: 3,
        choose: ""
    },
    {
        question: "Vòng lặp while bắt đầu thư thế nào ?",
        answer: [
            "while(i<=10;i++)",
            "while i= 1 to 10",
            "while(i<=10)",
            "while(var i =0;i<10;i++)"
        ],
        correct: 2,
        choose: ""
    },
]

